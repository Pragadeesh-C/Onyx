import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth  from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Routes } from 'routes/Routes'

const Profile = () => {
  const {navigate}  = useNavigation();
  return (
    <View style={{justifyContent:'center',flex:1}}>
      <TouchableOpacity style={styles.button} onPress={async() => await auth().signOut().then(() => navigate(Routes.SignUp as never))}>
        <Text style={{color:'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  button:{
    height:40,
    width:'95%',
    borderRadius:10,
    backgroundColor:'#A48AED',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  }
})