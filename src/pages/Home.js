import React, { Component } from 'react'
import { View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, Text } from 'react-native'
import { stylesHome } from '../util/styles'
import { stylesHomeCard } from '../util/styles'
import Homecard from '../components/Homecard'
import { Actions } from 'react-native-router-flux';

class Home extends Component {
	breve = () => Actions.push('emBreve')

	render() {
		return (
			<ScrollView
				contentContainerStyle={{
					flex: 1,
					justifyContent: 'space-between'
				}}
				style={stylesHome.container}>
				<StatusBar backgroundColor='#333' />
				<View style={stylesHome.elementsContainer}>
					<Homecard
						src={{ uri: 'home1' }}
						text1='Conheça a Personal Club'
						text2='Clique aqui para saber mais'
						link='quem'
					/>
					<TouchableOpacity onPress={this.breve}>
						<ImageBackground style={stylesHomeCard.card} source={{ uri: 'home2' }}>
							<View style={stylesHomeCard.cardTextContainer}>
								<Text style={stylesHomeCard.cardText1}>Treine em Casa</Text>
								<Text style={stylesHomeCard.cardText2}>Nossas Aulas</Text>
							</View>
						</ImageBackground>
					</TouchableOpacity>
					<Homecard
						src={{ uri: 'home3' }}
						text1='Acompanhe'
						text2='Seus Resultados'
						link='resultadosPesquisa'
					/>
				</View>
			</ScrollView>
		)
	}
}

export default Home
