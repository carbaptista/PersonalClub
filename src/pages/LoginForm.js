import React, { Component } from 'react'
import {
	Image,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
	KeyboardAvoidingView,
	StatusBar
} from 'react-native'
import firebase from 'react-native-firebase';
import { stylesLogin } from '../util/styles'

class LoginForm extends Component {
	state = { email: '', password: '', erro: '', loading: false }

	onButtonPress = () => {
		const { email, password } = this.state
		this.setState({ loading: true })
		if (this.state.email === '') {
			this.setState({ erro: 'Preencha todos os campos', loading: false })
		} else {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(this.onLoginSuccess)
				.catch(() => {
					this.setState({ erro: 'Email ou senha incorretos', loading: false })
				})
		}
	}

	onLoginSuccess = () => {
		this.setState({
			email: '',
			senha: '',
			loading: false
		})
	}

	renderButton() {
		if (this.state.loading) {
			return <ActivityIndicator size="large" />
		}
		return (
			<TouchableOpacity style={stylesLogin.button} onPress={this.onButtonPress}>
				<Text style={stylesLogin.buttonText}>Entrar</Text>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<KeyboardAvoidingView style={stylesLogin.container}>
				<StatusBar backgroundColor="#333" />
				<Image
					style={stylesLogin.logo}
					source={require('../../img/logo.png')}
				/>
				<Text style={stylesLogin.titulo}>Login</Text>
				<TextInput
					autoCapitalize="none"
					returnKeyType="go"
					blurOnSubmit={false}
					onSubmitEditing={() => {
						this.secondTextInput.focus()
					}}
					style={stylesLogin.input}
					autoCorrect={false}
					placeholder="E-mail"
					placeholderTextColor="#aaa"
					value={this.state.email}
					onChangeText={email => this.setState({ email })}
				/>
				<TextInput
					ref={input => {
						this.secondTextInput = input
					}}
					onSubmitEditing={this.onButtonPress}
					secureTextEntry
					style={stylesLogin.input}
					autoCorrect={false}
					placeholder="Senha"
					placeholderTextColor="#aaa"
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
				/>
				<Text style={stylesLogin.errorMessage}>{this.state.erro}</Text>
				{this.renderButton()}
				<View style={stylesLogin.gap} />
			</KeyboardAvoidingView>
		)
	}
}

export default LoginForm
