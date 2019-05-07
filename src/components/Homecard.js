import React from 'react'
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Homecard = (props) => {
  const { src, text1, text2, link } = props;
  return (
    <TouchableWithoutFeedback onPress={() => Actions[link]()}>
      <ImageBackground style={styles.card} source={src}>
        <View style={styles.cardTextContainer}>
          <Text onPress={() => Actions[link]()} style={styles.cardText1}>{text1}</Text>
          <Text onPress={() => Actions[link]()} style={styles.cardText2}>{text2}</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default Homecard;

const styles = StyleSheet.create({
  card: {
    width: width,
    height: height / 3.4,
  },
  cardTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingBottom: 5
  },
  cardText1: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  cardText2: {
    fontSize: 22,
    color: '#fff',
  }
});