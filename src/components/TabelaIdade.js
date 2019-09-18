import React from 'react'
import { Image, View } from 'react-native'
import { stylesTabelaIdade } from '../util/styles'

export default (TabelaIdade = props => {
	const { src1, src2, src3, src4 } = props
	return (
		<View>
			<Image
				style={stylesTabelaIdade.img}
				source={{ uri: 'fator_de_risco' }}
				resizeMode="contain"
			/>
			<Image style={stylesTabelaIdade.img} source={src1} resizeMode="contain" />
			<Image style={stylesTabelaIdade.img} source={src2} resizeMode="contain" />
			<Image style={stylesTabelaIdade.img} source={src3} resizeMode="contain" />
			<Image style={stylesTabelaIdade.img} source={src4} resizeMode="contain" />
		</View>
	)
})
