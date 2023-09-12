import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setBreakfast, setDinner, setLunch} from 'redux/analyticsSlice';

const NutrientsPlan = ({route}: any) => {
  const {calories, fat, carbs, imageUrl, desc, name, protein, schedule} =
    route.params;
  const user = auth().currentUser?.email;
  const [stars, setStars] = useState(0);
  const dispatch = useDispatch();

  const [breakfastAte, setBreakfastAte] = useState(false);

  const getNextDayDate = () => {
    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    return nextDay.toDateString();
  };

  useEffect(() => {
    const checkBreakfastAteStatus = async () => {
      try {
        const nextDayDate = getNextDayDate();

        const breakfastAteStatus = await AsyncStorage.getItem(
          `${user}:${nextDayDate}:${schedule}`,
        );
        if (breakfastAteStatus === 'true') {
          setBreakfastAte(true);
        }
      } catch (error) {
        console.error('Error checking breakfast Ate status:', error);
      }
    };
    const date = new Date().toDateString();
    // checkBreakfastAteStatus();
  }, []);

  const handleAtePress = async () => {
    try {
      const date = new Date().toDateString();

      await firestore()
        .collection('FoodData')
        .doc(user)
        .collection('Date')
        .doc(date)
        .collection('Schedule')
        .doc(schedule)
        .set({
          name: name,
          calories: calories,
          fat: fat,
          carbs: carbs,
          protein: protein,
          evaluation: stars,
        });

      const foodData = {
        name: name,
        calories: calories,
        protein: protein,
        rating: stars,
        fats: fat,
        carbs: carbs,
      };

      await AsyncStorage.setItem(
        `${user}:${date}:${schedule}`,
        JSON.stringify(foodData),
      );

      setBreakfastAte(true);

      if (schedule === 'Breakfast') {
        dispatch(
          setBreakfast({
            calories: calories,
            rating: stars,
            protein: protein,
            fats: fat,
            carbs: carbs,
          }),
        );
      } else if (schedule === 'Lunch') {
        dispatch(
          setLunch({
            calories: calories,
            rating: stars,
            protein: protein,
            fats: fat,
            carbs: carbs,
          }),
        );
      } else if (schedule === 'Dinner') {
        dispatch(
          setDinner({
            calories: calories,
            rating: stars,
            protein: protein,
            fats: fat,
            carbs: carbs,
          }),
        );
      }
    } catch (error) {
      console.error('Error writing data to Firestore:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Nutrients Plan</Text>
      <Text style={styles.foodName}>{name}</Text>
      <Stars
        default={0}
        count={5}
        half={true}
        starSize={50}
        fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
        emptyStar={
          <Icon
            name={'star-outline'}
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        }
        halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
        update={val => setStars(val)}
      />
      <View style={styles.foodDetailsView}>
        <View style={{width: 160}}>
          <Image source={imageUrl} style={styles.foodImg} />
        </View>
        <View style={styles.foodDetailsComponent}>
          <View style={styles.foodDetails}>
            <Text style={styles.foodDetailsHead}>Calories</Text>
            <Text style={styles.foodDetailsDesc}>{calories} kcal</Text>
          </View>
          <View style={styles.foodDetails}>
            <Text style={styles.foodDetailsHead}>Protein</Text>
            <Text style={styles.foodDetailsDesc}>{protein} g</Text>
          </View>
        </View>
        <View style={styles.foodDetailsComponent}>
          <View style={styles.foodDetails}>
            <Text style={styles.foodDetailsHead}>Fat</Text>
            <Text style={styles.foodDetailsDesc}>{fat} g</Text>
          </View>
          <View style={styles.foodDetails}>
            <Text style={styles.foodDetailsHead}>Carbs</Text>
            <Text style={styles.foodDetailsDesc}>{carbs} g</Text>
          </View>
        </View>
      </View>
      <Text style={styles.aboutFoodText}>About food</Text>
      <Text style={styles.foodDesc}>{desc}</Text>
      <Text style={{...styles.foodName, fontSize: 15}}>
        You can rate the food item with the stars above
      </Text>
      {!breakfastAte && (
        <TouchableOpacity style={styles.button} onPress={handleAtePress}>
          <Text style={styles.buttonText}>Ate</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NutrientsPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  headerText: {
    fontFamily: 'IntegralCF-Bold',
    color: 'black',
    paddingTop: '5%',
    fontSize: 20,
    paddingLeft: 20,
  },
  foodName: {
    fontFamily: 'Sen-Bold',
    fontSize: 17,
    color: 'black',
    paddingTop: '5%',
    paddingBottom: '2%',
    paddingLeft: 20,
  },
  myStarStyle: {
    color: 'orange',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowRadius: 2,
    left: 20,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  foodImg: {
    height: 150,
    width: 150,
    marginTop: '4%',
    marginLeft: 10,
    resizeMode: 'contain',
  },
  foodDetailsView: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  foodDetails: {
    flexDirection: 'column',
  },
  foodDetailsHead: {
    color: 'black',
    fontFamily: 'Sen-Bold',
  },
  foodDetailsDesc: {
    color: 'black',
  },
  foodDetailsComponent: {
    flexDirection: 'column',
    gap: 20,
    padding: 25,
  },
  aboutFoodText: {
    color: 'black',
    paddingLeft: 20,
    paddingTop: '3%',
    fontFamily: 'Sen-Bold',
    fontSize: 17,
  },
  foodDesc: {
    color: 'gray',
    fontFamily: 'Poppins',
    paddingLeft: 20,
    paddingRight: 10,
    letterSpacing: 0.3,
    paddingTop: '5%',
  },
  ingredientsText: {
    fontFamily: 'Sen-Bold',
    color: 'black',
    fontSize: 17,
    padding: 20,
  },
  ingredientsContainer: {
    flexDirection: 'row',
  },
  ingredientsImageView: {
    height: 90,
    width: 90,
    backgroundColor: 'silver',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  ingredientsImage: {
    height: 75,
    width: 75,
    resizeMode: 'contain',
  },
  button: {
    height: 45,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#A48AED',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
    fontSize: 17,
  },
});
