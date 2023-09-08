import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DatePicker, Picker } from 'react-native-wheel-pick';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Routes } from 'routes/Routes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Goal = ({ route }: any) => {
    const { navigate } = useNavigation();
    const {gender, age, weight, height } = route.params;
    const pickerData = ['Lose weight', 'Get Fitter', 'Gain Weight']
    const [goal, setGoal] = useState<string | undefined>();
    const user = auth().currentUser.email;
    console.log(user)

    const pushData = async() => {
        await firestore().collection('UsersData').doc(user).set({
            email:user,
            gender:gender,
            age:age,
            weight:weight,
            height:height,
            goal:goal
        }).then(() => {
            navigate(Routes.Tabs as never)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>What's your goal</Text>
            <Text style={styles.headerDesc}>this helps us create your personalized plan</Text>
            <View style={{ height: '70%', justifyContent: 'center' }}>
                <Picker
                    style={{ backgroundColor: '#F6F6F6', width: 180, height: 350, fontFamily: 'IntegralCF-Bold' }}
                    selectTextColor='green'
                    isShowSelectBackground={false}
                    selectedValue='Get Fitter'
                    selectLineColor='#34CE6C'
                    selectLineSize={10}
                    pickerData={pickerData}
                    onValueChange={(value: React.SetStateAction<string | undefined>) => { setGoal(value) }}
                />
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={pushData}>
                <Text style={styles.buttonText}>Next</Text>
                <MaterialIcons name='arrow-right' size={20} color={'white'} />
            </TouchableOpacity>
        </View>
    );
};

export default Goal;

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
