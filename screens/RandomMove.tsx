import * as React from 'react';
import {View, StyleSheet, Button } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

export default function RandomMoveScreen() {
    const offset = useSharedValue(0);
    const changeStyle = () => {
        // offset.value = withSpring(Math.random(), {damping: 5.5, mass: 2, stiffness:239, velocity: 3});
        offset.value = Math.random()
        console.log("I am in change style", offset.value);
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: withSpring(offset.value * 255, {velocity: 2}) }]
            // transform: [{translateY: offset.value * 255 }]
        }
    });

    const customAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: withSpring(offset.value * 255, {
                damping: 20,
                stiffness: 90,
                velocity: 2
            })}]
        }
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, {backgroundColor: 'red'}, animatedStyle]}/>
            <Animated.View style={[styles.box, customAnimatedStyle]}/>
            <Button title="Move" onPress={changeStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
    },
    box: {
        borderRadius: 10,
        margin: 10,
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        marginLeft: 30
    }
});