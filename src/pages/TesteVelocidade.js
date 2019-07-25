import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import firebase from '@firebase/app'
import { RadioButton } from 'react-native-paper'
import { Actions } from 'react-native-router-flux'
import { stylesTest } from '../util/styles'

const LARANJA = '#f38534'

function getAge(DOB) {
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

class TesteVelocidade extends Component {
  state = {
    checked: 0,
    checked20Value: 0,
    checked21Value: 0,
    checked22Value: 0,
    checked23Value: 0,
    checked24Value: 0,
    checked25Value: 0,
    checked20: false,
    checked21: false,
    checked22: false,
    checked23: false,
    checked24: false,
    checked25: false,
    checked3: 4,
    checked4: 0,
    checked5: -1,
    checked6: -11,
    checked7: 2,
    checked8: 1,
    checked9: 1,
    checked10: -1,
    checked11: 1,
    checked12: 2,
    checked13: 2,
    notaImc: -4
  }

  replaceComma(str) {
    let res = str.replace(/,/g, '.')
    return res
  }

  calcImc(peso = 0, altura = 1) {
    if (peso == 0 || altura == 0) {
      return 0
    }
    let imc = peso / altura ** 2
    return imc.toFixed(0)
  }

  calcNotaImc(imc) {
    imc = this.calcImc(this.state.peso, this.state.altura)
    if (imc > 40) return -4
    if (imc >= 35 && imc < 40) return -3
    if (imc >= 30 && imc < 35) return -2
    if (imc >= 25 && imc < 30) return -1
    if (imc < 25) return 0
  }

  soma() {
    const {
      checked,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
      checked9,
      checked10,
      checked11,
      checked12,
      checked13,
      checked20Value,
      checked21Value,
      checked22Value,
      checked23Value,
      checked24Value,
      checked25Value,
      peso,
      altura
    } = this.state
    return (
      checked +
      checked3 +
      checked4 +
      checked5 +
      checked6 +
      checked7 +
      checked8 +
      checked9 +
      checked10 +
      checked11 +
      checked12 +
      checked13 +
      checked20Value +
      checked21Value +
      checked22Value +
      checked23Value +
      checked24Value +
      checked25Value +
      this.calcNotaImc(peso, altura)
    )
  }

  render() {
    const { checked, peso, altura } = this.state

    return (
      <ScrollView style={stylesTest.container}>
        <Text style={stylesTest.usuario}>{`${
          this.props.nome.split(' ')[0]
        } - ${getAge(this.props.nascimento)} anos`}</Text>
        <View style={stylesTest.inputs}>
          <Text style={stylesTest.conteudo}>Qual seu Peso?</Text>
          <TextInput
            onSubmitEditing={() => {
              this.secondTextInput.focus()
            }}
            returnKeyType="go"
            style={stylesTest.input}
            placeholder="0"
            placeholderTextColor="#aaa"
            value={this.state.peso}
            onChangeText={peso => this.setState({ peso })}
            keyboardType="numeric"
          />
          <Text style={stylesTest.conteudo}>Kg</Text>
        </View>
        <View style={stylesTest.inputs}>
          <Text style={stylesTest.conteudo}>Qual sua Altura?</Text>
          <TextInput
            ref={input => {
              this.secondTextInput = input
            }}
            style={stylesTest.input}
            placeholder="0"
            placeholderTextColor="#aaa"
            value={this.state.altura}
            onChangeText={altura =>
              this.setState({ altura: this.replaceComma(altura) })
            }
            keyboardType="numeric"
          />
          <Text style={stylesTest.conteudo}>m</Text>
        </View>
        <View style={stylesTest.inputs}>
          <Text style={stylesTest.conteudo}>
            IMC = {this.calcImc(peso, altura)} kg/m²
          </Text>
        </View>
        <Text style={stylesTest.conteudo2}>
          Você não realiza exercício há quanto tempo?
        </Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Menos de 1 semana</Text>
          <RadioButton
            value={0}
            status={checked === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: 0 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 1 a 4 semanas</Text>
          <RadioButton
            value={-1}
            status={checked === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 1 a 3 meses</Text>
          <RadioButton
            value={-2}
            status={checked === -2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: -2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 3 a 6 meses</Text>
          <RadioButton
            value={-3}
            status={checked === -3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: -3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 6 a 12 meses</Text>
          <RadioButton
            value={-4}
            status={checked === -4 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: -4 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Mais de 12 meses</Text>
          <RadioButton
            value={-5}
            status={checked === -5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: -5 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.textoVermelho}>
          *se você está ativo pule esta pergunta
        </Text>
        <Text style={stylesTest.conteudo2}>Que tipo de exercícios realiza?</Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Nenhum Treino Cárdiorrespiratório</Text>
          <RadioButton
            value={-3}
            status={this.state.checked20 === true ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({
                checked20Value: -3,
                checked20: !this.state.checked20
              })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Danças</Text>
          <RadioButton
            value={1}
            status={this.state.checked21 === true ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({
                checked21Value: 1,
                checked21: !this.state.checked21
              })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Natação</Text>
          <RadioButton
            value={1}
            status={this.state.checked22 === true ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({
                checked22Value: 1,
                checked22: !this.state.checked22
              })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Bicicleta, Spinning ou Elípticos</Text>
          <RadioButton
            value={1}
            status={this.state.checked23 === true ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({
                checked23Value: 1,
                checked23: !this.state.checked23
              })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Caminhada</Text>
          <RadioButton
            value={1}
            status={this.state.checked24 === true ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({
                checked24Value: 1,
                checked24: !this.state.checked24
              })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Corrida</Text>
          <RadioButton
            value={3}
            status={this.state.checked25 === true ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({
                checked25Value: 3,
                checked25: !this.state.checked25
              })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.textoVermelho}>
          *se você fizer mais de uma ativiadade pode assinalar
        </Text>
        <Text style={stylesTest.conteudo2}>Qual a sua idade?</Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Menos de 30 anos</Text>
          <RadioButton
            value={4}
            status={this.state.checked3 === 4 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked3: 4 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 30 a 39 anos</Text>
          <RadioButton
            value={3}
            status={this.state.checked3 === 3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked3: 3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 40 a 49 anos</Text>
          <RadioButton
            value={2}
            status={this.state.checked3 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked3: 2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 50 a 59 anos</Text>
          <RadioButton
            value={1}
            status={this.state.checked3 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked3: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Mais de 60 anos</Text>
          <RadioButton
            value={0}
            status={this.state.checked3 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked3: 0 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>Você sabe o valor de seu VO2 máx?</Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Não sei</Text>
          <RadioButton
            value={0}
            status={this.state.checked4 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked4: 0 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Abaixo de 30 ml.kg.min</Text>
          <RadioButton
            value={-1}
            status={this.state.checked4 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked4: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 31 a 40 ml.kg.min</Text>
          <RadioButton
            value={1}
            status={this.state.checked4 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked4: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 41 a 50 ml.kg.min</Text>
          <RadioButton
            value={2}
            status={this.state.checked4 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked4: 2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Mais de 50 ml.kg.min</Text>
          <RadioButton
            value={3}
            status={this.state.checked4 === 3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked4: 3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>
          Quantos minutos por semana você realiza de Treinos
          Cardiorrespiratórios?
        </Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Nenhum minuto por semana</Text>
          <RadioButton
            value={-1}
            status={this.state.checked5 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked5: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Menos de 30 minutos por semana</Text>
          <RadioButton
            value={1}
            status={this.state.checked5 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked5: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 31 a 60 minutos por semana</Text>
          <RadioButton
            value={2}
            status={this.state.checked5 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked5: 2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 61 a 120 minutos por semana</Text>
          <RadioButton
            value={3}
            status={this.state.checked5 === 3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked5: 3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Mais de 120 minutos por semana</Text>
          <RadioButton
            value={4}
            status={this.state.checked5 === 4 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked5: 4 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>Quantas vezes por semana?</Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Nenhuma vez por semana</Text>
          <RadioButton
            value={-11}
            status={this.state.checked6 === -11 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked6: -11 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Menos de 2 vezes por semana</Text>
          <RadioButton
            value={1}
            status={this.state.checked6 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked6: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 2 a 4 vezes por semana</Text>
          <RadioButton
            value={2}
            status={this.state.checked6 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked6: 2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Mais de 4 vezes</Text>
          <RadioButton
            value={3}
            status={this.state.checked6 === 3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked6: 3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>
          Qual a sua Frequência Cardíaca de Repouso?
        </Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Abaixo de 60 bpm</Text>
          <RadioButton
            value={2}
            status={this.state.checked7 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked7: 2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 61 a 70 bpm</Text>
          <RadioButton
            value={1}
            status={this.state.checked7 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked7: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 71 a 80 bpm</Text>
          <RadioButton
            value={0}
            status={this.state.checked7 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked7: 0 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 81 a 90 bpm</Text>
          <RadioButton
            value={-1}
            status={this.state.checked7 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked7: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 91 a 100 bpm</Text>
          <RadioButton
            value={-2}
            status={this.state.checked7 === -2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked7: -2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>Você fuma?</Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Não</Text>
          <RadioButton
            value={1}
            status={this.state.checked8 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked8: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, de 1 a 10 cigarros por dia</Text>
          <RadioButton
            value={-1}
            status={this.state.checked8 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked8: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, de 11 a 20 cigarros por dia</Text>
          <RadioButton
            value={-2}
            status={this.state.checked8 === -2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked8: -2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, de 21 a 30 cigarros por dia</Text>
          <RadioButton
            value={-3}
            status={this.state.checked8 === -3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked8: -3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, mais de 30 cigarros por dia</Text>
          <RadioButton
            value={-4}
            status={this.state.checked8 === -4 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked8: -4 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>
          Você tem história familiar de cardiopatia?
        </Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Não</Text>
          <RadioButton
            value={1}
            status={this.state.checked9 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked9: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, 1 parente cardiopata</Text>
          <RadioButton
            value={-1}
            status={this.state.checked9 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked9: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, 2 parentes cardiopatas</Text>
          <RadioButton
            value={-2}
            status={this.state.checked9 === -2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked9: -2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, 3 parentes cardiopatas</Text>
          <RadioButton
            value={-3}
            status={this.state.checked9 === -3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked9: -3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, 4 parentes cardiopatas</Text>
          <RadioButton
            value={-4}
            status={this.state.checked9 === -4 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked9: -4 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Sim, 5 parentes cardiopatas</Text>
          <RadioButton
            value={-5}
            status={this.state.checked9 === -5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked9: -5 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>
          Quanto tempo de treino cardiorrespiratórios por sessão?
        </Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Nenhum minuto por sessão</Text>
          <RadioButton
            value={-1}
            status={this.state.checked10 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked10: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Até 20 minutos por sessão</Text>
          <RadioButton
            value={1}
            status={this.state.checked10 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked10: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 20 a 40 minutos por sessão</Text>
          <RadioButton
            value={2}
            status={this.state.checked10 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked10: 2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Mais de 40 minutos por sessão</Text>
          <RadioButton
            value={3}
            status={this.state.checked10 === 3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked10: 3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>
          Qual a sua Pressão Arterial Sistólica?
        </Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Menor que 119 mm Hg</Text>
          <RadioButton
            value={1}
            status={this.state.checked11 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked11: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>120 a 139 mmHg</Text>
          <RadioButton
            value={0}
            status={this.state.checked11 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked11: 0 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>140 a 159 mmHg</Text>
          <RadioButton
            value={-1}
            status={this.state.checked11 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked11: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>160 a 179 mmHg</Text>
          <RadioButton
            value={-2}
            status={this.state.checked11 === -2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked11: -2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>180 a 199 mmHg</Text>
          <RadioButton
            value={-3}
            status={this.state.checked11 === -3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked11: -3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Maior que 200 mmHg</Text>
          <RadioButton
            value={-4}
            status={this.state.checked11 === -4 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked11: -4 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>
          Qual a sua Pressão Arterial Diastólica?
        </Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Menor que 60 mm Hg</Text>
          <RadioButton
            value={2}
            status={this.state.checked12 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked12: 2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>61 a 70 mmHg</Text>
          <RadioButton
            value={1}
            status={this.state.checked12 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked12: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>71 a 80 mmHg</Text>
          <RadioButton
            value={0}
            status={this.state.checked12 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked12: 0 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>81 a 90 mmHg</Text>
          <RadioButton
            value={-1}
            status={this.state.checked12 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked12: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>91 a 100 mmHg</Text>
          <RadioButton
            value={-2}
            status={this.state.checked12 === -2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked12: -2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>> 100 mmHg</Text>
          <RadioButton
            value={-3}
            status={this.state.checked12 === -3 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked12: -3 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <Text style={stylesTest.conteudo2}>Você sabe o valor do seu %Gordura?</Text>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Não sei</Text>
          <RadioButton
            value={2}
            status={this.state.checked13 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked13: 2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Abaixo de 13%</Text>
          <RadioButton
            value={1}
            status={this.state.checked13 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked13: 1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 14 a 18%</Text>
          <RadioButton
            value={0}
            status={this.state.checked13 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked13: 0 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>De 19 a 24%</Text>
          <RadioButton
            value={-1}
            status={this.state.checked13 === -1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked13: -1 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes}>
          <Text style={stylesTest.opcao}>Mais de 25%</Text>
          <RadioButton
            value={-2}
            status={this.state.checked13 === -2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked13: -2 })
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>

        <TouchableOpacity
          style={stylesTest.botao}
          onPress={() => {
            const db = firebase.firestore()
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
                db.collection('usuarios')
                  .doc(user.uid)
                  .update({
                    velSeg: this.soma()
                  })
              }
            })
            Actions.pop()
          }}
        >
          <Text style={stylesTest.botaoTexto}>Finalizar</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default TesteVelocidade


