import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MenuButton extends React.Component {
	render() {
		return(
			<Ionicons
				name="md-menu"
				color="#FFFFFF"
				size={40}
				style={styles.menuIcon}
				onPress={() => this.props.navigation.toggleDrawer()}
			/>
		)
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 20,
		left: 10,
	}
})