import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import Svg,{G,Circle} from 'react-native-svg'

const Progressbar = ({pro}) => {
    
  return (
    <View style={{alignItems:'center',marginTop:50}}>
        
      <Progress.Bar  progress={pro} width={15} height={200} style={{backgroundColor:'#E9EDF7',borderColor:"#E9EDF7",borderRadius:20}}/>
    </View>
  )
}

export default Progressbar

const styles = StyleSheet.create({
    
})