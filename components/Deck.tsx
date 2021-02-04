import React, { useRef } from 'react';
import {
  Animated,
  View,
  UIManager,
  Dimensions,
  PanResponder,
  LayoutAnimation,
  Platform,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

import { Item } from '../screens/SwipableDeck';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

type Props = {
  data: Item[];
  renderCard: (item: Item) => JSX.Element;
  onSwipeLeft?: (item: Item) => void;
  onSwipeRight?: (item: Item) => void;
  renderNoMoreCards?: () => JSX.Element;
};

const Deck = ({
  data,
  renderCard,
  onSwipeLeft,
  onSwipeRight,
  renderNoMoreCards,
}: Props) => {
  const [index, setIndex] = React.useState(0);

  const position = useRef(new Animated.ValueXY()).current;

  React.useEffect(() => {
    LayoutAnimation.spring();
  });

  const onSwipeComplete = (direction: string) => {
    const item = data[index];
    direction === 'right' ? onSwipeRight?.(item) : onSwipeLeft?.(item);
    position.setValue({ x: 0, y: 0 });
    console.log(index);
    // setIndex(index + 1);
    setIndex((prevState) => prevState + 1);
  };

  const forceSwipe = (direction: string) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 300,
      useNativeDriver: true,
    }).start(() => onSwipeComplete(direction));
    // setIndex(index + 1);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left');
        } else {
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
    outputRange: ['-120deg', '0deg', '120deg'],
  });

  const renderCards = () => {
    if (index >= data.length) {
      return renderNoMoreCards?.();
    }
    return data
      .map((item, i) => {
        if (i < index) {
          return null;
        }
        if (index == i) {
          return (
            <Animated.View
              key={item.id}
              {...panResponder.panHandlers}
              style={{
                position: 'absolute',
                width: SCREEN_WIDTH,
                transform: [
                  { translateX: position.x },
                  { translateY: position.y },
                  { rotate },
                ],
              }}
            >
              {renderCard(item)}
            </Animated.View>
          );
        } else
          return (
            <Animated.View
              key={item.id}
              style={{
                position: 'absolute',
                width: SCREEN_WIDTH,
                top: 15 * (i - index),
              }}
            >
              {renderCard(item)}
            </Animated.View>
          );
      })
      .reverse();
  };

  return <View>{renderCards()}</View>;
};

export default Deck;
