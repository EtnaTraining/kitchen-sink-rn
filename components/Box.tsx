import * as React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[];
  size?: number;
};

const defaultSize = 120;

const Box = ({ style, children, size = defaultSize }: Props) => (
  // const Box = (props: Props) => (
  <View
    style={[
      styles.container,
      style,
      {
        width: size,
        height: size,
      },
    ]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: defaultSize,
    height: defaultSize,
    // marginLeft: 20,
    // marginBottom: 20,
    backgroundColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
  },
});

export default Box;
