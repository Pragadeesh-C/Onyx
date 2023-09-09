import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'container/Home';
import Workout from 'container/Workouts';
import Analytics from 'container/Analytics';
import NutrientsPlan from 'container/NutrientsPlan';
import Profile from 'container/Profile';
import {Routes} from 'routes/Routes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import StartWorkout from 'container/StartWorkout';


const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator initialRouteName={Routes.Home}>
        <Tab.Screen
          name={Routes.Home}
          component={Home}
          options={{
            headerShown:false,
            tabBarIcon: ({color,size}) => (
              <AntDesign name="home" size={size} color={color}/>
            ),
          }}
          
        />
        <Tab.Screen
          name={Routes.WorkoutStart}
          component={StartWorkout}
          options={{
                headerShown:false,
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
  ),
              }}
        />
        <Tab.Screen
          name={Routes.Analytics}
          component={Analytics}
          options={{
            headerShown:false,
            tabBarIcon: ({color, size}) => (
              <Feather name="pie-chart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Nutrients}
          component={NutrientsPlan}
          options={{
            headerShown:false,
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Profile}
          component={Profile}
          options={{
            headerShown:false,
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
