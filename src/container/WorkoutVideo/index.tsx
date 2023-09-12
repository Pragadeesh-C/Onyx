import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoPlayer from 'react-native-video-player'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'


const WorkoutVideo = ({route}:any) => {
    console.log(route.params)
    const {url,name,desc,category} = route.params
    console.log(url)
  return (
    <View style={styles.container}>
      <VideoPlayer style={{}}  video={url} videoWidth={1600}
    videoHeight={900} resizeMode='contain' controls={false} pauseOnPress={true}/>
      <View style={{flexDirection:'row',position:'absolute',marginTop:5,}}>
        <Ionicons name={'arrow-back'} style={{fontSize:26,marginLeft:10,}}/>
        <AntDesign name={'hearto'} style={{fontSize:26,marginLeft:340,}}/>
      </View>
    <View style={styles.card}>
      <Text style={{fontFamily:'popins',fontSize:34,textAlign:'left',marginLeft:15,color:'black',marginTop:15,}}>{name}</Text>
      <View style={styles.time}>
      <Text style={{color:'black'}} >3 Min 25Sec</Text>
      <Text style={{color:'black'}}>.</Text>
      <Text style={{color:'black'}}>{category}</Text>
      </View>
      <View style={styles.desc}>
        <Text style={{color:'black',}}>
        {desc}
        </Text>
      </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',bottom:300,}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <AntDesign name={'heart'} style={{fontSize:32,color:'red',}}/>
      <Text style={{fontSize:35,fontFamily:'IntegralCF',color:'black',}}> 6.5 M</Text>
      <Text style={{fontSize:45,color:'black',paddingHorizontal:20}}>|</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Entypo name={'eye'} style={{fontSize:32,color:'red'}}/>
      <Text style={{fontSize:35,fontFamily:'IntegralCF',color:'black'}}> 6.5 M</Text>
      </View>
    </View>
    </View>
  )
}

export default WorkoutVideo

const styles = StyleSheet.create({
  container:{
    flex:1,
    position:'relative',
    // flexDirection:'row',
  },
  desc:{
    flex:1,
    paddingHorizontal:19,
    marginBottom:390,

  },
  card:{
    flex:1,
    width:'100%',
    // top:300,
    bottom:0,
    height:'70%',
    // position:'absolute',
    // borderTopLeftRadius:20,
    // borderTopRightRadius:20,
    backgroundColor:"#f6f6f6",

  },
  time:{
    flex:1,
    flexDirection:'row',
    fontFamily:'popins',
    fontSize:34,
    textAlign:'left',
    marginLeft:17,
    color:'white',
    marginTop:10,
    gap:7,
  },
})