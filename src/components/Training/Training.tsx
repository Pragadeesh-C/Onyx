import {StyleSheet, View, Text, Image} from 'react-native';
import {IconlyLightOutlineGraph} from '../../components/IconlyLightOutlineGraph';
import {IconlyLightOutlineProfile} from '../../components/IconlyLightOutlineProfile';
import image170 from '../../assets/images/image170.png';
import Group431 from '../../assets/vectors/Group431.svg';
import Group432 from '../../assets/vectors/Group432.svg';
import Vector74 from '../../assets/vectors/Vector74.svg';
import NounKettlebell15292841 from '../../assets/vectors/NounKettlebell15292841.svg';
import NounGymnastRings4905501 from '../../assets/vectors/NounGymnastRings4905501.svg';
import NounRunningShoe12003751 from '../../assets/vectors/NounRunningShoe12003751.svg';
import NounDumbbell11993431 from '../../assets/vectors/NounDumbbell11993431.svg';
import NounFood7506551 from '../../assets/vectors/NounFood7506551.svg';
import StatusBar from '../../assets/vectors/StatusBar.svg';
import theme from '../../theme';

export function Training() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle686}/>
      <View style={styles.heading}>
        <Text style={styles.chooseYourLevel}>
          Choose Your Level
        </Text>
        <Text style={styles.tooMuchProteinNoWheyMate}>
          TOO MUCH PROTEIN? NO WHEY, MATE!
        </Text>
        <Image source={{uri: image170}} style={{width: 24, height: 24}} contentFit="cover"/>
      </View>
      <View style={styles.trainingModule}>
        <Group431/>
        <Group432/>
        <Vector74/>
        <View style={styles.frame438}>
          <Text style={styles.intermediate}>
            Intermediate
          </Text>
          <Text style={styles.challengingMixOfCardioAndStrengthIdealForThosePastBeginnerLevelFitnessSeekingHealthImprovement}>
            Challenging mix of cardio and strength, ideal for those past beginner-level fitness seeking health improvement.
          </Text>
        </View>
        <NounKettlebell15292841/>
        <NounGymnastRings4905501/>
        <NounRunningShoe12003751/>
      </View>
      <View style={styles.group453}>
        <View style={styles.rectangle699}/>
        <Text style={styles.upperBody}>
          UpperBody
        </Text>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.rectangle687}/>
        <View style={styles.frame437}>
          <View style={styles.frame433}>
            <IconlyLightOutlineGraph/>
          </View>
          <View style={styles.frame434}>
            <NounDumbbell11993431/>
            <Text style={styles.training}>
              Training
            </Text>
          </View>
          <View style={styles.frame435}>
            <NounFood7506551/>
          </View>
          <View style={styles.frame436}>
            <IconlyLightOutlineProfile/>
          </View>
        </View>
      </View>
      <Text style={styles.week3Day1}>
        Week 3 , day1
      </Text>
      <View style={styles.rectangle}/>
      <Text style={styles.readinessCheck}>
        Readiness Check
      </Text>
      <View style={styles.status}>
        <StatusBar/>
        <Text style={styles.time}>
          9:41
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 375,
    height: 812,
    flexShrink: 0,
    backgroundColor: '#FFF',
    borderRadius: 40,
  },
  rectangle686: {
    width: 375,
    height: 812,
    flexShrink: 0,
    backgroundColor: '#F6F6F6',
  },
  chooseYourLevel: {
    width: 248,
    height: 34,
    flexShrink: 0,
    color: '#252727',
    fontFamily: 'Droid Sans',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  tooMuchProteinNoWheyMate: {
    color: '#7B7B7B',
    fontFamily: 'Droid Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  image170: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  heading: {
    width: 260,
    height: 58,
    flexShrink: 0,
  },
  group431: {
    width: 163,
    height: 179,
    flexShrink: 0,
  },
  group432: {
    width: 113,
    height: 113,
    flexShrink: 0,
  },
  intermediate: {
    color: '#252727',
    textAlign: 'center',
    fontFamily: 'Droid Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  challengingMixOfCardioAndStrengthIdealForThosePastBeginnerLevelFitnessSeekingHealthImprovement: {
    width: 342,
    color: '#7B7B7B',
    textAlign: 'center',
    fontFamily: 'Droid Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150% /* 21px */',
  },
  trainingModule: {
    width: 553,
    height: 535,
    flexShrink: 0,
  },
  frame438: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  },
  nounKettlebell15292841: {
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  nounGymnastRings4905501: {
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  nounRunningShoe12003751: {
    width: 51,
    height: 51,
    flexShrink: 0,
  },
  rectangle699: {
    width: 152,
    height: 48,
    flexShrink: 0,
    backgroundColor: 'rgba(6, 0, 0, 0.89)',
    borderRadius: 12,
  },
  upperBody: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Droid Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  group453: {
    width: 152,
    height: 48,
    flexShrink: 0,
  },
  rectangle687: {
    width: 375,
    height: 85,
    flexShrink: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#F6F6F6',
    boxShadow: '0px -2px 60px 0px rgba(37, 39, 39, 0.06)',
  },
  bottomNav: {
    width: 375,
    height: 85,
    flexShrink: 0,
  },
  frame437: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 35,
    flexDirection: 'row',
  },
  frame433: {
    width: 51,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
  },
  nounDumbbell11993431: {
    width: 24,
    height: 24,
  },
  training: {
    color: '#7261E1',
    textAlign: 'center',
    fontFamily: 'Droid Sans',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  frame434: {
    width: 51,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
  },
  nounFood7506551: {
    width: 24,
    height: 24,
  },
  frame435: {
    width: 51,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
  },
  frame436: {
    width: 51,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
  },
  week3Day1: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Droid Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  rectangle: {
    width: 263,
    height: 50,
    flexShrink: 0,
    backgroundColor: theme.colors.Primary,
    borderRadius: 24,
  },
  readinessCheck: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
  statusBar: {
    width: 66.661,
    height: 11.667,
  },
  time: {
    width: 54,
    color: '#252727',
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    letterSpacing: -0.3,
  },
  status: {
    display: 'inline-flex',
    paddingTop: 12,
    paddingRight: 14.339,
    paddingBottom: 11,
    paddingLeft: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 226,
    flexDirection: 'row',
  },
});
