import * as React from 'react';
import { View, Text, Animated, Button, StyleSheet } from 'react-native';

function BoxAnimate() {
  const marginTop = React.useRef(new Animated.Value(20)).current;

  const animateMargin = () => {
    Animated.timing(marginTop, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="animate box" onPress={animateMargin} />
      {/* <Animated.View style={[styles.box, { marginTop: marginTop }]} /> */}
      <Animated.View
        style={[styles.box, { transform: [{ translateY: marginTop }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});

export default BoxAnimate;
