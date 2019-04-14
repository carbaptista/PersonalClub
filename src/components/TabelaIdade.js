import React from 'react';
import { Image, Dimensions, StyleSheet, Text, View } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TabelaIdade = (props) => {
  const { src1, src2, src3, src4} = props;
  return (
    <View>
      <Image style={styles.img} source={require('../../img/fator_de_risco.png')}  resizeMode="contain"/>
      <Image style={styles.img}
        source={src1}
        resizeMode="contain"
      />
      <Image style={styles.img}
        source={src2}
        resizeMode="contain"
      />
      <Image style={styles.img}
        source={src3}
        resizeMode="contain"
      />
      <Image style={styles.img}
        source={src4}
        resizeMode="contain"
      />
      <Image style={styles.img} source={require('../../img/barra.png')}  resizeMode="contain"/>
      <Image style={styles.img} source={require('../../img/agachamento.png')}  resizeMode="contain"/>
    </View>
  );
}

export default TabelaIdade;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#333',
  },

  img: {
    width: width,
    height: height / 2,
  },
});

