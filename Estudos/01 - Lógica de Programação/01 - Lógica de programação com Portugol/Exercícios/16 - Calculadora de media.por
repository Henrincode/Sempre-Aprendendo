programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real nota1, nota2, nota3, media
		cadeia denovo, resultado
	
		// Aqui inicia um loop para o usuario fazer um novo calculo caso queira

		faca{

			// Aqui inicia o programa que calcula a média de três notas
			escreva("Insira a primeira nota: ")
			leia(nota1)
			limpa()

			escreva("Insira a segunda nota: ")
			leia(nota2)
			limpa()

			escreva("Insira a terceira nota: ")
			leia(nota3)
			limpa()

			// Calcula a média das notas
			media = mat.arredondar((nota1 + nota2 + nota3) / 3, 2)

			// Com o calculo informa se foi aprovado ou reprovado
			se (media >= 7){
				
				resultado = "APROVADO"
				escreva("Resultado: PARABÉNS O ALUNO ATINGIU A MÉDIA DE 7.0", "\n")
				
			}senao{
				
				resultado = "REPROVADO"
				escreva("Resultado: INFELIZMENTE O ALUNO NÃO ATINGIU A MÉDIA DE 7.0", "\n")
			}

			
			escreva("---------------------\n")
			escreva("Nota 01 = ", nota1, "\n")
			escreva("Nota 02 = ", nota2, "\n")
			escreva("Nota 03 = ", nota3, "\n\n")
			escreva("MEDIA = ", media, " - ", resultado, "\n")
			escreva("---------------------\n\n")

			escreva("Deseja fazer outro teste? S/N: ")
			leia(denovo)

			limpa()
			
		}enquanto (denovo == "S" ou denovo == "s" ou denovo == "sim" ou denovo == "Sim" ou denovo == "SIM")
	}
}