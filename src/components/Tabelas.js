import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import TabelaIdade from './TabelaIdade';

const height = Dimensions.get('window').height;

const idade = 18;

idadeCheck = (idade) => {
  if (idade <= 29) {
    return (
      <TabelaIdade src1={require('../../img/apoio1.png')}
        src2={require('../../img/abdomenr1.png')}
        src3={require('../../img/abdomenp1.png')}
        src4={require('../../img/flexibilidade1.png')}
      />
    )
  }
  else if (idade >= 30 && idade <= 39) {
    return (
      <TabelaIdade src1={require('../../img/apoio2.png')}
        src2={require('../../img/abdomenr2.png')}
        src3={require('../../img/abdomenp2.png')}
        src4={require('../../img/flexibilidade2.png')}
      />
    );
  }
  else if (idade >= 40 && idade <= 49) {
    return (
      <TabelaIdade src1={require('../../img/apoio3.png')}
        src2={require('../../img/abdomenr3.png')}
        src3={require('../../img/abdomenp3.png')}
        src4={require('../../img/flexibilidade3.png')}
      />
    );
  }
  else if (idade >= 50 && idade <= 59) {
    return (
      <TabelaIdade src1={require('../../img/apoio4.png')}
        src2={require('../../img/abdomenr4.png')}
        src3={require('../../img/abdomenp4.png')}
        src4={require('../../img/flexibilidade4.png')}
      />
    );
  }
  else if (idade >= 60) {
    return (
      <TabelaIdade src1={require('../../img/apoio5.png')}
        src2={require('../../img/abdomenr5.png')}
        src3={require('../../img/abdomenp5.png')}
        src4={require('../../img/flexibilidade5.png')}
      />
    );
  }
}

class TabelaVelocidade extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        {idadeCheck(idade)}
      </ScrollView>
    );
  }
}

export default TabelaVelocidade;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#333',
  },
});
