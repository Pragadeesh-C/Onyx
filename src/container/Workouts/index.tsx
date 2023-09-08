import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Workout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerDesc}>TOo much protein? no whey, mate!</Text>
      <Text style={styles.headerText}>Choose a training{'\n'}for today</Text>
    </View>
  )
}

export default Workout

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'F6F6F6',
  },
  headerText:{
    fontFamily:'IntegralCF-Bold',
    fontSize:16,
    color:'black'
  },
  headerDesc:{
    fontFamily:'IntegralCF',
    color:'black'
  }
})