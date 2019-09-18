import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { stylesIconeMenu } from '../util/styles'

const IconesMenu = props => {
	const { icone, titulo, link, sexo, idade } = props
	return (
		<TouchableOpacity
			style={stylesIconeMenu.container}
			onPress={
				idade
					? () =>
							Actions.push(link, {
								sexo: sexo,
								idade: idade
							})
					: () => Actions[link]()
			}>
			<Image source={icone} style={stylesIconeMenu.icone} />
			<Text style={stylesIconeMenu.titulo}>{titulo}</Text>
		</TouchableOpacity>
	)
}

export default IconesMenu
