import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { stylesHomeCard } from '../util/styles'

const Homecard = props => {
	const { src, text1, text2, link } = props
	return (
		<TouchableOpacity onPress={() => Actions[link]()}>
			<ImageBackground style={stylesHomeCard.card} source={src}>
				<View style={stylesHomeCard.cardTextContainer}>
					<Text onPress={() => Actions[link]()} style={stylesHomeCard.cardText1}>
						{text1}
					</Text>
					<Text onPress={() => Actions[link]()} style={stylesHomeCard.cardText2}>
						{text2}
					</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	)
}

export default Homecard

