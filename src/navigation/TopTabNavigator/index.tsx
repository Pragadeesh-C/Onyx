import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Routes} from 'routes/Routes';
import NutritionSuggestion from 'container/NutritionSuggestions';
import NutrientsPlan from 'container/NutrientsPlan';

const TopTabNavigator = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name={Routes.Breakfast}
        component={NutritionSuggestion}
      />
      <TopTab.Screen name={Routes.Lunch} component={NutritionSuggestion} />
      <TopTab.Screen name={Routes.Snacks} component={NutritionSuggestion} />
      <TopTab.Screen name={Routes.Dinner} component={NutritionSuggestion} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});
