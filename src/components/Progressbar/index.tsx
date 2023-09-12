import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';

const Progressbar = ({pro, pro1, value, title,units}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   Loading();
  },[]);

  const Loading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    
    loading ? (
    <View style={{flex: 1}}>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={{flex: 1,paddingHorizontal:5,}}>
      <Text style={{fontFamily: 'IntegralCF',textAlign:'center',fontSize:15,color:'black'}}>{value} {units}</Text>
      <Text style={{fontFamily: 'IntegralCF',textAlign:'center',fontSize:10,letterSpacing:0.4,lineHeight:15,}}>{title}</Text>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // paddingHorizontal:5,
        }}>
        <Progress.Bar
          color="#92A3FD"
          progress={0.4}
          width={18}
          height={150}
          style={{
            backgroundColor: '#E9EDF7',
            borderColor: '#E9EDF7',
            borderRadius: 20,
          }}
        />
        <Progress.Bar
          color="black"
          progress={pro1}
          width={18}
          height={150}
          style={{
            backgroundColor: '#E9EDF7',
            borderColor: '#E9EDF7',
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  ) ) ;
};

export default Progressbar;

const styles = StyleSheet.create({});
