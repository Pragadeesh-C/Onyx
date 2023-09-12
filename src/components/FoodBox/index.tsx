import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FoodAnalytics from 'components/FoodAnalytics';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const FoodBox = ({ title, analytics = {} }) => {
  console.log(analytics,"a")
  return (
    <View style={styles.box}>
      <Text style={styles.headerText}>{title}</Text>
      <View
        style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <FoodAnalytics
          style={{ borderRightWidth: 1, borderRightColor: 'gray' }}
          icon={
            <Octicons
              name="star"
              size={25}
              color={'black'}
              style={{
                paddingTop: '4%',
              }}
            />
          }
          amount={analytics.rating || 0}
          metrics="/5.0"
          headerText="Evaluation"
        />
        <FoodAnalytics
          style={{ borderRightWidth: 1, borderRightColor: 'gray' }}
          icon={
            <MaterialCommunityIcons
              name="fire"
              size={25}
              color={'black'}
              style={{
                paddingTop: '4%',
              }}
            />
          }
          headerText="Calories"
          amount={analytics?.calories || 0}
          metrics="cKal"
        />
        <FoodAnalytics
          icon={
            <MaterialCommunityIcons
              name="water-outline"
              size={30}
              color={'black'}
              style={{
                top: '4%',
              }}
            />
          }
          headerText="Protein"
          amount={analytics?.protein || 0}
          metrics="g"
        />
      </View>
    </View>
  );
};


export default FoodBox;

const styles = StyleSheet.create({
  box: {
    height: 140,
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 13,
    alignSelf: 'center',
  },
  headerText: {
    fontFamily: 'Sen-Bold',
    fontSize: 17,
    color: 'black',
  },
});
