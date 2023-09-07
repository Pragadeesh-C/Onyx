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
    <View style={{flex:1,alignItems:"center",justifyContent:'center',flexDirection:'row'}}>

    <Progressbar pro={0.9} pro1={0.9} title={'Distance'} value={'3550'} units={'m'}/>
    <Progressbar pro={0.9} pro1={0.9} title={'Distance'} value={'3550'}/>
    <Progressbar pro={0.9} pro1={0.9} title={'Distance'} value={'3550'}/>
    </View>
  )
}

export default App
