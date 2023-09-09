import{Text,View,StyleSheet,ScrollView,FlatList,Image,useWindowDimensions} from 'react-native';
import React from 'react'

export default function Pickeritems({item}) {
const {width}=useWindowDimensions();
  return (
    <View style={[StyleSheet.container,{width}]}>
      <Image source={item.image} style={[styles.image,{width}]}/>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        // alignItems:'flex-end',
        // justifyContent:'center',
    },
    image:{
        
        // height:'40px',
        // paddingBottom:0,
        resizeMode:'stretch',
    },

    title:{
        fontWeight:'800',
        fontSize:26,
        marginBottom:10,
        color:'#1D1617',
        textAlign:'left',
        fontFamily:'popins',
        paddingHorizontal:34,
        paddingTop:40,
    },
    description:{
        fontWeight:'300',
        color:'#7B6F72',
        textAlign:'left',
        fontSize:15,
        paddingHorizontal:34,
        fontFamily:'popins',

    },
    content:{


    },
})
