import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import PhotoUpload from 'react-native-photo-upload'
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import _ from 'lodash';

const width = Dimensions.get('window').width;

class Perfil extends Component {

  render() {
    return (
      <ScrollView style={styles.container} >
        <View style={styles.top}>
          <PhotoUpload onPhotoSelect={avatar => {
            if (avatar) {
              firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  const db = firebase.firestore();
                  db.collection('usuarios').doc(user.uid).update({
                    "foto": avatar,
                  })
                }
              })
            }
          }}
            photoPickerTitle="Escolher Foto"
          >
            <Image
              source={{ uri: `data:image/png;base64,${this.props.avatar}` }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 75,
              }}
              resizeMode='cover'
            />
          </PhotoUpload>
          <Text style={this.props.loaded ? styles.nome : styles.nomeNull}>Olá, {this.props.fullname}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitulo}>Dados Pessoais</Text>
          <View style={{ borderBottomColor: '#f38433', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>Nome</Text>
            <Text style={[styles.infoCampo, { color: '#f38433' }]}>{this.props.fullname2}</Text>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>Data de Nascimento</Text>
            <Text style={[styles.infoCampo, { color: '#f38433' }]}>{this.props.nascimento}</Text>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={[styles.infoCampo, { alignSelf: 'center' }]}>Sexo</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.infoCampo, this.props.m ? styles.laranja : styles.cinza]}>M</Text>
              <Text style={[styles.infoCampo, this.props.m ? styles.cinza : styles.laranja]}>F</Text>
            </View>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>País</Text>
            <Text style={[styles.infoCampo, { color: '#f38433' }]}>{this.props.pais}</Text>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>E-mail</Text>
            <Text style={[styles.infoCampo, { color: '#f38433' }]}>{this.props.email}</Text>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>DDD+ Número de Telefone</Text>
            <Text style={[styles.infoCampo, { color: '#f38433' }]}>{this.props.telefone}</Text>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        </View>
        <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        <Text style={styles.contato}>Nossos Contatos</Text>
        <View style={styles.containerContato}>
          <Image style={styles.icones} source={require('../../img/face.png')} />
          <Image style={styles.icones} source={require('../../img/insta.png')} />
          <Image style={styles.icones} source={require('../../img/whatsapp.png')} />
        </View>
      </ScrollView >
    );
  }
}

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
  },

  nomeNull: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },

  nome: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: width * 0.1,
    width: width * 0.90,
  },

  infoContainer: {
    marginTop: 30,
  },

  infoTitulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  infoCampoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoCampo: {
    fontSize: 16,
    padding: 15,
    color: 'white',
  },

  cinza: {
    color: '#888',
    fontSize: 26,
  },

  laranja: {
    color: '#f38433',
    fontSize: 26,
  },

  botao: {
    marginVertical: 20,
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

  contato: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginVertical: 10,
    textAlign: 'center',
  },

  containerContato: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  icones: {
    height: 60,
    width: 60,
  }
});