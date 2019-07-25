import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { stylesSplash } from '../util/styles'

const Splash = () => {
	return (
		<View style={stylesSplash.container}>
			<ActivityIndicator size="large" />
		</View>
	)
}

export default Splash
