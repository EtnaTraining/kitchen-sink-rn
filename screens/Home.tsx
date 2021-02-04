import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Route } from '@react-navigation/native';
import { screenList as screens } from '../screenList';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  console.log(screens);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={screens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
              <View style={styles.rowContent}>
                <Text style={{ flex: 1 }}>{item.title}</Text>
                <Entypo
                  // style={{ borderWidth: 1 }}
                  name="chevron-right"
                  size={18}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      ></Button>
      <Button
        title="Go to Simple Theme Screen"
        onPress={() => navigation.navigate('SimpleTheme')}
      ></Button>
      <Button
        title="Go to Border Shapes Screen"
        onPress={() => navigation.navigate('BorderShapes')}
      ></Button>
      <Button
        title="Go to Position Screen"
        onPress={() => navigation.navigate('Position')}
      ></Button>
      <Button
        title="Go to My Profile Screen"
        onPress={() => navigation.navigate('MyProfile')}
      ></Button>
      <Button
        title="Go to Transforms example"
        onPress={() => navigation.navigate('Transforms')}
      ></Button>
      <Button
        title="Go to Flatlist example"
        onPress={() => navigation.navigate('List')}
      ></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    marginLeft: 10,
    // flexDirection: 'row',
    // borderWidth: 1,
    // flex: 1,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
