import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TrainingLevel from 'components/TrainingLevel';
import {IMAGES} from 'images/images';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'routes/Routes';

const Workout = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerDesc}>Too much protein? no whey, mate!</Text>
      <Text style={styles.headerText}>Choose Your Level 🔥 </Text>
      <Text style={styles.headerWeek}>Week 3, day 1</Text>
      <Image source={IMAGES.workoutbg} style={styles.semiCircle} />
      <TrainingLevel />
      {/* <View style={styles.bottomView}> */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate(Routes.WorkoutPrompt as never)}>
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
