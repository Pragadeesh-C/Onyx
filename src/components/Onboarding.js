import React,{useState,useRef} from 'react'
import{Text,View,StyleSheet,ScrollView,FlatList,Image,useWindowDimensions,Animated} from 'react-native';
import slides from './slides'
import Onboardingitems from './Onboardingitems';
import Paginator from './Paginator';
import NextButton from './NextButton';

const Onboarding = () => {
  const [currentIndex,setcurrentIndex]=useState(0)
  const scrollx=useRef(new Animated.Value(0)).current;
  const viewableItemsChanged=useRef(({viewableItems})=>{
    setcurrentIndex(viewableItems[0].index);
  }
  ).current;
  const slidesRef=useRef(null);
  const scrollTo=()=>{
    if (currentIndex<slides.length-1){
      slidesRef.current.scrollToIndex({index:currentIndex+1});

    }
    else{
      console.log('last item')
    }
  };
  // const viewconfig=useRef({viewAreaCoveragePercentThreshold:50}).current;
  return (
    <View style={styles.container}>
      <View style={{flex:3}}>

        <FlatList data={slides} renderItem={({item})=><Onboardingitems item={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item)=>item.id}
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollx}}}],
          {useNativeDriver:false,})}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          // viewabilityConfig={viewconfig}
          ref={slidesRef}
          />
      </View>
      {/* <Paginator data={slides} scrollx={scrollx}/> */}
      <NextButton scrollTo={scrollTo} percentage={(currentIndex+1)*(100/slides.length)} />
    </View>
  )
}

const styles=StyleSheet.create({
  
  container:{
        flex:1,
    },

})

export default Onboarding