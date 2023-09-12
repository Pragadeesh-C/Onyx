import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES} from 'images/images';
import {TouchableOpacity} from 'react-native';
import Progressbar from 'components/Progressbar';
import googleFit, {Scopes} from 'react-native-google-fit';
import auth from '@react-native-firebase/auth';
import HomeCard from 'components/HomeCard';

const Home = () => {
  const name = auth().currentUser?.displayName;
  const today = new Date();
  const [calories, setCalories] = useState(0);
  const [calToBeMaintained, setCalToBeMaintained] = useState();
  const [steps, setSteps] = useState(0);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    getSteps();
  }, []);

  const getSteps = async () => {
    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_BODY_READ,
        Scopes.FITNESS_BODY_WRITE,
        Scopes.FITNESS_BLOOD_PRESSURE_READ,
        Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
        Scopes.FITNESS_BLOOD_GLUCOSE_READ,
        Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_HEART_RATE_READ,
        Scopes.FITNESS_HEART_RATE_WRITE,
      ],
    };
    await googleFit.authorize(options);
    await googleFit.checkIsAuthorized();
    const today = new Date();
    const lastWeekDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1,
    );
    const opt = {
      startDate: lastWeekDate.toISOString(),
      endDate: today.toISOString(),
    };
    const res = await googleFit.getDailyStepCountSamples(opt);
    setSteps(res[2].rawSteps[0].steps);
    const cal = await googleFit.getDailyCalorieSamples(opt);
    const calo = Math.round(cal[0].calorie)
    setCalories(calo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerDesc}>Everyday we're muscle'n</Text>
      <Text style={styles.welcomeText}>Hello, {name}</Text>
      <Text style={styles.headerText}>My Plan</Text>
      <View style={styles.headerBox}>
        <Text style={styles.boxDate}>
          Today, {today.getDate()} {months[today.getMonth()]}
        </Text>
        <Text style={styles.boxCal}>{calories} Kcal</Text>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track your activity</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.todaysCal}>{steps} Kcal</Text>
      <Text style={styles.calText}>Total Kilocalories</Text>
      <View style={styles.analyticsBar}>
        <Progressbar
          pro={0.9}
          pro1={0.9}
          title={'Distance'}
          value={'3550'}
          units={'m'}
        />
        <Progressbar
          pro={0.9}
          pro1={0.9}
          title={'Steps'}
          value={'3550'}
          units={'m'}
        />
        <Progressbar
          pro={0.9}
          pro1={0.9}
          title={'Points'}
          value={'3550'}
          units={'m'}
        />
      </View>
      <HomeCard steps={steps} cal={calories}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  headerDesc: {
    fontFamily: 'IntegralCF',
    color: 'gray',
    marginTop: '3%',
    marginLeft: '3%',
    fontSize: 13,
  },
  welcomeText: {
    fontFamily: 'IntegralCF',
    color: 'black',
    marginTop: '3%',
    marginLeft: '3%',
    fontSize: 16,
  },
  headerText: {
    fontFamily: 'Sen-ExtraBold',
    color: 'black',
    marginLeft: '3%',
    fontSize: 17,
    marginTop: '5%',
  },
  headerBox: {
    height: 150,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#A48AED',
    marginTop: '5%',
    paddingLeft: '5%',
  },
  boxDate: {
    fontFamily: 'Sen-Bold',
    color: 'white',
    marginTop: '5%',
    fontSize: 15,
  },
  boxCal: {
    color: 'white',
    fontFamily: 'Sen-ExtraBold',
    fontSize: 30,
    marginTop: '2%',
  },
  trackButton: {
    height: 30,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: '4%',
  },
  trackButtonText: {
    color: '#A48AED',
    fontFamily: 'Sen-Bold',
    fontSize: 12,
  },
  todaysCal: {
    fontFamily: 'Sen-ExtraBold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: '10%',
  },
  calText: {
    fontFamily: 'Sen-Bold',
    color: 'gray',
    textAlign: 'center',
    marginTop: '3%',
    fontSize: 15,
  },
  analyticsBar: {
    flexDirection: 'row',
    marginTop: '8%',
  },
});
