import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import firebase from '@firebase/app'
import { Actions } from 'react-native-router-flux'
import IconesMenu from './IconesMenu'
import { stylesMenu } from '../util/styles'

class Menu extends Component {
	getAge = DOB => {
		var dateParts = DOB.split('/')
		var today = new Date()
		var birthDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
		var age = today.getFullYear() - birthDate.getFullYear()
		var m = today.getMonth() - birthDate.getMonth()
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age = age - 1
		}
		return age
	}

	constructor(props) {
		super(props)
		this.state = {
			sexo: null,
			fullname: '',
			fullname2: '',
			nascimento: '',
			pais: '',
			email: '',
			telefone: '',
			avatar: '',
			splitName: '',
			error: '',
		}
		_isMounted = false
	}

	componentDidMount() {
		this._isMounted = true
		if (this._isMounted) {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					this.unsubscribe = firebase
						.firestore()
						.collection('usuarios')
						.doc(user.uid)
						.onSnapshot(
							doc => {
								if (this._isMounted) {
									this.setState({
										fullname: doc.data().nome,
										splitName: doc.data().nome.split(' '),
										fullname2: doc.data().nome,
										nascimento: doc.data().nascimento,
										idade: this.getAge(doc.data().nascimento),
										sexo: doc.data().sexo,
										pais: doc.data().pais,
										email: doc.data().email,
										telefone: doc.data().telefone,
										avatar: doc.data().foto
									})
								}
							},
							error => {
								this.setState({
									erro: error.code
								})
							}
						)
				}
			})
		}
	}

	componentWillUnmount() {
		this.unsubscribe()
		this._isMounted = false
	}

	render() {
		return (
			<View style={stylesMenu.container}>
				<TouchableHighlight
					onPress={() =>
						Actions.push('perfil', {
							sexo: this.state.sexo,
							fullname: this.state.fullname,
							fullname2: this.state.fullname2,
							nascimento: this.state.nascimento,
							pais: this.state.pais,
							email: this.state.email,
							telefone: this.state.telefone,
							avatar: this.state.avatar
						})
					}>
					<View style={stylesMenu.top}>
						<Image
							style={stylesMenu.avatar}
							source={{ uri: `data:image/png;base64,${this.state.avatar}` }}
						/>
						<View>
							<Text style={stylesMenu.nome}>
								{this.state.splitName.length > 1
									? this.state.splitName[0] +
									  ' ' +
									  this.state.splitName[this.state.splitName.length - 1]
									: this.state.fullname}
							</Text>
							<Text style={stylesMenu.perfil}>Meu Perfil</Text>
						</View>
					</View>
				</TouchableHighlight>
				<IconesMenu icone={{ uri: 'home' }} titulo='Início' link='home' idade='' sexo='' />
				<IconesMenu
					icone={{ uri: 'treinos' }}
					titulo='Programa de Treinos'
					link='emBreve'
					idade=''
					sexo=''
				/>
				<IconesMenu
					icone={{ uri: 'resultados' }}
					titulo='Resultados'
					link='resultadosPesquisa'
					idade=''
					sexo=''
				/>
				<IconesMenu
					icone={{ uri: 'tabela' }}
					titulo='Tabelas de Resultados'
					link='tabelas'
					idade={this.state.idade}
					sexo={this.state.sexo}
				/>
				<TouchableOpacity
					style={stylesMenu.container2}
					onPress={() => {
						firebase.auth().signOut()
						Actions.pop()
					}}>
					<Image source={{ uri: 'logout' }} style={stylesMenu.icone} />
					<Text style={stylesMenu.titulo}>Sair</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Menu
