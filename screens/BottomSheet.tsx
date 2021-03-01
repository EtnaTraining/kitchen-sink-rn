import * as React from 'react';
import { View, StyleSheet, Button, Text, useWindowDimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500
};

export default () => {

    const dimensions = useWindowDimensions();
    const top = useSharedValue(dimensions.height);

    const style = useAnimatedStyle(() => {
        return {
            top: withSpring(top.value, SPRING_CONFIG)
        }
    })

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context: { startTop: number }) => {
            context.startTop = top.value
        },
        onActive: (event, context) => {
            top.value = context.startTop + event.translationY;
        },
        onEnd: (event, context) => {
            if (top.value > dimensions.height / 2 + 200) {
                top.value = dimensions.height, SPRING_CONFIG;
            } else {
                top.value = dimensions.height / 2, SPRING_CONFIG;
            }
        }

    });
    return (
        <>
            <View style={styles.container}>
                <Button title="Open sheet" onPress={() => {
                    top.value = withSpring(dimensions.height / 2, SPRING_CONFIG);
                }} />
            </View>

            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.sheet, style]}

                >
                    <Text>Sheet</Text>
                </Animated.View>
            </PanGestureHandler>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})