import DetailsScreen from './screens/Details';
import SimpleThemeScreen from './screens/SimpleTheme/SimpleTheme';
import BorderShapesScreen from './screens/BorderShapes';
import PositionScreen from './screens/Position';
import MyProfileScreen from './screens/Profile';
import TransformsScreen from './screens/Transforms';
import ListScreen from './screens/List';
import Flexbox from './screens/Flexbox';
import { RootStackParamList } from './types';
import InputScreen from './screens/Input';
import ScrollableListScreen from './screens/ScrollableList';
import ModalScreen from './screens/Modal';
import TouchesScreen from './screens/Touches';
import KeyboardAvoidingScreen from './screens/KeyboardAvoiding';
import LayoutAnimationScreen from './screens/LayoutAnimation';
import PanResponderScreen from './screens/PanResponder';
// old lesson
// import PanResponderSimpleScreen from './screens/PanResponderSimpleScreen';
import SimplePanResponderScreen from './screens/SimplePanResponder';
import BoxAnimateScreen from './screens/BoxAnimate';
import TextInputAnimate from './screens/TextInputAnimate';
import SpinningAnimationScreen from './screens/SpinningAnnimation';
import AnimatedWelcomeScreen from './screens/AnimatedWelcome';
import SwipableDeckScreen from './screens/SwipableDeck';
import RandomWidthScreen from './screens/RandomWidth';
import RandomMoveScreen from './screens/RandomMove';
import AnimationModifiersScreen from './screens/AnimationModifiers';
import GrowingBallScreen from './screens/GrowingBall';
import MovingBallScreen from './screens/MovingBall';
import ScrollEventsScreen from './screens/ScrollEvents';
import AnimatedBallScreen from './screens/AnimatedBall';
import BottomSheetScreen from './screens/BottomSheet';

type Screen = {
  title: string;
  name: keyof RootStackParamList;
  component: () => JSX.Element;
};

export const screenList: Screen[] = [
  {
    title: 'Random width',
    name: 'RandomWidth',
    component: RandomWidthScreen
  },
  {
    title: 'Random move',
    name: 'RandomMove',
    component: RandomMoveScreen
  },
  {
    title: 'Growing Ball',
    name: 'GrowingBall',
    component: GrowingBallScreen
  },
  {
    title: 'Animation modifiers',
    name: 'AnimationModifiers',
    component: AnimationModifiersScreen
  },
  {
    title: 'Moving Ball',
    name: 'MovingBall',
    component: MovingBallScreen
  },
  {
    title: 'Animated Ball',
    name: 'AnimatedBall',
    component: AnimatedBallScreen
  },
  {
    title: 'Bottom Sheet',
    name: 'BottomSheet',
    component: BottomSheetScreen
  },
  {
    title: 'Scroll Events',
    name: 'ScrollEvents',
    component: ScrollEventsScreen
  },




  { title: 'Details Screen', name: 'Details', component: DetailsScreen },
  { title: 'Simple Theme', name: 'SimpleTheme', component: SimpleThemeScreen },
  {
    title: 'Border Shapes',
    name: 'BorderShapes',
    component: BorderShapesScreen,
  },
  { title: 'Position', name: 'Position', component: PositionScreen },
  { title: 'My Profile', name: 'MyProfile', component: MyProfileScreen },
  { title: 'Transforms', name: 'Transforms', component: TransformsScreen },
  { title: 'Flexbox', name: 'Flexbox', component: Flexbox },
  { title: 'Flatlist', name: 'List', component: ListScreen },
  { title: 'TextInput', name: 'Input', component: InputScreen },
  {
    title: 'Scrollable List',
    name: 'ScrollableList',
    component: ScrollableListScreen,
  },
  {
    title: 'Modal Window',
    name: 'Modal',
    component: ModalScreen,
  },
  {
    title: 'Touches',
    name: 'Touches',
    component: TouchesScreen,
  },
  // {
  //   title: 'KeyboardAvoiding View',
  //   name: 'KeyboardAvoiding',
  //   component: KeyboardAvoidingScreen,
  // },
  {
    title: 'Layout Animation',
    name: 'LayoutAnimation',
    component: LayoutAnimationScreen,
  },
  {
    title: 'Box Animate',
    name: 'BoxAnimate',
    component: BoxAnimateScreen,
  },
  {
    title: 'Text Input Animate',
    name: 'TextInputAnimate',
    component: TextInputAnimate,
  },
  {
    title: 'Spinning Animation',
    name: 'SpinningAnimation',
    component: SpinningAnimationScreen,
  },
  {
    title: 'Simple Pan Responder',
    name: 'PanResponderSimple',
    component: SimplePanResponderScreen,
  },
  {
    title: 'Pan Responder',
    name: 'PanResponder',
    component: PanResponderScreen,
  },
  {
    title: 'Swipable Deck',
    name: 'SwipableDeck',
    component: SwipableDeckScreen,
  },



  // {
  //   title: 'Animated Welcome',
  //   name: 'AnimatedWelcome',
  //   component: AnimatedWelcomeScreen,
  // },
  // {
  //   title: 'Animated Sequence',
  //   name: 'AnimationSequence',
  //   component: AnimationSequenceScreen,
  // },
  // {
  //   title: 'Animated Staggering',
  //   name: 'AnimationStaggering',
  //   component: AnimationStaggeringScreen,
  // },
];
