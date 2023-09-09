import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const WaveBox = ({ waterLevel }) => {
  const waveHeight = useSharedValue(0);
  waveHeight.value = withSpring(waterLevel, {
    damping: 2,
    stiffness: 80,
    overshootClamping: true,
    restSpeedThreshold: 0.1,
    restDisplacementThreshold: 0.1,
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: waveHeight.value }],
    };
  });

  return (
    <Svg style={styles.wave} width="100%" height="100%" viewBox="0 0 100 20">
      <Animated.View style={[styles.wave, animatedStyle]}>
        <Path
          d="M0 20 Q30 10 60 20 T100 20 V20 H0"
          fill="blue"
        />
      </Animated.View>
    </Svg>
  );
};

const styles = StyleSheet.create({
  wave: {
    position: 'absolute',
    bottom: 0,
  },
});

export default WaveBox;
