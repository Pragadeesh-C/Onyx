import {ActivityIndicator, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'routes/Routes';
import auth from '@react-native-firebase/auth';

const Splash = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    getPermissions()
    isSignedIn();
  }, []);

  const getPermissions = async() => {
    const granted = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,PermissionsAndroid.PERMISSIONS.BODY_SENSORS])
      // console.log(granted,"granted")
  }


  const isSignedIn = async () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user);
        navigate(Routes.Tabs as never);
      } else {
        navigate(Routes.SignUp as never);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onyx</Text>
      <ActivityIndicator
        style={styles.indicator}
        size={'large'}
        color="#B9AFF5"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'IntegralCF',
    fontSize: 30,
  },
  indicator: {
    marginTop: '5%',
  },
});
