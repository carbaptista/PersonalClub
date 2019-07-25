import React from 'react'
import { ScrollView, Image, Text, StatusBar } from 'react-native'
import { stylesQuem } from '../util/styles'

export default (Quem = () => {
	return (
		<ScrollView style={stylesQuem.container}>
			<StatusBar backgroundColor="#333" />
			<Image style={stylesQuem.img} source={{ uri: 'home1' }} />
			<Text style={stylesQuem.titulo}>Quem Somos</Text>
			<Text style={stylesQuem.texto}>
				Após 23 anos da nossa sociedade, acumulando diversas experiências em
				mais de 34 anos no mercado do fitness, na gestão de diversos modelos e
				tamanhos de academias, na preparação de atletas de alto desempenho
				esportivo e de diversos cantores, ministrando cursos e palestras por
				todo Brasil e atuando diretamente na área acadêmica nas maiores
				unversidades da Bahia, em 2006 resolvemos formatar o modelo de serviço
				do Personal Club, para uma demanda de clientes que buscavam um serviço
				com alta qualidade técnica e com um valor acessível.
				{'\n'} {'\n'}
				Somos hoje uma empresa com 12 anos de mercado, onde buscamos
				constantemente evoluir no nosso modelo de negócio. O nosso maior
				diferencial será sempre a qualidade do nosso atendimento, procurando
				sempre preserver um serviço de alto padrão técnico, de forma que a
				prescrição e o controle do treinamento nitidamente se destaque e se
				diferencie da média do Mercado, respeitando o Princípio Cientifico da
				Individualidade Biológica que será sempre nossa principal bandeira, na
				qual se baseiam todas as estratégias de treinamento, seguindo os
				critérios de segurança, eficiência e eficácia que irão não só facilitar
				a aquisição dos resultados do treinamento, mas principalmente a
				preservação da saúde integral dos nossos clientes.
			</Text>
		</ScrollView>
	)
})
