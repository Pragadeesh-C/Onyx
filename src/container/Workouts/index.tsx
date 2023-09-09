import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TrainingLevel from 'components/TrainingLevel';
import {IMAGES} from 'images/images';

const Workout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerDesc}>Too much protein? no whey, mate!</Text>
      <Text style={styles.headerText}>Choose Your Level 🔥 </Text>
      <Text style={styles.headerWeek}>Week 3, day 1</Text>
      <Image source={IMAGES.workoutbg} style={styles.semiCircle} />
      <TrainingLevel />
      {/* <View style={styles.bottomView}> */}
      <TouchableOpacity style={styles.button}>
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
    backgroundColor:'#F6F6F6'
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
  button: {
    height: 40,
    width: 200,
    backgroundColor: '#D0FD3E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
});
