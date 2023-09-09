import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { IMAGES } from 'images/images';
import { Svg, SvgUri } from 'react-native-svg';

const TrainingLevel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          {/* <SvgUri width={200} height={200} uri={IMAGES.intermediate} /> */}
          <Image source={IMAGES.intermediate}/>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.trainingLevelText}>Intermediate</Text>
        <Text style={styles.desc}>
          Challenging mix of cardio and strength, ideal for those past
          beginner-level fitness seeking health improvement.
        </Text>
        <TouchableOpacity style={styles.upperButton}>
          <Text style={styles.buttonText}>Upper Body</Text>
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
