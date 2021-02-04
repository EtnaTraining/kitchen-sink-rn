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

const SimplePanResponder = () => {
  const [position, setPosition] = React.useState(initialPosition);
  const [oPosition, setOPosition] = React.useState(initialPosition);
  const offset = React.useRef({ x: 0, y: 0 }).current;
  // const [offset, setOffset] = React.useState(initialPosition);

  const handlePanResponderMove = (
    evt: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    console.log('Moving....', gestureState);
    setPosition({
      x: position.x + gestureState.dx,
      y: position.y + gestureState.dy,
    });
  };

  const handlePanResponderRelease = (
    evt: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    console.log('touch release', gestureState);
    setPosition(initialPosition);
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        console.log('touch start:');
        console.log(gestureState);
      },
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderRelease,
      // (evt, gestureState) => {
      //   // console.log('ending position:', position);
      //   // console.log('ending gesture:', gestureState);
      //   // offset.x += gestureState.dx;
      //   // offset.y += gestureState.dy;

      // },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        x: {position.x} y: {position.y}
      </Text>
      <View
        {...panResponder.panHandlers}
        style={[styles.box, { left: position.x, top: position.y }]}
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
    backgroundColor: 'coral',
    borderRadius: 5,
  },
});

export default SimplePanResponder;
