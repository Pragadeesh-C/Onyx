import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onyx</Text>
      <ActivityIndicator style={styles.indicator} size={'large'}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F6F6F6',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'black',
        fontFamily:'IntegralCF',
        fontSize:25
    },
    indicator:{
        marginTop:"5%",
    }
})