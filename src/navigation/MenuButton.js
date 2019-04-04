import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MenuButton extends React.Component {
    render() {
        return(
            <Ionicons
                name="md-menu"
                color="#000000"
                size={40}
                style={style.menuIcon}
                onPress={() => {}}
            />
        )
    }
}

const style = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 20,
        left: 10,
    }
})