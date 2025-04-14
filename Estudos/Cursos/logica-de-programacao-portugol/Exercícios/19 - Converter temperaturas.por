programa
{
	inclua biblioteca Matematica
 --> mat
	
	funcao inicio()
	{
		

		//variaveis
		real c = 0.0, f = 0.0, k = 0.0, num = 0.0, select = 0.0
		cadeia rep = "n"

		//Permitir que o usuário faça novas conversões de temperatura.
		faca{
			
		//Solicitar ao usuário que escolha a escala de temperatura inicial (Celsius, Fahrenheit ou Kelvin).
		escreva("Qual a escala de temperatura você vai informar?", "\n\n")
		
		escreva(	"1 - Celsius. \n",
				"2 - Fahrenheit. \n",
				"3 - Kelvin. \n\n")

		escreva("Insira 1, 2 ou 3: ")
		leia(select)
		limpa()

		//Solicitar ao usuário que informe o valor da temperatura.
		escreva("vocë selecionou Celsius, informe um número para fazer a conversão: ")
		leia(num)
		limpa()

		se(select == 1){
			
			//Celsius
			c = num
			//Celsius para Fahrenheit
			f = (num * 9/5) + 32
			//Celsius para Kelvin
			k = num + 273.15
			
		}senao se(select == 2){

			//Celsius
			c = (num - 32) * 5/9
			//Celsius para Fahrenheit
			f = num
			//Celsius para Kelvin
			k = (num - 32) * 5/9 + 273.15
			
		}senao se(select == 3){

			//Celsius
			c = num - 273.15
			//Celsius para Fahrenheit
			f = (num - 273.15) * 9/5 + 32
			//Celsius para Kelvin
			k = num
		}

		//Converter a temperatura informada para as outras duas escalas e exibir os resultados.
		escreva("Segue lista das temperaturas convertidas:", "\n\n")
		escreva(	"Celsius: ", mat.arredondar(c, 2), "\n",
				"Fahrenheit: ", mat.arredondar(f, 2), "\n",
				"Kelvin: ", mat.arredondar(k, 2), "\n\n")
		escreva("Fazer nova consulta S/N: ")
		leia(rep)
		limpa()
		
		}enquanto(rep == "S" ou rep == "s")
	}
}