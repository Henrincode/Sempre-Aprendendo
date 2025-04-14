programa
{
	inclua biblioteca Texto
 --> t
	
	funcao inicio()
	{
		/*
		Objetivo:
		Escreva um programa que verifique se uma palavra ou frase é um palíndromo.
		Um palíndromo é uma palavra, frase ou sequência de caracteres que é lida da mesma forma de trás para frente,
		ignorando espaços e sinais de pontuação.
		*/
		
		cadeia nomeNormal = "", nomeInvertido = ""
		inteiro nomeTamanho

		escreva("Escreva uma palavra ou nome para saber se é um palíndromo: \n")
		leia(nomeNormal)
		limpa()

		nomeTamanho = t.numero_caracteres(nomeNormal)

		para(inteiro i = 0; i < nomeTamanho; i++){
			nomeInvertido += t.obter_caracter(nomeNormal, nomeTamanho - 1 - i)
		}

		se(t.caixa_baixa(nomeNormal) == t.caixa_baixa(nomeInvertido)){
			escreva("MUITO BEM!!! \nO nome/palavra ", nomeNormal, " é um palíndromo!")
		}senao{
			escreva("QUE PENINHA :( \nO nome/palavra ", nomeNormal, " não é um palíndromo!")
		}
	}
}