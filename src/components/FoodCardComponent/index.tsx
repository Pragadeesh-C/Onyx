import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FoodCardComponent = () => {
  return (
    <View style={styles.box}>
      <Image source={require('images/food.png')} style={styles.img} />
      <View style={{marginTop:"5%",gap:5,paddingLeft:"3%"}}>
        <Text style={styles.foodName}>Bite Me Sandwiches</Text>
        <Text style={styles.foodCal}>200 Calories</Text>
      </View>
    </View>
  );
};

export default FoodCardComponent;

const styles = StyleSheet.create({
  box: {
    height: 130,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius:15
  },
  img: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    borderRadius: 8,
    marginLeft:10
  },
  foodName: {
    fontFamily: 'Sen-Bold',
    fontSize: 15,
    color:'black'
  },
  foodCal:{
    fontFamily:'Sen',
    color:'gray'
  }
});
