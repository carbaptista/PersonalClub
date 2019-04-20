import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import PesquisaSection from './PesquisaSection'
import { Button } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

class ResultadosPesquisa extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <PesquisaSection
          titulo="Peso"
          info1="Atual"
          valor1="74.6 kg"
          info2="Peso Meta"
          valor2="74.6 kg"
          info3="Peso Inicial"
          valor3="74.6 kg"
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
        <Button style={styles.botao2} mode='contained' onPress={() => Actions.testeVelIntro()}>
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