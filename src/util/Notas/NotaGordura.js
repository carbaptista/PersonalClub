const notaGordura = (idade, sexo, bf) => {
  let nota
  if (sexo) {
    if (idade < 40) {
      if (bf >= 39) nota = 0
      else if (bf >= 36.2 && bf < 39) nota = 1
      else if (bf >= 33.5 && bf < 36.2) nota = 2
      else if (bf >= 30.7 && bf < 33.5) nota = 3
      else if (bf >= 28 && bf < 30.7) nota = 4
      else if (bf >= 25.2 && bf < 28) nota = 5
      else if (bf >= 22.5 && bf < 25.2) nota = 6
      else if (bf >= 19.7 && bf < 22.5) nota = 7
      else if (bf >= 17 && bf < 19.7) nota = 8
      else if (bf >= 14.1 && bf < 17) nota = 9
      else if (bf < 14.1) nota = 10
    } else if (idade >= 40 && idade < 60) {
      if (bf >= 38) nota = 0
      else if (bf >= 35.6 && bf < 38) nota = 1
      else if (bf >= 33.2 && bf < 35.6) nota = 2
      else if (bf >= 30.8 && bf < 33.2) nota = 3
      else if (bf >= 28.3 && bf < 30.8) nota = 4
      else if (bf >= 25.9 && bf < 28.3) nota = 5
      else if (bf >= 23.5 && bf < 25.9) nota = 6
      else if (bf >= 21.1 && bf < 23.5) nota = 7
      else if (bf >= 18.6 && bf < 21.1) nota = 8
      else if (bf >= 16.1 && bf < 18.6) nota = 9
      else if (bf < 16.1) nota = 10
    } else if (idade >= 60) {
      if (bf >= 38) nota = 0
      else if (bf >= 35.8 && bf < 38) nota = 1
      else if (bf >= 33.6 && bf < 35.8) nota = 2
      else if (bf >= 31.4 && bf < 33.6) nota = 3
      else if (bf >= 29.2 && bf < 31.4) nota = 4
      else if (bf >= 27 && bf < 29.2) nota = 5
      else if (bf >= 24.8 && bf < 27) nota = 6
      else if (bf >= 22.6 && bf < 24.8) nota = 7
      else if (bf >= 20.4 && bf < 22.6) nota = 8
      else if (bf >= 18.1 && bf < 20.4) nota = 9
      else if (bf < 18.1) nota = 10
    }
  } else {
    if (idade < 40) {
      if (bf >= 39) nota = 0
      else if (bf >= 37.9 && bf < 39) nota = 1
      else if (bf >= 36.8 && bf < 37.9) nota = 2
      else if (bf >= 34.5 && bf < 36.8) nota = 3
      else if (bf >= 32.3 && bf < 34.5) nota = 4
      else if (bf >= 30 && bf < 32.3) nota = 5
      else if (bf >= 28.9 && bf < 30) nota = 6
      else if (bf >= 27.8 && bf < 28.9) nota = 7
      else if (bf >= 25.5 && bf < 27.8) nota = 8
      else if (bf >= 21.1 && bf < 25.5) nota = 9
      else if (bf < 21.1) nota = 10
    } else if (idade >= 40 && idade < 60) {
      if (bf >= 40) nota = 0
      else if (bf >= 38.9 && bf < 40) nota = 1
      else if (bf >= 37.9 && bf < 38.9) nota = 2
      else if (bf >= 35.8 && bf < 37.9) nota = 3
      else if (bf >= 33.6 && bf < 35.8) nota = 4
      else if (bf >= 31.5 && bf < 33.6) nota = 5
      else if (bf >= 30.4 && bf < 31.5) nota = 6
      else if (bf >= 29.4 && bf < 30.4) nota = 7
      else if (bf >= 27.3 && bf < 29.4) nota = 8
      else if (bf >= 23.1 && bf < 27.3) nota = 9
      else if (bf < 23.1) nota = 10
    } else if (idade >= 60) {
      if (bf >= 42) nota = 0
      else if (bf >= 40.9 && bf < 42) nota = 1
      else if (bf >= 39.8 && bf < 40.9) nota = 2
      else if (bf >= 37.5 && bf < 39.8) nota = 3
      else if (bf >= 35.3 && bf < 37.5) nota = 4
      else if (bf >= 33 && bf < 35.3) nota = 5
      else if (bf >= 31.9 && bf < 33) nota = 6
      else if (bf >= 30.8 && bf < 31.9) nota = 7
      else if (bf >= 28.5 && bf < 30.8) nota = 8
      else if (bf >= 24.1 && bf < 28.5) nota = 9
      else if (bf < 24.1) nota = 10
    }
  }
  return nota
}

export { notaGordura }
