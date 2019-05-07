import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text
} from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'

import FirstHomecard from './FirstHomeCard'
import Homecard from './Homecard';
import MenuButton from '../navigation/MenuButton'

export default class HomeScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <FirstHomecard
          src={require('../../img/teste1.png')}
          text1='Conheça a Personal Club'
          text2='Clique aqui para saber mais'
        />
        <Homecard
          src={require('../../img/teste2.png')}
          text1='Treine em Casa'
          text2='Nossas Aulas'
        />
        <Homecard
          src={require('../../img/teste3.png')}
          text1='Acompanhe'
          text2='Seus Resultados'
        />
        <TouchableHighlight style={styles.botao} onPress={() => firebase.auth().signOut()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}


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
    backgroundColor: '#f38433'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    alignSelf: 'center'
  },
});