import * as React from 'react';
import {View, StyleSheet, Button } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withRepeat, withSequence } from 'react-native-reanimated';

export default function AnimationModifiersScreen() {
    const rotation = useSharedValue(0);
    const changeStyle = () => {
        // rotation.value = withTiming(10);
        // rotation.value = withRepeat(withTiming(45), 6, true);
        rotation.value = withSequence(
            withTiming(-10, {duration: 500}),
            withRepeat(withTiming(45, {duration: 300}), 6, true),
            withTiming(0, {duration: 500})
        )

    }

    const style = useAnimatedStyle(() => {
        return {
           transform: [{rotateZ: `${rotation.value}deg`}]
        }
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, style]}/>
            <Button title="Wobble" onPress={changeStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        marginLeft: 30
    }
});


