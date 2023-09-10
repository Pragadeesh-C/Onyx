import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RatingComponent from 'components/RatingComponent';
import {Routes} from 'routes/Routes';
import {useNavigation} from '@react-navigation/native';

const WorkoutPrompt = () => {
  const {navigate} = useNavigation();
  const Data = [
    {
      label: "How's your upper body feeling?",
    },
    {
      label: "How's your lower body feeling?",
    },
    {
      label: 'How would you rate your sleep?',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Rate your condition</Text>
      <View style={{alignItems: 'center'}}>
        {Data.map((item, index) => (
          <RatingComponent key={index} label={item.label} />
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(Routes.WorkoutStart as never)}>
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
