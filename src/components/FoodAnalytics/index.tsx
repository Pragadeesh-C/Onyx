import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React, { ReactNode } from 'react';


const FoodAnalytics = ({style,icon,headerText,amount,metrics}) => {
  return (
    <View style={[styles.container,style]}>
      {icon}
      <Text style={styles.headerText}>{headerText}</Text>
      <View style={{flexDirection: 'row', marginTop: '3%'}}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.metrics}> {metrics}</Text>
      </View>
    </View>
  );
};

export default FoodAnalytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:"3%"
  },
  headerText: {
    color: 'black',
    fontFamily: 'Sen-Bold',
    marginTop:10,
    fontSize:16
  },
  amount: {
    fontFamily: 'Sen-Bold',
    fontSize: 23,
    color: 'black',
  },
  metrics: {
    fontFamily: 'Sen-Bold',
    color: 'gray',
    marginTop:"2.5%",
    fontSize:13
  },
});
