import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IMAGES } from 'images/images';
import CircularProgress from 'react-native-circular-progress-indicator';
import Feather from 'react-native-vector-icons/Feather';

import { Workouts } from 'data/workout'; 

const StartWorkout = ({ route }) => {
  const { duration, reps, weights, sets } = route.params;

  const schedule = {
    Monday: 'Circuit',
    Tuesday: 'UpperBody',
    Wednesday: 'FullBody',
    Thursday: 'Circuit',
    Friday: 'UpperBody',
    Saturday: 'FullBody',
    Sunday: 'Rest Day',
  };

  const currentDate = new Date();
  const currentDay = 'Monday';

  const currentCategory = schedule[currentDay] || 'Rest Day';

  const currentCategoryObject = Workouts.find(
    (category) => Object.keys(category)[0] === currentCategory
  );

  const currentExercises = currentCategoryObject
    ? currentCategoryObject[currentCategory]
    : [];

  const BoxComponent = ({ label }) => {
    return (
      <View style={styles.boxContainer}>
        <Text style={styles.boxHeader}>{label}</Text>
      </View>
    );
  };

  const ExerciseView = ({ exercise, selectedLevel, selectedReps, selectedSets }) => {
    const selectedExercise = exercise.levels[selectedLevel];
  
    // Determine if this exercise matches the selected reps and sets
    const isRecommended =
      selectedExercise.sets === selectedSets && selectedExercise.reps === selectedReps;
  
    return (
      <View style={[styles.exerciseView, isRecommended ? styles.recommendedExercise : null]}>
        <View style={styles.exerciseIcon}>
          {/* <Image source={selectedExercise.video} /> Use the video or image as needed */}
        </View>
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseType}>{exercise.name}</Text>
          <Text style={styles.exerciseDescription}>{selectedExercise.description}</Text>
        </View>
        <View style={styles.setsComponent}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Sen-Bold',
            }}>{`${selectedExercise.sets} x ${selectedExercise.reps}`}</Text>
        </View>
        {isRecommended && (
          <Text style={styles.recommendedLabel}>Recommended</Text>
        )}
      </View>
    );
  };
  
  

  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.workoutBg} style={styles.bg}>
        <View style={styles.headerView}>
          <CircularProgress
            value={80}
            radius={70}
            duration={1000}
            activeStrokeWidth={20}
            inActiveStrokeWidth={20}
            progressValueColor={'black'}
            maxValue={100}
            title={'%'}
            titleColor={'black'}
            titleStyle={{ fontWeight: 'bold' }}
            activeStrokeColor="#A48AED"
            inActiveStrokeColor="white"
          />
          <View style={{ paddingTop: '3%', flexDirection: 'row', gap: 10 }}>
            <BoxComponent label={'Easy'} />
            <BoxComponent label={duration} />
          </View>
          <Text style={styles.headerTitle}>Full-Body Workout</Text>
          <Text style={styles.headerDesc}>
            Shift stubborn body fat and build muscle
          </Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity>
            <Image source={IMAGES.button} style={styles.playButton} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.bottomHeader}>Exercises</Text>
            <Text style={styles.bottomHeader}>Sets</Text>
          </View>
          <ScrollView style={{ flex: 1 }}>
            {currentExercises.map((exercise, index) => (
              <ExerciseView key={index} exercise={exercise} selectedLevel="beginner" />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartWorkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8DDFC',
  },
  bg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '15%',
  },
  boxContainer: {
    height: 40,
    width: 65,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  boxHeader: {
    color: 'black',
    fontFamily: 'Sen-ExtraBold',
    fontSize: 16,
  },
  headerTitle: {
    fontFamily: 'Sen-ExtraBold',
    fontSize: 16,
    color: 'black',
    paddingTop: '4%',
  },
  headerDesc: {
    color: 'gray',
    fontFamily: 'Sen-Bold',
    paddingTop: '7%',
    fontSize: 15,
  },
  bottomView: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '45%',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  playButton: {
    alignSelf: 'center',
    bottom: 30,
  },
  bottomHeader: {
    color: 'black',
    paddingHorizontal: 25,
    bottom: 20,
  },
  exerciseView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: '4%',
  },
  exerciseContentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    bottom: 20,
  },
  exerciseIcon: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: '#D8DDFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseInfo: {
    flex: 1,
    marginLeft:"4%"
  },
  exerciseNameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseType: {
    fontFamily: 'Sen-Bold',
    color: 'black',
    flex: 1,
  },
  exerciseDescription: {
    color: 'gray',
    fontFamily: 'Sen-Regular',
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
});
