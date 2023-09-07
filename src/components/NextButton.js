import { StyleSheet, Animated, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useRef} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Svg,{G,Circle} from 'react-native-svg'
const NextButton = ({percentage}) => {
    const size=128;
    const strokeWidth=2;
    const center=size/2;
    const radius=size/2 - strokeWidth/2;
    const circumference=2*Math.PI*radius;
    const progressAnimation=useRef(new Animated.Value(0)).current;
    const progressREf=useRef(null)
    const animation=(toValue)=>{
        return Animated.timing(progressAnimation,{
            toValue,
            duration:250,
            useNativeDriver:true
        }).start();
    };
    useEffect(()=>{
        console.log('Percentage:', percentage);
        animation(percentage);
    },[percentage]);
    useEffect(()=>{
        progressAnimation.addListener((value)=>{
            const strokeDashoffset=circumference- (circumference*value.value)/100;
            if(progressREf?.current){
                progressREf.current.setNativeProps({
                    strokeDashoffset
                });
            }
        });
    },[percentage]);
  return (
    <View style={styles.container}>
        <Svg width={size} height={size}>
            <G rotation='-90' origin={center}>

            <Circle fill="transparent"  stroke='#E6E7E8' cx={center} cy={center} r={radius} strokeWidth={strokeWidth}/>
            <Circle ref={progressREf} fill="transparent" stroke='#F4338F'  cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference}  />
            </G>
        </Svg>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>

        <AntDesign name={'arrowright'} size={32} color='#fff'/>
        </TouchableOpacity>
    </View>
  )
}

export default NextButton

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
    },
    button:{
        position:'absolute',
        backgroundColor:'#f4338f',
        borderRadius:100,
        padding:20,
    }
})