import{Text,View,StyleSheet,ScrollView,FlatList,Image,useWindowDimensions} from 'react-native';
import React from 'react'

export default function Onboardingitems({item}) {
const {width}=useWindowDimensions();
  return (
    <View style={[StyleSheet.container,{width}]}>
      <Image source={item.image} style={[styles.image,{width}]}/>
      <View style={{flex:0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        flex:0.7,
        // height:'40px',
        paddingBottom:0,
        resizeMode:'contain',
    },

    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'#493d8a',
        textAlign:'center',
    },
    description:{
        fontWeight:'300',
        color:'#62656b',
        textAlign:'center',
        paddingHorizontal:64,
    }
})
