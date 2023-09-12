import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Routes } from 'routes/Routes';
import { useNavigation } from '@react-navigation/native';

const Gender = () => {
    const [maleClicked, setIsMaleClicked] = useState<Boolean>(false);
    const [femaleClicked, setIsFemaleClicked] = useState<Boolean>(false);
    const [gender, setGender] = useState<string>('');
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.headText}>Tell us about yourself</Text>
            <Text style={styles.headDesc}>To give you a better experience we need</Text>
            <Text style={[styles.headDesc, { textAlign: 'center' }]}>to know your gender</Text>
            <View style={{ flex: 0.8, gap: 30, justifyContent: 'center' }}>
                <TouchableOpacity style={[styles.genderBox, maleClicked ? { backgroundColor: '#03A3FF' } : { backgroundColor: styles.genderBox.backgroundColor }]} onPress={() => {
                    if (!femaleClicked){
                        setIsMaleClicked(!maleClicked)
                        setGender('male')}
                    else{
                        setIsFemaleClicked(!femaleClicked)
                        setIsMaleClicked(!maleClicked)
                        setGender('male')
                    }
                }} >
                    <MaterialIcons name='male' size={55} style={[styles.genderIcon, maleClicked ? { color: 'white' } : {}]} />
                    <Text style={[styles.genderText, maleClicked ? { color: 'white' } : { color: styles.genderText.color }]}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.genderBox, femaleClicked ? { backgroundColor: '#FF6079' } : { backgroundColor: styles.genderBox.backgroundColor }]} onPress={() => {
                    if (!maleClicked){
                        setIsFemaleClicked(!femaleClicked)
                        setGender('female')
                    }
                    else{
                        setIsMaleClicked(!maleClicked)
                        setIsFemaleClicked(!femaleClicked)
                        setGender('Female')
                    }
                }}>
                    <MaterialIcons name='female' size={55} style={[styles.genderIcon, femaleClicked ? { color: 'white' } : {}]} />
                    <Text style={[styles.genderText, femaleClicked ? { color: 'white' } : {}]}>Female</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={() => navigate(Routes.Age , {
                'gender': gender
            } )}>
                <Text style={styles.buttonText}>Next</Text>
                <MaterialIcons name='arrow-right' size={20} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}

export default Gender

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        alignItems: 'center'
    },
    headText: {
        color: 'black',
        fontFamily: 'IntegralCF-Bold',
        fontSize: 20,
        marginTop: "10%",
        marginBottom: "5%"
    },
    headDesc: {
        color: 'black',
        fontFamily: 'IntegralCF',
        fontSize: 15,
    },
    genderBox: {
        height: 130,
        width: 130,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    genderIcon: {
        color: 'black'
    },
    genderText: {
        color: 'black',
        fontFamily: 'Poppins'
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

})