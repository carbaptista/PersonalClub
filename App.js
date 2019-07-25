import React, { Component } from 'react'
import { StyleSheet, Dimensions, BackHandler } from 'react-native'
import { Router, Scene, Drawer, Lightbox } from 'react-native-router-flux'
import firebase from '@firebase/app'
import '@firebase/auth'
import LoginForm from './src/pages/LoginForm'
import Quem from './src/pages/Quem'
import Splash from './src/pages/Splash'
import Home from './src/pages/Home'
import Tabelas from './src/pages/Tabelas'
import TesteVelocidade from './src/pages/TesteVelocidade'
import TesteVelIntro from './src/pages/TesteVelIntro'
import ResultadosPesquisa from './src/pages/ResultadosPesquisa'
import ResultadosGrafico from './src/pages/ResultadosGrafico'
import Perfil from './src/pages/Perfil'
import Menu from './src/components/Menu'
import Modal from './src/pages/Modal'
import Octagrama from './src/pages/Octagrama'
import emBreve from './src/components/emBreve'
import SplashScreen from 'react-native-splash-screen'
import { YellowBox } from 'react-native'
import _ from 'lodash'

const laranja = '#f38534'

YellowBox.ignoreWarnings(['Setting a timer'])
const _console = _.clone(console)
console.warn = message => {
	if (message.indexOf('Setting a timer') <= -1) {
		_console.warn(message)
	}
}

const width = Dimensions.get('window').width

export default class App extends Component {
	state = { loggedIn: null }

	componentDidMount() {
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: 'AIzaSyAZqkLlW64Fb2cLkOqVVjZy6PKGIC04k20',
				authDomain: 'personalclub-23861.firebaseapp.com',
				databaseURL: 'https://personalclub-23861.firebaseio.com',
				projectId: 'personalclub-23861',
				storageBucket: '',
				messagingSenderId: '116547347880',
				appId: '1:116547347880:web:2dd1c5c71983feb8'
			})
			BackHandler.addEventListener('hardwareBackPress', () => BackHandler.exitApp())
		}

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ loggedIn: true })
			} else {
				this.setState({ loggedIn: false })
			}
		})

		SplashScreen.hide()
	}

	isLoggedIn() {
		switch (this.state.loggedIn) {
			case null:
				return <Scene key='splash' component={Splash} hideNavBar={true} />
			case true:
				return (
					<Drawer
						drawerImage={require('./img/menu_burger.png')}
						key='drawer'
						drawer
						contentComponent={Menu}
						drawerWidth={width * 0.85}
						hideNavBar={true}>
						<Lightbox>
							<Scene>
								<Scene
									key='home'
									component={Home}
									title=''
									titleStyle={styles.navTitle}
									tintColor='white'
									navTransparent={true}
									leftButtonStyle={styles.burgerIcon}
								/>
							</Scene>
							<Scene key='emBreve' component={emBreve} hideNavBar={true} />
						</Lightbox>
						<Scene
							key='quem'
							component={Quem}
							title=''
							titleStyle={styles.navTitle}
							tintColor='white'
							navTransparent={true}
							leftButtonStyle={styles.burgerIcon}
						/>
						<Scene
							key='resultadosPesquisa'
							component={ResultadosPesquisa}
							title='Resultados'
							titleStyle={styles.navTitle}
							navigationBarStyle={styles.navbar}
							tintColor='white'
						/>
					</Drawer>
				)
			case false:
				return <Scene key='login' component={LoginForm} hideNavBar={true} initial />
		}
	}
	render() {
		return (
			<Router>
				<Scene key='root'>
					{this.isLoggedIn()}
					<Scene key='tabelas' component={Tabelas} hideNavBar={true} />
					<Scene
						key='modal'
						component={Modal}
						title='Resultados'
						titleStyle={styles.navTitleSemLeftButton}
						navigationBarStyle={styles.navbar}
						tintColor='white'
						renderLeftButton={() => null}
					/>
					<Scene
						key='octagrama'
						component={Octagrama}
						title='Octagrama'
						titleStyle={styles.navTitle}
						navigationBarStyle={styles.navbar}
						tintColor='white'
						leftButtonStyle={styles.drawer}
					/>
					<Scene
						key='resultadosGrafico'
						component={ResultadosGrafico}
						title='Resultados'
						titleStyle={styles.navTitleSemLeftButton}
						navigationBarStyle={styles.navbar}
						tintColor='white'
						renderLeftButton={() => null}
					/>
					<Scene
						key='testeVelIntro'
						component={TesteVelIntro}
						title='Velocidade de Segurança'
						titleStyle={styles.navTitle}
						navigationBarStyle={styles.navbar}
						tintColor='white'
					/>
					<Scene
						key='testeVel'
						component={TesteVelocidade}
						title='Teste de Velocidade'
						titleStyle={styles.navTitle}
						navigationBarStyle={styles.navbar}
						tintColor='white'
					/>
					<Scene
						key='perfil'
						component={Perfil}
						title='Meu Perfil'
						titleStyle={styles.navTitle}
						navigationBarStyle={styles.navbar}
						tintColor='white'
					/>
				</Scene>
			</Router>
		)
	}
}

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: '#333',
		borderBottomWidth: 1,
		borderBottomColor: laranja
	},

	navTitle: {
		color: 'white',
		flex: 1,
		textAlign: 'center',
		marginRight: 50
	},

	navTitleSemLeftButton: {
		color: 'white',
		flex: 1,
		textAlign: 'center'
	},

	burgerIcon: {
		marginTop: -50
	}
})
