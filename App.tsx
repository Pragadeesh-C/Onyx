import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from 'container/Splash';
import SignUp from 'container/SignUp';
import SignIn from 'container/SignIn';
import Onboarding from 'components/Onboarding';
import Progressbar from 'components/Progressbar';

const App = () => {
  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
    //     <Stack.Screen name='Splash' component={Splash} />
    //     <Stack.Screen name='SignUp' component={SignUp} />
    //     <Stack.Screen name='SignIn' component={SignIn} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Onboarding/>
    <Progressbar pro={0.7}/>
  )
}

export default App
