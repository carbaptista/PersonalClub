import React, { Component } from 'react'
import {
	TouchableOpacity,
	Text,
	View,
	StatusBar,
	FlatList,
	ScrollView,
	ActivityIndicator
} from 'react-native'
import fillDataAntro from '../util/fillDataAntro'
import fillDataFuncional from '../util/fillDataFuncional'
import {
	argsAntro,
	argsFuncional,
	dummyAntro,
	dummyFuncional
} from '../util/args'
import { stylesRes } from '../util/styles.js'
import firebase from '@firebase/app'
import PesquisaSection from '../components/PesquisaSection'
import { Actions } from 'react-native-router-flux'

const chartData = {}

class ResultadosPesquisa extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			error: '',
			dataAntro: [],
			dataFuncional: []
		}
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({
				loading: true
			})
			if (user) {
				this.unsubscribe = firebase
					.firestore()
					.doc(`/usuarios/${user.uid}`)
					.get()
					.then(doc => {
						chartData.sexo = doc.data().sexo
						chartData.nascimento = doc.data().nascimento
						chartData.peso = doc.data().peso
						chartData.bf = doc.data().bf
						chartData.imc = doc.data().imc
						chartData.itm = doc.data().itm
						chartData.muscular = doc.data().muscular
						chartData.vo2 = doc.data().vo2
						chartData.pccq = doc.data().pccq
						chartData.flex = doc.data().flex
						chartData.apoio = doc.data().apoio
						chartData.agachamento = doc.data().agachamento
						chartData.abdomen = doc.data().abdomen
						fillDataAntro(doc.data(), ...argsAntro)
						fillDataFuncional(doc.data(), ...argsFuncional)
						this.setState({
							dataAntro: dummyAntro,
							dataFuncional: dummyFuncional,
							loading: false,
							nome: doc.data().nome
						})
					})
					.catch(err => {
						this.setState({
							loading: false,
							error: err
						})
					})
			}
		})
	}

	componentWillUnmount(){
		this.unsubscribe()
	}

	renderSection = ({ item }) => {
		return (
			<PesquisaSection
				titulo={item.titulo}
				valor1={item.valor1}
				valor2={item.valor2}
				valor3={item.valor3}
				dados={item.dados}
				unidade={item.unidade}
			/>
		)
	}
	_keyExtractor = index => String(index)
	renderLists = () => {
		return (
			<View>
				<Text style={stylesRes.tituloResultados}>
					Resultados Antropometricos
				</Text>
				<FlatList
					data={dummyAntro}
					extraData={this.state.dataAntro}
					keyExtractor={this._keyExtractor}
					renderItem={this.renderSection}
				/>
				<Text style={stylesRes.tituloResultados}>
					Resultados Teste Funcional
				</Text>
				<FlatList
					data={dummyFuncional}
					extraData={this.state.dataFuncional}
					keyExtractor={this._keyExtractor}
					renderItem={this.renderSection}
				/>
			</View>
		)
	}

	render() {
		return (
			<ScrollView style={stylesRes.container}>
				<StatusBar backgroundColor="#333" />
				{!this.state.loading ? (
					this.renderLists()
				) : (
					<ActivityIndicator style={stylesRes.loader} size="large" />
				)}

				<TouchableOpacity
					style={stylesRes.botao}
					mode="contained"
					onPress={() =>
						Actions.push('octagrama', {
							peso: chartData.peso,
							bf: chartData.bf,
							imc: chartData.imc,
							itm: chartData.itm,
							muscular: chartData.muscular,
							vo2: chartData.vo2,
							pccq: chartData.pccq,
							nascimento: chartData.nascimento,
							sexo: chartData.sexo,
							flex: chartData.flex,
							agachamento: chartData.agachamento,
							apoio: chartData.apoio,
							abdomen: chartData.abdomen,
						})
					}>
					<Text style={stylesRes.botaoTexto}>Octagrama</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={stylesRes.botao}
					mode="contained"
					onPress={() =>
						Actions.push('testeVelIntro', {
							nome: this.state.nome,
							nascimento: chartData.nascimento
						})
					}>
					<Text style={stylesRes.botaoTexto}>Velocidade de Segurança</Text>
				</TouchableOpacity>
				<View style={{ height: 20 }} />
			</ScrollView>
		)
	}
}

export default ResultadosPesquisa
