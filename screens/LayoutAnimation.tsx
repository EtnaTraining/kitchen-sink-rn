import React, { useEffect, useState } from 'react';
import {
  View,
  Platform,
  UIManager,
  LayoutAnimation,
  StyleSheet,
  Button,
} from 'react-native';
import Animated from 'react-native-reanimated';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const [boxPosition, setBoxPosition] = useState('left');
  const [color, setColor] = useState('blue');
  // useEffect(() => toggleBox(), []);
  const toggleBox = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        500,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleXY
      ),
      () => {
        console.log('animazione terminata');
        setColor('coral');
      }
    );
    setBoxPosition(boxPosition === 'left' ? 'right' : 'left');
    setColor('blue');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Toggle Layout" onPress={toggleBox} />
      </View>
      <View
        style={[
          styles.box,
          boxPosition === 'left' ? null : styles.moveRight,
          { backgroundColor: color },
        ]}
      />
    </View>
  );
};

// const Ex = () => {
//   const marginTop = new Animated.Value(20);
//   Animated.timing(marginTop, {toValue: 200, duration: 500, useNativeDriver: false}).start()
//   return (
//     <Animated.View style={{marginTop: marginTop}} />
//   )

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
    backgroundColor: 'blue',
  },
  moveRight: {
    alignSelf: 'flex-end',
    height: 200,
    width: 200,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
});

export default App;
