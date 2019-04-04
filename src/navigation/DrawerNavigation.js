import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createAppContainer, createDrawerNavigator } from "react-navigation"

import HomeScreen from '../components/HomeScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);