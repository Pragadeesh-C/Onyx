import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FoodCardComponent from 'components/FoodCardComponent';
import { Diet } from 'data/diet';

const NutritionSuggestion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>NutritionSuggestion</Text>
      <View style={{gap: 20}}>
       {Diet.map((index,value) => (
        <FoodCardComponent name={index.name} calories={index.calories} imageUrl={index.image} /> 
       ))}
      </View>
    </View>
  );
};

export default NutritionSuggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  headerText: {
    color: 'black',
    fontFamily: 'Sen-Bold',
    fontSize: 17,
    padding: 15,
  },
});
