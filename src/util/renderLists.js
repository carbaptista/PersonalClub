import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import PesquisaSection from '../components/PesquisaSection'
import {
	dummyAntro,
	dummyFuncional
} from '../util/args'

export default function renderLists() {
	return (
		<View>
			<Text style={styles.tituloResultados}>Resultados Antropometricos</Text>
			<FlatList
				data={dummyAntro}
				extraData={this.state.dataAntro}
				keyExtractor={index => String(index)}
				renderItem={({ item }) => (
					<PesquisaSection
						titulo={item.titulo}
						valor1={item.valor1}
						valor2={item.valor2}
						valor3={item.valor3}
						dados={item.dados}
						unidade={item.unidade}
					/>
				)}
			/>
			<Text style={styles.tituloResultados}>Resultados Teste Funcional</Text>
			<FlatList
				data={dummyFuncional}
				extraData={this.state.dataFuncional}
				keyExtractor={index => String(index)}
				renderItem={({ item }) => (
					<PesquisaSection
						titulo={item.titulo}
						valor1={item.valor1}
						valor2={item.valor2}
						valor3={item.valor3}
						dados={item.dados}
						unidade={item.unidade}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	tituloResultados: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 22,
		marginTop: 20,
		marginBottom: 15
	}
})
