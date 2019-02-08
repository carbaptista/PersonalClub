import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'

let height = Dimensions.get('window').height;

class LoginForm extends Component {

  state = { email: '', senha: '', loading: false }

  onButtonPress() {
    const { email, senha } = this.state;
    this.setState({ loading: true });
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        alert('Usuário não existe')
        this.setState({ loading: false })
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      senha: '',
      loading: false,
    });
  }
  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' />;
    }
    return (
      <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('../../img/logo.png')} />
        <Text style={styles.titulo}>Login</Text>
        <TextInput
          blurOnSubmit={false}
          onSubmitEditing={() => { this.secondTextInput.focus(); }}
          style={styles.input}
          autoCorrect={false}
          placeholder="E-mail"
          placeholderTextColor='#aaa'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          ref={(input) => { this.secondTextInput = input; }}
          secureTextEntry
          style={styles.input}
          autoCorrect={false}
          placeholder="Senha"
          placeholderTextColor='#aaa'
          value={this.state.senha}
          onChangeText={senha => this.setState({ senha })}
        />
        <Text style={styles.margem}>
          Ao prosseguir você estará de acordo com nossos Termos de Uso e Política de Privacidade
        </Text>
        {this.renderButton()}
      </ScrollView>
    );
  }
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
    height: height,
  },
  input: {
    height: 45,
    backgroundColor: '#000',
    alignSelf: 'stretch',
    borderColor: '#fff',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: '#fff'
  },
  button: {
    height: 60,
    backgroundColor: '#f38433',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
    paddingBottom: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
  },
  logo: {
    paddingTop: 0,
    marginBottom: 30,
    alignSelf: 'center',
  },
  margem: {
    marginTop: 30,
    marginBottom: 40,
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
  titulo: {
    color: '#fff',
    fontSize: 35,
    paddingBottom: 80,
    fontWeight: 'bold',
    fontFamily: 'Arial, Helvetica, sans-serif',
    alignSelf: 'center',
  },
});
