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
        name={Routes.Veg}
        component={NutritionSuggestion}
      />
      <TopTab.Screen name={Routes.NonVeg} component={NutritionSuggestion} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});
