const notaVo2 = (idade, sexo, vo2) => {
  let nota
  if (sexo) {
    if (idade <= 14) {
      if (vo2 >= 64) nota = 10
      else if (vo2 >= 58.3 && vo2 < 64) nota = 9
      else if (vo2 >= 52.7 && vo2 < 58.3) nota = 8
      else if (vo2 >= 47 && vo2 < 52.7) nota = 7
      else if (vo2 >= 42.3 && vo2 < 47) nota = 6
      else if (vo2 >= 37.7 && vo2 < 42.3) nota = 5
      else if (vo2 >= 33 && vo2 < 37.7) nota = 4
      else if (vo2 >= 29 && vo2 < 33) nota = 3
      else if (vo2 >= 25.1 && vo2 < 29) nota = 2
      else if (vo2 >= 21.1 && vo2 < 25.1) nota = 1
      else if (vo2 < 21.1) nota = 0
    } else if (idade >= 15 && idade < 20) {
      if (vo2 >= 68) nota = 10
      else if (vo2 >= 61.7 && vo2 < 68) nota = 9
      else if (vo2 >= 55.3 && vo2 < 61.7) nota = 8
      else if (vo2 >= 49 && vo2 < 55.3) nota = 7
      else if (vo2 >= 44.3 && vo2 < 49) nota = 6
      else if (vo2 >= 39.7 && vo2 < 44.3) nota = 5
      else if (vo2 >= 35 && vo2 < 39.7) nota = 4
      else if (vo2 >= 30.7 && vo2 < 35) nota = 3
      else if (vo2 >= 26.4 && vo2 < 30.7) nota = 2
      else if (vo2 >= 22.1 && vo2 < 26.4) nota = 1
      else if (vo2 < 22.1) nota = 0
    } else if (idade >= 20 && idade < 30) {
      if (vo2 >= 64) nota = 10
      else if (vo2 >= 52.9 && vo2 < 64) nota = 9
      else if (vo2 >= 47.2 && vo2 < 52.9) nota = 8
      else if (vo2 >= 44.4 && vo2 < 47.2) nota = 7
      else if (vo2 >= 41.6 && vo2 < 44.4) nota = 6
      else if (vo2 >= 36 && vo2 < 41.6) nota = 5
      else if (vo2 >= 30.4 && vo2 < 36) nota = 4
      else if (vo2 >= 24.7 && vo2 < 30.4) nota = 3
      else if (vo2 >= 21.9 && vo2 < 24.7) nota = 2
      else if (vo2 >= 19.1 && vo2 < 21.9) nota = 1
      else if (vo2 < 19.1) nota = 0
    } else if (idade >= 30 && idade < 40) {
      if (vo2 >= 60) nota = 10
      else if (vo2 >= 49.5 && vo2 < 60) nota = 9
      else if (vo2 >= 44.1 && vo2 < 49.5) nota = 8
      else if (vo2 >= 41.5 && vo2 < 44.1) nota = 7
      else if (vo2 >= 38.8 && vo2 < 41.5) nota = 6
      else if (vo2 >= 33.5 && vo2 < 38.8) nota = 5
      else if (vo2 >= 28.2 && vo2 < 33.5) nota = 4
      else if (vo2 >= 22.8 && vo2 < 28.2) nota = 3
      else if (vo2 >= 20.2 && vo2 < 22.8) nota = 2
      else if (vo2 >= 17.5 && vo2 < 20.2) nota = 1
      else if (vo2 < 17.5) nota = 0
    } else if (idade >= 40 && idade < 50) {
      if (vo2 >= 56) nota = 10
      else if (vo2 >= 45.6 && vo2 < 56) nota = 9
      else if (vo2 >= 40.3 && vo2 < 45.6) nota = 8
      else if (vo2 >= 37.7 && vo2 < 40.3) nota = 7
      else if (vo2 >= 35.1 && vo2 < 37.7) nota = 6
      else if (vo2 >= 29.8 && vo2 < 35.1) nota = 5
      else if (vo2 >= 24.5 && vo2 < 29.8) nota = 4
      else if (vo2 >= 19.3 && vo2 < 24.5) nota = 3
      else if (vo2 >= 16.6 && vo2 < 19.3) nota = 2
      else if (vo2 >= 14 && vo2 < 16.6) nota = 1
      else if (vo2 < 14) nota = 0
    } else if (idade >= 50 && idade < 60) {
      if (vo2 >= 53) nota = 10
      else if (vo2 >= 43.3 && vo2 < 53) nota = 9
      else if (vo2 >= 38.4 && vo2 < 43.3) nota = 8
      else if (vo2 >= 36 && vo2 < 38.4) nota = 7
      else if (vo2 >= 33.6 && vo2 < 36) nota = 6
      else if (vo2 >= 28.7 && vo2 < 33.6) nota = 5
      else if (vo2 >= 23.8 && vo2 < 28.7) nota = 4
      else if (vo2 >= 18.9 && vo2 < 23.8) nota = 3
      else if (vo2 >= 16.4 && vo2 < 18.9) nota = 2
      else if (vo2 >= 14 && vo2 < 16.4) nota = 1
      else if (vo2 < 14) nota = 0
    } else if (idade > 60) {
      if (vo2 >= 51) nota = 10
      else if (vo2 >= 41.8 && vo2 < 51) nota = 9
      else if (vo2 >= 37.2 && vo2 < 41.8) nota = 8
      else if (vo2 >= 34.9 && vo2 < 37.2) nota = 7
      else if (vo2 >= 32.6 && vo2 < 34.9) nota = 6
      else if (vo2 >= 27.9 && vo2 < 32.6) nota = 5
      else if (vo2 >= 23.3 && vo2 < 27.9) nota = 4
      else if (vo2 >= 18.6 && vo2 < 23.3) nota = 3
      else if (vo2 >= 16.3 && vo2 < 18.6) nota = 2
      else if (vo2 >= 14 && vo2 < 16.3) nota = 1
      else if (vo2 < 14) nota = 0
    }
  } else {
    if (idade <= 14) {
      if (vo2 >= 61) nota = 10
      else if (vo2 >= 56.3 && vo2 < 61) nota = 9
      else if (vo2 >= 51.7 && vo2 < 56.3) nota = 8
      else if (vo2 >= 47 && vo2 < 51.7) nota = 7
      else if (vo2 >= 42.3 && vo2 < 47) nota = 6
      else if (vo2 >= 37.7 && vo2 < 42.3) nota = 5
      else if (vo2 >= 33 && vo2 < 37.7) nota = 4
      else if (vo2 >= 29 && vo2 < 33) nota = 3
      else if (vo2 >= 25.1 && vo2 < 29) nota = 2
      else if (vo2 >= 21.1 && vo2 < 25.1) nota = 1
      else if (vo2 < 21.1) nota = 0
    } else if (idade >= 15 && idade < 20) {
      if (vo2 >= 61) nota = 10
      else if (vo2 >= 55.3 && vo2 < 61) nota = 9
      else if (vo2 >= 49.7 && vo2 < 55.3) nota = 8
      else if (vo2 >= 44 && vo2 < 49.7) nota = 7
      else if (vo2 >= 39.3 && vo2 < 44) nota = 6
      else if (vo2 >= 34.5 && vo2 < 39.3) nota = 5
      else if (vo2 >= 29.8 && vo2 < 34.5) nota = 4
      else if (vo2 >= 26.9 && vo2 < 29.8) nota = 3
      else if (vo2 >= 24 && vo2 < 26.9) nota = 2
      else if (vo2 >= 21 && vo2 < 24) nota = 1
      else if (vo2 < 21) nota = 0
    } else if (idade >= 20 && idade < 30) {
      if (vo2 >= 58) nota = 10
      else if (vo2 >= 48.4 && vo2 < 58) nota = 9
      else if (vo2 >= 43.5 && vo2 < 48.4) nota = 8
      else if (vo2 >= 41 && vo2 < 43.5) nota = 7
      else if (vo2 >= 38.6 && vo2 < 41) nota = 6
      else if (vo2 >= 33.7 && vo2 < 38.6) nota = 5
      else if (vo2 >= 28.9 && vo2 < 33.7) nota = 4
      else if (vo2 >= 24 && vo2 < 28.9) nota = 3
      else if (vo2 >= 21.5 && vo2 < 24) nota = 2
      else if (vo2 >= 19.1 && vo2 < 21.5) nota = 1
      else if (vo2 < 19.1) nota = 0
    } else if (idade >= 30 && idade < 40) {
      if (vo2 >= 54) nota = 10
      else if (vo2 >= 45 && vo2 < 54) nota = 9
      else if (vo2 >= 40.4 && vo2 < 45) nota = 8
      else if (vo2 >= 38.1 && vo2 < 40.4) nota = 7
      else if (vo2 >= 35.8 && vo2 < 38.1) nota = 6
      else if (vo2 >= 31.2 && vo2 < 35.8) nota = 5
      else if (vo2 >= 26.7 && vo2 < 31.2) nota = 4
      else if (vo2 >= 22.1 && vo2 < 26.7) nota = 3
      else if (vo2 >= 19.8 && vo2 < 22.1) nota = 2
      else if (vo2 >= 17.5 && vo2 < 19.8) nota = 1
      else if (vo2 < 17.5) nota = 0
    } else if (idade >= 40 && idade < 50) {
      if (vo2 >= 484) nota = 10
      else if (vo2 >= 39.6 && vo2 < 484) nota = 9
      else if (vo2 >= 35.3 && vo2 < 39.6) nota = 8
      else if (vo2 >= 33.2 && vo2 < 35.3) nota = 7
      else if (vo2 >= 31.1 && vo2 < 33.2) nota = 6
      else if (vo2 >= 26.8 && vo2 < 31.1) nota = 5
      else if (vo2 >= 22.5 && vo2 < 26.8) nota = 4
      else if (vo2 >= 18.3 && vo2 < 22.5) nota = 3
      else if (vo2 >= 16.1 && vo2 < 18.3) nota = 2
      else if (vo2 >= 14 && vo2 < 16.1) nota = 1
      else if (vo2 < 14) nota = 0
    } else if (idade >= 50 && idade < 60) {
      if (vo2 >= 46) nota = 10
      else if (vo2 >= 38.1 && vo2 < 46) nota = 9
      else if (vo2 >= 34.1 && vo2 < 38.1) nota = 8
      else if (vo2 >= 32.1 && vo2 < 34.1) nota = 7
      else if (vo2 >= 30.1 && vo2 < 32.1) nota = 6
      else if (vo2 >= 26 && vo2 < 30.1) nota = 5
      else if (vo2 >= 22 && vo2 < 26) nota = 4
      else if (vo2 >= 18 && vo2 < 22) nota = 3
      else if (vo2 >= 16 && vo2 < 18) nota = 2
      else if (vo2 >= 14 && vo2 < 16) nota = 1
      else if (vo2 < 14) nota = 0
    } else if (idade > 60) {
      if (vo2 >= 45) nota = 10
      else if (vo2 >= 37.3 && vo2 < 45) nota = 9
      else if (vo2 >= 33.4 && vo2 < 37.3) nota = 8
      else if (vo2 >= 31.5 && vo2 < 33.4) nota = 7
      else if (vo2 >= 29.6 && vo2 < 31.5) nota = 6
      else if (vo2 >= 25.7 && vo2 < 29.6) nota = 5
      else if (vo2 >= 21.8 && vo2 < 25.7) nota = 4
      else if (vo2 >= 17.9 && vo2 < 21.8) nota = 3
      else if (vo2 >= 15.9 && vo2 < 17.9) nota = 2
      else if (vo2 >= 14 && vo2 < 15.9) nota = 1
      else if (vo2 < 14) nota = 0
    }
  }
  return nota
}

export { notaVo2 }
