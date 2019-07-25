const notaFlex = (idade, sexo, flex) => {
  let nota
  if (sexo) {
    if (idade < 30) {
      if (flex >= 48) nota = 10
      else if (flex >= 45 && flex < 48) nota = 9
      else if (flex >= 41 && flex < 45) nota = 8
      else if (flex >= 38 && flex < 41) nota = 7
      else if (flex >= 36 && flex < 38) nota = 6
      else if (flex >= 34 && flex < 36) nota = 5
      else if (flex >= 32 && flex < 34) nota = 4
      else if (flex >= 30 && flex < 32) nota = 3
      else if (flex >= 28 && flex < 30) nota = 2
      else if (flex >= 26 && flex < 28) nota = 1
      else if (flex < 26) nota = 0
    } else if (idade >= 30 && idade < 40) {
      if (flex >= 46) nota = 10
      else if (flex >= 43 && flex < 46) nota = 9
      else if (flex >= 39 && flex < 43) nota = 8
      else if (flex >= 36 && flex < 39) nota = 7
      else if (flex >= 34 && flex < 36) nota = 6
      else if (flex >= 32 && flex < 34) nota = 5
      else if (flex >= 30 && flex < 32) nota = 4
      else if (flex >= 28 && flex < 30) nota = 3
      else if (flex >= 26 && flex < 28) nota = 2
      else if (flex >= 24 && flex < 26) nota = 1
      else if (flex < 24) nota = 0
    } else if (idade >= 40 && idade < 50) {
      if (flex >= 43) nota = 10
      else if (flex >= 40 && flex < 43) nota = 9
      else if (flex >= 36 && flex < 40) nota = 8
      else if (flex >= 33 && flex < 36) nota = 7
      else if (flex >= 31 && flex < 33) nota = 6
      else if (flex >= 29 && flex < 31) nota = 5
      else if (flex >= 27 && flex < 29) nota = 4
      else if (flex >= 25 && flex < 27) nota = 3
      else if (flex >= 23 && flex < 25) nota = 2
      else if (flex >= 21 && flex < 23) nota = 1
      else if (flex < 21) nota = 0
    } else if (idade >= 50 && idade < 60) {
      if (flex >= 41) nota = 10
      else if (flex >= 38 && flex < 41) nota = 9
      else if (flex >= 34 && flex < 38) nota = 8
      else if (flex >= 31 && flex < 34) nota = 7
      else if (flex >= 29 && flex < 31) nota = 6
      else if (flex >= 27 && flex < 29) nota = 5
      else if (flex >= 25 && flex < 27) nota = 4
      else if (flex >= 23 && flex < 25) nota = 3
      else if (flex >= 21 && flex < 23) nota = 2
      else if (flex >= 19 && flex < 21) nota = 1
      else if (flex < 19) nota = 0
    } else if (idade >= 60) {
      if (flex >= 38) nota = 10
      else if (flex >= 35 && flex < 38) nota = 9
      else if (flex >= 31 && flex < 35) nota = 8
      else if (flex >= 28 && flex < 31) nota = 7
      else if (flex >= 26 && flex < 28) nota = 6
      else if (flex >= 24 && flex < 26) nota = 5
      else if (flex >= 22 && flex < 24) nota = 4
      else if (flex >= 20 && flex < 22) nota = 3
      else if (flex >= 18 && flex < 20) nota = 2
      else if (flex >= 16 && flex < 18) nota = 1
      else if (flex < 16) nota = 0
    }
  } else {
    if (idade < 30) {
      if (flex >= 41) nota = 10
      else if (flex >= 39.7 && flex < 41) nota = 9
      else if (flex >= 38.3 && flex < 39.7) nota = 8
      else if (flex >= 37 && flex < 38.3) nota = 7
      else if (flex >= 35.7 && flex < 37) nota = 6
      else if (flex >= 34.3 && flex < 35.7) nota = 5
      else if (flex >= 33 && flex < 34.3) nota = 4
      else if (flex >= 30.7 && flex < 33) nota = 3
      else if (flex >= 28.3 && flex < 30.7) nota = 2
      else if (flex >= 26 && flex < 28.3) nota = 1
      else if (flex < 26) nota = 0
    } else if (idade >= 30 && idade < 40) {
      if (flex >= 40) nota = 10
      else if (flex >= 38.7 && flex < 40) nota = 9
      else if (flex >= 37.3 && flex < 38.7) nota = 8
      else if (flex >= 36 && flex < 37.3) nota = 7
      else if (flex >= 34.7 && flex < 36) nota = 6
      else if (flex >= 33.3 && flex < 34.7) nota = 5
      else if (flex >= 32 && flex < 33.3) nota = 4
      else if (flex >= 29.7 && flex < 32) nota = 3
      else if (flex >= 27.3 && flex < 29.7) nota = 2
      else if (flex >= 25 && flex < 27.3) nota = 1
      else if (flex < 25) nota = 0
    } else if (idade >= 40 && idade < 50) {
      if (flex >= 38) nota = 10
      else if (flex >= 36.7 && flex < 38) nota = 9
      else if (flex >= 35.3 && flex < 36.7) nota = 8
      else if (flex >= 34 && flex < 35.3) nota = 7
      else if (flex >= 32.7 && flex < 34) nota = 6
      else if (flex >= 31.3 && flex < 32.7) nota = 5
      else if (flex >= 30 && flex < 31.3) nota = 4
      else if (flex >= 28 && flex < 30) nota = 3
      else if (flex >= 26 && flex < 28) nota = 2
      else if (flex >= 24 && flex < 26) nota = 1
      else if (flex < 24) nota = 0
    } else if (idade >= 50 && idade < 60) {
      if (flex >= 38) nota = 10
      else if (flex >= 36.3 && flex < 38) nota = 9
      else if (flex >= 34.7 && flex < 36.3) nota = 8
      else if (flex >= 33 && flex < 34.7) nota = 7
      else if (flex >= 32 && flex < 33) nota = 6
      else if (flex >= 31 && flex < 32) nota = 5
      else if (flex >= 30 && flex < 31) nota = 4
      else if (flex >= 27.7 && flex < 30) nota = 3
      else if (flex >= 25.3 && flex < 27.7) nota = 2
      else if (flex >= 23 && flex < 25.3) nota = 1
      else if (flex < 23) nota = 0
    } else if (idade >= 60) {
      if (flex >= 35) nota = 10
      else if (flex >= 33.7 && flex < 35) nota = 9
      else if (flex >= 32.3 && flex < 33.7) nota = 8
      else if (flex >= 31 && flex < 32.3) nota = 7
      else if (flex >= 29.7 && flex < 31) nota = 6
      else if (flex >= 28.3 && flex < 29.7) nota = 5
      else if (flex >= 27 && flex < 28.3) nota = 4
      else if (flex >= 25.7 && flex < 27) nota = 3
      else if (flex >= 24.3 && flex < 25.7) nota = 2
      else if (flex >= 23 && flex < 24.3) nota = 1
      else if (flex < 23) nota = 0
    }
  }
  return nota
}

export { notaFlex }
