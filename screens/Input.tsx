import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { List } from '../screens/List';

type Item = {
  id: number;
  nome: string;
};

function Input() {
  const [text, setText] = React.useState('');
  const [names, setNames] = React.useState<string[]>([]);
  const data = names.map((name: string, index) => {
    return { id: index, nome: name };
  });
  console.log('data', data);

  return (
    <View style={styles.container}>
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
      <List data={data} />
    </View>
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
    borderColor: 'black',
  },
  input: {
    marginTop: 10,
    padding: 10,
    // borderWidth: 1,
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 24,
  },
});

export default Input;
