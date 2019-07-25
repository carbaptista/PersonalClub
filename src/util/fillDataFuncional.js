const fillDataFuncional = (doc, vo2, flex, abdomen, apoio, agachamento, arr) => {
	vo2.dados = doc.Vo2s
	vo2.valor1 = doc.vo2
	vo2.valor2 = doc.vo2Meta
	vo2.valor3 = doc.vo2Inicial
	vo2.id = 8
	arr[0] = vo2
	flex.dados = doc.Flexibilidades
	flex.valor1 = doc.flex
	flex.valor2 = doc.flexMeta
	flex.valor3 = doc.flexInicial
	flex.id = 9
	arr[1] = flex
	abdomen.dados = doc.Abdomens
	abdomen.valor1 = doc.abdomen
	abdomen.valor2 = doc.abdomenMeta
	abdomen.valor3 = doc.abdomenInicial
	abdomen.id = 10
	arr[2] = abdomen
	apoio.dados = doc.Apoios
	apoio.valor1 = doc.apoio
	apoio.valor2 = doc.apoioMeta
	apoio.valor3 = doc.apoioInicial
	apoio.id = 11
	arr[3] = apoio
	agachamento.dados = doc.Agachamentos
	agachamento.valor1 = doc.agachamento
	agachamento.valor2 = doc.agachamentoMeta
	agachamento.valor3 = doc.agachamentoInicial
	agachamento.id = 12
	arr[4] = agachamento
}

export default fillDataFuncional
