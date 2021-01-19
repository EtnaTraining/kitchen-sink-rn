import * as React from 'react';
import { View, Text, Button } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// type Props = {
//   navigation: HomeScreenNavigationProp;
// };

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 20,
      }}
    >
      <Button
        title="Go to Simple Theme example"
        onPress={() => navigation.navigate('SimpleTheme')}
      />

      <Button
        title="Go to Border Shapes example"
        onPress={() => navigation.navigate('Borders')}
      />
      <Button
        title="Go to Position property example"
        onPress={() => navigation.navigate('Position')}
      />
      <Button
        title="Go to My Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Transforms"
        onPress={() => navigation.navigate('Transforms')}
      />
      <Button
        title="Go to Flexbox"
        onPress={() => navigation.navigate('Flexbox')}
      />
    </View>
  );
}

export default HomeScreen;
