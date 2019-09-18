import React, { Component } from 'react'
import {
	VictoryGroup,
	VictoryArea,
	VictoryPolarAxis,
	VictoryChart,
	VictoryTheme,
	VictoryLabel
} from 'victory-native'
import { ScrollView, View } from 'react-native'
import { stylesOctagrama } from '../util/styles'
import RowOctagramaTop from '../components/RowOctagramaTop'
import RowOctagrama from '../components/RowOctagrama'
import {
	notaAbdomen,
	notaAgachamento,
	notaApoio,
	notaFlex,
	notaGordura,
	notaImc,
	notaMuscular,
	notaPCCQ,
	notaVo2
} from '../util/Notas'

const LARANJA = '#f38534'

class Octagrama extends Component {

	getAge = DOB => {
		var dateParts = DOB.split('/')
		var today = new Date()
		var birthDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
		var age = today.getFullYear() - birthDate.getFullYear()
		var m = today.getMonth() - birthDate.getMonth()
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age = age - 1
		}
		return age
	}

	constructor(props) {
		super(props)
		this.state = {
			data: this.processData(this.state.dados),
			maxima: this.getMaxima(this.state.dados)
		}
	}

	getMaxima(data) {
		const groupedData = Object.keys(data[0]).reduce((memo, key) => {
			memo[key] = data.map(d => d[key])
			return memo
		}, {})
		return Object.keys(groupedData).reduce((memo, key) => {
			memo[key] = Math.max(...groupedData[key])
			return memo
		}, {})
	}

	state = {
		dados: [
			{
				IMC: notaImc(this.props.imc),
				MUSCULAR: notaMuscular(
					this.getAge(this.props.nascimento),
					this.props.sexo,
					this.props.muscular
				),
				GORDURA: notaGordura(
					this.getAge(this.props.nascimento),
					this.props.sexo,
					this.props.bf
				),
				FLEXIBILIDADE: notaFlex(
					this.getAge(this.props.nascimento),
					this.props.sexo,
					this.props.flex
				),
				AGACHAMENTO: notaAgachamento(this.props.agachamento),
				ABDOMEN: notaAbdomen(
					this.getAge(this.props.nascimento),
					this.props.sexo,
					this.props.abdomen
				),
				APOIO: notaApoio(
					this.getAge(this.props.nascimento),
					this.props.sexo,
					this.props.apoio
				),
				PCCQ: notaPCCQ(
					this.getAge(this.props.nascimento),
					this.props.sexo,
					this.props.pccq
				),
				VO2: notaVo2(
					this.getAge(this.props.nascimento),
					this.props.sexo,
					this.props.vo2
				)
			},
			{
				IMC: notaImc(this.props.imc) + 1,
				MUSCULAR:
					notaMuscular(
						this.getAge(this.props.nascimento),
						this.props.sexo,
						this.props.muscular
					) + 1,
				GORDURA:
					notaGordura(
						this.getAge(this.props.nascimento),
						this.props.sexo,
						this.props.bf
					) + 1,
				FLEXIBILIDADE:
					notaFlex(
						this.getAge(this.props.nascimento),
						this.props.sexo,
						this.props.flex
					) + 1,
				AGACHAMENTO: notaAgachamento(this.props.agachamento) + 1,
				ABDOMEN:
					notaAbdomen(
						this.getAge(this.props.nascimento),
						this.props.sexo,
						this.props.abdomen
					) + 1,
				APOIO:
					notaApoio(
						this.getAge(this.props.nascimento),
						this.props.sexo,
						this.props.apoio
					) + 1,
				PCCQ:
					notaPCCQ(
						this.getAge(this.props.nascimento),
						this.props.sexo,
						this.props.pccq
					) + 1,
				VO2:
					notaVo2(
						this.getAge(this.props.nascimento),
						this.props.sexo,
						this.props.vo2
					) + 1
			},
			{
				IMC: 10,
				MUSCULAR: 10,
				GORDURA: 10,
				FLEXIBILIDADE: 10,
				AGACHAMENTO: 10,
				ABDOMEN: 10,
				APOIO: 10,
				PCCQ: 10,
				VO2: 10
			}
		]
	}

	processData(data) {
		const maxByGroup = this.getMaxima(data)
		const makeDataArray = d => {
			return Object.keys(d).map(key => {
				return { x: key, y: d[key] / maxByGroup[key] }
			})
		}
		return data.map(datum => makeDataArray(datum))
	}

	pontuacao(a, b, c, d, e, f, g, h, i) {
		return a + b + c + d + e + f + g + h + i
	}

	classificacao(score) {
		if (score <= 16) return 'Muito Fraca'
		if (score > 16 && score <= 33) return 'Fraca'
		if (score > 33 && score <= 50) return 'Média'
		if (score > 50 && score <= 67) return 'Muito Boa'
		if (score > 67) return 'Excelente'
	}

	render() {
		const {
			sexo,
			muscular,
			bf,
			imc,
			pccq,
			flex,
			agachamento,
			abdomen,
			apoio,
			vo2
		} = this.props
		const notaI = notaImc(imc)
		const notaMus = notaMuscular(this.getAge(this.props.nascimento), sexo, muscular)
		const notaBf = notaGordura(this.getAge(this.props.nascimento), sexo, bf)
		const notaFle = notaFlex(this.getAge(this.props.nascimento), sexo, flex)
		const notaAga = notaAgachamento(agachamento)
		const notaAbd = notaAbdomen(this.getAge(this.props.nascimento), sexo, abdomen)
		const notaApo = notaApoio(this.getAge(this.props.nascimento), sexo, apoio)
		const notaPccq = notaPCCQ(this.getAge(this.props.nascimento), sexo, pccq)
		const notaVo = notaVo2(this.getAge(this.props.nascimento), sexo, vo2)

		const pontos = this.pontuacao(
			notaI,
			notaMus,
			notaBf,
			notaFle,
			notaAga,
			notaAbd,
			notaApo,
			notaPccq,
			notaVo
		)
		return (
			<ScrollView style={stylesOctagrama.container}>
				<View pointerEvents="none">
					<VictoryChart polar theme={VictoryTheme.material} domain={{ y: [0, 1] }}>
						<VictoryGroup
							colorScale={['#DDD', LARANJA, 'transparent']}
							style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}>
							{this.state.data.map((data, i) => {
								return <VictoryArea key={i} data={data} />
							})}
						</VictoryGroup>
						{Object.keys(this.state.maxima).map((key, i) => {
							return (
								<VictoryPolarAxis
									key={i}
									dependentAxis
									style={{
										axisLabel: { padding: 10, fill: 'white', fontSize: 8 },
										axis: { stroke: 'none' },
										grid: { stroke: LARANJA, strokeWidth: 0.25, opacity: 0.5 }
									}}
									tickLabelComponent={
										<VictoryLabel
											labelPlacement='vertical'
											style={{ fill: 'white', fontSize: 8 }}
										/>
									}
									labelPlacement='perpendicular'
									axisValue={i + 1}
									label={key}
									tickFormat={t => Math.ceil(t * this.state.maxima[key])}
									tickValues={[0.25, 0.5, 0.75]}
								/>
							)
						})}
						<VictoryPolarAxis
							labelPlacement='parallel'
							tickFormat={() => ''}
							style={{
								axis: { stroke: 'none' },
								grid: { stroke: LARANJA, opacity: 0.5 }
							}}
						/>
					</VictoryChart>
				</View>
				<RowOctagramaTop
					corBorda={LARANJA}
					pontuacao={`${pontos} de 80`}
					fonteTamanho={24}
					titulo='Pontuação'
				/>
				<RowOctagramaTop
					corBorda={LARANJA}
					pontuacao={this.classificacao(pontos)}
					fonteTamanho={24}
					titulo='Classificação'
				/>
				<RowOctagrama
					corBorda={LARANJA}
					valorAtual='Atual'
					valorIdeal='Ideal'
					fonteTamanho={14}
					titulo=''
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaI}
					valorIdeal={`${notaI == 10 ? notaI : notaI + 1}`}
					fonteTamanho={14}
					titulo='IMC'
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaMus}
					valorIdeal={`${notaMus == 10 ? notaMus : notaMus + 1}`}
					fonteTamanho={14}
					titulo='% Muscular'
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaBf}
					valorIdeal={`${notaBf == 10 ? notaBf : notaBf + 1}`}
					fonteTamanho={14}
					titulo='% Gordura'
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaFle}
					valorIdeal={`${notaFle == 10 ? notaFle : notaFle + 1}`}
					fonteTamanho={14}
					titulo='Flexibilidade'
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaAga}
					valorIdeal={`${notaAga == 10 ? notaAga : notaAga + 1}`}
					fonteTamanho={14}
					titulo='Agachamento'
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaAbd}
					valorIdeal={`${notaAbd == 10 ? notaAbd : notaAbd + 1}`}
					fonteTamanho={14}
					titulo='Abdomen 1 minuto'
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaApo}
					valorIdeal={`${notaApo == 10 ? notaApo : notaApo + 1}`}
					fonteTamanho={14}
					titulo='Apoio ao Solo'
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaPccq}
					valorIdeal={`${notaPccq == 10 ? notaPccq : notaPccq + 1}`}
					fonteTamanho={14}
					titulo='PCCQ'
				/>
				<RowOctagrama
					corBorda='#DDD'
					valorAtual={notaVo}
					valorIdeal={`${notaVo == 10 ? notaVo : notaVo + 1}`}
					fonteTamanho={14}
					titulo='VO₂ Max'
				/>
			</ScrollView>
		)
	}
}

export default Octagrama
