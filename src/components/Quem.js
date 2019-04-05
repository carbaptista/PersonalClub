import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Quem extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../img/teste1.png')} />
        <Text style={styles.titulo}>Quem Somos</Text>
        <Text style={styles.texto}> {'\u00A0'} {'\u00A0'} Após 23 anos da nossa sociedade, acumulando diversas experiências em mais de 34 anos no mercado do fitness, na gestão de diversos modelos e tamanhos de academias, na preparação de atletas de alto desempenho esportivo e de diversos cantores,  ministrando cursos e palestras por todo Brasil e atuando diretamente na área acadêmica nas maiores unversidades da Bahia, em 2006 resolvemos formatar o modelo de serviço do Personal Club, para uma demanda de clientes que buscavam um serviço com alta qualidade técnica e com um valor acessível.
{"\n"} {"\n"}
 {'\u00A0'} {'\u00A0'} Somos hoje uma empresa com experiência de mercado, onde buscamos constantemente evoluir no nosso modelo de negócio. O nosso maior diferencial será  sempre a qualidade do nosso atendimento, procurando sempre preserver um serviço de alto padrão técnico, de forma que a prescrição e o controle do treinamento nitidamente se destaque e se diferencie da média do Mercado, respeitando o Princípio Cientifico da Individualidade Biológica que será sempre nossa principal bandeira, na qual se baseiam todas as estratégias de treinamento, seguindo os critérios de segurança, eficiência e eficácia que irão não só facilitar  a aquisição dos resultados do treinamento, mas principalmente a preservação da saúde integral dos nossos clientes.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#333',
  },

  img: {
    width: width,
    height: height / 3,
  },

  titulo: {
    paddingTop: 15,
    color: '#fff',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  texto: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    padding: 5,
    textAlign: 'left',
  }
});

export default Quem;
