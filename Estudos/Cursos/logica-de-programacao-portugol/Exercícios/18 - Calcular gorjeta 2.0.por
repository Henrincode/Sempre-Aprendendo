programa
{
	
inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		inteiro porcentagem
		real consumo, total, gorjeta
		cadeia denovo = "n"

		// O programa esta em um loop para no final o usuario decidir se quer iniciar um novo calculo
		faca{
			
			// recebe o valor do consumo e porcentagem
			escreva("Digite o valor total do consumo: R$")
			leia(consumo)

			limpa()

			escreva("Digite a porcentagem da gorjeta que é 15%, 18% ou 20%: ")
			leia(porcentagem)

			limpa()

			// verifica se o valor informado é 18, 18 ou 20 e repete até informar um valor aceito
			se (porcentagem != 15 e porcentagem != 18 e porcentagem != 20){

				faca{

					escreva("Opção invalida, tente de novo!","\n","Digite apenas números sem o simbolo de % sendo 15, 18 ou 20 porcento: ")
					leia(porcentagem)

					limpa()
				}enquanto (porcentagem != 15 e porcentagem != 18 e porcentagem != 20)
			}

			// Faz o calculo da porcentagem de gorjeta e arredond para 2 casas decimais
			gorjeta = mat.arredondar(consumo * (porcentagem / 100.0), 2)
			total = consumo + gorjeta

			// Imprime o resultado na tela
			escreva("----------------------------------\n")
			escreva("Valor do consumo: R$", consumo, "\n")
			escreva("Porcentagem da gorjeta: ", porcentagem, "%\n")
			escreva("Valor da gorjeta: R$", gorjeta, "\n")
			escreva("Valor total à pagar: R$", total, "\n")
			escreva("----------------------------------\n\n")

			escreva("Realizar outra conta? S/N: ")
			leia(denovo)

			limpa()

			
		}enquanto (denovo == "S" ou denovo == "s" ou denovo == "Sim" ou denovo == "sim" ou denovo == "SIM")
	}
}