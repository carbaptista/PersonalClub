import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class PesquisaSection extends Component {

  render() {
    return (
      <View>
        <View>
          <View style={styles.container}>
            <Text style={styles.titulo}>{this.props.titulo}</Text>
            <TouchableHighlight>
              <Image style={styles.icon} source={require('../../img/graphIcon.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.container}>
            <Text style={styles.infos}>{this.props.info1}</Text>
            <Text style={styles.infos}>{this.props.valor1}</Text>
          </View>
          <View style={{borderBottomColor: '#555', borderBottomWidth: 1, }}/>
          <View style={styles.container}>
            <Text style={styles.infos}>{this.props.info2}</Text>
            <Text style={styles.infos}>{this.props.valor2}</Text>
          </View>
          <View style={{borderBottomColor: '#555', borderBottomWidth: 1, }}/>
          <View style={styles.container}>
            <Text style={styles.infos}>{this.props.info3}</Text>
            <Text style={styles.infos}>{this.props.valor3}</Text>
          </View>
          <View style={{borderBottomColor: '#555', borderBottomWidth: 1, }}/>
        </View>
      </View>
    );
  }
}

export default PesquisaSection;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titulo: {
    fontSize: 24,
    color: '#F59948',
    padding: 20,
  },

  infos: {
    color: '#F59948',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  icon: {
    height: 35,
    width: 35,
    margin: 20,
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
    marginBottom: 15,
  },
});