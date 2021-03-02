import * as React from 'react';
import { View, StyleSheet, Button, ViewStyle, StyleProp } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
  withDelay,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { useEffect } from 'react';

export default () => {
  const opacity = useSharedValue(0);
  const touchX = useSharedValue(0);
  const touchY = useSharedValue(0);

  const scrollY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
    {
      //     onStart: (event, context) => {
      //         pressed.value = true;
      //     },
      onActive: (event) => {
        touchX.value = event.translationX;
        touchY.value = event.translationY;
      },
      onEnd: (event, context) => {
        touchY.value = withSpring(0);
        touchY.value = withSpring(0);
      },
    }
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  useEffect(() => {
    // const interval = setInterval(() => {
    //     if (opacity.value < 1) {
    //         opacity.value = opacity.value + 0.1;
    //     }
    // }, 25);
    // return () => clearInterval(interval)
    // opacity.value = withDelay(2000, withTiming(1, { duration: 1000 }));
    // opacity.value = withRepeat(withSpring(1), -1, true);
    opacity.value = withSequence(withSpring(1), withSpring(0.5), withSpring(1));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // backgroundColor: pressed.value ? 'blue' : 'coral',
      // transform: [{ scale: withSpring(pressed.value ? 1.5 : 1) }]
      opacity: opacity.value,
      transform: [
        {
          scale: interpolate(opacity.value, [0, 1], [0.5, 1]),
        },
        { translateX: touchX.value },
        { translateY: touchY.value },
      ],
    };
  });

  const scrollViewAnimatedStyle = useAnimatedStyle(() => {
    // const bgColor =
    // console.log(bgColor, typeof (bgColor));
    // console.log('rgb(10, 10, 10)');
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [-50, 0, 50],
        ['rgb(10,10,10)', 'rgb(255,255,255)', 'rgb(10,10,10)'],
        'RGB'
      ) as string,
    };
  });

  return (
    <Animated.ScrollView
      style={[styles.scrollView, scrollViewAnimatedStyle]}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      contentContainerStyle={{
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.ball, animatedStyle]} />
      </PanGestureHandler>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    // paddingTop: 20,
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  ball: {
    // margin: 40,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'orange',
  },
});
