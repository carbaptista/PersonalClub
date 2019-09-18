import React from 'react'
import { View, Text } from 'react-native'
import { stylesRowOctagramaTop } from '../util/styles'

const RowOctagramaTop = props => {
	return (
		<View
			style={[
				stylesRowOctagramaTop.infoCampoContainer,
				{ borderColor: props.corBorda }
			]}>
			<Text
				style={[
					stylesRowOctagramaTop.infoCampo,
					{ fontSize: props.fonteTamanho },
					{ color: '#DDD' }
				]}>
				{props.titulo}
			</Text>
			<Text
				style={[
					stylesRowOctagramaTop.infoCampo,
					{ fontSize: props.fonteTamanho }
				]}>
				{props.pontuacao}
			</Text>
		</View>
	)
}

export default RowOctagramaTop
