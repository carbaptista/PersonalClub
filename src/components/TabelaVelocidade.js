import React, { Component } from 'react';
import { ScrollView, Image, Dimensions, StyleSheet, Text } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class TabelaVelocidade extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.img} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
        <Image style={styles.imgUltimo} source={require('../../img/Tabelas/Masculino/Tabela_de_Velocidade_de_Segurança.png')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#333',
  },

  img: {
    alignSelf: 'center',
    marginTop: 10,
    width: width * 0.95,
    height: height / 1.9,
    borderRadius: 5,
    borderWidth: 1,
  },

  imgUltimo:{
    alignSelf: 'center',
    marginTop: 10,
    width: width * 0.95,
    height: height / 1.9,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 45,
  }
});

export default TabelaVelocidade;
