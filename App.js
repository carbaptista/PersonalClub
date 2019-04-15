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
import TesteVelIntro from './src/components/TesteVelIntro';

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
          <Scene
            key="testeVelIntro"
            component={TesteVelIntro}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
