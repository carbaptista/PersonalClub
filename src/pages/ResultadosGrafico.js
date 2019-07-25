import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { BarChart } from 'react-native-chart-kit'
import { stylesResultadosGrafico } from '../util/styles'
import '@firebase/auth'
import '@firebase/firestore'

const WIDTH = Dimensions.get('window').width
const LARANJA = '#f38534'

class ResultadosGrafico extends Component {
	componentWillMount() {
		const { ano, sem, data } = this.state
		const { dados } = this.props
		let meses1 = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
		let meses2 = ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
		let dummy = { ...data }
		sem == 1 ? (dummy.labels = meses1) : (dummy.labels = meses2)
		for (let dado in dados[ano][sem]) {
			dummy.datasets[0].data.push(dados[ano][sem][dado])
		}
		this.setState({ data: dummy })
	}

	state = {
		chartConfig: {
			backgroundColor: '#333',
			backgroundGradientFrom: '#333',
			backgroundGradientTo: '#333',
			color: (opacity = 1) => `rgba(245, 153, 72, ${opacity})`,
			strokeWidth: 2
		},

		data: {
			labels: [],
			datasets: [
				{
					data: []
				}
			],
			barColors: [LARANJA, LARANJA]
		},
		ano: this.props.ano,
		sem: this.props.sem
	}

	render() {
		return (
			<View style={stylesResultadosGrafico.container}>
				<Text style={stylesResultadosGrafico.subTitulo}>
					{this.props.titulo}
				</Text>
				<BarChart
					data={this.state.data}
					width={WIDTH}
					height={220}
					chartConfig={this.state.chartConfig}
				/>
				<View style={stylesResultadosGrafico.containerInfo}>
					<Text style={stylesResultadosGrafico.infos}>Atual</Text>
					<Text style={stylesResultadosGrafico.infos}>{this.props.dado}</Text>
				</View>
				<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
				<View style={stylesResultadosGrafico.containerInfo}>
					<Text style={stylesResultadosGrafico.infos}>
						{this.props.titulo} Meta
					</Text>
					<Text style={stylesResultadosGrafico.infos}>
						{this.props.dadoMeta}
					</Text>
				</View>
				<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
				<View style={stylesResultadosGrafico.containerInfo}>
					<Text style={stylesResultadosGrafico.infos}>
						{this.props.titulo} Inicial
					</Text>
					<Text style={stylesResultadosGrafico.infos}>
						{this.props.dadoInicial}
					</Text>
				</View>
				<View style={{ borderBottomColor: '#555', borderBottomWidth: 1 }} />
				<TouchableOpacity
					style={stylesResultadosGrafico.botao}
					onPress={() => Actions.pop()}>
					<Text style={stylesResultadosGrafico.botaoTexto}>Voltar</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default ResultadosGrafico
