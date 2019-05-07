import React, { Component } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import firebase from '@firebase/app'
import PesquisaSection from './PesquisaSection'
import { Button } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

class ResultadosPesquisa extends Component {

  componentDidMount() {
    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.collection("usuarios").doc(user.uid)
          .onSnapshot(doc => {
            this.setState({
              peso: doc.data().peso,
              pesoMeta: doc.data().peso,
              pesoInicial: doc.data().peso
            })
          });
      }
    })
  }

  state = {
    peso: '',
    pesoMeta: '',
    pesoInicial: ''
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <PesquisaSection
          titulo="Peso"
          info1="Atual"
          valor1={this.state.peso + ' Kg'}
          info2="Peso Meta"
          valor2={this.state.pesoMeta + ' Kg'}
          info3="Peso Inicial"
          valor3={this.state.pesoInicial + ' Kg'}
        />
        <PesquisaSection
          titulo="Informação 2"
          info1="Atual"
          valor1="74.6 x"
          info2="Meta informação 2"
          valor2="74.6 x"
          info3="Inicial informação 2"
          valor3="74.6 x"
        />
        <PesquisaSection
          titulo="Informação 3"
          info1="Atual"
          valor1="74.6 x"
          info2="Meta informação 3"
          valor2="74.6 x"
          info3="Inicial informação 3"
          valor3="74.6 x"
        />
        <Button style={styles.botao1} mode='contained'>
          Octagrama
        </Button>
        <Button style={styles.botao2} mode='contained' onPress={() => Actions.push('testeVelIntro')}>
          Velocidade de Segurança
        </Button>
      </ScrollView>
    );
  }
}


export default ResultadosPesquisa;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },

  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    marginTop: 15,
    marginBottom: 15,
  },

  botao1: {
    height: 50,
    backgroundColor: '#555',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#888',
    textAlign: 'center',
    paddingTop: 5,
    alignSelf: 'center',
    marginVertical: 15,
  },

  botao2: {
    height: 50,
    backgroundColor: '#555',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#888',
    textAlign: 'center',
    paddingTop: 5,
    alignSelf: 'center',
    marginBottom: 15,
  },
});