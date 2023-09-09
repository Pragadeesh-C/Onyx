import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WorkoutOption = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.optionContainer}>
        <View style={selected ? styles.selectedIconContainer : styles.iconContainer}>
          <Icon name="directions-run" size={selected ? 40 : 30} color={selected ? 'white' : 'black'} />
        </View>
        <View style={selected ? styles.selectedCurve : styles.unselectedCurve} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 5,
    fontSize: 16,
  },
  selectedCurve: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20, // Adjust this value for the curve's height
    backgroundColor: 'lightblue',
    borderBottomLeftRadius: 500, // Create a curve-like shape
    borderBottomRightRadius: 500, // Create a curve-like shape
  },
  unselectedCurve: {
    position: 'absolute',
    bottom: -10, // Move it below the selected option
    left: 0,
    right: 0,
    height: 10, // Flat continuation for unselected options
    backgroundColor: 'white', // Match the background color of unselected options
  },
});

export default WorkoutOption;
