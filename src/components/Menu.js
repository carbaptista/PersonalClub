import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, YellowBox } from 'react-native';
import firebase from '@firebase/app'
import { Actions } from 'react-native-router-flux';
import IconesMenu from './IconesMenu';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class Menu extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBez6h5K5USOfxZzFB3vE7Q39OxlJS7La8",
        authDomain: "personalclub-52112.firebaseapp.com",
        databaseURL: "https://personalclub-52112.firebaseio.com",
        projectId: "personalclub-52112",
        storageBucket: "personalclub-52112.appspot.com",
        messagingSenderId: "1096701126602"
      });
    }
  }

  getData() {
    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var docRef = db.collection('usuarios').doc(user.uid);
        docRef.get().then(doc => {
          if (doc.exists) {
            this.setState({
              fullname: doc.data().nome,
            })
          }

        }).catch(error => {
          console.log("Error getting document:", error);
        });
      }
    })
  }

  state = {
    fullname: '',
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getData()}
        <TouchableHighlight onPress={() => Actions.perfil()} >
          <View style={styles.top}>
            <Image style={styles.avatar} source={require('../../img/cap.jpg')} />
            <View>
              <Text style={styles.nome}>{this.state.fullname}</Text>
              <Text style={styles.perfil}>Meu Perfil</Text>
            </View>
          </View>
        </TouchableHighlight>
        <IconesMenu
          icone={require('../../img/home.png')}
          titulo="Início"
          link="home"
        />
        <IconesMenu
          icone={require('../../img/treinos.png')}
          titulo="Programa de Treinos"
          link="home"
        />
        <IconesMenu
          icone={require('../../img/resultados.png')}
          titulo="Resultados"
          link="resultadosPesquisa"
        />
        <IconesMenu
          icone={require('../../img/tabela.png')}
          titulo="Tabelas de Resultados"
          link="tabelas"
        />
        <TouchableHighlight style={styles.botao} onPress={() => firebase.auth().signOut()}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nome: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  perfil: {
    color: '#888',
    fontSize: 16,
  },

  avatar: {
    height: 100,
    width: 100,
    borderRadius: 75,
    margin: 15,
  },

  botao: {
    marginHorizontal: 10,
    alignSelf: 'stretch',
    height: 45,
    backgroundColor: '#f38433',
    marginVertical: 5,
    borderRadius: 5,
  },

  buttonText: {
    paddingTop: 2,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    alignSelf: 'center'
  },
});