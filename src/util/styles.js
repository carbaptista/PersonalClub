import { StyleSheet, Dimensions } from 'react-native'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const LARANJA = '#f38534'
const AZUL = '#2465a4'

export const stylesLogin = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#333',
		height: HEIGHT
	},
	input: {
		height: 45,
		backgroundColor: '#333',
		alignSelf: 'stretch',
		borderColor: '#fff',
		borderBottomWidth: 1,
		paddingHorizontal: 20,
		marginBottom: 10,
		color: '#fff'
	},
	button: {
		height: 60,
		backgroundColor: LARANJA,
		alignSelf: 'stretch',
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		paddingBottom: 5
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 28
	},
	logo: {
		marginBottom: 30,
		alignSelf: 'center',
		width: WIDTH * 0.95,
		height: HEIGHT * 0.17
	},
	titulo: {
		color: '#fff',
		fontSize: 35,
		paddingBottom: 10,
		fontWeight: 'bold',
		fontFamily: 'Arial, Helvetica, sans-serif',
		textAlign: 'center'
	},
	gap: {
		height: 60
	},
	errorMessage: {
		textAlign: 'center',
		color: 'red',
		fontSize: 18,
		paddingBottom: 20
	}
})

export const stylesRes = StyleSheet.create({
	container: {
		backgroundColor: '#333'
	},
	tituloResultados: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 22,
		marginTop: 20,
		marginBottom: 15
	},
	titulo: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 22,
		marginTop: 15,
		marginBottom: 15
	},
	botao: {
		height: 50,
		minWidth: 230,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#888',
		alignSelf: 'center',
		backgroundColor: '#555',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 4,
		marginTop: 10
	},
	botaoTexto: {
		color: '#DDD',
		fontSize: 18,
		textAlign: 'center'
	},
	loader: {
		margin: 20
	}
})

export const stylesHome = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
	},
	elementsContainer: {
		flex: 1,
		justifyContent: 'space-between'
	}
})

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#333',
		height: HEIGHT
	},
	input: {
		height: 45,
		backgroundColor: '#333',
		alignSelf: 'stretch',
		borderColor: '#fff',
		borderBottomWidth: 1,
		paddingHorizontal: 20,
		marginBottom: 10,
		color: '#fff'
	},
	button: {
		height: 60,
		backgroundColor: LARANJA,
		alignSelf: 'stretch',
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		paddingBottom: 5
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 28
	},
	logo: {
		marginBottom: 30,
		alignSelf: 'center'
	},
	titulo: {
		color: '#fff',
		fontSize: 35,
		paddingBottom: 10,
		fontWeight: 'bold',
		fontFamily: 'Arial, Helvetica, sans-serif',
		textAlign: 'center'
	},
	gap: {
		height: 60
	},
	errorMessage: {
		textAlign: 'center',
		color: 'red',
		fontSize: 18,
		paddingBottom: 20
	}
})

export const stylesModal = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#333'
	},

	containerPicker: {
		marginTop: 50,
		flexDirection: 'row',
		marginLeft: 10
	},

	texto: {
		color: LARANJA,
		fontSize: 24
	},

	picker1: {
		height: 50,
		width: 100,
		color: LARANJA
	},

	picker2: {
		height: 50,
		width: 160,
		color: LARANJA
	},

	botao: {
		height: 50,
		minWidth: 200,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#888',
		alignSelf: 'center',
		backgroundColor: '#555',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 4,
		marginTop: 10
	},

	botaoTexto: {
		color: '#DDD',
		fontSize: 18,
		textAlign: 'center'
	}
})

export const stylesOctagrama = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
		color: 'white'
	}
})

export const stylesPerfil = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
	},

	nomeNull: {
		color: '#333',
		fontSize: 24,
		fontWeight: 'bold'
	},

	nome: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	},

	top: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 10
	},

	foto: {
		marginHorizontal: WIDTH * 0.05
	},

	infoContainer: {
		marginTop: 30
	},

	infoTitulo: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		paddingHorizontal: 15,
		marginBottom: 10
	},

	infoCampoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	infoCampo: {
		fontSize: 16,
		padding: 15,
		color: 'white'
	},

	cinza: {
		color: '#888',
		fontSize: 26
	},

	LARANJA: {
		color: LARANJA,
		fontSize: 26
	},

	botao: {
		marginVertical: 20,
		height: 50,
		width: WIDTH * 0.5,
		backgroundColor: '#555',
		borderRadius: 5,
		fontWeight: 'bold',
		fontSize: 24,
		borderWidth: 1,
		borderColor: '#888',
		textAlign: 'center',
		paddingTop: 5,
		alignSelf: 'center'
	},

	contato: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		paddingHorizontal: 15,
		marginVertical: 10,
		textAlign: 'center'
	},

	containerContato: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 20
	},

	icones: {
		height: 60,
		width: 60
	}
})

export const stylesQuem = StyleSheet.create({
	container: {
		height: HEIGHT,
		backgroundColor: '#333'
	},

	img: {
		width: WIDTH,
		height: HEIGHT / 3
	},

	titulo: {
		paddingTop: 15,
		color: '#fff',
		fontSize: 25,
		alignSelf: 'center',
		fontWeight: 'bold'
	},

	texto: {
		alignSelf: 'center',
		fontSize: 16,
		color: 'white',
		padding: 5,
		textAlign: 'left'
	}
})

