import * as React from 'react';
import {
  View,
  Modal,
  Button,
  Alert,
  TouchableHighlight,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  StatusBar,
} from 'react-native';

const Touches = () => {
  const _onPressButton = () => null;

  function _onLongPressButton() {
    alert('You long-pressed the button!');
  }

  const [timesPressed, setTimesPressed] = React.useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle={'light-content'}
        // backgroundColor={'red'}
        translucent={true}
      />
      <Button
        onPress={() => alert('You pressed the button')}
        title={'Press me'}
        color={'coral'}
      />

      <TouchableHighlight
        underlayColor="red"
        activeOpacity={0.5}
        onPress={() => null}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={_onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      {Platform.OS === 'android' && (
        <TouchableNativeFeedback
          onPress={_onPressButton}
          background={TouchableNativeFeedback.SelectableBackground(10)}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      )}

      <TouchableWithoutFeedback onPress={_onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={_onPressButton}
        onLongPress={_onLongPressButton}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
        hitSlop={20}
        pressRetentionOffset={30}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text>{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 16,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default Touches;
