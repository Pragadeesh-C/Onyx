import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IngredientsImage from 'components/IngredientsImage';
import { IMAGES } from 'images/images';

const NutrientsPlan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Nutrients Plan</Text>
      <Text style={styles.foodName}>Baked salmon & asparagus</Text>
      <Stars
        default={3}
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
      />
      <View style={styles.foodDetailsView}>
        <View style={{width: 160}}>
          <Image source={require('images/food.png')} style={styles.foodImg} />
        </View>
        <View style={styles.foodDetailsComponent}>
          <View style={styles.foodDetails}>
            <Text style={styles.foodDetailsHead}>Calories</Text>
            <Text style={styles.foodDetailsDesc}>190 kcal</Text>
          </View>
          <View style={styles.foodDetails}>
            <Text style={styles.foodDetailsHead}>Protein</Text>
            <Text style={styles.foodDetailsDesc}>87 g</Text>
          </View>
        </View>
        <View style={styles.foodDetailsComponent}>
          <View style={styles.foodDetails}>
            <Text style={styles.foodDetailsHead}>Fat</Text>
            <Text style={styles.foodDetailsDesc}>65 g</Text>
          </View>
          <View style={styles.foodDetails}>
            <Text style={styles.foodDetailsHead}>Carbs</Text>
            <Text style={styles.foodDetailsDesc}>84 g</Text>
          </View>
        </View>
      </View>
      <Text style={styles.aboutFoodText}>About food</Text>
      <Text style={styles.foodDesc}>
        Duis vestibulum risus nec sem auctor, sita amet fermentum odio mollis.
        Vivamus eleifend, food a non volutpat venenotis, neque elit viver
        healthy augue, in accumsan orci diam et augue. Nunc a sodales iaculis
        congue. Nullam vita food salmon laoreet, maximus sapien nec,
        sollicitudin dolor. Nunc interdum fermentum dolor nec an tempus. Nullam
        pellentesque odio id libero bibendum, id sagittis leo vulputate. Donec
        odio eros, healthy sollicitudin ut quam ut, suscipit aliquet neque
      </Text>
      <Text style={styles.ingredientsText}>Ingredients</Text>
      <ScrollView style={styles.ingredientsContainer} horizontal showsHorizontalScrollIndicator>
        <IngredientsImage imageUrl={IMAGES.pepper} />
        <IngredientsImage imageUrl={IMAGES.broccoli} />
      </ScrollView>
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
    fontSize: 15,
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
});
