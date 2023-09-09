import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FoodCardComponent from 'components/FoodCardComponent';

const NutritionSuggestion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>NutritionSuggestion</Text>
      <View style={{gap: 20}}>
        <FoodCardComponent />
        <FoodCardComponent />
        <FoodCardComponent />
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
