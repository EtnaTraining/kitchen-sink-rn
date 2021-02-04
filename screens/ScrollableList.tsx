import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  ScrollView,
  Button,
} from 'react-native';
import Box from '../components/Box';
import CenteredText from '../components/CenteredText';
import { ProfileCard } from '../screens/Profile';

const SmallProfileCard = ({ style }: { style?: StyleProp<ViewStyle> }) => (
  <ProfileCard
    style={[style, { margin: 10 }]}
    // size={{ width: 200, height: 300 }}
  />
);

const ProfileSet = () => {
  const svRef = React.useRef<ScrollView>(null);
  return (
    <View style={styles.container}>
      <ScrollView
        ref={svRef}
        horizontal={true}
        contentContainerStyle={styles.contentContainer}
        pagingEnabled={true}
        // indicatorStyle={'white'}
      >
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </ScrollView>
      <Button
        title="vai alla fine"
        onPress={() => svRef.current?.scrollToEnd()}
      />
      <Button
        title="vai all'inizio"
        onPress={() => svRef.current?.scrollTo({ y: 0, animated: true })}
      />
    </View>
  );
};

export default ProfileSet;
// export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    // backgroundColor: 'blue',
    // flexDirection: 'row',
  },
  contentContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    // backgroundColor: 'blue',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
