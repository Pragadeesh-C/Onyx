import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Routes } from 'routes/Routes';

const Splash = () => {
    const { navigate } = useNavigation();

    useEffect(() => {
        timeOut();
    }, [])

    const timeOut = () => {
        setTimeout(() => {
            navigate(Routes.SignUp)
        }, 2000)
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onyx</Text>
            <ActivityIndicator style={styles.indicator} size={'large'} color='#B9AFF5' />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontFamily: 'IntegralCF',
        fontSize: 30
    },
    indicator: {
        marginTop: "5%",
    }
})