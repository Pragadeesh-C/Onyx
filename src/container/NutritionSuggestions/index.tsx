import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FoodCardComponent from 'components/FoodCardComponent';
import {Diet} from 'data/diet';

const NutritionSuggestion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>NutritionSuggestion</Text>
      <FlatList
        data={Diet}
        renderItem={({item}) => (
          <FoodCardComponent
            name={item.name}
            calories={item.calories}
            imageUrl={item.image}
            desc={item.description}
            carbs={item.carbs}
            fat={item.fat}
            protein={item.protein}
          />
        )}
        style={{padding: 10}}
      />
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
