const notaPCCQ = (idade, sexo, pccq) => {
  let nota
  if (sexo) {
    if (idade < 30) {
      if (pccq >= 0.95) nota = 0
      else if (pccq >= 0.94 && pccq < 0.95) nota = 1
      else if (pccq >= 0.93 && pccq < 0.94) nota = 2
      else if (pccq >= 0.91 && pccq < 0.93) nota = 3
      else if (pccq >= 0.9 && pccq < 0.91) nota = 4
      else if (pccq >= 0.89 && pccq < 0.9) nota = 5
      else if (pccq >= 0.87 && pccq < 0.89) nota = 6
      else if (pccq >= 0.86 && pccq < 0.87) nota = 7
      else if (pccq >= 0.84 && pccq < 0.86) nota = 8
      else if (pccq >= 0.83 && pccq < 0.84) nota = 9
      else if (pccq < 0.83) nota = 10
    } else if (idade >= 30 && idade < 40) {
      if (pccq >= 0.96) nota = 0
      else if (pccq >= 0.95 && pccq < 0.96) nota = 1
      else if (pccq >= 0.94 && pccq < 0.95) nota = 2
      else if (pccq >= 0.92 && pccq < 0.94) nota = 3
      else if (pccq >= 0.91 && pccq < 0.92) nota = 4
      else if (pccq >= 0.9 && pccq < 0.91) nota = 5
      else if (pccq >= 0.88 && pccq < 0.9) nota = 6
      else if (pccq >= 0.87 && pccq < 0.88) nota = 7
      else if (pccq >= 0.85 && pccq < 0.87) nota = 8
      else if (pccq >= 0.84 && pccq < 0.85) nota = 9
      else if (pccq < 0.84) nota = 10
    } else if (idade >= 40 && idade < 50) {
      if (pccq >= 1) nota = 0
      else if (pccq >= 0.99 && pccq < 1) nota = 1
      else if (pccq >= 0.98 && pccq < 0.99) nota = 2
      else if (pccq >= 0.96 && pccq < 0.98) nota = 3
      else if (pccq >= 0.95 && pccq < 0.96) nota = 4
      else if (pccq >= 0.94 && pccq < 0.95) nota = 5
      else if (pccq >= 0.92 && pccq < 0.94) nota = 6
      else if (pccq >= 0.91 && pccq < 0.92) nota = 7
      else if (pccq >= 0.89 && pccq < 0.91) nota = 8
      else if (pccq >= 0.88 && pccq < 0.89) nota = 9
      else if (pccq < 0.88) nota = 10
    } else if (idade >= 50 && idade < 60) {
      if (pccq >= 1.02) nota = 0
      else if (pccq >= 1.01 && pccq < 1.02) nota = 1
      else if (pccq >= 1 && pccq < 1.01) nota = 2
      else if (pccq >= 0.99 && pccq < 1) nota = 3
      else if (pccq >= 0.98 && pccq < 0.99) nota = 4
      else if (pccq >= 0.97 && pccq < 0.98) nota = 5
      else if (pccq >= 0.95 && pccq < 0.97) nota = 6
      else if (pccq >= 0.94 && pccq < 0.95) nota = 7
      else if (pccq >= 0.92 && pccq < 0.94) nota = 8
      else if (pccq >= 0.91 && pccq < 0.92) nota = 9
      else if (pccq < 0.91) nota = 10
    } else if (idade > 60) {
      if (pccq >= 1.03) nota = 0
      else if (pccq >= 1.02 && pccq < 1.03) nota = 1
      else if (pccq >= 1.01 && pccq < 1.02) nota = 2
      else if (pccq >= 0.99 && pccq < 1.01) nota = 3
      else if (pccq >= 0.98 && pccq < 0.99) nota = 4
      else if (pccq >= 0.97 && pccq < 0.98) nota = 5
      else if (pccq >= 0.95 && pccq < 0.97) nota = 6
      else if (pccq >= 0.94 && pccq < 0.95) nota = 7
      else if (pccq >= 0.92 && pccq < 0.94) nota = 8
      else if (pccq >= 0.91 && pccq < 0.92) nota = 9
      else if (pccq < 0.91) nota = 10
    }
  } else {
    if (idade < 30) {
      if (pccq >= 0.83) nota = 0
      else if (pccq >= 0.8175 && pccq < 0.83) nota = 1
      else if (pccq >= 0.805 && pccq < 0.8175) nota = 2
      else if (pccq >= 0.7925 && pccq < 0.805) nota = 3
      else if (pccq >= 0.78 && pccq < 0.7925) nota = 4
      else if (pccq >= 0.766 && pccq < 0.78) nota = 5
      else if (pccq >= 0.752 && pccq < 0.766) nota = 6
      else if (pccq >= 0.738 && pccq < 0.752) nota = 7
      else if (pccq >= 0.724 && pccq < 0.738) nota = 8
      else if (pccq >= 0.71 && pccq < 0.724) nota = 9
      else if (pccq < 0.71) nota = 10
    } else if (idade >= 30 && idade < 40) {
      if (pccq >= 0.85) nota = 0
      else if (pccq >= 0.938 && pccq < 0.85) nota = 1
      else if (pccq >= 0.82 && pccq < 0.938) nota = 2
      else if (pccq >= 0.805 && pccq < 0.82) nota = 3
      else if (pccq >= 0.79 && pccq < 0.805) nota = 4
      else if (pccq >= 0.776 && pccq < 0.79) nota = 5
      else if (pccq >= 0.762 && pccq < 0.776) nota = 6
      else if (pccq >= 0.748 && pccq < 0.762) nota = 7
      else if (pccq >= 0.734 && pccq < 0.748) nota = 8
      else if (pccq >= 0.72 && pccq < 0.734) nota = 9
      else if (pccq < 0.72) nota = 10
    } else if (idade >= 40 && idade < 50) {
      if (pccq >= 0.88) nota = 0
      else if (pccq >= 0.85 && pccq < 0.88) nota = 1
      else if (pccq >= 0.84 && pccq < 0.85) nota = 2
      else if (pccq >= 0.82 && pccq < 0.84) nota = 3
      else if (pccq >= 0.8 && pccq < 0.82) nota = 4
      else if (pccq >= 0.786 && pccq < 0.8) nota = 5
      else if (pccq >= 0.772 && pccq < 0.786) nota = 6
      else if (pccq >= 0.758 && pccq < 0.772) nota = 7
      else if (pccq >= 0.744 && pccq < 0.758) nota = 8
      else if (pccq >= 0.73 && pccq < 0.744) nota = 9
      else if (pccq < 0.73) nota = 10
    } else if (idade >= 50 && idade < 60) {
      if (pccq >= 0.89) nota = 0
      else if (pccq >= 0.8725 && pccq < 0.89) nota = 1
      else if (pccq >= 0.855 && pccq < 0.8725) nota = 2
      else if (pccq >= 0.8375 && pccq < 0.855) nota = 3
      else if (pccq >= 0.82 && pccq < 0.8375) nota = 4
      else if (pccq >= 0.804 && pccq < 0.82) nota = 5
      else if (pccq >= 0.788 && pccq < 0.804) nota = 6
      else if (pccq >= 0.772 && pccq < 0.788) nota = 7
      else if (pccq >= 0.756 && pccq < 0.772) nota = 8
      else if (pccq >= 0.74 && pccq < 0.756) nota = 9
      else if (pccq < 0.74) nota = 10
    } else if (idade > 60) {
      if (pccq >= 0.91) nota = 0
      else if (pccq >= 0.8925 && pccq < 0.91) nota = 1
      else if (pccq >= 0.875 && pccq < 0.8925) nota = 2
      else if (pccq >= 0.8575 && pccq < 0.875) nota = 3
      else if (pccq >= 0.85 && pccq < 0.8575) nota = 4
      else if (pccq >= 0.824 && pccq < 0.85) nota = 5
      else if (pccq >= 0.808 && pccq < 0.824) nota = 6
      else if (pccq >= 0.792 && pccq < 0.808) nota = 7
      else if (pccq >= 0.776 && pccq < 0.792) nota = 8
      else if (pccq >= 0.76 && pccq < 0.776) nota = 9
      else if (pccq < 0.76) nota = 10
    }
  }
  return nota
}

export { notaPCCQ }
