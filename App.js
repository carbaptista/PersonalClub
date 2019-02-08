import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'
import LoginForm from './src/components/LoginForm'
import Home from './src/components/Home'
import Splash from './src/components/Splash'

export default class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD2jRqkf5XjUgAK9h29ncE9TygFL_xD4AI',
      authDomain: 'personalclub-4cdd1.firebaseapp.com',
      databaseURL: 'https://personalclub-4cdd1.firebaseio.com',
      projectId: 'personalclub-4cdd1',
      storageBucket: 'personalclub-4cdd1.appspot.com',
      messagingSenderId: '475448489530'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  test() {
    switch (this.state.loggedIn) {
      case null:
        return <Splash />
      case true:
        return <Home />
      case false:
        return <LoginForm />
    }
  }
  render() {
    return (
      <View>
        {this.test()}
      </View>
    );
  }
}