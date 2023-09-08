import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  const name = 'Kakashi';
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hello, {name}</Text>
      <Text>My Plan</Text>
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
