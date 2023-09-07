import { View, Animated,useWindowDimensions,StyleSheet } from 'react-native'
import React from 'react'

export default function Paginator({data,scrollx}) {
    const wid =useWindowDimensions().width;
  return (
    <View style={{flexDirection:'row',height:64}}>
      {data.map((_,i)=>{
         // Calculate the inputRange based on the current index i and the screen width wid
         const inputRange = [(i - 1) * wid, i * wid, (i + 1) * wid];

         // Ensure that the inputRange values are valid numbers
         const dotWidth = scrollx.interpolate({
           inputRange,
           outputRange: [10, 20, 10],
           extrapolate: 'clamp',
         });
         const opacity=scrollx.interpolate({
          inputRange,
          outputRange: [0.5,1,.05],
          extrapolate:'clamp',

         });

        return <Animated.View style={[styles.dot,{width:dotWidth,opacity}]} key={`dot-${i}`}/>;
      })}
    </View>
  )
};
const styles=StyleSheet.create({
  
    dot:{
        height:10,
        borderRadius:5,
        backgroundColor:'#483d8a',
        marginHorizontal:8,
    }
  
  })


  