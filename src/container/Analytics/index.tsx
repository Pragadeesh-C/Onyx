import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Analytics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Analytics</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.caloriesView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.caloriesText}>Calories</Text>
            <Icon name="fire" size={20} />
          </View>
        </View>
        <View style={styles.nutritionView}>
          <View style={styles.nutritionDetails}>
          <Text>Protein</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  headerText: {
    color: 'black',
    fontFamily: 'IntegralCF-Bold',
    padding: 20,
    fontSize: 18,
  },
  caloriesView: {
    height: 180,
    width: '40%',
    backgroundColor: '#6CC984',
    borderRadius: 13,
    padding: 10,
    marginLeft: 20,
  },
  caloriesText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
  },
});
