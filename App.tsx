import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from 'container/Splash';
import SignUp from 'container/SignUp';
import SignIn from 'container/SignIn';
import Onboarding from 'components/Onboarding';
import Progressbar from 'components/Progressbar';
import Gender from 'container/OnboardingScreens/Gender';
import { Routes } from 'routes/Routes';
import Age from 'container/OnboardingScreens/Age';
import Weight from 'container/OnboardingScreens/Weight';
import Height from 'container/OnboardingScreens/Height';
import Goal from 'container/OnboardingScreens/Goal';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.SignUp} component={SignUp} />
        <Stack.Screen name={Routes.SignIn} component={SignIn} />
        <Stack.Screen name={Routes.Gender} component={Gender} />
        <Stack.Screen name={Routes.Age} component={Age} />
        <Stack.Screen name={Routes.Weight} component={Weight} />
        <Stack.Screen name={Routes.Height} component={Height} />
        <Stack.Screen name={Routes.Goal} component={Goal} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Onboarding/>
    // <View style={{flex:1,alignItems:"center",justifyContent:'center',flexDirection:'row'}}>

    // <Progressbar pro={0.9} pro1={0.9} title={'Distance'} value={'3550'} units={'m'}/>
    // <Progressbar pro={0.9} pro1={0.9} title={'Distance'} value={'3550'}/>
    // <Progressbar pro={0.9} pro1={0.9} title={'Distance'} value={'3550'}/>
    // </View>
  )
}

export default App
