import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { stylesemBreve } from '../util/styles'

const close = () => Actions.pop()

const emBreve = () => {
	return (
		<TouchableOpacity onPress={close} style={stylesemBreve.container}>
			<View style={stylesemBreve.base}>
				<Text style={stylesemBreve.texto}> Em breve! </Text>
			</View>
		</TouchableOpacity>
	)
}

export default emBreve
