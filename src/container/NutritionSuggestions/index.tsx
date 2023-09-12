import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FoodCardComponent from 'components/FoodCardComponent';
import { Diet } from 'data/diet';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const NutritionSuggestion = ({ route }) => {
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [userData, setUserData] = useState(null); 

  const mealType = route.name;
  const user = auth().currentUser?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDoc = await firestore().collection('UsersData').doc(user).get();
        const data = userDoc.data();
        setUserData(data); 
        const goal = data.goal;
        const proteinPerMeal = data.weight / 3;
        const caloriePerMeal = data.calEst / 3;
  
        const isVegetarian = data.foodPreference === 'Vegetarian';
  
        let filteredItems = Diet.filter((food) => {
          return (
            food.type === mealType &&
            food.protein <= proteinPerMeal &&
            food.calories <= caloriePerMeal &&
            (isVegetarian ? food.isVegetarian : true) // Check if the food is vegetarian
          );
        });
  
        if (goal === 'Gain Weight') {
          filteredItems = filteredItems.filter((food) => food.protein <= proteinPerMeal + 20);
        } else if (goal === 'Lose weight') {
          filteredItems = filteredItems.filter((food) => food.calories <= caloriePerMeal - 200);
        }
  
        setRecommendedItems(filteredItems);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchData();
  }, [mealType, user]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{route.name} Recommendation</Text>
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
            schedule={route.name}
          />
        )}
        style={{ padding: 10 }}
        keyExtractor={(item) => item.name}
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
