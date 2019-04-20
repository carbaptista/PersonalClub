import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';
import Actions from 'react-native-router-flux';
import { Button } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width

const data = {
  labels: ['Janeiro'],
  legend: [],
  data: [[74.6]],
  barColors: ['#f38433', '#f38433'],
}

const chartConfig = {
  backgroundColor: '#333',
  backgroundGradientFrom: '#333',
  backgroundGradientTo: '#333',
  color: (opacity = 1) => `rgba(245, 153, 72, ${opacity})`,
  strokeWidth: 2 // optional, default 3
}

class ResultadosGrafico extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.subTitulo}>Peso</Text>
        <StackedBarChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
        <View style={styles.containerInfo}>
          <Text style={styles.infos}>Atual</Text>
          <Text style={styles.infos}>74.6</Text>
        </View>
        <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        <View style={styles.containerInfo}>
          <Text style={styles.infos}>Peso Meta</Text>
          <Text style={styles.infos}>74.6</Text>
        </View>
        <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        <View style={styles.containerInfo}>
          <Text style={styles.infos}>Peso Inicial</Text>
          <Text style={styles.infos}>74.6</Text>
        </View>
        <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        <Button style={styles.botao2} mode='contained' onPress={() => Actions.pop('resultadosPesquisa')}>
          Voltar
        </Button>
      </View>
    );
  }
}

export default ResultadosGrafico;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  containerInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
  },

  subTitulo: {
    fontSize: 24,
    color: '#f38433',
    marginBottom: 50,
    marginTop: 10,
    marginLeft: 10,
  },

  infos: {
    color: '#F59948',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  botao2: {
    height: 50,
    backgroundColor: '#555',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#888',
    textAlign: 'center',
    paddingTop: 5,
    alignSelf: 'center',
    marginVertical: 30,
    paddingHorizontal: 50,
  },
});

