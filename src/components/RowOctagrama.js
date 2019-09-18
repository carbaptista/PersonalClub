import React from 'react'
import { View, Text } from 'react-native'
import { stylesRowOctagrama } from '../util/styles'

const RowOctagramaTop = props => {
	return (
		<View
			style={[
				stylesRowOctagrama.infoCampoContainer,
				{ borderColor: props.corBorda }
			]}>
			<Text
				style={[
					stylesRowOctagrama.infoCampo,
					{ fontSize: props.fonteTamanho },
					{ color: '#DDD' }
				]}>
				{props.titulo}
			</Text>
			<View
				style={[
					stylesRowOctagrama.containerLat,
					props.titulo === '' && { width: 100 }
				]}>
				<Text
					style={[
						stylesRowOctagrama.infoCampo,
						{ fontSize: props.fonteTamanho },
						{ color: '#DDD' }
					]}>
					{props.valorAtual < 10 ? ' ' + props.valorAtual : props.valorAtual}
				</Text>
				<Text
					style={[
						stylesRowOctagrama.infoCampo,
						{ fontSize: props.fonteTamanho },
						stylesRowOctagrama.idealPad
					]}>
					{props.valorIdeal < 10 ? props.valorIdeal + '  ' : props.valorIdeal + ' '}
				</Text>
			</View>
		</View>
	)
}

export default RowOctagramaTop
