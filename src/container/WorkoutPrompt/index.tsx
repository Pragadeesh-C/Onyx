import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RatingComponent from 'components/RatingComponent';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'routes/Routes';

const WorkoutPrompt = () => {
  const {navigate} = useNavigation();
  const [response, setResponse] = useState();
  const Data = [
    {
      label: "How's your body feeling?",
    },
    {
      label: "How's your muscles feeling?",
    },
    {
      label: 'How would you rate your sleep?',
    },
  ];

  const getReps = async () => {
    await fetch('http://192.168.29.101:3000/trainer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sleep: sleepRating['value'],
        recovery: muscleRating['value'],
        body: 1,
        category: 0,
      }),
    })
      .then(res => res.json())
      .then(resp => {
        navigate(Routes.WorkoutStart, {
          duration: resp['duration'],
          reps: resp['reps'],
          sets: resp['sets'],
          weights: resp['weights'],
        });
      })
      // .then(() => {
      //   setTimeout(() => {
      //     console.log(response);
      //     navigate(Routes.WorkoutStart, {
      //       duration: response['duration'],
      //       reps: response['reps'],
      //       sets: response['sets'],
      //       weights: response['weights'],
      //     });
      //   }, 1000);
      // });
  };

  const [bodyRating, setBodyRating] = useState(null);
  const [muscleRating, setMuscleRating] = useState(null);
  const [sleepRating, setSleepRating] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Rate your condition</Text>
      <View style={{alignItems: 'center', gap: 20}}>
        {Data.map((item, index) => (
          <RatingComponent
            key={index}
            label={item.label}
            rating={
              index === 0
                ? bodyRating
                : index === 1
                ? muscleRating
                : index === 2
                ? sleepRating
                : null
            }
            setRating={
              index === 0
                ? setBodyRating
                : index === 1
                ? setMuscleRating
                : index === 2
                ? setSleepRating
                : null
            }
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={getReps}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutPrompt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    marginTop: 20,
    gap: 30,
  },
  headerText: {
    fontFamily: 'IntegralCF',
    paddingLeft: 20,
    color: 'black',
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#A48AED',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Sen-ExtraBold',
    fontSize: 17,
  },
});
