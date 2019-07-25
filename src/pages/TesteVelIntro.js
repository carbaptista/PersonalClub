import React, { Component } from 'react'
import { Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import firebase from '@firebase/app'
import { Actions } from 'react-native-router-flux'
import { stylesTestIntro } from '../util/styles'

class TesteVelIntro extends Component {
	constructor(props) {
		super(props)
		_isMounted = false
	}

	componentDidMount() {
		this._isMounted = true

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.unsubscribe = firebase
					.firestore()
					.collection('usuarios')
					.doc(user.uid)
					.onSnapshot(doc => {
						if (doc.exists) {
							this.setState({
								velSeg: doc.data().velSeg || '0'
							})
						}
					})
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
		this._isMounted = false
	}

	state = {}

	render() {
		return (
			<ScrollView style={stylesTestIntro.container}>
				<Text style={stylesTestIntro.subtitulo}>Velocidade de Segurança</Text>
				<Text style={stylesTestIntro.titulo}>
					Seu Resultado: {this.state.velSeg}
				</Text>
				<TouchableOpacity
					style={stylesTestIntro.botao}
					mode="contained"
					onPress={() =>
						Actions.push('testeVel', {
							nome: this.props.nome,
							nascimento: this.props.nascimento
						})
					}>
					<Text style={stylesTestIntro.botaoTexto}>Fazer Teste</Text>
				</TouchableOpacity>
				<Image
					style={stylesTestIntro.img}
					source={{ uri: 'tabelavel' }}
					resizeMode="contain"
				/>
			</ScrollView>
		)
	}
}

export default TesteVelIntro
