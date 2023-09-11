import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const RatingComponent = ({ label, rating, setRating }) => {
  const handleRatingPress = (index) => {
    if (index === rating?.index) {
      setRating(null);
    } else {
      const newRating = { index, value: index + 1 };
      setRating(newRating);
    }
  };

  const Ratings = ({ index, style }) => {
    const isActive = index === rating?.index;

    return (
      <TouchableOpacity
        style={[
          styles.ratingsComponent,
          style,
          isActive ? { backgroundColor: '#A48AED' } : {},
        ]}
        onPress={() => handleRatingPress(index)}
      >
        <Text style={[styles.rating, isActive ? { color: 'white' } : {}]}>
          {index + 1}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{label}</Text>
      <View style={styles.ratingsView}>
        {Array.from({ length: 5 }, (_, index) => (
          <Ratings
            key={index}
            index={index}
            style={
              index === 0
                ? { borderLeftWidth: 0 }
                : index === 4
                ? { borderRightWidth: 0 }
                : {}
            }
          />
        ))}
      </View>
    </View>
  );
};

export default RatingComponent;

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 10,
    alignSelf: 'center',
  },
  headerText: {
    fontFamily: 'Sen-Bold',
    color: 'black',
    fontSize: 18,
  },
  ratingsView: {
    marginTop: '2%',
    height: 38,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRightWidth: 1,
    borderRightColor: 'black',
    flexDirection: 'row',
    borderRadius: 8,
  },
  ratingsComponent: {
    borderRightColor: 'black',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    padding: 10,
    paddingRight: 43,
  },
  rating: {
    color: 'black',
    fontFamily: 'Sen',
    left: 15,
  },
});
