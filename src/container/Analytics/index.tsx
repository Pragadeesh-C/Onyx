import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnalyticsBox from 'components/AnalyticsBox';
import Feather from 'react-native-vector-icons/Feather';
import FoodBox from 'components/FoodBox';
import CircularProgress from 'react-native-circular-progress-indicator';
import NutritionDetailsBox from 'components/NutritionDetailsBox';

const Analytics = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Analytics</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={styles.caloriesView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.caloriesText}>Calories</Text>
            <Icon name="fire" size={20} />
          </View>
          <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
              <CircularProgress
                value={730}
                radius={60}
                duration={1000}
                progressValueColor={'#FFF'}
                maxValue={2000}
                title={'kCal'}
                titleColor={'white'}
                titleStyle={{fontWeight: 'bold'}}
                activeStrokeColor="white"
              />
          </View>
        </View>
        <View style={styles.nutritionView}>
          <View style={styles.nutritionDetails}>
            <View style={{flex:1,gap:20}}>
              <NutritionDetailsBox circleColor={'orange'} label='Protein' value='128'/>
              <NutritionDetailsBox circleColor={'#F6D44A'} label='Fats' value='74'/>
              <NutritionDetailsBox circleColor={'#D53E6A'} label='Carbs' value='203'/>
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <AnalyticsBox
          title={'Water'}
          amount="2.1"
          metrics="Litres"
          icon={<Icon name="water-outline" size={25} color={'blue'} />}
        />
        <AnalyticsBox
          title={'Sleep'}
          amount="7.40"
          metrics="Hours"
          icon={<Feather name="moon" size={25} color={'orange'} />}
        />
      </View>
      <Text style={{...styles.headerText, fontFamily: 'Sen-ExtraBold'}}>
        Today's food
      </Text>
      <ScrollView>
        <View style={{gap: 10}}>
          <FoodBox title="Breakfast" />
          <FoodBox title="Lunch" />
          <FoodBox title="Dinner" />
        </View>
      </ScrollView>
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
    width: '45%',
    backgroundColor: '#6CC984',
    borderRadius: 13,
    padding: 10,
  },
  caloriesText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
  },
  nutritionView: {
    height: 180,
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 13,
    padding: 10,
  },
  nutritionDetails: {
    flexDirection: 'row',
  },
});
