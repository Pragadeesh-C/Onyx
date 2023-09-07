import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from 'container/Splash';
import SignUp from 'container/SignUp';
import SignIn from 'container/SignIn';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='SignIn' component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
