programa
{
	
inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		// Calculadora de troco

		// Variaveis
		real conta, total
		inteiro gorjeta
		
		// Informa o total da conta
		escreva("Informe o valor total da conta: R$")
		leia(conta)

		limpa()

		// Informa a porcentagem da gorjeta
		faca{
			escreva("Informe um dos três valores para gorjeta 15%, 18% ou 20%: ")
			leia(gorjeta)
	
			limpa()
		}enquanto (gorjeta != 15 e gorjeta != 18 e gorjeta != 20)

		limpa()

		total = mat.arredondar(conta + (conta * (gorjeta/100.0)), 2)

		escreva("Valor da conta: R$", conta, "\nGorjeta: ", gorjeta, "%\nTotal à pagar: R$", total, "\n\n\n")
	}
}