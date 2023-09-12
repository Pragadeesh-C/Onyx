import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const NutritionDetailsBox = ({circleColor, label, value}) => {
  const user = auth().currentUser?.email;
  const [maxValue, setMaxValue] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = (await firestore().collection('UsersData').doc(user).get())
      ._data;
    const weight = data.weight;
    setMaxValue(weight);
  };

  return (
    <View style={{flexDirection: 'row', gap: 10}}>
      <CircularProgress
        value={value}
        radius={20}
        duration={2000}
        progressValueColor={'gray'}
        maxValue={value}
        titleColor={'black'}
        titleStyle={{fontWeight: 'bold'}}
        activeStrokeColor={circleColor}
        inActiveStrokeColor="lightgray"
      />
      <View>
        <Text style={styles.nutritionHead}>{label}</Text>
        <Text style={styles.nutritionAmount}>{value}</Text>
      </View>
    </View>
  );
};

export default NutritionDetailsBox;

const styles = StyleSheet.create({
  nutritionHead: {
    color: 'black',
    fontFamily: 'Sen-Bold',
  },
  nutritionAmount: {
    color: 'gray',
    fontFamily: 'Poppins',
  },
});
