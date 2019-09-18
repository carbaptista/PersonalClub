const notaAbdomen = (idade, sexo, abdomen) => {
  let nota
  if (sexo) {
    if (idade < 30) {
      if (abdomen >= 48) nota = 10
      else if (abdomen >= 45 && abdomen < 48) nota = 9
      else if (abdomen >= 42 && abdomen < 45) nota = 8
      else if (abdomen >= 39 && abdomen < 42) nota = 7
      else if (abdomen >= 36 && abdomen < 39) nota = 6
      else if (abdomen >= 33 && abdomen < 36) nota = 5
      else if (abdomen >= 30 && abdomen < 33) nota = 4
      else if (abdomen >= 27 && abdomen < 30) nota = 3
      else if (abdomen >= 24 && abdomen < 27) nota = 2
      else if (abdomen >= 21 && abdomen < 24) nota = 1
      else if (abdomen < 21) nota = 0
    } else if (idade >= 30 && idade < 40) {
      if (abdomen >= 40) nota = 10
      else if (abdomen >= 37 && abdomen < 40) nota = 9
      else if (abdomen >= 34 && abdomen < 37) nota = 8
      else if (abdomen >= 31 && abdomen < 34) nota = 7
      else if (abdomen >= 28 && abdomen < 31) nota = 6
      else if (abdomen >= 25 && abdomen < 28) nota = 5
      else if (abdomen >= 22 && abdomen < 25) nota = 4
      else if (abdomen >= 19 && abdomen < 22) nota = 3
      else if (abdomen >= 16 && abdomen < 19) nota = 2
      else if (abdomen >= 13 && abdomen < 16) nota = 1
      else if (abdomen < 13) nota = 0
    } else if (idade >= 40 && idade < 50) {
      if (abdomen >= 35) nota = 10
      else if (abdomen >= 32 && abdomen < 35) nota = 9
      else if (abdomen >= 29 && abdomen < 32) nota = 8
      else if (abdomen >= 26 && abdomen < 29) nota = 7
      else if (abdomen >= 23 && abdomen < 26) nota = 6
      else if (abdomen >= 20 && abdomen < 23) nota = 5
      else if (abdomen >= 17 && abdomen < 20) nota = 4
      else if (abdomen >= 14 && abdomen < 17) nota = 3
      else if (abdomen >= 11 && abdomen < 14) nota = 2
      else if (abdomen >= 8 && abdomen < 11) nota = 1
      else if (abdomen < 8) nota = 0
    } else if (idade >= 50 && idade < 60) {
      if (abdomen >= 32) nota = 10
      else if (abdomen >= 29 && abdomen < 32) nota = 9
      else if (abdomen >= 26 && abdomen < 29) nota = 8
      else if (abdomen >= 23 && abdomen < 26) nota = 7
      else if (abdomen >= 20 && abdomen < 23) nota = 6
      else if (abdomen >= 17 && abdomen < 20) nota = 5
      else if (abdomen >= 14 && abdomen < 17) nota = 4
      else if (abdomen >= 11 && abdomen < 14) nota = 3
      else if (abdomen >= 8 && abdomen < 11) nota = 2
      else if (abdomen >= 5 && abdomen < 8) nota = 1
      else if (abdomen < 5) nota = 0
    } else if (idade >= 60) {
      if (abdomen >= 28) nota = 10
      else if (abdomen >= 25 && abdomen < 28) nota = 9
      else if (abdomen >= 22 && abdomen < 25) nota = 8
      else if (abdomen >= 19 && abdomen < 22) nota = 7
      else if (abdomen >= 16 && abdomen < 19) nota = 6
      else if (abdomen >= 13 && abdomen < 16) nota = 5
      else if (abdomen >= 10 && abdomen < 13) nota = 4
      else if (abdomen >= 7 && abdomen < 10) nota = 3
      else if (abdomen >= 4 && abdomen < 7) nota = 2
      else if (abdomen >= 1 && abdomen < 4) nota = 1
      else if (abdomen === 0) nota = 0
    }
  } else {
    if (idade < 30) {
      if (abdomen >= 44) nota = 10
      else if (abdomen >= 41 && abdomen < 44) nota = 9
      else if (abdomen >= 40 && abdomen < 41) nota = 8
      else if (abdomen >= 39 && abdomen < 40) nota = 7
      else if (abdomen >= 38 && abdomen < 39) nota = 6
      else if (abdomen >= 37 && abdomen < 38) nota = 5
      else if (abdomen >= 36 && abdomen < 37) nota = 4
      else if (abdomen >= 35 && abdomen < 36) nota = 3
      else if (abdomen >= 34 && abdomen < 35) nota = 2
      else if (abdomen >= 33 && abdomen < 34) nota = 1
      else if (abdomen < 33) nota = 0
    } else if (idade >= 30 && idade < 40) {
      if (abdomen >= 36) nota = 10
      else if (abdomen >= 29 && abdomen < 36) nota = 9
      else if (abdomen >= 28 && abdomen < 29) nota = 8
      else if (abdomen >= 27 && abdomen < 28) nota = 7
      else if (abdomen >= 26 && abdomen < 27) nota = 6
      else if (abdomen >= 25 && abdomen < 26) nota = 5
      else if (abdomen >= 24 && abdomen < 25) nota = 4
      else if (abdomen >= 23 && abdomen < 24) nota = 3
      else if (abdomen >= 22 && abdomen < 23) nota = 2
      else if (abdomen >= 21 && abdomen < 22) nota = 1
      else if (abdomen < 21) nota = 0
    } else if (idade >= 40 && idade < 50) {
      if (abdomen >= 31) nota = 10
      else if (abdomen >= 24 && abdomen < 31) nota = 9
      else if (abdomen >= 23 && abdomen < 24) nota = 8
      else if (abdomen >= 22 && abdomen < 23) nota = 7
      else if (abdomen >= 21 && abdomen < 22) nota = 6
      else if (abdomen >= 20 && abdomen < 21) nota = 5
      else if (abdomen >= 19 && abdomen < 20) nota = 4
      else if (abdomen >= 18 && abdomen < 19) nota = 3
      else if (abdomen >= 17 && abdomen < 18) nota = 2
      else if (abdomen >= 16 && abdomen < 17) nota = 1
      else if (abdomen < 16) nota = 0
    } else if (idade >= 50 && idade < 60) {
      if (abdomen >= 26) nota = 10
      else if (abdomen >= 19 && abdomen < 26) nota = 9
      else if (abdomen >= 18 && abdomen < 19) nota = 8
      else if (abdomen >= 17 && abdomen < 18) nota = 7
      else if (abdomen >= 16 && abdomen < 17) nota = 6
      else if (abdomen >= 15 && abdomen < 16) nota = 5
      else if (abdomen >= 14 && abdomen < 15) nota = 4
      else if (abdomen >= 13 && abdomen < 14) nota = 3
      else if (abdomen >= 12 && abdomen < 13) nota = 2
      else if (abdomen >= 11 && abdomen < 12) nota = 1
      else if (abdomen < 11) nota = 0
    } else if (idade >= 60) {
      if (abdomen >= 21) nota = 10
      else if (abdomen >= 14 && abdomen < 21) nota = 9
      else if (abdomen >= 13 && abdomen < 14) nota = 8
      else if (abdomen >= 12 && abdomen < 13) nota = 7
      else if (abdomen >= 11 && abdomen < 12) nota = 6
      else if (abdomen >= 10 && abdomen < 11) nota = 5
      else if (abdomen >= 9 && abdomen < 10) nota = 4
      else if (abdomen >= 8 && abdomen < 9) nota = 3
      else if (abdomen >= 7 && abdomen < 8) nota = 2
      else if (abdomen >= 6 && abdomen < 7) nota = 1
      else if (abdomen < 6) nota = 0
    }
  }
  return nota
}

export { notaAbdomen }
