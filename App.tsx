// In App.js in a new project

import * as React from 'react';
import { View, Text, Dimensions, PixelRatio } from 'react-native';
import {
  NavigationContainer,
  RouteConfig,
  RouteProp,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import { screenList } from './screenList';
import { RootStackParamList } from './types';
import { useWindowDimensions } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  const d = Dimensions.get('window');
  const w = useWindowDimensions();
  console.log(PixelRatio.get());

  console.log(d);
  console.log(w);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen key={0} name="Home" component={HomeScreen} />
        {screenList.map((screen, index) => (
          <Stack.Screen
            key={index + 1}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
