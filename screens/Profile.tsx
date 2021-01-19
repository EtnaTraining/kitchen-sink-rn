import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ViewStyle,
  StyleProp,
  Platform,
  ViewProps,
} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const profileData = {
  name: 'Antonio Calanducci',
  role: 'Instructor',
  description:
    'Antonio is a JavaScript (and TS) fan and React Native mobile developer',
  showThumbnail: false,
};

type ProfileCardProps = {
  showThumbnail?: boolean;
  size?: { width: number; height: number };
  style?: StyleProp<ViewStyle>;
};

const defaultCardWidth = 300;
const defaultCardHeight = 400;

export const ProfileCard = ({
  style,
  showThumbnail,
  size = { width: defaultCardWidth, height: defaultCardHeight },
}: ProfileCardProps) => {
  let cardContainerStyle: ViewStyle[] = [styles.cardContainer];
  if (showThumbnail) {
    cardContainerStyle.push({ transform: [{ scale: 0.2 }] });
  }
  return (
    <View
      style={[
        style,
        cardContainerStyle,
        { width: size.width, height: size.height },
      ]}
    >
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={require('../assets/favicon.png')}
        />
      </View>
      <View>
        <Text style={styles.cardTextName}>{profileData.name}</Text>
      </View>
      <View style={styles.cardRoleContainer}>
        <Text style={styles.cardRoleText}>{profileData.role}</Text>
      </View>
      {size.width >= defaultCardWidth ? (
        <View>
          <Text style={styles.cardDescription}>{profileData.description}</Text>
        </View>
      ) : null}
    </View>
  );
};

const Profile = () => {
  const [showThumbnail, setShowThumbnail] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowThumbnail(!showThumbnail)}>
        <ProfileCard showThumbnail={showThumbnail} />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardContainer: {
    // position: 'absolute',
    // top: 800,
    // left: 0,
    // top: '10%',
    top: 0,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    width: 300,
    height: 400,
    backgroundColor: 'dodgerblue',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  cardImageContainer: {
    marginTop: 30,
    paddingTop: 17,
    alignItems: 'center',
    // justifyContent: 'center',
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 3,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  cardImage: {
    // borderWidth: 1,
    width: 80,
    height: 80,
  },
  cardTextName: {
    // borderWidth: 1,
    color: 'white',
    marginTop: 30,
    // width: 140,
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {
      height: 2,
      width: 2,
    },
    textShadowRadius: 3,
  },
  cardRoleContainer: {
    borderBottomWidth: 3,
    // borderWidth: 1,
    marginVertical: 10,
  },
  cardRoleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    marginTop: 10,
    marginHorizontal: 40,
    marginBottom: 10,
    fontStyle: 'italic',
  },
});
