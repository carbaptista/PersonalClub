import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'
import LoginForm from './src/components/LoginForm'
import TabelaVelocidade from './src/components/TabelaVelocidade'
import Splash from './src/components/Splash'

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
        return <Splash />
      case true:
        return <Quem />
      case false:
        return <LoginForm />
    }
  }
  render() {
    return (
      <View>
        <TabelaVelocidade />
      </View>
    );
  }
}
