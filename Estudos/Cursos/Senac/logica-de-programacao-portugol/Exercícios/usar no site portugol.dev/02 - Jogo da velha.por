programa {

  // desenha o quadrado do jogo da velha
  funcao vazio desenha(caracter quadrado[][]) {
    escreva("Jogo da velha!", "\n", "----------", "\n")
    para (inteiro linha = 0; linha <= 2; linha++) {
      para (inteiro coluna = 0; coluna <= 2; coluna++) {
        escreva("[", quadrado[linha][coluna], "] ")
      }
      escreva("\n")
    }
  }

  // verifica se existe vencedor
  funcao inteiro vitoria(caracter simbolo, caracter quadrado[][]) {

    // verifica linhas iguais
    para ( inteiro linha = 0; linha <= 2; linha++){
      para ( inteiro coluna = 0; coluna <= 2 e quadrado[linha][coluna] == simbolo; coluna++) {
        se (coluna == 2) {
          retorne 1
        }
      }
    }

    // verifica colunas iguais
    para ( inteiro coluna = 0; coluna <= 2; coluna++){
      para ( inteiro linha = 0; linha <= 2 e quadrado[linha][coluna] == simbolo; linha++) {
        se (linha == 2) {
          retorne 1
        }
      }
    }
    
    // verifica diagonal -->
    para ( inteiro coluna = 0; coluna <= 2 e quadrado[coluna][coluna] == simbolo; coluna++) {
      se (coluna == 2) {
        retorne 1
      }
    }

    // verifica diagonal <--
    inteiro diagonal = 0
    para ( inteiro coluna = 2; coluna >= 0 e quadrado[diagonal][coluna] == simbolo; coluna--) {
      diagonal++
      se (coluna == 0) {
        retorne 1
      }
    }
    retorne 0
  }

  funcao inicio() {
    
    // Jogo da velha
    inteiro linha, coluna
    caracter vitoria = 'n', quadrado[3][3] = {{' ',' ',' '},{' ',' ',' '},{' ',' ',' '}}


    faca {

      // vez do jogador 1
      desenha(quadrado)
      escreva("\n", "Vez do jogador 1, marque o X!", "\n", "Informe primeiro a linha e pressione ENTER, e depois a coluna ")
      leia(linha)
      escreva("Informe a coluna ")
      leia(coluna)
      quadrado[--linha][--coluna] = 'X'
      limpa()

      // se jogador 1 vencer encerra o jogo aqui
      se(vitoria('X', quadrado) == 1) {
        desenha(quadrado)
        escreva("\n", "PARABÉNS! o jogador 1 ganhou!")
        vitoria = 's'

      } senao {

        // vez do jogador 2
        desenha(quadrado)
        escreva("\n", "Vez do jogador 2, marque o O!", "\n", "Informe primeiro a linha e pressione ENTER e depois a coluna ")
        leia(linha)
        escreva("Informe a coluna ")
        leia(coluna)
        quadrado[--linha][--coluna] = 'O'
        limpa()

        // se jogador 2 vencer encerra o jogo aqui
        se(vitoria('O', quadrado) == 1) {
          desenha(quadrado)
          escreva("\n", "PARABÉNS! o jogador 2 ganhou!")
          vitoria = 's'
        }
      }
    } enquanto (vitoria == 'n')
  }
}
