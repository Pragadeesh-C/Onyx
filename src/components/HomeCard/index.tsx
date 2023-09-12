import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeCard = ({steps,cal}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <FontAwesome5
          name={'dumbbell'}
          size={20}
          color="#fff"
          style={{margin: 15}}
        />
        <View style={{marginLeft: 15}}>
          <Text style={styles.cdes}>7.8</Text>
          <Text style={styles.cdes1}>Litres</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <MaterialCommunityIcons
          name={'jump-rope'}
          size={20}
          color="#fff"
          style={{margin: 15}}
        />
        <View style={{marginLeft: 15}}>
          <Text style={styles.cdes}>{cal} Kcal</Text>
          <Text style={styles.cdes1}>Calories</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Ionicons
          name={'footsteps-outline'}
          size={20}
          color="#fff"
          style={{margin: 15}}
        />
        <View style={{marginLeft: 15}}>
          <Text style={styles.cdes}>{steps}</Text>
          <Text style={styles.cdes1}>Steps</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  card: {
    height: 120,
    width: 120,
    borderRadius: 20,
    backgroundColor: '#A48AED',
    margin: 5,
  },
  cdes: {
    fontFamily: 'popins',
    color: '#ffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cdes1: {
    fontFamily: 'popins',
    color: '#ffff',
    fontSize: 12,
    opacity: 0.6,
  },
});
