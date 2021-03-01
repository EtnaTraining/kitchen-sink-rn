import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Animated, { useAnimatedStyle, useAnimatedGestureHandler, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler';


export default function GrowingBallScreen() {
    const pressed = useSharedValue(false);


    const onTap = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
        onStart: (event, context) => {
            pressed.value = true;
        },
        onActive: (event, context) => {

        },
        onEnd: (event, context) => {
            pressed.value = false;
        }
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: pressed.value ? 'blue' : 'coral',
            transform: [{ scale: withSpring(pressed.value ? 1.5 : 1) }]
        }
    });

    return (
        <View style={styles.container}>
            <TapGestureHandler onGestureEvent={onTap}>
                <Animated.View style={[styles.ball, animatedStyle]} />
            </TapGestureHandler>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        // justifyContent: 'center',
        paddingTop: 20,
        alignItems: 'center'
    },
    ball: {
        margin: 40,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'coral'
    }
})