import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TrainingLevel = ({selectedLevel,setLevel}) => {
  const workoutSchedule = {
    Monday: 'Circuit',
    Tuesday: 'Upper Body',
    Wednesday: 'Lower Body',
    Thursday: 'Circuit',
    Friday: 'Upper Body',
    Saturday: 'Lower Body',
    Sunday: 'Rest Day',
  };
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const currentDate = new Date();
  const currentDayName = daysOfWeek[currentDate.getDay()];
  const currentWorkout = workoutSchedule[currentDayName] || 'Rest Day';
  const [desc, setdesc] = useState(
    'Challenging mix of cardio and strength, ideal for those pastbeginner-level fitness seeking health improvement.',
  );
  const beginer = () => {
    setLevel('Beginner');
    setdesc(
      'Beginner workouts are for fitness newcomers. They focus on simple exercises and gradual progress for building strength and stamina.',
    );
  };
  const intermediate = () => {
    setLevel('Intermediate');
    setdesc(
      'Challenging mix of cardio and strength, ideal for those pastbeginner-level fitness seeking health improvement.',
    );
  };
  const advanced = () => {
    setLevel('Advanced');
    setdesc(
      'Advanced workouts are for experienced fitness enthusiasts. They feature challenging exercises and intensity to further enhance strength, endurance, and performance.',
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={beginer} style={{top: 170, left: 30}}>
        <FontAwesome5 name={'dumbbell'} color={'black'} size={20} />
      </TouchableOpacity>
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          <TouchableOpacity onPress={intermediate}>
            <MaterialCommunityIcons
              name={'arm-flex'}
              color={'black'}
              style={{fontSize: 49, color: '#A48AED'}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={advanced} style={{left: 340, top: 145}}>
        <MaterialCommunityIcons
          name={'weight-lifter'}
          color={'black'}
          style={{fontSize: 29}}
        />
      </TouchableOpacity>

      <View style={styles.bottomView}>
        <Text style={styles.trainingLevelText}>{selectedLevel}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <TouchableOpacity style={styles.upperButton}>
          <Text style={styles.buttonText}>{currentWorkout}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrainingLevel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle1: {
    height: 200,
    width: 200,
    position: 'absolute',
    backgroundColor: '#F2F1F7',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: '12%',
    shadowColor: '#A48AED',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 50,
    elevation: 50,
  },
  circle2: {
    height: 130,
    width: 130,
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    height: '40%',
    position: 'absolute',
    bottom: 0,
  },
  desc: {
    fontFamily: 'Sen',
    color: 'gray',
    padding: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  trainingLevelText: {
    fontFamily: 'Sen-ExtraBold',
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    padding: 15,
  },
  upperButton: {
    height: 45,
    width: 120,
    backgroundColor: 'black',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  buttonText: {
    fontFamily: 'Sen-ExtraBold',
    color: 'white',
    fontSize: 16,
  },
});
