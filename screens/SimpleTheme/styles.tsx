import { StyleSheet, ViewStyle } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseContainerStyles: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBoxStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  width: 150,
  height: 150,
};

type Style = {
  container: ViewStyle;
  box: ViewStyle;
};

const lightStyleSheet = StyleSheet.create<Style>({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark,
  },
});

const darkStyleSheet = StyleSheet.create<Style>({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light,
  },
});

const getStyleSheet = (useDarkTheme: boolean): Style =>
  useDarkTheme ? darkStyleSheet : lightStyleSheet;

export default getStyleSheet;
