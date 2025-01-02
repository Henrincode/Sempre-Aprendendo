programa
{

	funcao inicio() {

	/*
	Objetivo:
	Soma de dígitos
	Calcule a soma dos dígitos de um número fornecido pelo usuário utilizando um laço de repetição.
	*/

	inteiro n = 0, s = 0

	escreva("Informe um número para fazer uma soma: ")
	leia(n)
	s += n

	faca{

		limpa()

		escreva("VALOR TOTAL : ", s, "\n\n")
		escreva("Digite outro número para somar ou ZERO para encerrar: ")
		leia(n)
		s += n

		}enquanto(n > 0)

	limpa()

	escreva("VALOR TOTAL: ", s, "\n\n")

	}
}