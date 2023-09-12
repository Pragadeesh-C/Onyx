import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'container/Home';
import Analytics from 'container/Analytics';
import NutrientsPlan from 'container/NutrientsPlan';
import Profile from 'container/Profile';
import {Routes} from 'routes/Routes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StartWorkout from 'container/StartWorkout';
import WorkoutPrompt from 'container/WorkoutPrompt';
import {createStackNavigator} from '@react-navigation/stack';
import Workout from 'container/Workouts';
import NutritionSuggestion from 'container/NutritionSuggestions';
import TopTabNavigator from 'navigation/TopTabNavigator';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();


  return (
    <Tab.Navigator initialRouteName={Routes.Home}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Workout}
        component={Workout}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Analytics}
        component={Analytics}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="pie-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.NutrientsSuggestion}
        component={TopTabNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome6 name="bowl-food" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
