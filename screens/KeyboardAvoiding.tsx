import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { List } from '../screens/List';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

type Item = {
  id: number;
  nome: string;
};

function KeyboardAvoiding() {
  const [text, setText] = React.useState('');
  const [names, setNames] = React.useState<string[]>([]);
  const data = names.map((name: string, index) => {
    return { id: index, nome: name };
  });
  console.log('data', data);
  const [language, setLanguage] = React.useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      onLayout={({ nativeEvent }) => console.log(nativeEvent)}
      behavior="position"
    >
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Enter your name"
        autoFocus
        blurOnSubmit={false}
        onChangeText={(newValue) => setText(newValue)}
        onSubmitEditing={() => {
          setNames([...names, text]);
          setText('');
        }}
      />
      <Text style={styles.text}>{text}</Text>
      <Picker
        selectedValue={language}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) =>
          setLanguage(itemValue as string)
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Pascal" value="js" />
        <Picker.Item label="c++" value="js" />
        <Picker.Item label="Python" value="js" />
      </Picker>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        display={'inline'}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // marginTop: Platform.OS == 'android' ? 100 : 200,
    // width: 360,
    // height: 360,
    // borderWidth: 2,

    flex: 1,
    justifyContent: 'flex-start',
    borderColor: 'black',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    padding: 20,
    borderWidth: 1,
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 24,
  },
});

export default KeyboardAvoiding;