export const stylesResultadosGrafico = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
	},

	containerInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	containerPicker: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},

	titulo: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 24,
		marginTop: 15,
		marginBottom: 15
	},

	subTitulo: {
		fontSize: 24,
		color: LARANJA,
		marginBottom: 50,
		marginTop: 10,
		marginLeft: 10
	},

	infos: {
		color: LARANJA,
		fontSize: 16,
		paddingHorizontal: 15,
		paddingVertical: 10
	},

	botao: {
		height: 50,
		minWidth: WIDTH * 0.5,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#888',
		alignSelf: 'center',
		backgroundColor: '#555',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 4,
		marginTop: 20
	},

	botaoTexto: {
		color: '#DDD',
		fontSize: 18,
		textAlign: 'center'
	}
})

export const stylesSplash = StyleSheet.create({
	container: {
		backgroundColor: '#333',
		height: HEIGHT,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export const stylesTestIntro = StyleSheet.create({
	container: {
		backgroundColor: '#333'
	},

	titulo: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 24,
		marginTop: 15,
		marginBottom: 15
	},

	subtitulo: {
		color: LARANJA,
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 20,
		marginTop: 60
	},

	botao: {
		height: 50,
		minWidth: WIDTH * 0.5,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#888',
		alignSelf: 'center',
		backgroundColor: '#555',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 4,
		marginTop: 10
	},

	botaoTexto: {
		color: '#DDD',
		fontSize: 18,
		textAlign: 'center'
	},

	img: {
		width: WIDTH,
		height: HEIGHT / 2
	}
})

export const stylesTest = StyleSheet.create({
	container: {
		backgroundColor: '#333',
		paddingHorizontal: 10
	},

	titulo: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 24,
		marginTop: 15,
		marginBottom: 15
	},

	usuario: {
		color: LARANJA,
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 20,
		marginTop: 20
	},

	tituloQnaf: {
		color: LARANJA,
		fontSize: 24,
		textAlign: 'center',
		marginTop: 20
	},

	conteudo: {
		marginBottom: 20,
		color: '#fff',
		fontSize: 18,
		textAlign: 'center'
	},

	conteudo2: {
		marginTop: 40,
		marginBottom: 20,
		color: '#fff',
		fontSize: 18,
		textAlign: 'left',
		paddingLeft: 15
	},

	opcao: {
		textAlign: 'left',
		color: '#fff',
		fontSize: 18,
		paddingLeft: 15
	},

	opcao2: {
		textAlign: 'left',
		color: '#fff',
		fontSize: 16,
		paddingLeft: 15
	},

	opcoes: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'space-between'
	},

	opcoes2: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},

	textoVermelho: {
		textAlign: 'left',
		color: '#f00',
		fontSize: 14,
		paddingLeft: 15
	},

	inputs: {
		marginLeft: 15,
		flex: 1,
		flexDirection: 'row'
	},

	input: {
		color: 'white',
		height: 45,
		width: 40,
		marginTop: -10,
		marginLeft: 5,
		fontSize: 18
	},

	botao: {
		height: 50,
		minWidth: WIDTH * 0.5,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#888',
		alignSelf: 'center',
		backgroundColor: '#555',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 4,
		marginTop: 10,
		marginBottom: 15
	},

	botaoTexto: {
		color: '#DDD',
		fontSize: 18,
		textAlign: 'center'
	}
})

export const stylesHomeCard = StyleSheet.create({
	card: {
		width: WIDTH,
		height: HEIGHT / 3.4
	},
	cardTextContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		paddingRight: 10,
		paddingBottom: 5
	},
	cardText1: {
		fontWeight: 'bold',
		fontSize: 22,
		color: '#fff'
	},
	cardText2: {
		fontSize: 22,
		color: '#fff'
	}
})

export const stylesIconeMenu = StyleSheet.create({
	container: {
		backgroundColor: '#333',
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10
	},

	icone: {
		height: 40,
		width: 40
	},

	titulo: {
		color: 'white',
		fontSize: 18,
		marginLeft: 10
	}
})

export const stylesMenu = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
	},

	container2: {
		backgroundColor: '#333',
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10
	},

	top: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	nome: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold'
	},

	perfil: {
		color: '#888',
		fontSize: 16
	},

	avatar: {
		height: 100,
		width: 100,
		borderRadius: 75,
		margin: 15
	},

	icone: {
		height: 40,
		width: 40
	},

	titulo: {
		color: 'white',
		fontSize: 18,
		marginLeft: 10
	}
})

export const stylesPesquisaSection = StyleSheet.create({
	container: { flexDirection: 'row', justifyContent: 'space-between' },
	title: { fontSize: 24, color: AZUL, padding: 20 },
	icon: { height: 35, width: 35, margin: 20 },
	borda: { borderBottomColor: '#555', borderBottomWidth: 1 },
	infos: {
		color: LARANJA,
		fontSize: 16,
		paddingHorizontal: 15,
		paddingVertical: 10
	}
})

export const stylesRowOctagrama = StyleSheet.create({
	infoCampoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderTopWidth: 1
	},

	infoCampo: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		color: LARANJA
	},

	containerLat: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: WIDTH * 0.25,
	}
})

export const stylesRowOctagramaTop = StyleSheet.create({
	infoCampoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderTopWidth: 1
	},

	infoCampo: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		color: LARANJA
	}
})

export const stylesTabelaIdade = StyleSheet.create({
	container: {
		height: HEIGHT,
		backgroundColor: '#333'
	},

	img: {
		width: WIDTH,
		height: HEIGHT / 2
	}
})

export const stylesemBreve = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(20, 20, 20, .7)',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	base: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		height: HEIGHT * 0.25,
		width: WIDTH * 0.8,
		width: 250,
		borderRadius: 15
	},
	texto: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black'
	}
})
