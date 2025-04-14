programa {
	
	funcao inicio() {
		
		/*
		Objetivo:
		Imprimir números pares de 1 a 20.
		Imprima todos os números pares de 1 a 20 utilizando um laço de repetição.
		
		Condição para Números Pares:
		Condição: número % 2 == 0
		
		Explicação:
		O operador % é o operador de módulo, que retorna o resto da divisão do número por 2.
		Se o resto for igual a 0 (== 0), isso significa que o número é par.
		*/

		para(inteiro i = 1; i <= 20; i++) {
			se(i % 2 == 0){
				escreva(i, " ")
			}
		}
	}
}