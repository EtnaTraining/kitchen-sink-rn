import React, { useRef } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  PanResponder,
  Text,
  PanResponderGestureState,
  GestureResponderEvent,
  NativeSyntheticEvent,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const initialPosition = { x: width / 2 - 100, y: height / 2 - 100 };

const PanResponderSimpleScreen = () => {
  const [oPosition, setOPosition] = React.useState(initialPosition);
  const [position, setPosition] = React.useState(initialPosition);

  const handlePanResponderMove = (
    evt: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    let ydiff = gestureState.y0 - gestureState.moveY;
    let xdiff = gestureState.x0 - gestureState.moveX;
    // try with dx and dy
    setPosition({ x: oPosition.x - xdiff, y: oPosition.y - ydiff });
    // setPosition({ x: gestureState.dx, y: gestureState.dy });
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: () => setOPosition(position),
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        x: {position.x} y: {position.y}
      </Text>
      <View
        {...panResponder.panHandlers}
        style={[styles.box, { marginLeft: position.x, marginTop: position.y }]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    marginTop: 50,
    width,
  },
  box: {
    position: 'absolute',
    height: 200,
    width: 200,
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

export default PanResponderSimpleScreen;
