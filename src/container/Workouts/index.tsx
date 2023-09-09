import WorkoutOption from 'components/WorkoutComponent';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
const WorkoutPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <WorkoutOption
        label="Running"
        selected={selectedOption === 'Running'}
        onPress={() => handleOptionPress('Running')}
      />
      <WorkoutOption
        label="Walking"
        selected={selectedOption === 'Walking'}
        onPress={() => handleOptionPress('Walking')}
      />
      <WorkoutOption
        label="Exercise"
        selected={selectedOption === 'Exercise'}
        onPress={() => handleOptionPress('Exercise')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkoutPage;
