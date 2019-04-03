import React from 'react'
import { Image, View, StyleSheet, Dimensions } from 'react-native'

let height = Dimensions.get('window').height;

const Splash = () => {
	return (
		<View style={styles.container}>
			<Image source={require('../../img/logo.png')} />
		</View>
	);
}

export default Splash;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		height: height,
		justifyContent: 'center',
		alignItems: 'center'
	}
});