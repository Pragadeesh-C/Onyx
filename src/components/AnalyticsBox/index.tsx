import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WaveBox from 'components/WaveBox';

const AnalyticsBox = ({title, icon, amount, metrics}) => {
  const [waterLevel, setWaterLevel] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaterLevel(Math.random() * 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headText}>{title}</Text>
        {icon}
      </View>
      <View style={{flexDirection: 'row', paddingTop: 15}}>
        <Text style={styles.analyticsAmount}>{amount}</Text>
        <Text style={styles.analyticsMetrics}>{metrics}</Text>
      </View>
      <WaveBox waterLevel={waterLevel} />
    </View>
  );
};

export default AnalyticsBox;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: '45%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 13,
    marginTop: '2%',
    padding: 10,
  },
  headText: {
    color: 'black',
    fontFamily: 'Sen-Bold',
    fontSize: 17,
  },
  analyticsAmount: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Sen-Bold',
  },
  analyticsMetrics: {
    color: 'gray',
    fontFamily: 'Sen',
    alignSelf: 'flex-end',
    bottom: '3%',
  },
});
