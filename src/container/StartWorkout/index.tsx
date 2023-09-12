import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMAGES} from 'images/images';
import CircularProgress from 'react-native-circular-progress-indicator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Workouts} from 'data/workout';
import {Routes} from 'routes/Routes';
import {useNavigation} from '@react-navigation/native';

const StartWorkout = ({route}) => {
  const {duration, reps, weights, sets, currentCategory, category,selectedLevel} =
    route.params;
  const {navigate} = useNavigation();
  console.log(selectedLevel)

  const currentCategoryObject = Workouts.find(
    category => Object.keys(category)[0] === currentCategory,
  );

  const currentExercises = currentCategoryObject
    ? currentCategoryObject[currentCategory]
    : [];

  const BoxComponent = ({label}) => {
    return (
      <View style={styles.boxContainer}>
        <Text style={styles.boxHeader}>{label}</Text>
      </View>
    );
  };

  const ExerciseView = ({
    exercise,
    selectedLevel,
    exerciseInProgress,
    exerciseDuration,
    startNextExercise,
    icon,
    video,
    exercises,
  }) => {
    const selectedExercise = exercise.levels[selectedLevel];
    console.log(icon);
    console.log('Exercise', exercise.levels[selectedLevel]);
    const isRecommended =
      selectedExercise.sets === sets && selectedExercise.reps === reps;

    return (
      <View
        style={[
          styles.exerciseView,
          isRecommended ? styles.recommendedExercise : null,
        ]}>
        <View style={styles.exerciseIcon}>
          <Image source={icon} />
        </View>
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseType}>{exercise.name}</Text>
          <Text style={styles.exerciseDescription}>
            {selectedExercise.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigate(Routes.WorkoutVideo, {
              url: exercise.levels[selectedLevel].video,
              name:exercise.name,
              desc:selectedExercise.description,
              category:category
            })
          }>
          <AntDesign
            name="infocirlceo"
            size={15}
            color={'black'}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
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
        <View style={styles.timer}>
          {exerciseInProgress && (
            <Text style={styles.timerText}>{exerciseDuration}s</Text>
          )}
        </View>
      </View>
    );
  };

  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [playStarted, setPlayStarted] = useState(false);
  // const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [exerciseInProgress, setExerciseInProgress] = useState(false);
  const [exerciseTimer, setExerciseTimer] = useState(0);

  const [totalProgress, setTotalProgress] = useState(0);
  useEffect(() => {
    if (playStarted) {
      const currentExercise = currentExercises[exerciseIndex];
      const selectedExercise = currentExercise.levels[selectedLevel];
      const currentExerciseDuration = selectedExercise.sets * duration;

      if (!exerciseInProgress) {
        setExerciseInProgress(true);
        setExerciseTimer(currentExerciseDuration);

        clearInterval(timerInterval);

        const timerInterval = setInterval(() => {
          setExerciseTimer(prevTime => {
            if (prevTime > 0) {
              return prevTime - 1;
            } else {
              clearInterval(timerInterval);
              setExerciseInProgress(false);

              if (exerciseIndex < currentExercises.length - 1) {
                setTotalProgress(prevProgress => {
                  const exerciseProgress = 100 / currentExercises.length;
                  return prevProgress + exerciseProgress;
                });

                startNextExercise();
              } else {
                setTotalProgress(100);
              }
            }
          });
        }, 1000);
      }
    }
  }, [
    playStarted,
    exerciseIndex,
    selectedLevel,
    duration,
    currentExercises,
    exerciseInProgress,
  ]);

  const startNextExercise = () => {
    if (exerciseIndex < currentExercises.length - 1) {
      const nextIndex = exerciseIndex + 1;
      setExerciseIndex(nextIndex);
      setExerciseInProgress(false);
      setExerciseTimer(0);
    }
  };

  const handlePlayButtonClick = () => {
    if (!playStarted) {
      setPlayStarted(true);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.workoutBg} style={styles.bg}>
        <View style={styles.headerView}>
          <CircularProgress
            value={totalProgress}
            radius={70}
            duration={1000}
            activeStrokeWidth={20}
            inActiveStrokeWidth={20}
            progressValueColor={'black'}
            maxValue={100}
            title={'%'}
            titleColor={'black'}
            titleStyle={{fontWeight: 'bold'}}
            activeStrokeColor="#A48AED"
            inActiveStrokeColor="white"
          />
          <View
            style={{
              paddingTop: '3%',
              flexDirection: 'row',
              gap: 10,
            }}>
            <BoxComponent label={`${weights} kg`} />
            <BoxComponent label={`${duration} mins`} />
          </View>
          <Text style={styles.headerTitle}>{category} Workout</Text>
          <Text style={styles.headerDesc}>
            Shift stubborn body fat and build muscle
          </Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={handlePlayButtonClick}>
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
          <ScrollView style={{flex: 1}}>
            {currentExercises.map((exercise, index) => (
              <ExerciseView
                key={index}
                exercise={exercise}
                selectedLevel={selectedLevel}
                startNextExercise={startNextExercise}
                exerciseInProgress={exerciseIndex === index && playStarted}
                exerciseDuration={exerciseTimer}
                icon={IMAGES.body} // Correctly access the video URL
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
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
    width: 70,
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
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  recommendedExercise: {
    backgroundColor: '#FFEBE5',
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
    marginLeft: '4%',
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
  recommendedLabel: {
    fontFamily: 'Sen-Bold',
    color: 'red',
  },
  timer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    left: 6,
  },
  timerText: {
    color: 'black',
    fontFamily: 'Sen-Bold',
    fontSize: 16,
  },
  infoIcon: {
    padding: 10,
  },
});

export default StartWorkout;
