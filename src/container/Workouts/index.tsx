import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TrainingLevel from 'components/TrainingLevel';
import {IMAGES} from 'images/images';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'routes/Routes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const Workout = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState();
  const [body, setBody] = useState();
  const [workout, setWorkout] = useState();
  const [todaysWorkout, setTodaysWorkout] = useState();
  const user = auth().currentUser.email;
  const [selectedLevel, setSelectedLevel] = useState('Intermediate');

  useEffect(() => {
    fetchData();
  }, []);

  const schedule = {
    Monday: 'Circuit',
    Tuesday: 'UpperBody',
    Wednesday: 'LowerBody',
    Thursday: 'Circuit',
    Friday: 'UpperBody',
    Saturday: 'LowerBody',
    Sunday: 'Rest Day',
  };

  const workoutSchedule = {
    Monday: 'Circuit',
    Tuesday: 'Upper Body',
    Wednesday: 'Lower Body',
    Thursday: 'Circuit',
    Friday: 'Upper Body',
    Saturday: 'Lower Body',
    Sunday: 'Rest Day',
  };

  const fetchData = async () => {
    const data = await firestore().collection('UsersData').doc(user).get();
    const goal = data._data.goal;
    console.log("Goal",goal)
    let category;
    if (goal === 'Lose Weight') {
      setCategory(1);
    } else if (goal === 'Gain Weight') {
      setCategory(0);
    } else if (goal === 'Get Fitter') {
      setCategory(2);
    } else {
      category = -1;
    }
    const currentDate = new Date();
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDayName = daysOfWeek[currentDate.getDay()];
    const currentCategory = schedule[currentDayName] || 'Rest Day';
    const currentWorkout = workoutSchedule[currentDayName] || 'Rest Day';
    setTodaysWorkout(currentWorkout);
    setWorkout(currentCategory);
    if (currentCategory === 'UpperBody') {
      setBody(1);
    } else if (currentCategory === 'LowerBody') {
      setBody(0);
    } else if (currentCategory === 'Circuit') {
      setBody(0);
    } else {
      setBody(2);
    }
  };
  console.log(selectedLevel)

  return (
    <View style={styles.container}>
      <Text style={styles.headerDesc}>Too much protein? no whey, mate!</Text>
      <Text style={styles.headerText}>Choose Your Level 🔥 </Text>
      <Text style={styles.headerWeek}>Week 3, day 1</Text>
      <Image source={IMAGES.workoutbg} style={styles.semiCircle} />
      <TrainingLevel setLevel={setSelectedLevel} selectedLevel={selectedLevel} />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() =>
          navigation.navigate(
            Routes.WorkoutPrompt
            ,{
              body: body,
              category: category,
              todaysWorkout: todaysWorkout,
              workout: workout,
              selectedLevel:selectedLevel
            }
          )
        }>
        <Text style={{fontFamily: 'Sen-Bold', color: 'black', fontSize: 17}}>
          Readiness Check
        </Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  bottomView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    height: '45%',
    position: 'absolute',
    bottom: 0,
  },
  semiCircle: {
    height: '55%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
  },
  headerDesc: {
    fontFamily: 'IntegralCF-Regular',
    color: 'gray',
    padding: 10,
    fontSize: 15,
  },
  headerText: {
    fontFamily: 'Sen-ExtraBold',
    fontSize: 23,
    color: 'black',
    paddingLeft: 10,
    marginTop: '2%',
  },
  headerWeek: {
    fontFamily: 'Sen-ExtraBold',
    fontSize: 20,
    color: 'black',
    paddingLeft: 10,
  },
  nextButton: {
    height: 40,
    width: 200,
    backgroundColor: '#D0FD3E',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
    borderRadius: 20,
    alignSelf: 'center',
  },
  exerciseType: {
    fontFamily: 'Sen-Bold',
    color: 'black',
  },
  setsComponent: {
    height: 35,
    width: 70,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // headerText:{
  //   fontFamily:'IntegralCF-Bold',
  //   fontSize:16,
  //   color:'black'
  // },
  // headerDesc:{
  //   fontFamily:'IntegralCF',
  //   color:'black'
  // }
});
