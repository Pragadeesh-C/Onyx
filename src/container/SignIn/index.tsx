import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Routes } from 'routes/Routes'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {navigate} = useNavigation();

    const SignIn = async() => {
        await auth().signInWithEmailAndPassword(email,password).then(() => {
            navigate(Routes.Tabs) 
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hey there,</Text>
            <Text style={styles.headText}>Welcome Back</Text>
            <View style={styles.textBoxContainer}>
                <TextInput placeholder='Email' style={styles.textInput} placeholderTextColor={'#ADA4A5'} value={email} onChangeText={(email) => setEmail(email)}/>
                <Ionicons name={'mail-outline'} size={20} style={styles.icon} />
            </View>
            <View style={styles.textBoxContainer}>
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput} placeholderTextColor={'#ADA4A5'} value={password} onChangeText={(pass) => setPassword(pass)}/>
                <Ionicons name={'lock-closed-outline'} size={20} style={styles.icon} />
            </View>
            <Text style={styles.forgotText}>Forgot your password?</Text>
            <TouchableOpacity style={styles.button} onPress={SignIn}>
                <Image source={require('images/Login.png')} />
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.borderOr}>
                <View style={styles.border}></View>
                <Text style={styles.borderOrText}>Or</Text>
                <View style={styles.border}></View>
            </View>
            <View style={styles.socialView}>
                <Image source={require('images/google.png')} style={styles.socialIcon} />
                <Image source={require('images/facebook.png')} style={styles.socialIcon} />
            </View>
            <View style={styles.foot}>
                <Text style={styles.footText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigate(Routes.SignUp)}>
                    <Text style={styles.footButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    text: {
        color: '#1D1617',
        fontSize: 16,
        top: 30,
        alignSelf: 'center',
        fontFamily: 'Bebas'
    },
    headText: {
        color: 'black',
        fontFamily: 'IntegralCF',
        marginTop: "10%",
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: "13%"
    },
    textBoxContainer: {
        height: 55,
        flexDirection: 'row',
        marginBottom: "4%",
        alignItems: 'center',
        width: "90%",
        alignSelf: 'center'
    },
    icon: {
        color: '#7B6F72',
        position: 'absolute',
        left: 10
    },
    textInput: {
        flex: 1,
        backgroundColor: '#F7F8F8',
        borderRadius: 10,
        paddingLeft: 40,
        color:'black'
    },
    button: {
        height: 60,
        width: '90%',
        flexDirection:'row',
        marginTop: '45%',
        backgroundColor: '#92A3FD',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    forgotText:{
        alignSelf:'center',
        fontFamily:'Poppins',
        textDecorationLine:'underline',
        color:'#7B6F72'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Sen-ExtraBold',
        padding:10
    },
    foot: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: "3%"
    },
    footText: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 14
    },
    footButtonText: {
        left: 5,
        fontFamily: 'Poppins',
        color: '#C58BF2',
        fontSize: 14
    },
    borderOr: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: "5%"
    },
    borderOrText: {
        color: 'black',
        fontFamily: 'Poppins',
        alignSelf: 'center',
        padding: 10
    },
    socialView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    socialIcon: {
        gap: 10
    },
    border: {
        width: '40%',
        height: 2,
        backgroundColor: 'lightgray',
        alignSelf: 'center',

    },
})