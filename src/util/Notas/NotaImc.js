const notaImc = imc => {
  let nota
  if (imc >= 40) nota = 0
  else if ((imc >= 38 && imc < 40) || imc < 18.5) nota = 1
  else if (imc >= 36 && imc < 38) nota = 2
  else if (imc >= 34 && imc < 36) nota = 3
  else if (imc >= 32 && imc < 34) nota = 4
  else if (imc >= 30 && imc < 34) nota = 5
  else if (imc >= 28 && imc < 30) nota = 6
  else if (imc >= 26 && imc < 28) nota = 7
  else if (imc >= 24 && imc < 26) nota = 8
  else if (imc >= 22 && imc < 24) nota = 9
  else if (imc >= 18.5 && imc < 22) nota = 10
  return nota
}

export { notaImc }
