const notaApoio = (idade, sexo, apoio) => {
  let nota
  if (sexo) {
    if (idade < 30) {
      if (apoio >= 42) nota = 10
      else if (apoio >= 40 && apoio < 42) nota = 9
      else if (apoio >= 37 && apoio < 40) nota = 8
      else if (apoio >= 34 && apoio < 37) nota = 7
      else if (apoio >= 31 && apoio < 34) nota = 6
      else if (apoio >= 28 && apoio < 31) nota = 5
      else if (apoio >= 25 && apoio < 28) nota = 4
      else if (apoio >= 22 && apoio < 25) nota = 3
      else if (apoio >= 20 && apoio < 22) nota = 2
      else if (apoio >= 17 && apoio < 20) nota = 1
      else if (apoio < 17) nota = 0
    } else if (idade >= 30 && idade < 40) {
      if (apoio >= 33) nota = 10
      else if (apoio >= 31 && apoio < 33) nota = 9
      else if (apoio >= 28 && apoio < 31) nota = 8
      else if (apoio >= 25 && apoio < 28) nota = 7
      else if (apoio >= 22 && apoio < 25) nota = 6
      else if (apoio >= 20 && apoio < 22) nota = 5
      else if (apoio >= 18 && apoio < 20) nota = 4
      else if (apoio >= 16 && apoio < 18) nota = 3
      else if (apoio >= 14 && apoio < 16) nota = 2
      else if (apoio >= 12 && apoio < 14) nota = 1
      else if (apoio < 12) nota = 0
    } else if (idade >= 40 && idade < 50) {
      if (apoio >= 26) nota = 10
      else if (apoio >= 24 && apoio < 26) nota = 9
      else if (apoio >= 22 && apoio < 24) nota = 8
      else if (apoio >= 20 && apoio < 22) nota = 7
      else if (apoio >= 18 && apoio < 20) nota = 6
      else if (apoio >= 16 && apoio < 18) nota = 5
      else if (apoio >= 14 && apoio < 16) nota = 4
      else if (apoio >= 12 && apoio < 14) nota = 3
      else if (apoio >= 10 && apoio < 12) nota = 2
      else if (apoio >= 8 && apoio < 10) nota = 1
      else if (apoio < 8) nota = 0
    } else if (idade >= 50 && idade < 60) {
      if (apoio >= 24) nota = 10
      else if (apoio >= 21 && apoio < 24) nota = 9
      else if (apoio >= 19 && apoio < 21) nota = 8
      else if (apoio >= 17 && apoio < 19) nota = 7
      else if (apoio >= 15 && apoio < 17) nota = 6
      else if (apoio >= 13 && apoio < 15) nota = 5
      else if (apoio >= 11 && apoio < 13) nota = 4
      else if (apoio >= 9 && apoio < 11) nota = 3
      else if (apoio >= 7 && apoio < 9) nota = 2
      else if (apoio >= 5 && apoio < 7) nota = 1
      else if (apoio < 5) nota = 0
    } else if (idade >= 60) {
      if (apoio >= 24) nota = 10
      else if (apoio >= 20 && apoio < 24) nota = 9
      else if (apoio >= 18 && apoio < 20) nota = 8
      else if (apoio >= 16 && apoio < 18) nota = 7
      else if (apoio >= 14 && apoio < 16) nota = 6
      else if (apoio >= 12 && apoio < 14) nota = 5
      else if (apoio >= 10 && apoio < 12) nota = 4
      else if (apoio >= 8 && apoio < 10) nota = 3
      else if (apoio >= 6 && apoio < 8) nota = 2
      else if (apoio >= 4 && apoio < 6) nota = 1
      else if (apoio < 4) nota = 0
    }
  } else {
    if (idade < 30) {
      if (apoio >= 31) nota = 10
      else if (apoio >= 27 && apoio < 31) nota = 9
      else if (apoio >= 25 && apoio < 27) nota = 8
      else if (apoio >= 23 && apoio < 25) nota = 7
      else if (apoio >= 19 && apoio < 23) nota = 6
      else if (apoio >= 17 && apoio < 19) nota = 5
      else if (apoio >= 15 && apoio < 17) nota = 4
      else if (apoio >= 13 && apoio < 15) nota = 3
      else if (apoio >= 11 && apoio < 13) nota = 2
      else if (apoio >= 9 && apoio < 11) nota = 1
      else if (apoio < 9) nota = 0
    } else if (idade >= 30 && idade < 40) {
      if (apoio >= 27) nota = 10
      else if (apoio >= 25 && apoio < 27) nota = 9
      else if (apoio >= 23 && apoio < 25) nota = 8
      else if (apoio >= 21 && apoio < 23) nota = 7
      else if (apoio >= 19 && apoio < 21) nota = 6
      else if (apoio >= 17 && apoio < 19) nota = 5
      else if (apoio >= 15 && apoio < 17) nota = 4
      else if (apoio >= 13 && apoio < 15) nota = 3
      else if (apoio >= 11 && apoio < 13) nota = 2
      else if (apoio >= 9 && apoio < 11) nota = 1
      else if (apoio < 9) nota = 0
    } else if (idade >= 40 && idade < 50) {
      if (apoio >= 25) nota = 10
      else if (apoio >= 23 && apoio < 25) nota = 9
      else if (apoio >= 22 && apoio < 23) nota = 8
      else if (apoio >= 21 && apoio < 22) nota = 7
      else if (apoio >= 20 && apoio < 21) nota = 6
      else if (apoio >= 19 && apoio < 20) nota = 5
      else if (apoio >= 18 && apoio < 19) nota = 4
      else if (apoio >= 17 && apoio < 18) nota = 3
      else if (apoio >= 16 && apoio < 17) nota = 2
      else if (apoio >= 9 && apoio < 16) nota = 1
      else if (apoio < 9) nota = 0
    } else if (idade >= 50 && idade < 60) {
      if (apoio >= 19) nota = 10
      else if (apoio >= 17 && apoio < 19) nota = 9
      else if (apoio >= 16 && apoio < 17) nota = 8
      else if (apoio >= 15 && apoio < 16) nota = 7
      else if (apoio >= 14 && apoio < 15) nota = 6
      else if (apoio >= 12 && apoio < 14) nota = 5
      else if (apoio >= 11 && apoio < 12) nota = 4
      else if (apoio >= 10 && apoio < 11) nota = 3
      else if (apoio >= 4 && apoio < 10) nota = 2
      else if (apoio >= 3 && apoio < 4) nota = 1
      else if (apoio < 3) nota = 0
    } else if (idade >= 60) {
      if (apoio >= 18) nota = 10
      else if (apoio >= 16 && apoio < 18) nota = 9
      else if (apoio >= 15 && apoio < 16) nota = 8
      else if (apoio >= 14 && apoio < 15) nota = 7
      else if (apoio >= 13 && apoio < 14) nota = 6
      else if (apoio >= 12 && apoio < 13) nota = 5
      else if (apoio >= 11 && apoio < 12) nota = 4
      else if (apoio >= 10 && apoio < 11) nota = 3
      else if (apoio >= 9 && apoio < 10) nota = 2
      else if (apoio >= 2 && apoio < 9) nota = 1
      else if (apoio < 2) nota = 0
    }
  }
  return nota
}

export { notaApoio }
