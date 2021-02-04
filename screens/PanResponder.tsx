import React, { useRef } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  PanResponderGestureState,
  GestureResponderEvent,
  NativeSyntheticEvent,
} from 'react-native';

// pan.x = gestureEvent.dx

const PanResponderScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  console.log(pan.x._value);
  console.log(pan.x.__getValue());
  // console.log(JSON.stringify(pan));

  const offset = React.useRef({ x: 0, y: 0 }).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      //   useNativeDriver: true,
      //   listener: (
      //     e: NativeSyntheticEvent<GestureResponderEvent>,
      //     gestureState?: PanResponderGestureState
      //   ) => console.log(gestureState?.dx, gestureState?.dy),
      // }),
      onPanResponderMove: (event, gesture) => {
        // pan.setValue({ x: gesture.dx, y: gesture.dy });
        pan.setValue({
          x: gesture.dx + offset.x,
          y: gesture.dy + offset.y,
        });
      },
      onPanResponderRelease: (event, gesture) => {
        offset.x += gesture.dx;
        offset.y += gesture.dy;
        // Animated.spring(pan, {
        //   toValue: { x: 0, y: 0 },
        //   useNativeDriver: true,
        // }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'coral',
    borderRadius: 5,
  },
});

export default PanResponderScreen;
