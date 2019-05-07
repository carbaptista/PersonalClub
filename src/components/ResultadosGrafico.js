import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { StackedBarChart } from 'react-native-chart-kit';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const screenWidth = Dimensions.get('window').width

class ResultadosGrafico extends Component {

  componentDidMount() {
    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var docRef = db.collection('usuarios').doc(user.uid);
        docRef.get().then(doc => {
          if (doc.exists) {
            let dummy = { ...this.state.data }
            dummy.data[0][0] = doc.data().peso
            this.setState({
              data: dummy
            })
          }
        })
      }
    })
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
      labels: ['Janeiro', 'Fevereiro'],
      legend: [],
      data: [[1], [62]],
      barColors: ['#f38433', '#f38433'],
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.subTitulo}>{this.props.titulo}</Text>
        <StackedBarChart
          data={this.state.data}
          width={screenWidth}
          height={220}
          chartConfig={this.state.chartConfig}
        />
        <View style={styles.containerInfo}>
          <Text style={styles.infos}>Atual</Text>
          <Text style={styles.infos}>{this.state.data.data[0][0]}</Text>
        </View>
        <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        <View style={styles.containerInfo}>
          <Text style={styles.infos}>Peso Meta</Text>
          <Text style={styles.infos}>{this.state.data.data[0][0]}</Text>
        </View>
        <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        <View style={styles.containerInfo}>
          <Text style={styles.infos}>Peso Inicial</Text>
          <Text style={styles.infos}>{this.state.data.data[0][0]}</Text>
        </View>
        <View style={{ borderBottomColor: '#555', borderBottomWidth: 1, }} />
        <Button style={styles.botao2} mode='contained' onPress={() => Actions.pop()}>
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