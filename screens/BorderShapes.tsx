import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Box from '../components/Box';
import CenteredText from '../components/CenteredText';

const BorderShapes = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Box style={{ borderRadius: 20 }}>
        <CenteredText>{'Example 1:\n4 Rounded Corners'}</CenteredText>
      </Box>
      <Box style={{ borderTopRightRadius: 60, borderBottomRightRadius: 60 }}>
        <CenteredText>{'Example 2:\nD shape'}</CenteredText>
      </Box>
    </View>
    <View style={styles.row}>
      <Box style={{ borderTopLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <CenteredText>{'Example 3:\nLeaf shape'}</CenteredText>
      </Box>
      <Box style={{ borderRadius: 60 }}>
        <CenteredText>{'Example 4:\nCircle'}</CenteredText>
      </Box>
    </View>
  </View>
);

export default BorderShapes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // borderWidth: 2,
    alignItems: 'center',
    marginTop: 75,
    // backgroundColor: 'red',
  },
  row: {
    margin: 10,
    width: '100%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  box: {
    marginLeft: 20,
    marginBottom: 20,
  },
});
