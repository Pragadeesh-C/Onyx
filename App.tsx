import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from 'navigation/StackNavigator';
import BottomTabNavigator from 'navigation/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <StackNavigator />
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
