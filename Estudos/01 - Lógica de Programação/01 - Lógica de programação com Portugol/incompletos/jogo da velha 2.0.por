programa
{
	
	funcao inicio()
	{
		jogo()
	}


	// Inicia o jogo
	funcao jogo(){
		caracter tabuleiro[3][3], vez = 'X'
		exibirTabuleiro(tabuleiro)
		fazerJogada(vez)
	}

	// Exibe o tabuleiro
	funcao exibirTabuleiro(caracter &tabuleiro[][]){
		escreva("↓→ A  B  C\n")
		// Imprime uma linha
		para(inteiro linha = 0; linha < 3; linha++){
			escreva(linha+1,' ')
			// Imprime três colunas na linha
			para(inteiro coluna = 0; coluna < 3; coluna ++){
				//Se o conteúdo da matriz for diferente de X ou O imprime um espaço em branco
				se(tabuleiro[linha][coluna] == 'X' ou tabuleiro[linha][coluna] == 'O'){
					escreva('[', tabuleiro[linha][coluna], ']')
				} senao { escreva("[ ]") }
			}
			// Após imprimir as três colunas inicia uma nova linha
			escreva("\n")
		}
		
	}

	// Verifica se existe vencedor
	funcao exibirVencedor(){
		
	}

	// Faz uma jogada
	funcao fazerJogada(caracter &vez){
		escreva("É a vez do ", vez, " fazer a jogada. \n")
		escreva("escolha o local da jogada informando \n")
		escreva("primeiro a pocião da coluna (abc): ")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1061; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */