import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

class TesteVelocidade extends Component {
  state = {
    checked: 'first',
    checked2: 'first',
    checked3: 'first',
    peso: "0",
    altura: "0",
    imc: "0",
  };

  render() {
    const { checked } = this.state;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.usuario}>Steve Rogers 98 anos</Text>
        <View style={styles.inputs}>
          <Text style={styles.conteudo}>Qual seu Peso?</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor='#aaa'
            value={this.state.peso}
            onChangeText={peso => this.setState({ peso })}
          />
          <Text style={styles.conteudo}>Kg</Text>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.conteudo}>Qual sua Altura?</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor='#aaa'
            value={this.state.altura}
            onChangeText={altura => this.setState({ altura })}
          />
          <Text style={styles.conteudo}>m</Text>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.conteudo}>IMC</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor='#aaa'
            value={this.state.imc}
            onChangeText={imc => this.setState({ imc })}
          />
          <Text style={styles.conteudo}>kg/m²</Text>
        </View>
        <Text style={styles.conteudo2}>
          Você não realiza exercício há quanto tempo?
        </Text>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Menos de 1 semana
          </Text>
          <RadioButton
            value='first'
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'first' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            De 1 a 4 semanas
          </Text>
          <RadioButton
            value='second'
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'second' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            De 1 a 3 meses
          </Text>
          <RadioButton
            value='third'
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'third' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            De 3 a 6 meses
          </Text>
          <RadioButton
            value='fourth'
            status={checked === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'fourth' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            De 6 a 12 meses
          </Text>
          <RadioButton
            value='fifth'
            status={checked === 'fifth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'fifth' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Mais de 12 meses
          </Text>
          <RadioButton
            value='sixth'
            status={checked === 'sixth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'sixth' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <Text style={styles.textoVermelho}>*se você está ativo pule esta pergunta</Text>
        <Text style={styles.conteudo2}>
          Que tipo de exercícios realiza?
        </Text>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Nenhum Treino Cárdiorrespiratório
          </Text>
          <RadioButton
            value='first'
            status={this.state.checked2 === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked2: 'first' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Danças
          </Text>
          <RadioButton
            value='second'
            status={this.state.checked2 === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked2: 'second' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Natação
          </Text>
          <RadioButton
            value='third'
            status={this.state.checked2 === 'third' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked2: 'third' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Bicicleta, Spinning ou Elípticos
          </Text>
          <RadioButton
            value='fourth'
            status={this.state.checked2 === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked2: 'fourth' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Caminhada
          </Text>
          <RadioButton
            value='fifth'
            status={this.state.checked2 === 'fifth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked2: 'fifth' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Corrida
          </Text>
          <RadioButton
            value='sixth'
            status={this.state.checked2 === 'sixth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked2: 'sixth' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <Text style={styles.textoVermelho}>*se você fizer mais de uma ativiadade pode assinalar</Text>
        <Text style={styles.conteudo2}>
          Qual a sua idade?
        </Text>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Menos de 30 anos
          </Text>
          <RadioButton
            value='first'
            status={this.state.checked3 === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked3: 'first' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            De 30 a 39 anos
          </Text>
          <RadioButton
            value='second'
            status={this.state.checked3 === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked3: 'second' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            De 40 a 49 anos
          </Text>
          <RadioButton
            value='third'
            status={this.state.checked3 === 'third' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked3: 'third' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            De 50 a 59 anos
          </Text>
          <RadioButton
            value='fourth'
            status={this.state.checked3 === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked3: 'fourth' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
        <View style={styles.opcoes}>
          <Text style={styles.opcao}>
            Mais de 60 anos
          </Text>
          <RadioButton
            value='fifth'
            status={this.state.checked3 === 'fifth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked3: 'fifth' }); }}
            color='white'
            uncheckedColor='white'
          />
        </View>
      </ScrollView>
    );
  }
}

export default TesteVelocidade;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },

  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
  },

  usuario: {
    color: '#f38433',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  conteudo: {
    marginBottom: 20,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

  conteudo2: {
    marginBottom: 20,
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    paddingLeft: 15,
  },

  opcao: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 18,
    paddingLeft: 15,
  },

  opcoes: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  textoVermelho: {
    textAlign: 'left',
    color: '#f00',
    fontSize: 14,
    paddingLeft: 15,
    marginBottom: 50,
  },

  inputs:{
    marginLeft: 15,
    flex: 1,
    flexDirection: 'row',
  },

  input: {
    color: 'white',
    height: 45,
    width: 40,
    marginTop: -10,
    marginLeft: 5,
    fontSize: 18,
  }
});