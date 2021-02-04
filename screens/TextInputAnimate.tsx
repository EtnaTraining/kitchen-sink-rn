import * as React from 'react';
import {
  View,
  Text,
  Animated,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Easing } from 'react-native-reanimated';

function TextInputAnimate() {
  const animatedWidth = React.useRef(new Animated.Value(200)).current;
  const inputRef = React.useRef<TextInput>(null);

  const animateWidth = (value: number) => {
    Animated.timing(animatedWidth, {
      toValue: value,
      duration: 750,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ width: animatedWidth }}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onBlur={() => animateWidth(200)}
          onFocus={() => animateWidth(323)}
        />
        <Button title="Submit" onPress={() => inputRef.current?.blur()} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#268348',
    marginTop: 10,
    color: 'white',
    fontSize: 24,
    paddingHorizontal: 10,
  },
});

export default TextInputAnimate;
