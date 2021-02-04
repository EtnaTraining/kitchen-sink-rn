import React, { useRef } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  PanResponder,
  Text,
  PanResponderGestureState,
  GestureResponderEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Deck from '../components/Deck';
import { Card, Button, Icon } from 'react-native-elements';

export type Item = {
  id: number;
  text: string;
  uri: string;
};

const DATA: Item[] = [
  {
    id: 0,
    text: 'Card #1',
    uri: 'https://picsum.photos/seed/card1/300/200',
  },
  {
    id: 1,
    text: 'Card #2',
    uri: 'https://picsum.photos/seed/card2/300/200',
  },
  {
    id: 2,
    text: 'Card #3',
    uri: 'https://picsum.photos/seed/card3/300/200',
  },
  {
    id: 3,
    text: 'Card #4',
    uri: 'https://picsum.photos/seed/card4/300/200',
  },
  {
    id: 4,
    text: 'Card #5',
    uri: 'https://picsum.photos/seed/card6/300/200',
  },
  {
    id: 5,
    text: 'Card #6',
    uri: 'https://picsum.photos/seed/card23/300/200',
  },
  {
    id: 6,
    text: 'Card #7',
    uri: 'https://picsum.photos/seed/card33/300/200',
  },
  {
    id: 7,
    text: 'Card #8',
    uri: 'https://picsum.photos/seed/card42/300/200',
  },
];

const SwipableDeckScreen = () => {
  const renderCard = (item: Item): JSX.Element => (
    <Card key={item.id}>
      <Card.Title>{item.text}</Card.Title>
      <Card.Image source={{ uri: item.uri }} />
      <Text style={{ marginVertical: 20 }}>More text here...</Text>
      <Button icon={<Icon name="code" color="#ffffff" />} title="View now!" />
    </Card>
  );

  const renderNoMoreCards = () => {
    return (
      <Card>
        <Card.Title>All Done!</Card.Title>
        <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
        <Button title="Get More" />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default SwipableDeckScreen;
