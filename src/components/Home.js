import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'
import Homecard from './Homecard';
import { Actions } from 'react-native-router-flux';

class Home extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
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
          link='tabelas'
        />
        <Homecard
          src={require('../../img/teste3.jpg')}
          text1='Acompanhe'
          text2='Seus Resultados'
          link='resultadosPesquisa'
        />
        <TouchableHighlight style={styles.botao} onPress={() => Actions.perfil()}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.botao} onPress={() => firebase.auth().signOut()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>
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
