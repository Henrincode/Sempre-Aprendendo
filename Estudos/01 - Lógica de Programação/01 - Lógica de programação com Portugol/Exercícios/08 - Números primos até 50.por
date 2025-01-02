programa
{
	
	funcao inicio()
	{
		/*
		Objetivo:
		Números primos até 50.
		Imprima todos os números primos de 1 a 50 utilizando um laço de repetição.

		Números primos são números inteiros maiores que 1 que têm exatamente dois divisores: 1 e eles mesmos.
		Isso significa que um número primo não pode ser dividido de forma exata por nenhum outro número além de 1 e do próprio número.
		
		Os primeiros números primos são: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...
		*/
		
		caracter primo = 'v'

		para(inteiro n = 2; n <= 50; n++){
			
			primo = 'v'
			para(inteiro i = n - 1; i >= 2; i--){
				se(n % i == 0){
					primo = 'f'
				}
			}
	
			se(primo == 'v'){
				escreva(n, ", ")
			}
		}

		escreva("são números primos.")
	}
}