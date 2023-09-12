import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'routes/Routes';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import googleFit, {Scopes} from 'react-native-google-fit';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation();

  useEffect(() => {
    setTimeout(() => fitAuth(), 1000);
  }, []);

  const fitAuth = async () => {
    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_BODY_READ,
        Scopes.FITNESS_BODY_WRITE,
        Scopes.FITNESS_BLOOD_PRESSURE_READ,
        Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
        Scopes.FITNESS_BLOOD_GLUCOSE_READ,
        Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_HEART_RATE_READ,
        Scopes.FITNESS_HEART_RATE_WRITE,
      ],
    };
    await googleFit.authorize(options);
    await googleFit.checkIsAuthorized().then(() => {
      console.log(googleFit.isAuthorized);
    });
  };

  const SignUp = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigate(Routes.Gender as never);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const googleAuth = async () => {
    GoogleSignin.configure({
      webClientId:
        '241461455272-k3m65jd9cefc1ckvr5olchke56cp198q.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth()
      .signInWithCredential(googleCredential)
      .then(async () => {
        console.log('Logged in', auth().currentUser);
        const options = {
          scopes: [
            Scopes.FITNESS_ACTIVITY_READ,
            Scopes.FITNESS_ACTIVITY_WRITE,
            Scopes.FITNESS_BODY_READ,
            Scopes.FITNESS_BODY_WRITE,
            Scopes.FITNESS_BLOOD_PRESSURE_READ,
            Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
            Scopes.FITNESS_BLOOD_GLUCOSE_READ,
            Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
            Scopes.FITNESS_ACTIVITY_READ,
            Scopes.FITNESS_ACTIVITY_WRITE,
            Scopes.FITNESS_HEART_RATE_READ,
            Scopes.FITNESS_HEART_RATE_WRITE,
          ],
        };
        await googleFit.authorize(options)
          .then(() => navigate(Routes.Gender as never));
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey there,</Text>
      <Text style={styles.headText}>Create an Account</Text>
      <View style={styles.textBoxContainer}>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          placeholderTextColor={'#ADA4A5'}
          value={name}
          onChangeText={name => setName(name)}
        />
        <AntDesign name={'user'} size={20} style={styles.icon} />
      </View>
      <View style={styles.textBoxContainer}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          placeholderTextColor={'#ADA4A5'}
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <Ionicons name={'mail-outline'} size={20} style={styles.icon} />
      </View>
      <View style={styles.textBoxContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          placeholderTextColor={'#ADA4A5'}
          value={password}
          onChangeText={pass => setPassword(pass)}
        />
        <Ionicons name={'lock-closed-outline'} size={20} style={styles.icon} />
      </View>
      <TouchableOpacity style={styles.button} onPress={SignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.borderOr}>
        <View style={styles.border}></View>
        <Text style={styles.borderOrText}>Or</Text>
        <View style={styles.border}></View>
      </View>
      <View style={styles.socialView}>
        <TouchableOpacity onPress={googleAuth}>
          <Image
            source={require('images/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('images/facebook.png')}
          style={styles.socialIcon}
        />
      </View>
      <View style={styles.foot}>
        <Text style={styles.footText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(Routes.SignIn as never)}>
          <Text style={styles.footButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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
    fontFamily: 'Bebas',
  },
  headText: {
    color: 'black',
    fontFamily: 'IntegralCF',
    marginTop: '10%',
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: '13%',
  },
  textBoxContainer: {
    height: 55,
    flexDirection: 'row',
    marginBottom: '4%',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    color: '#7B6F72',
    position: 'absolute',
    left: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#F7F8F8',
    borderRadius: 10,
    paddingLeft: 40,
    color: 'black',
  },
  button: {
    height: 60,
    width: '90%',
    marginTop: '40%',
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Sen-ExtraBold',
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '3%',
  },
  footText: {
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: 12,
  },
  footButtonText: {
    left: 5,
    fontFamily: 'Poppins',
    color: '#C58BF2',
    fontSize: 12,
  },
  borderOr: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '5%',
  },
  borderOrText: {
    color: 'black',
    fontFamily: 'Poppins',
    alignSelf: 'center',
    padding: 10,
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  socialIcon: {
    gap: 10,
  },
  border: {
    width: '40%',
    height: 2,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
  },
});
