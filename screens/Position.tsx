import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import Box from '../components/Box';
import CenteredText from '../components/CenteredText';

const Position = () => (
  <View style={styles.container}>
    <Box>
      <CenteredText>A</CenteredText>
    </Box>
    <Box>
      <CenteredText>B</CenteredText>
      <View
        style={[
          styles.tinyExample,
          { position: 'absolute', right: 0, bottom: 0 },
        ]}
      >
        <CenteredText style={{ fontSize: 18, marginTop: 3 }}>E</CenteredText>
      </View>
    </Box>
    <Box>
      <CenteredText>C</CenteredText>
    </Box>
    <Box style={{ position: 'absolute', right: 0, bottom: 0 }}>
      <CenteredText>D</CenteredText>
    </Box>
  </View>
);

export default Position;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 360,
    margin: 40,
    marginTop: 100,
    borderWidth: 1,
    flexDirection: 'row',
  },
  tinyExample: {
    width: 30,
    height: 30,
    borderWidth: 1,
    backgroundColor: 'lightgray',
  },
});
