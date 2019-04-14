import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux';
import firebase from '@firebase/app'
import '@firebase/auth'
import LoginForm from './src/components/LoginForm'
import Quem from './src/components/Quem'
import Splash from './src/components/Splash'
import Home from './src/components/Home'
import Tabelas from './src/components/Tabelas';
import TesteVelocidade from './src/components/TesteVelocidade';

export default class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    });

    firebase.auth().onAuthStateChanged((user) => {
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
          <Scene
            key='home'
            component={Home}
            hideNavBar={true}
          />
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
          <Scene
            key="quem"
            component={Quem}
            hideNavBar={true}
          />
          <Scene
            key="tabelas"
            component={Tabelas}
            hideNavBar={true}
          />
          <Scene
            key="testeVel"
            component={TesteVelocidade}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
