// In App.js in a new project

import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SimpleTheme from './screens/SimpleTheme/SimpleTheme';
import HomeScreen from './screens/Home';
import SimpleThemeScreen from './screens/SimpleTheme/SimpleTheme';
import BorderShapesScreen from './screens/BorderShapes';
import ProfileScreen from './screens/Profile';
import PositionScreen from './screens/Position';
import TransformsScreen from './screens/Transforms';
import FlexboxScreen from './screens/Flexbox';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  console.log(Dimensions.get('window'));
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name="SimpleTheme"
          component={SimpleThemeScreen}
          options={{ title: 'Simple Theme Example' }}
        />
        <Stack.Screen
          name="Borders"
          component={BorderShapesScreen}
          options={{ title: 'Border Shapes Example' }}
        />
        <Stack.Screen
          name="Position"
          component={PositionScreen}
          options={{ title: 'Position property example' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'My Profile' }}
        />
        <Stack.Screen
          name="Transforms"
          component={TransformsScreen}
          options={{ title: 'My Profile' }}
        />
        <Stack.Screen
          name="Flexbox"
          component={FlexboxScreen}
          options={{ title: 'Flexbox' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
