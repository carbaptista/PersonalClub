import React, {Component} from 'react';
import {Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import {stylesTestIntro} from '../util/styles';

class QnafIntro extends Component {
  constructor(props) {
    super(props);
    _isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.unsubscribe = firebase
          .firestore()
          .collection('usuarios')
          .doc(user.uid)
          .onSnapshot(doc => {
            if (doc.exists) {
              this.setState({
                qnaf: doc.data().qnaf || '0',
              });
            }
          });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
    this._isMounted = false;
  }

  state = {};

  render() {
    return (
      <ScrollView style={stylesTestIntro.container}>
        <Text style={stylesTestIntro.subtitulo}>
          Questionário do Nível de Atividade Física
        </Text>
        <Text style={stylesTestIntro.titulo}>
          Seu Resultado: {this.state.qnaf}
        </Text>
        <TouchableOpacity
          style={stylesTestIntro.botao}
          mode="contained"
          onPress={() => Actions.push('testeQNAF')}>
          <Text style={stylesTestIntro.botaoTexto}>Fazer Teste</Text>
        </TouchableOpacity>
        <Image
          style={stylesTestIntro.img}
          source={{uri: 'qnaf'}}
          resizeMode="contain"
        />
      </ScrollView>
    );
  }
}

export default QnafIntro;
