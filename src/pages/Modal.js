import React, { Component } from 'react'
import { View, Text, Picker, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { stylesModal } from '../util/styles'

export default class Modal extends Component {
	PickerAnos() {
		let anos = []
		for (let ano in this.props.dados) {
			anos.push(<Picker.Item key={ano} label={ano} value={ano} />)
		}
		return anos
	}

	state = {
		ano: new Date().getFullYear(),
		sem: new Date().getUTCMonth() < 6 ? 1 : 2
	}

	render() {
		return (
			<View style={stylesModal.container}>
				<Text style={stylesModal.texto}>Escolha o ano e semestre</Text>
				<View style={stylesModal.containerPicker}>
					<Picker
						selectedValue={this.state.ano}
						style={stylesModal.picker1}
						onValueChange={itemValue => this.setState({ ano: itemValue })}>
						{this.PickerAnos()}
					</Picker>
					<Picker
						selectedValue={this.state.sem}
						style={stylesModal.picker2}
						onValueChange={itemValue => this.setState({ sem: itemValue })}>
						<Picker.Item label="1° Semestre" value={1} />
						<Picker.Item label="2° Semestre" value={2} />
					</Picker>
				</View>
				<TouchableOpacity
					style={stylesModal.botao}
					onPress={() =>
						Actions.push('resultadosGrafico', {
							titulo: this.props.titulo,
							dado: this.props.dado,
							dadoMeta: this.props.dadoMeta,
							dadoInicial: this.props.dadoInicial,
							dados: this.props.dados,
							ano: this.state.ano,
							sem: this.state.sem
						})
					}>
					<Text style={stylesModal.botaoTexto}>Consultar</Text>
				</TouchableOpacity>
				<View style={{ height: 10 }} />
				<TouchableOpacity
					style={stylesModal.botao}
					onPress={() => Actions.pop()}>
					<Text style={stylesModal.botaoTexto}>Voltar</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
