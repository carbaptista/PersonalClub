import React from 'react'
import { View, Image, TouchableHighlight, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { stylesPesquisaSection } from '../util/styles'

export default (PesquisaSection = props => {
	const { titulo, valor1, valor2, valor3, unidade, dados } = props
	const { container, title, infos, icon, borda } = stylesPesquisaSection
	return (
		<View>
			<View>
				<View style={container}>
					<Text style={title}>{titulo}</Text>
					<TouchableHighlight
						onPress={() =>
							Actions.push('modal', {
								titulo: titulo,
								dado: valor1,
								dadoMeta: valor2,
								dadoInicial: valor3,
								dados: dados
							})
						}>
						<Image style={icon} source={{ uri: 'graphicon' }} />
					</TouchableHighlight>
				</View>
				<View style={container}>
					<Text style={infos}>Atual</Text>
					<Text style={infos}>{`${valor1 || ' '} ${unidade}`}</Text>
				</View>
				<View style={borda} />
				<View style={container}>
					<Text style={infos}>Meta</Text>
					<Text style={infos}>{`${valor2 || ' '} ${unidade}`}</Text>
				</View>
				<View style={borda} />
				<View style={container}>
					<Text style={infos}>Inicial</Text>
					<Text style={infos}>{`${valor3 || ' '} ${unidade}`}</Text>
				</View>
				<View style={borda} />
			</View>
		</View>
	)
})
