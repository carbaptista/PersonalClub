import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import {RadioButton} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import {stylesTest} from '../util/styles';

const LARANJA = '#F38534';

class TesteQNAF extends Component {
  state = {
    checked: 0,
    checked2: 0,
    checked3: 0,
    checked4: 0,
  };

  render() {
    return (
      <ScrollView style={stylesTest.container}>
        <Text style={stylesTest.tituloQnaf}>
          Questionário do Nível de Atividade Física
        </Text>
        <Text style={stylesTest.conteudo2}>
          Você realiza quantos minutos de exercício por semana?
        </Text>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Não realizo</Text>
          <RadioButton.Android
            value={0}
            status={this.state.checked === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked: 0});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Menos que 150</Text>
          <RadioButton.Android
            value={0.5}
            status={this.state.checked === 0.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked: 0.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>150 a 200</Text>
          <RadioButton.Android
            value={1}
            status={this.state.checked === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked: 1});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>200 a 250</Text>
          <RadioButton.Android
            value={1.5}
            status={this.state.checked === 1.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked: 1.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>250 a 300</Text>
          <RadioButton.Android
            value={2}
            status={this.state.checked === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked: 2});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Mais que 300</Text>
          <RadioButton.Android
            value={2.5}
            status={this.state.checked === 2.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked: 2.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>

        <Text style={stylesTest.conteudo2}>
          Como você se desloca para o Trabalho?
        </Text>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Diariamente de Carro ou de Moto</Text>
          <RadioButton.Android
            value={0}
            status={this.state.checked2 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked2: 0});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Vou de Transporte Público e{'\n'} ando mais 5 a 10 min até o
            trabalho{'\n'}
          </Text>
          <RadioButton.Android
            value={0.5}
            status={this.state.checked2 === 0.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked2: 0.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Vou de Transporte Público e{'\n'} ando mais 10 a 15 min até o
            trabalho{'\n'}
          </Text>
          <RadioButton.Android
            value={1}
            status={this.state.checked2 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked2: 1});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Vou de Bike ou a Pé para o{'\n'} Trabalho e dura mais de 10 a 20 min
            {'\n'}
          </Text>
          <RadioButton.Android
            value={1.5}
            status={this.state.checked2 === 1.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked2: 1.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Vou de Bike ou a Pé para o{'\n'} Trabalho e dura mais de 20 a 30 min
            {'\n'}
          </Text>
          <RadioButton.Android
            value={2}
            status={this.state.checked2 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked2: 2});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Vou de Bike ou a Pé para o{'\n'} Trabalho e dura mais de 30 min
            {'\n'}
          </Text>
          <RadioButton.Android
            value={2.5}
            status={this.state.checked2 === 2.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked2: 2.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>

        <Text style={stylesTest.conteudo2}>
          Como é sua atividade ocupacional?
        </Text>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Trabalho Sentado 100% do Tempo</Text>
          <RadioButton.Android
            value={0}
            status={this.state.checked3 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked3: 0});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Trabalho Sentado 75% do Tempo</Text>
          <RadioButton.Android
            value={0.5}
            status={this.state.checked3 === 0.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked3: 0.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Trabalho Sentado 50% do Tempo</Text>
          <RadioButton.Android
            value={1}
            status={this.state.checked3 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked3: 1});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Trabalho c/ Esforço Físico Leve</Text>
          <RadioButton.Android
            value={1.5}
            status={this.state.checked3 === 1.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked3: 1.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Trabalho c/ Esforço Físico Moderado
          </Text>
          <RadioButton.Android
            value={2}
            status={this.state.checked3 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked3: 2});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Trabalho c/ Esforço Físico Intenso
          </Text>
          <RadioButton.Android
            value={2.5}
            status={this.state.checked3 === 2.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked3: 2.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>

        <Text style={stylesTest.conteudo2}>
          Como são suas atividades domésticas?
        </Text>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Não faço nenhuma atividade doméstica
          </Text>
          <RadioButton.Android
            value={0}
            status={this.state.checked4 === 0 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked4: 0});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Só arrumo minha cama</Text>
          <RadioButton.Android
            value={0.5}
            status={this.state.checked4 === 0.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked4: 0.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>Arrumo minha cama e Lavo Louças</Text>
          <RadioButton.Android
            value={1}
            status={this.state.checked4 === 1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked4: 1});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            As atividades acima e passo a vassoura
          </Text>
          <RadioButton.Android
            value={1.5}
            status={this.state.checked4 === 1.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked4: 1.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            As atividades acima e ainda lavo{'\n'} meu carro
          </Text>
          <RadioButton.Android
            value={2}
            status={this.state.checked4 === 2 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked4: 2});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>
        <View style={stylesTest.opcoes2}>
          <Text style={stylesTest.opcao2}>
            Eu faço todas as atividades domésticas
          </Text>
          <RadioButton.Android
            value={2.5}
            status={this.state.checked4 === 2.5 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked4: 2.5});
            }}
            color={LARANJA}
            uncheckedColor="white"
          />
        </View>

        <TouchableOpacity
          style={stylesTest.botao}
          onPress={() => {
            const db = firebase.firestore();
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
                db.collection('usuarios')
                  .doc(user.uid)
                  .update({
                    qnaf:
                      this.state.checked +
                      this.state.checked2 +
                      this.state.checked3 +
                      this.state.checked4,
                  });
              }
            });
            Actions.pop();
          }}>
          <Text style={stylesTest.botaoTexto}>Finalizar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default TesteQNAF;
