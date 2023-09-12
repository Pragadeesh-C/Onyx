import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Picker} from 'react-native-wheel-pick';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import googleFit from 'react-native-google-fit';
import {Routes} from 'routes/Routes';

const Goal = ({route}) => {
  const {navigate} = useNavigation();
  let {gender, age, weight, height,foodPreference} = route.params;
  const [bmi, setBMI] = useState<number | null>(null);
  const [bmr, setBMR] = useState<number | null>(null);
  const [goal, setGoal] = useState();
  const [calToBeMaintained, setCalToBeMaintained] = useState();

  const user = auth().currentUser.email;
  const pickerData = ['Lose weight', 'Get Fitter', 'Gain Weight'];

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    pushMetrics();
    calculateMetrics();
  }, []);

  const getCal = async () => {
    await fetch('http://192.168.29.101:3000/diet', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        age: 19,
        height: 178,
        weight: 58,
        gender: 0,
        bmi: 18.3,
        bmr: 980,
        activity_level: 1.5,
      }),
    })
      .then(res => res.json())
      .then(resp => {
        setCalToBeMaintained(resp['prediction']);
      });
  };

  const caloriesCal = async () => {
    const activityLevel = Math.random() + 1;
    let heightInCm = height * 100;
    let Gender = gender === 'male' ? 0 : 1;
    await fetch('http://192.168.180.18:3000/diet', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        age: age,
        height: heightInCm,
        weight: weight,
        gender: Gender,
        bmi: bmi,
        bmr: bmr,
        activity_level: activityLevel,
      }),
    })
      .then(res => res.json())
      .then(resp => {
        console.log(resp);
        const prediction = resp['prediction'];
        setCalToBeMaintained(resp['prediction']);
        pushData(prediction);
      });
  };
  
  const pushData = async (calMaintained) => {
    console.log(
      user,
      gender,
      age,
      weight,
      height,
      goal,
      bmi,
      bmr,
      calToBeMaintained,
    );
    await firestore().collection('UsersData').doc(user).set({
      email: user,
      gender: gender,
      age: age,
      weight: weight,
      height: height,
      goal: goal,
      bmi: bmi,
      bmr: bmr,
      calEst: calMaintained,
      foodPreference:foodPreference
    });
  
    navigate('Tabs');
  };
  

  const pushMetrics = () => {
    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);
    const today = new Date();
    var opt = {
      date: today.toISOString(),
      value: parsedHeight,
    };
    googleFit.saveHeight(opt, (err, res) => {
      if (err) {
        Alert.alert('Error', 'ERR');
      } else {
        console.log(res);
      }
    });
    var opt = {
      date: today.toISOString(),
      value: parsedWeight,
    };
    googleFit.saveWeight(opt, (err, res) => {
      if (err) {
        Alert.alert('Error', 'Err');
      } else {
        console.log(res);
      }
    });
  };

  const calculateMetrics = async () => {
    setIsLoading(true);

    const heightInMeters = height / 100;
    const parsedWeight = parseFloat(weight);
    const parsedAge = parseFloat(age);

    if (isNaN(parsedWeight) || isNaN(heightInMeters) || isNaN(parsedAge)) {
      setBMR(null);
      setBMI(null);
    } else {
      let bmrResult;
      if (gender === 'male') {
        bmrResult =
          10 * parsedWeight + 6.25 * heightInMeters - 5 * parsedAge + 5;
      } else if (gender === 'female') {
        bmrResult =
          10 * parsedWeight + 6.25 * heightInMeters - 5 * parsedAge - 161;
      }

      setBMR(bmrResult);

      const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '9170be0dacmsh3cec812953e7c12p1ede1bjsn56c6235b4910',
          'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setBMI(result['bmi']);
      } catch (error) {
        console.error(error);
      }
    }

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What's your goal</Text>
      <Text style={styles.headerDesc}>
        This helps us create your personalized plan
      </Text>
      <View style={{height: '70%', justifyContent: 'center'}}>
        <Picker
          style={{
            backgroundColor: '#F6F6F6',
            width: 180,
            height: 350,
            fontFamily: 'IntegralCF-Bold',
          }}
          selectTextColor="green"
          isShowSelectBackground={false}
          selectedValue="Get Fitter"
          selectLineColor="#34CE6C"
          selectLineSize={10}
          pickerData={pickerData}
          onValueChange={(value) => {
            setGoal(value);
          }}
        />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={caloriesCal}>
        <Text style={styles.buttonText}>Next</Text>
        <MaterialIcons name="arrow-right" size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Goal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
  },
  headerText: {
    marginTop: '10%',
    fontFamily: 'IntegralCF-Bold',
    color: 'black',
    fontSize: 20,
  },
  headerDesc: {
    fontSize: 13,
    fontFamily: 'IntegralCF',
    color: 'black',
    marginTop: '2%',
  },
  nextButton: {
    height: 45,
    width: 110,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#34CE6C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
    fontSize: 18,
  },
});
