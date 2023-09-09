import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from 'images/images';
import CircularProgress from 'react-native-circular-progress-indicator';
import Feather from 'react-native-vector-icons/Feather';

const Workout = () => {
  const BoxComponent = ({label}) => {
    return (
      <View style={styles.boxContainer}>
        <Text style={styles.boxHeader}>{label}</Text>
      </View>
    );
  };

  const ExerciseView = ({imageUrl, label, sets}) => {
    return (
      <View style={styles.exerciseView}>
        <View style={styles.exerciseContentView}>
          <View style={styles.exerciseIcon}>
            <Image source={imageUrl} />
          </View>
          <Text style={styles.exerciseType}>{label}</Text>
        </View>
        <View style={styles.exerciseContentView}>
          <Feather name="info" size={20} color={'gray'} style={{}} />
          <View style={styles.setsComponent}>
            <Text style={{color: 'black', fontFamily: 'Sen-Bold'}}>{sets}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerDesc}>TOo much protein? no whey, mate!</Text>
      <Text style={styles.headerText}>Choose a training{'\n'}for today</Text>
    </View>
  );
};

export default Workout;

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
  exerciseType: {
    fontFamily: 'Sen-Bold',
    color: 'black',
  },
  headerText:{
    fontFamily:'IntegralCF-Bold',
    fontSize:16,
    color:'black'
  },
  headerDesc:{
    fontFamily:'IntegralCF',
    color:'black'
  }
})