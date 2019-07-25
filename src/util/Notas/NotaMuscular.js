const notaMuscular = (idade, sexo, muscular) => {
  let nota
  if (sexo) {
    if (idade < 40) {
      if (muscular >= 44.1) nota = 10
      else if (muscular >= 42.2 && muscular < 44.1) nota = 9
      else if (muscular >= 41.1 && muscular < 42.2) nota = 8
      else if (muscular >= 40 && muscular < 41.1) nota = 7
      else if (muscular >= 38.9 && muscular < 40) nota = 6
      else if (muscular >= 37.8 && muscular < 38.9) nota = 5
      else if (muscular >= 36.7 && muscular < 37.8) nota = 4
      else if (muscular >= 35.6 && muscular < 36.7) nota = 3
      else if (muscular >= 34.5 && muscular < 35.6) nota = 2
      else if (muscular >= 33.4 && muscular < 34.5) nota = 1
      else if (muscular < 33.4) nota = 0
    } else if (idade >= 40 && idade < 60) {
      if (muscular >= 43.9) nota = 10
      else if (muscular >= 42 && muscular < 43.9) nota = 9
      else if (muscular >= 40.9 && muscular < 42) nota = 8
      else if (muscular >= 39.8 && muscular < 40.9) nota = 7
      else if (muscular >= 38.7 && muscular < 39.8) nota = 6
      else if (muscular >= 37.6 && muscular < 38.7) nota = 5
      else if (muscular >= 36.5 && muscular < 37.6) nota = 4
      else if (muscular >= 35.4 && muscular < 36.5) nota = 3
      else if (muscular >= 34.3 && muscular < 35.4) nota = 2
      else if (muscular >= 33.2 && muscular < 34.3) nota = 1
      else if (muscular < 33.2) nota = 0
    } else if (idade > 60) {
      if (muscular >= 43.9) nota = 10
      else if (muscular >= 41.8 && muscular < 43.9) nota = 9
      else if (muscular >= 40.7 && muscular < 41.8) nota = 8
      else if (muscular >= 39.6 && muscular < 40.7) nota = 7
      else if (muscular >= 38.5 && muscular < 39.6) nota = 6
      else if (muscular >= 37.4 && muscular < 38.5) nota = 5
      else if (muscular >= 36.3 && muscular < 37.4) nota = 4
      else if (muscular >= 35.2 && muscular < 36.3) nota = 3
      else if (muscular >= 34.1 && muscular < 35.2) nota = 2
      else if (muscular >= 33 && muscular < 34.1) nota = 1
      else if (muscular < 33) nota = 0
    }
  } else {
    if (idade < 40) {
      if (muscular >= 35.4) nota = 10
      else if (muscular >= 33.2 && muscular < 35.4) nota = 9
      else if (muscular >= 32.1 && muscular < 33.2) nota = 8
      else if (muscular >= 31 && muscular < 32.1) nota = 7
      else if (muscular >= 29.9 && muscular < 31) nota = 6
      else if (muscular >= 28.8 && muscular < 29.9) nota = 5
      else if (muscular >= 27.7 && muscular < 28.8) nota = 4
      else if (muscular >= 26.6 && muscular < 27.7) nota = 3
      else if (muscular >= 25.5 && muscular < 26.6) nota = 2
      else if (muscular >= 24.4 && muscular < 25.5) nota = 1
      else if (muscular < 24.4) nota = 0
    } else if (idade >= 40 && idade < 60) {
      if (muscular >= 35.2) nota = 10
      else if (muscular >= 33 && muscular < 35.2) nota = 9
      else if (muscular >= 31.9 && muscular < 33) nota = 8
      else if (muscular >= 30.8 && muscular < 31.9) nota = 7
      else if (muscular >= 29.7 && muscular < 30.8) nota = 6
      else if (muscular >= 28.6 && muscular < 29.7) nota = 5
      else if (muscular >= 27.5 && muscular < 28.6) nota = 4
      else if (muscular >= 26.4 && muscular < 27.5) nota = 3
      else if (muscular >= 25.3 && muscular < 26.4) nota = 2
      else if (muscular >= 24.2 && muscular < 25.3) nota = 1
      else if (muscular < 24.2) nota = 0
    } else if (idade > 60) {
      if (muscular >= 35) nota = 10
      else if (muscular >= 32.8 && muscular < 35) nota = 9
      else if (muscular >= 31.7 && muscular < 32.8) nota = 8
      else if (muscular >= 30.8 && muscular < 31.7) nota = 7
      else if (muscular >= 29.6 && muscular < 30.8) nota = 6
      else if (muscular >= 28.4 && muscular < 29.6) nota = 5
      else if (muscular >= 27.3 && muscular < 28.4) nota = 4
      else if (muscular >= 26.2 && muscular < 27.3) nota = 3
      else if (muscular >= 25.1 && muscular < 26.2) nota = 2
      else if (muscular >= 24 && muscular < 25.1) nota = 1
      else if (muscular < 24) nota = 0
    }
  }
  return nota
}

export { notaMuscular }
