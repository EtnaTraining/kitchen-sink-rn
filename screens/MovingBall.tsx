import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Animated, { useAnimatedStyle, useAnimatedGestureHandler, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { PanGestureHandler, TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler';


export default function MovingBallScreen() {
    const pressed = useSharedValue(false);
    const x = useSharedValue(0);
    const y = useSharedValue(0);


    const onTap = useAnimatedGestureHandler({
        onStart: (event, context: { startX: number, startY: number }) => {

            pressed.value = true;
            context.startX = x.value;
            context.startY = y.value;
        },
        onActive: (event, context) => {
            // x.value = event.translationX;
            // y.value = event.translationY;
            x.value = event.translationX + context.startX;
            y.value = event.translationY + context.startY;
        },
        onEnd: (event, context) => {
            pressed.value = false;
            // x.value = withSpring(0);
            // y.value = withSpring(0);
        }
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: pressed.value ? 'blue' : 'coral',
            transform: [
                { scale: withSpring(pressed.value ? 1.5 : 1) },
                { translateX: x.value },
                { translateY: y.value }
            ]
        }
    });

    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={onTap}>
                <Animated.View style={[styles.ball, animatedStyle]} />
            </PanGestureHandler>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        // paddingTop: 20,
        alignItems: 'center'
    },
    ball: {
        // margin: 40,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'coral'
    }
})