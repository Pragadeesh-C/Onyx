import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { IMAGES } from 'images/images';

const Home = () => {
  const name = 'Kakashi';
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hello, {name}</Text>
      <Text>My Plan</Text>
      <Image source={IMAGES.workoutbg} style={{height:'50%',width:'100%'}}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  headerText: {
    fontFamily: 'IntegralCF',
    color:'black',
    marginTop:"3%",
    marginLeft:"3%"
  },
});
