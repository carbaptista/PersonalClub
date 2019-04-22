import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Homecard = (props) => {
  const { icone, titulo, link } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => Actions[link]()}>
      <Image source={icone} style={styles.icone} />
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
}

export default Homecard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },

  icone: {
    height: 40,
    width: 40,
  },

  titulo: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});