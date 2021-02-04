import * as React from 'react';
import { View, Text, Animated, Button, StyleSheet, Easing } from 'react-native';

function SpinningAnnimation() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    animateRotation();
    setTimeout(() => setLoading(false), 4000);
  }, []);

  const animatedRotation = React.useRef(new Animated.Value(0)).current;

  const animateRotation = () => {
    Animated.loop(
      Animated.timing(animatedRotation, {
        toValue: 1,
        duration: 1800,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const rotation = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <Animated.Image
          source={require('../assets/favicon.png')}
          style={{ width: 80, height: 80, transform: [{ rotate: rotation }] }}
        />
      ) : (
        <Text>Welcome</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpinningAnnimation;
