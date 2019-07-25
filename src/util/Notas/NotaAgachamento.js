const notaAgachamento = agachamento => {
  let nota
  if (agachamento >= 75) nota = 10
  else if (agachamento >= 70 && agachamento < 75) nota = 9
  else if (agachamento >= 65 && agachamento < 70) nota = 8
  else if (agachamento >= 60 && agachamento < 65) nota = 7
  else if (agachamento >= 55 && agachamento < 60) nota = 6
  else if (agachamento >= 50 && agachamento < 55) nota = 5
  else if (agachamento >= 45 && agachamento < 50) nota = 4
  else if (agachamento >= 40 && agachamento < 45) nota = 3
  else if (agachamento >= 35 && agachamento < 40) nota = 2
  else if (agachamento >= 31 && agachamento < 35) nota = 1
  else if (agachamento < 31) nota = 0
  return nota
}

export { notaAgachamento }
