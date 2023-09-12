import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DatePicker, Picker } from 'react-native-wheel-pick';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Routes } from 'routes/Routes';

const Weight = ({ route }) => {
  const { navigate } = useNavigation();
  const pickerData = Array.from({ length: 200 }, (_, index) => (index + 1).toString());
  const [weight, setWeight] = useState<number>(20);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What's your weight</Text>
      <Text style={styles.headerDesc}>you can always change this later</Text>
      <View style={{ height: '70%', justifyContent: 'center' }}>
        <Picker
          style={{ backgroundColor: '#F6F6F6', width: 70, height: 350, fontFamily: 'IntegralCF-Bold' }}
          selectTextColor='green'
          isShowSelectBackground={false}
          selectedValue='20'
          selectLineColor='#34CE6C'
          selectLineSize={10}
          pickerData={pickerData}
          onValueChange={(value) => { setWeight(value) }}
        />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigate(Routes.Height , {
        ...route.params,
        'weight': weight
      } )}>
        <Text style={styles.buttonText}>Next</Text>
        <MaterialIcons name='arrow-right' size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Weight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
  },
  headerText: {
    marginTop: "10%",
    fontFamily: 'IntegralCF-Bold',
    color: 'black',
    fontSize: 20,
  },
  headerDesc: {
    fontSize: 13,
    fontFamily: 'IntegralCF',
    color: 'black',
    marginTop: '2%'
  },
  nextButton: {
    height: 45,
    width: 110,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#34CE6C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
    fontSize: 18
  }
});
