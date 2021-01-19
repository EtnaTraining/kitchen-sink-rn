import * as React from 'react';
import { View, Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

type Props = {
  style?: StyleProp<TextStyle>;
  children: string;
};

const CenteredText = ({ style, children }: Props) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 10,
    // backgroundColor: 'red',
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default CenteredText;
