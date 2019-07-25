import React, { Component } from 'react'
import { Image, View, Text, ScrollView, Linking, TouchableWithoutFeedback } from 'react-native'
import PhotoUpload from 'react-native-photo-upload'
import { stylesPerfil } from '../util/styles'
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import _ from 'lodash'

const LARANJA = '#f38534'

class Perfil extends Component {
	render() {
		return (
			<ScrollView style={stylesPerfil.container}>
				<View style={stylesPerfil.top}>
					<View style={stylesPerfil.foto}>
						<PhotoUpload
							onPhotoSelect={avatar => {
								if (avatar) {
									firebase.auth().onAuthStateChanged(user => {
										if (user) {
											const db = firebase.firestore()
											db.collection('usuarios')
												.doc(user.uid)
												.update({
													foto: avatar
												})
										}
									})
								}
							}}
							photoPickerTitle='Escolher Foto'>
							<Image
								source={{ uri: `data:image/png;base64,${this.props.avatar}` }}
								style={{
									width: 100,
									height: 100,
									borderRadius: 75
								}}
								resizeMode='cover'
							/>
						</PhotoUpload>
					</View>
					<Text style={stylesPerfil.nome}>Olá, {this.props.fullname.split(' ')[0] + '.'}</Text>
				</View>
				<View style={stylesPerfil.infoContainer}>
					<Text style={stylesPerfil.infoTitulo}>Dados Pessoais</Text>
					<View style={{ borderBottomColor: LARANJA, borderBottomWidth: 1 }} />
					<View style={stylesPerfil.infoCampoContainer}>
						<Text style={stylesPerfil.infoCampo}>Nome</Text>
						<Text style={[stylesPerfil.infoCampo, { color: LARANJA }]}>{this.props.fullname2}</Text>
					</View>
					<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
					<View style={stylesPerfil.infoCampoContainer}>
						<Text style={stylesPerfil.infoCampo}>Data de Nascimento</Text>
						<Text style={[stylesPerfil.infoCampo, { color: LARANJA }]}>
							{this.props.nascimento}
						</Text>
					</View>
					<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
					<View style={stylesPerfil.infoCampoContainer}>
						<Text style={[stylesPerfil.infoCampo, { alignSelf: 'center' }]}>Sexo</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text
								style={[
									stylesPerfil.infoCampo,
									this.props.sexo ? stylesPerfil.LARANJA : stylesPerfil.cinza
								]}>
								M
							</Text>
							<Text
								style={[
									stylesPerfil.infoCampo,
									this.props.sexo ? stylesPerfil.cinza : stylesPerfil.LARANJA
								]}>
								F
							</Text>
						</View>
					</View>
					<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
					<View style={stylesPerfil.infoCampoContainer}>
						<Text style={stylesPerfil.infoCampo}>País</Text>
						<Text style={[stylesPerfil.infoCampo, { color: LARANJA }]}>{this.props.pais}</Text>
					</View>
					<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
					<View style={stylesPerfil.infoCampoContainer}>
						<Text style={stylesPerfil.infoCampo}>E-mail</Text>
						<Text style={[stylesPerfil.infoCampo, { color: LARANJA }]}>{this.props.email}</Text>
					</View>
					<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
					<View style={stylesPerfil.infoCampoContainer}>
						<Text style={stylesPerfil.infoCampo}>DDD+ Número de Telefone</Text>
						<Text style={[stylesPerfil.infoCampo, { color: LARANJA }]}>{this.props.telefone}</Text>
					</View>
					<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
				</View>
				<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
				<Text style={stylesPerfil.contato}>Nossos Contatos</Text>
				<View style={stylesPerfil.containerContato}>
					<TouchableWithoutFeedback
						onPress={() => Linking.openURL('https://www.facebook.com/personalcluboficial/')}>
						<Image style={stylesPerfil.icones} source={{ uri: 'face' }} />
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => Linking.openURL('https://www.instagram.com/personal_club/')}>
						<Image style={stylesPerfil.icones} source={{ uri: 'insta' }} />
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() =>
							Linking.openURL(
								'whatsapp://send?phone=5571997222121&text=Ola%2C%20Eu%20gostaria%20de%20uma%20informa%C3%A7%C3%A3o!'
							)
						}>
						<Image style={stylesPerfil.icones} source={{ uri: 'whatsapp' }} />
					</TouchableWithoutFeedback>
				</View>
			</ScrollView>
		)
	}
}

export default Perfil
