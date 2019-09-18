import React from 'react'
import { ScrollView, Dimensions } from 'react-native'
import TabelaIdade from '../components/TabelaIdade'

const height = Dimensions.get('window').height

export default (TabelaVelocidade = props => {
  idadeCheck = idade => {
    if (idade <= 29) return 1
    if (idade >= 30 && idade <= 39) return 2
    if (idade >= 40 && idade <= 49) return 3
    if (idade >= 50 && idade <= 59) return 4
    if (idade >= 60) return 5
  }

  sexoCheck = sexo => {
    if (sexo) return 'm'
    return 'f'
  }

  const suffix = this.sexoCheck(props.sexo) + this.idadeCheck(props.idade)

  return (
    <ScrollView style={{ height, backgroundColor: '#333' }}>
      <TabelaIdade
        src1={{ uri: 'apoio' + suffix }}
        src2={{ uri: 'abdomenr' + suffix }}
        src3={{ uri: 'abdomenp' + suffix }}
        src4={{ uri: 'flex' + suffix }}
      />
    </ScrollView>
  )
})
