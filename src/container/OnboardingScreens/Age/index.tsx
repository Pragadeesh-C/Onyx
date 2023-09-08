import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DatePicker, Picker } from 'react-native-wheel-pick';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Routes } from 'routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  age: { age: string } | undefined;
};

const Age = ({ route }:any) => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const gender = route.params.gender;
  const pickerData = Array.from({ length: 120 }, (_, index) => (index + 1).toString());
  const [age,setAge] = useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>How old are you?</Text>
      <Text style={styles.headerDesc}>this helps us create your personalized plan</Text>
      <View style={{height:'80%',justifyContent:'center'}}>
      <Picker
        style={{ backgroundColor: '#F6F6F6', width: 70, height: 350,fontFamily:'IntegralCF-Bold' }}
        selectTextColor='green'
        isShowSelectBackground={false}
        selectedValue='10'
        selectLineColor='#34CE6C'
        selectLineSize={10}
        pickerData={pickerData}
        onValueChange={(value: React.SetStateAction<number>) => {setAge(value)}}
        />
        </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigate(Routes.Weight as never, {
                ...route.params,
                'age':age
            } as never)}>
                <Text style={styles.buttonText}>Next</Text>
                <MaterialIcons name='arrow-right' size={20} color={'white'} />
            </TouchableOpacity>
    </View>
  );
};

export default Age;

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
