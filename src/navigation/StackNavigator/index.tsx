import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from 'routes/Routes';
import Splash from 'container/Splash';
import SignUp from 'container/SignUp';
import SignIn from 'container/SignIn';
import Gender from 'container/OnboardingScreens/Gender';
import Age from 'container/OnboardingScreens/Age';
import Weight from 'container/OnboardingScreens/Weight';
import Height from 'container/OnboardingScreens/Height';
import Goal from 'container/OnboardingScreens/Goal';
import Home from 'container/Home';
import BottomTabNavigator from 'navigation/BottomTabNavigator';
import WorkoutPrompt from 'container/WorkoutPrompt';
import StartWorkout from 'container/StartWorkout';
import NutrientsPlan from 'container/NutrientsPlan';
import WorkoutVideo from 'container/WorkoutVideo';
import FoodPreference from 'container/OnboardingScreens/FoodPreference';

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Routes.Splash}>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.SignUp} component={SignUp} />
        <Stack.Screen name={Routes.SignIn} component={SignIn} />
        <Stack.Screen name={Routes.Gender} component={Gender} />
        <Stack.Screen name={Routes.Age} component={Age} />
        <Stack.Screen name={Routes.Weight} component={Weight} />
        <Stack.Screen name={Routes.Height} component={Height} />
        <Stack.Screen name={Routes.FoodPreference} component={FoodPreference} />
        <Stack.Screen name={Routes.Goal} component={Goal} />
        <Stack.Screen name={Routes.Tabs} component={BottomTabNavigator} />
        <Stack.Screen name={Routes.WorkoutPrompt} component={WorkoutPrompt} />
        <Stack.Screen name={Routes.WorkoutStart} component={StartWorkout} />
        <Stack.Screen name={Routes.Nutrients} component={NutrientsPlan} />
        <Stack.Screen name={Routes.WorkoutVideo} component={WorkoutVideo} />
      </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})