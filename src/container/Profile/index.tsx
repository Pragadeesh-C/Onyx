import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'routes/Routes';
import googleFit from 'react-native-google-fit';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

const Profile = () => {
  const email = auth().currentUser?.email;
  const name = auth().currentUser?.displayName;
  const pfp = auth().currentUser?.photoURL;
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  console.log(pfp);

  const fetchData = async () => {
    const data = (await firestore().collection('UsersData').doc(email).get())
      ._data;
    console.log(data);
    setHeight(data.height * 100);
    setWeight(data.weight);
    setAge(data.age);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userData = {
    name: name,
    email: email,
    height: height,
    weight: weight,
    age: age,
    badges: ['Badge 1', 'Badge 2', 'Badge 3'],
    profilePicture:require('images/dp.jpg')
  };
  const {navigate} = useNavigation();
  return (
    <ImageBackground
      source={require('images/Profile-0.png')}
      resizeMode="cover"
      style={styles.image}>
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Image source={userData.profilePicture} style={styles.profileImage} />

        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.usermail}>{`Email: ${userData.email}`}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={styles.box}>
            <Text style={styles.userInfo}>{userData.height}</Text>
            <Text style={styles.unit}>Height</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.userInfo}>{userData.weight}</Text>
            <Text style={styles.unit}>Weight</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.userInfo}>{userData.age}</Text>
            <Text style={styles.unit}>Age</Text>
          </View>
        </View>
        <View style={styles.account}>
          <Text
            style={{
              fontFamily: 'Sen-Bold',
              fontSize: 24,
              padding: 10,
            }}>
            Account
          </Text>
          <TouchableOpacity style={styles.accard}>
            <Ionicons name={'person-outline'} style={{...styles.icon,right:2}} />
            <Text style={styles.actxt}>Personal Data</Text>
            <View>
              <AntDesign style={{fontSize: 16, left: 215}} name={'right'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accard}>
            <Foundation style={{...styles.icon,left:2}} name={'clipboard-notes'} />
            <Text style={styles.actxt}> Achievments</Text>
            <AntDesign style={{fontSize: 16, left: 227}} name={'right'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accard}>
            <Feather style={styles.icon} name={'pie-chart'} />
            <Text style={styles.actxt}>Activity History</Text>
            <AntDesign style={{fontSize: 16, left: 205}} name={'right'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accard}>
            <AntDesign style={styles.icon} name={'barschart'} />
            <Text style={styles.actxt}>Workout Progress</Text>
            <AntDesign style={{fontSize: 16, left: 187}} name={'right'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={async () =>
            await auth()
              .signOut()
              .then(() => {
                googleFit.disconnect();
                navigate(Routes.SignUp as never);
              })
          }>
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    // alignItems: 'center',
    // justifyContent:'center',
    marginBottom: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#A48AED',
  },
  userInfo: {
    fontSize: 19,
    marginBottom: 5,
    color: '#A48AED',
  },
  usermail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#A48AED',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  dataBox: {
    backgroundColor: '#A48AED',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    margin: 5,
  },
  dataLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  dataValue: {
    fontSize: 16,
    color: 'white',
  },
  badgesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#A48AED',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: '#A48AED',
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 15,
    color: 'white',
  },
  button: {
    height: 40,
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#A48AED',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  box: {
    height: '100%',
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  unit: {},
  account: {
    width: '95%',
    height: '30%',
    backgroundColor: '#f6f6f6',
    margin: 10,
    borderRadius: 10,
    flex:0.5,
  },
  icon: {
    fontSize: 19,
    color: '#A48AED',
  },
  r8: {
    fontSize: 16,
  },
  accard: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft:10
  },
  actxt: {
    paddingLeft: 20,
    fontFamily:'Sen-Bold',
  },
});
