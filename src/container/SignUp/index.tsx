import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hey there,</Text>
            <Text style={styles.headText}>Create an Account</Text>
            <View style={styles.textBoxContainer}>
                <TextInput placeholder='Name' style={styles.textInput} placeholderTextColor={'#ADA4A5'} />
                <AntDesign name={'user'} size={20} style={styles.icon} />
            </View>
            <View style={styles.textBoxContainer}>
                <TextInput placeholder='Email' style={styles.textInput} placeholderTextColor={'#ADA4A5'} />
                <Ionicons name={'mail-outline'} size={20} style={styles.icon} />
            </View>
            <View style={styles.textBoxContainer}>
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput} placeholderTextColor={'#ADA4A5'} />
                <Ionicons name={'lock-closed-outline'} size={20} style={styles.icon} />
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Register</Text>
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
                <Text style={styles.footText}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.footButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        marginTop: '35%',
        backgroundColor: '#92A3FD',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Sen-ExtraBold'
    },
    foot: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: "3%"
    },
    footText: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 12
    },
    footButtonText: {
        left: 5,
        fontFamily: 'Poppins',
        color: '#C58BF2',
        fontSize: 12
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