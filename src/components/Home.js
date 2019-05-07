import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import '@firebase/auth'
import '@firebase/firestore'
import Homecard from './Homecard';

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.elementsContainer}>
          <Homecard
            src={require('../../img/teste1.jpg')}
            text1='Conheça a Personal Club'
            text2='Clique aqui para saber mais'
            link='quem'
          />
          <Homecard
            src={require('../../img/teste2.jpg')}
            text1='Treine em Casa'
            text2='Nossas Aulas'
            link='home'
          />
          <Homecard
            src={require('../../img/teste3.jpg')}
            text1='Acompanhe'
            text2='Seus Resultados'
            link='resultadosPesquisa'
          />
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
  elementsContainer: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
