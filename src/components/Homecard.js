import React from 'react'
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const Homecard = (props) => {
  const { src, text1, text2, logout } = props;
  return (
    <TouchableWithoutFeedback onPress={logout}>
      <ImageBackground style={styles.card} source={src}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText1}>{text1}</Text>
          <Text style={styles.cardText2}>{text2}</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}


export default Homecard;

const styles = StyleSheet.create({
  card: {
    width: width,
    height: height / 3.5,
    marginBottom: 20
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