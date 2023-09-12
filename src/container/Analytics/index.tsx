import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnalyticsBox from 'components/AnalyticsBox';
import Feather from 'react-native-vector-icons/Feather';
import FoodBox from 'components/FoodBox';
import CircularProgress from 'react-native-circular-progress-indicator';
import NutritionDetailsBox from 'components/NutritionDetailsBox';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import googleFit from 'react-native-google-fit';

const Analytics = () => {
  const analytics = useSelector((state) => state.analytics);
  const schedules = ['Breakfast', 'Lunch', 'Dinner'];
  const daySchedule = ['breakfast', 'lunch', 'dinner'];
  const [allScheduleData, setAllScheduleData] = useState([]);
  const [cal,setCal] = useState();
  
  const getAllScheduleData = async () => {
    const user = auth().currentUser?.email;
    const currentDate = new Date();
    const scheduleData = [];

    try {
      for (const schedule of schedules) {
        const storedDataKey = `${user}:${currentDate.toDateString()}:${schedule}`;
        const storedData = await AsyncStorage.getItem(storedDataKey);

        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const storedDate = new Date(parsedData.date);

          if (storedDate.getDate() < currentDate.getDate()) {
            await AsyncStorage.removeItem(storedDataKey);
          } else {
            scheduleData.push({ schedule, ...parsedData });
          }
        }
      }

      setAllScheduleData(scheduleData);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const getCalories = async() => {
    const today = new Date();
    const pastDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1,
    );
    const opt = {
      startDate: pastDate.toISOString(),
      endDate: today.toISOString(),
    };
    const cal = await googleFit.getDailyCalorieSamples(opt);
    const calories = Math.round(cal[0].calorie)
    setCal(calories)

  }

  useEffect(() => {
    getAllScheduleData();
    getCalories();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Analytics</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={styles.caloriesView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.caloriesText}>Calories</Text>
            <Icon name="fire" size={20} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CircularProgress
              value={cal}
              radius={60}
              duration={1000}
              progressValueColor={'#FFF'}
              maxValue={1500}
              title={'kCal'}
              titleColor={'white'}
              titleStyle={{ fontWeight: 'bold' }}
              activeStrokeColor="white"
            />
          </View>
        </View>
        <View style={styles.nutritionView}>
          <View style={styles.nutritionDetails}>
            <View style={{ flex: 1, gap: 20 }}>
              <NutritionDetailsBox
                circleColor={'orange'}
                label="Protein"
                value={
                  analytics['breakfast']?.protein +
                  analytics['lunch']?.protein +
                  analytics['dinner']?.protein || 57
                }
              />
              <NutritionDetailsBox
                circleColor={'#F6D44A'}
                label="Fats"
                value={
                  analytics['breakfast']?.fats +
                  analytics['lunch']?.fats +
                  analytics['dinner']?.fats || 20
                }
              />
              <NutritionDetailsBox
                circleColor={'#D53E6A'}
                label="Carbs"
                value={
                  analytics.breakfast?.carbs +
                  analytics['lunch']?.carbs +
                  analytics['dinner']?.carbs || 50
                }
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
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
      <Text
        style={{
          ...styles.headerText,
          fontFamily: 'Sen-ExtraBold',
        }}>
        Today's food
      </Text>
      <ScrollView>
        <View style={{ gap: 10 }}>
          <ScrollView>
            <View style={{ gap: 10 }}>
              {schedules.map((schedule) => (
                <FoodBox
                  key={schedule}
                  title={schedule}
                  analytics={
                    allScheduleData.find((data) => data.schedule === schedule) ||
                    analytics[schedule]
                  }
                />
              ))}
            </View>
          </ScrollView>
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
