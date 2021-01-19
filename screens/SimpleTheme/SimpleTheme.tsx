import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import getStyleSheet from './styles';

export default function SimpleTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  const styles = getStyleSheet(darkTheme);
  const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button
          title={backgroundColor as string}
          onPress={() => setDarkTheme(!darkTheme)}
        />
      </View>
    </View>
  );
}
