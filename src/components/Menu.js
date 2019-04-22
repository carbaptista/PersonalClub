import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import firebase from '@firebase/app'
import { Actions } from 'react-native-router-flux';
import IconesMenu from './IconesMenu';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => Actions.perfil()} >
          <View style={styles.top}>
            <Image style={styles.avatar} source={require('../../img/cap.jpg')} />
            <View>
              <Text style={styles.nome}>Steve Rogers</Text>
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