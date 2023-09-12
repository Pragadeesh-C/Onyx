import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'routes/Routes';

const FoodCardComponent = ({
  name,
  imageUrl,
  calories,
  desc,
  protein,
  carbs,
  fat,
  schedule
}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() =>
        navigate(
          Routes.Nutrients,
          {
            name: name,
            imageUrl: imageUrl,
            calories: calories,
            desc: desc,
            protein: protein,
            carbs: carbs,
            fat: fat,
            schedule:schedule
          },
        )
      }>
      <Image source={imageUrl} style={styles.img} />
      <View style={{marginTop: '5%', gap: 5, paddingLeft: '3%'}}>
        <Text style={styles.foodName}>{name}</Text>
        <Text style={styles.foodCal}>{calories} Calories</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCardComponent;

const styles = StyleSheet.create({
  box: {
    height: 130,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 20,
  },
  img: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    borderRadius: 8,
    marginLeft: 10,
  },
  foodName: {
    fontFamily: 'Sen-Bold',
    fontSize: 15,
    color: 'black',
  },
  foodCal: {
    fontFamily: 'Sen',
    color: 'gray',
  },
});
