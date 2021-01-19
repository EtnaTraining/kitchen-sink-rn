import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  ViewProps,
  Platform,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Box2 from '../components/Box';
import CenteredText from '../components/CenteredText';

// const Box = ({
//   children,
//   style,
// }: {
//   children: JSX.Element;
//   style?: ViewStyle;
// }) => <Box2 style={[style, { margin: 20 }]}>{children}</Box2>;

type BoxProps = {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[];
  size?: number;
};

const Box = (props: BoxProps) => (
  <Box2 {...props} style={[props.style, { margin: 20 }]} />
);

type TSliderProps = {
  min: number;
  max: number;
  value?: number;
  step?: number;
  onChange: (v: number) => void;
};

const TSlider = ({ min, max, onChange, value, step = 1 }: TSliderProps) => (
  <Slider
    style={{ width: 200, height: 40 }}
    minimumValue={min}
    maximumValue={max}
    value={value}
    step={step}
    minimumTrackTintColor="#000"
    maximumTrackTintColor="#000000"
    onValueChange={onChange}
  />
);

const Transforms = () => {
  const [value, setValue] = React.useState({
    r: 0,
    rX: 0,
    rY: 0,
    tX: 0,
    tY: 0,
    sX: 1,
    sY: 1,
  });
  return (
    <View style={styles.container}>
      <Box
        style={{
          transform: [
            { rotateX: `${value.rX}deg` },
            { translateX: value.tX },
            { translateY: value.tY },
            { rotate: `${value.r}deg` },
            { rotateY: `${value.rY}deg` },
            { scaleX: value.sX },
            { scaleY: value.sY },
          ],
        }}
      >
        <CenteredText>A</CenteredText>
      </Box>
      <View
        style={
          Platform.OS == 'android' ? { marginTop: 10 } : { marginTop: 200 }
        }
      >
        <View style={styles.row}>
          <Text>Rotate</Text>
          <TSlider
            min={0}
            max={360}
            onChange={(v) => setValue({ ...value, r: v })}
          />
          <Text style={styles.valueInfo}>{`${value.r} deg`}</Text>
        </View>

        <View style={styles.row}>
          <Text>Rotate X</Text>
          <TSlider
            min={0}
            max={360}
            onChange={(v) => setValue({ ...value, rX: v })}
          />
          <Text style={styles.valueInfo}>{`${value.rX} deg`}</Text>
        </View>

        <View style={styles.row}>
          <Text>Rotate Y</Text>
          <TSlider
            min={0}
            max={360}
            onChange={(v) => setValue({ ...value, rY: v })}
          />
          <Text style={styles.valueInfo}>{`${value.rY} deg`}</Text>
        </View>

        <View style={styles.row}>
          <Text>Scale X</Text>
          <TSlider
            value={1}
            step={0.1}
            min={0}
            max={3}
            onChange={(v) => setValue({ ...value, sX: v })}
          />
          <Text style={styles.valueInfo}>{`${value.sX}`}</Text>
        </View>

        <View style={styles.row}>
          <Text>Scale Y</Text>
          <TSlider
            value={1}
            step={0.1}
            min={0}
            max={3}
            onChange={(v) => setValue({ ...value, sY: v })}
          />
          <Text style={styles.valueInfo}>{`${value.sY}`}</Text>
        </View>

        <View style={styles.row}>
          <Text>Translate X</Text>
          <TSlider
            value={0}
            step={1}
            min={-100}
            max={100}
            onChange={(v) => setValue({ ...value, tX: v })}
          />
          <Text style={styles.valueInfo}>{`${value.tX}`}</Text>
        </View>
        <View style={styles.row}>
          <Text>Translate Y</Text>
          <TSlider
            value={0}
            step={1}
            min={-100}
            max={100}
            onChange={(v) => setValue({ ...value, tY: v })}
          />
          <Text style={styles.valueInfo}>{`${value.tY}`}</Text>
        </View>
      </View>
      {/* <Box
        style={{
          transform: [
            {
              skewX: '45deg',
            },
            { skewY: '10deg' },
          ],
        }}
      >
        <CenteredText>B</CenteredText>
      </Box>
      <Box style={{ transform: [{ scale: 1.5 }] }}>
        <CenteredText>C</CenteredText>
      </Box>
      <Box>
        <CenteredText>D</CenteredText>
      </Box> */}
    </View>
  );
};

export default Transforms;

const styles = StyleSheet.create({
  container: {
    // width: 360,
    // height: 360,
    // margin: 40,
    flex: 1,
    // marginTop: 100,
    borderWidth: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Platform.OS == 'android' ? 40 : 120,
    // justifyContent: 'space-evenly',
    // padding: 20,
    // alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueInfo: { width: 100, textAlign: 'right' },
  tinyExample: {
    width: 30,
    height: 30,
    borderWidth: 1,
    backgroundColor: 'lightgray',
  },
});
