import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Workout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerDesc}>TOo much protein? no whey, mate!</Text>
      <Text style={styles.headerText}>Choose Your Level <MaterialCommunityIcons name={'fire'} size={28} color='orange'/></Text>
      <Text style={styles.date}>Week 3 , day1</Text>
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
    fontFamily:'popins',
    fontSize:26,
    lineHeight:40,
    letterSpacing:2,
    fontWeight:'bold',
    color:'black',
  },
  headerDesc:{
    // fontFamily:'IntegralCF',
    marginTop:10,
    color:'black',
    fontWeight:'normal',
    textTransform:'capitalize',

  },
  date:{
    fontFamily:'popins',
    fontSize:26,
    lineHeight:40,
    letterSpacing:2,
    fontWeight:'bold',
    color:'black',
  },
})