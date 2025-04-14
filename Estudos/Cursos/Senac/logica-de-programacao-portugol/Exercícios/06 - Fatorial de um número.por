programa {
	
	funcao inicio() {
		
		/*
		Objetivo:
		Fatorial de um número.
		Calcule o fatorial de um número fornecido pelo usuário utilizando um laço de repetição.
		
		O que é Número Fatorial?
		O número fatorial, representado pelo símbolo "n!", é um conceito matemático que se refere ao produto de todos os números inteiros positivos de 1 até n.
		É uma operação muito utilizada em combinatória, probabilidade e em diversas áreas da matemática.
		
		Definição Formal:
		Para um número inteiro não negativo n, o fatorial é definido da seguinte forma:
			n! = n × (n - 1) × (n - 2) × ... × 3 × 2 × 1, para n > 0
			0! = 1, por definição
		
		Exemplos:
		Aqui estão alguns exemplos de cálculo de fatoriais:
			5! = 5 × 4 × 3 × 2 × 1 = 120
			3! = 3 × 2 × 1 = 6
			1! = 1
		*/

		inteiro fatorial = 0, soma = 1

		escreva("Informe um número para saber seu fatorial: ")
		leia(fatorial)

		escreva("\n", fatorial, "! = ")

		para(inteiro i = fatorial; i >= 1; i--) {
			soma *= i
			
			se(i > 1){
				escreva(i, " x ")
			}senao{
				escreva(i)
			}
		}

		se(fatorial == 0){
			escreva(soma)
		}
		senao{
			escreva(" = ", soma)
		}
	}
}