import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import '@firebase/auth'
import Homecard from './Homecard';

class Home extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Homecard
          src={require('../../img/teste1.png')}
          text1='Conheça a Personal Club'
          text2='Clique aqui para saber mais'
          link='quem'
        />
        <Homecard
          src={require('../../img/teste2.png')}
          text1='Treine em Casa'
          text2='Nossas Aulas'
          link='home'
        />
        <Homecard
          src={require('../../img/teste3.png')}
          text1='Acompanhe'
          text2='Seus Resultados'
          link='resultadosPesquisa'
        />
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  assinatura: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 10,
    marginTop: -10
  },
  botao: {
    alignSelf: 'stretch',
    height: 45,
    backgroundColor: '#f38433',
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    alignSelf: 'center'
  },
});
