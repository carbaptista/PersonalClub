const fillChartData = doc => {
	let data = {}
	data.nascimento = doc.nascimento
	data.sexo = doc.sexo
	data.peso = doc.peso
	data.bf = doc.bf
	data.imc = doc.imc
	data.itm = doc.itm
	data.muscular = doc.muscular
	data.vo2 = doc.vo2
	data.pccq = doc.pccq
	data.flex = doc.flex
	data.agachamento = doc.agachamento
	data.abdomen = doc.abdomen
	data.apoio = doc.apoio

	return data
}

export default fillChartData
