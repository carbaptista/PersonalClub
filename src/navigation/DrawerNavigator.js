import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import Quem from '../components/Quem';
import TabelaVelocidade from '../components/TabelaVelocidade';


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83
}

const DrawerNavigator =  createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		QuemSomos: {
			screen: Quem
		},
		Settings: {
			screen: TabelaVelocidade
		}
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);