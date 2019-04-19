import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TextInput, Dimensions } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import { Button } from 'react-native-paper';

const width = Dimensions.get('window').width;

class Perfil extends Component {
  state = {
    m: true,
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Meu Perfil</Text>
        <View style={{ borderBottomColor: '#f38433', borderBottomWidth: 1, }} />
        <View style={styles.top}>
          <PhotoUpload onPhotoSelect={avatar => {
            if (avatar) {
              console.log('Image base64 string: ', avatar)
            }
          }}
          photoPickerTitle="Escolher Foto"
          >
            <Image
              source={require('../../img/teste1.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 75
              }}
              resizeMode='cover'
            />
          </PhotoUpload>
          <Text style={styles.nome}>Olá, Steve Rogers.</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitulo}>Dados Pessoais</Text>
          <View style={{ borderBottomColor: '#f38433', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>Nome</Text>
            <TextInput style={[styles.infoCampo, { color: '#f38433' }]}>Steve Rogers</TextInput>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>Data de Nascimento</Text>
            <TextInput style={[styles.infoCampo, { color: '#f38433' }]}>04/06/1920</TextInput>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={[styles.infoCampo, { alignSelf: 'center' }]}>Sexo</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text onPress={() => this.setState({ m: true })} style={[styles.infoCampo, this.state.m ? styles.laranja : styles.cinza]}>M</Text>
              <Text onPress={() => this.setState({ m: false })} style={[styles.infoCampo, this.state.m ? styles.cinza : styles.laranja]}>F</Text>
            </View>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>País</Text>
            <TextInput style={[styles.infoCampo, { color: '#f38433' }]}>Brasil</TextInput>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>E-mail</Text>
            <TextInput style={[styles.infoCampo, { color: '#f38433' }]}>steve@rogers.com.br</TextInput>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
          <View style={styles.infoCampoContainer}>
            <Text style={styles.infoCampo}>DDD+ Número de Telefone</Text>
            <TextInput style={[styles.infoCampo, { color: '#f38433' }]}>71 99209-3766</TextInput>
          </View>
          <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        </View>
        <Button style={styles.botao} mode='contained'>
          Salvar
        </Button>
        <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        <Text style={styles.contato}>Nossos Contatos</Text>
        <View style={styles.containerContato}>
          <Image style={styles.icones} source={require('../../img/face.png')} />
          <Image style={styles.icones} source={require('../../img/insta.png')} />
          <Image style={styles.icones} source={require('../../img/whatsapp.png')} />
        </View>
      </ScrollView>
    );
  }
}

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 75
  },

  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
  },

  nome: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
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