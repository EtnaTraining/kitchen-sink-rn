import * as React from 'react';
import {View, StyleSheet, Button } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function RandomWidthScreen() {
    const randomWidth = useSharedValue(100);
    const changeWidth = () => {
        randomWidth.value = Math.random() * 200;
    }

    const style = useAnimatedStyle(() => {
        return {
            width: withSpring(randomWidth.value, {damping: 1, mass: 1, stiffness: 100, velocity: 1})
        }
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, style]}/>
            <Button title="Random width" onPress={changeWidth} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
    },
    box: {
        // width: 100,
        height: 100,
        backgroundColor: 'orange',
        marginLeft: 30
    }
});