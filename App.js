import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import firebase from '@firebase/app'
import '@firebase/auth'
import LoginForm from './src/components/LoginForm'
import Quem from './src/components/Quem'
import Splash from './src/components/Splash'
import Home from './src/components/Home'
import Tabelas from './src/components/Tabelas';
import TesteVelocidade from './src/components/TesteVelocidade';
import TesteVelIntro from './src/components/TesteVelIntro';
import ResultadosPesquisa from './src/components/ResultadosPesquisa';
import Perfil from './src/components/Perfil';
import Menu from './src/components/Menu';

export default class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBez6h5K5USOfxZzFB3vE7Q39OxlJS7La8",
      authDomain: "personalclub-52112.firebaseapp.com",
      databaseURL: "https://personalclub-52112.firebaseio.com",
      projectId: "personalclub-52112",
      storageBucket: "personalclub-52112.appspot.com",
      messagingSenderId: "1096701126602"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  isLoggedIn() {
    switch (this.state.loggedIn) {
      case null:
        return (
          <Scene
            key='splash'
            component={Splash}
            hideNavBar={true}
          />
        );
      case true:
        return (
          <Drawer key="drawer" drawer contentComponent={Menu} drawerWidth={300} hideNavBar={true}>
            <Scene
              key='home'
              component={Home}
              title=""
              titleStyle={styles.navTitle}
              tintColor="white"
              navTransparent={true}
              leftButtonStyle={styles.drawer}
            />
            <Scene
              key='quem'
              component={Quem}
              title=""
              titleStyle={styles.navTitle}
              tintColor="white"
              navTransparent={true}
              leftButtonStyle={styles.drawer}
            />
            <Scene
              key='resultadosPesquisa'
              component={ResultadosPesquisa}
              title="Resultados"
              titleStyle={styles.navTitle}
              navigationBarStyle={styles.navbar}
              tintColor="white"
            />
            <Scene
              key='testeVelIntro'
              component={TesteVelIntro}
              title="Velocidade de Segurança"
              titleStyle={styles.navTitle}
              navigationBarStyle={styles.navbar}
              tintColor="white"
            />
            <Scene
              key='testeVel'
              component={TesteVelocidade}
              title="Teste de Velocidade"
              titleStyle={styles.navTitle}
              navigationBarStyle={styles.navbar}
              tintColor="white"
            />
            <Scene
              key='perfil'
              component={Perfil}
              title="Meu Perfil"
              titleStyle={styles.navTitle}
              navigationBarStyle={styles.navbar}
              tintColor="white"
            />
          </Drawer>
        );
      case false:
        return (
          <Scene
            key='login'
            component={LoginForm}
            hideNavBar={true}
            initial
          />
        );
    }
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          {this.isLoggedIn()}
          <Scene key="tabelas" component={Tabelas} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#333',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
  },

  navTitle: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    marginRight: 50,
  },

  drawer: {
    marginTop: -50,
  }
});
