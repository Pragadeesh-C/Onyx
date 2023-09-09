import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const NutritionDetailsBox = ({circleColor,label,value}) => {
  return (
    <View style={{flexDirection: 'row',gap:10}}>
      <CircularProgress
              value={40}
              radius={20}
              duration={2000}
              progressValueColor={'gray'}
              maxValue={100}
              titleColor={'black'}
              titleStyle={{fontWeight: 'bold'}}
              activeStrokeColor={circleColor}
              inActiveStrokeColor='lightgray'
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
