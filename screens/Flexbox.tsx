import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  ScrollView,
} from 'react-native';
import Box from '../components/Box';
import CenteredText from '../components/CenteredText';
import { ProfileCard } from '../screens/Profile';

type BoxProps = {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[];
  size?: number;
};

const Box100 = (props: BoxProps) => (
  <Box {...props} size={100} style={[props.style, { marginTop: 10 }]} />
);

const Flexbox = () => (
  <View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: 'red', width: '30%' }}></View>
    <Box100 style={{ flex: 0.5, alignSelf: 'flex-end' }}>
      <CenteredText>A</CenteredText>
    </Box100>
    <Box100 style={{ flex: 2 }}>
      <CenteredText>B</CenteredText>
    </Box100>
    <Box100 style={{ flex: 1, alignSelf: 'flex-end' }}>
      <CenteredText>C</CenteredText>
    </Box100>
    <Box100 style={{ alignSelf: 'flex-start', flex: 1 }}>
      <CenteredText>D</CenteredText>
    </Box100>
  </View>
);

const SmallProfileCard = ({ style }: { style?: StyleProp<ViewStyle> }) => (
  <ProfileCard
    style={[style, { margin: 10 }]}
    size={{ width: 200, height: 300 }}
  />
);

const ProfileSet = () => (
  <ScrollView>
    <SmallProfileCard />
    <SmallProfileCard style={{ alignSelf: 'center' }} />
    <SmallProfileCard style={{ alignSelf: 'flex-end' }} />
    <SmallProfileCard style={{ alignSelf: 'center' }} />
    <SmallProfileCard />
  </ScrollView>
);

// export default ProfileSet;
export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  tinyExample: {
    width: 30,
    height: 30,
    borderWidth: 1,
    backgroundColor: 'lightgray',
  },
});
