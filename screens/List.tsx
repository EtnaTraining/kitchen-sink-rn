import * as React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import Box from '../components/Box';
import CenteredText from '../components/CenteredText';

const data = [
  { id: 1, nome: 'Antonio' },
  { id: 2, nome: 'Luca' },
  { id: 3, nome: 'Diego' },
  { id: 4, nome: 'Enrico' },
  { id: 5, nome: 'Claudio' },
  { id: 6, nome: 'Nicola' },
  { id: 7, nome: 'Simone' },
];

type Item = {
  id: number;
  nome: string;
};

const ListScreen = () => <List data={data} />;

export const List = ({ data }: { data: Item[] }) => {
  const renderItem = ({ item }: { item: Item }) => (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray',
      }}
    >
      <Text>{item.nome}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

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
  tinyBox: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default ListScreen;
