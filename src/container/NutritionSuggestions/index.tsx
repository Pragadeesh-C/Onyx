import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import FoodCardComponent from 'components/FoodCardComponent';
import { Diet } from 'data/diet';

const NutritionSuggestion = ({ route }) => {
  const [recommendedItems, setRecommendedItems] = useState([]);
  const mealType = route.name; 
  const isVegetarian = true;
  
  const userProteinRequirement = 150; 
  const userCalorieRequirement = 2000; 

  useEffect(() => {
    const proteinPerMeal = userProteinRequirement / 4; 
    const caloriePerMeal = userCalorieRequirement / 4;

    const filteredItems = Diet.filter((food) => {
      return (
        food.type === mealType &&
        (isVegetarian ? food.vegetarian : true) && 
        food.protein <= proteinPerMeal &&
        food.calories <= caloriePerMeal
      );
    });

    setRecommendedItems(filteredItems);
  }, [userProteinRequirement, userCalorieRequirement, mealType, isVegetarian]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Nutrition Suggestion</Text>
      <FlatList
        data={recommendedItems}
        renderItem={({ item }) => (
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
        style={{ padding: 10 }}
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
