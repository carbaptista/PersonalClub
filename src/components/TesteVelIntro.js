import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class TesteVelIntro extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Teste de Velocidade</Text>
        <View
          style={{
            borderBottomColor: '#f38433',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.subtitulo}>Velocidade de Segurança</Text>
        <Text style={styles.titulo}>Seu Resultado: >20</Text>
        <Button style={styles.botao} mode='contained' onPress={() => Actions.testeVel()}>
          Fazer Teste
        </Button>
        <Image style={styles.img}
          source={require('../../img/tabelaVel.png')}
          resizeMode='contain'
        />
      </ScrollView>
    );
  }
}


export default TesteVelIntro;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },

  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
  },

  subtitulo: {
    color: '#f38433',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 60
  },

  botao: {
    height: 50,
    width: width * 0.5,
    backgroundColor: '#555',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#888',
    textAlign: 'center',
    paddingTop: 5,
    alignSelf: 'center'
  },

  img: {
    width: width,
    height: height / 2
  },
});