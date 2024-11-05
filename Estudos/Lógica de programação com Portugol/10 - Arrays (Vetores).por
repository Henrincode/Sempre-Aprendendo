programa {

  // Objetivo: Compreender como armazenar múltiplos valores em uma única variável.
  // Atividade: Declarar, inicializar e manipular arrays, realizando operações como iteração e acesso a elementos.

  funcao inicio() {
    
    // Variáveis notas e média para calcular a média de uma sala de aula.
    real notas[5] = {10, 7.5, 5.5, 9, 8}, media = 0

    escreva("Notas da sala: ")

    // Imprime a nota de cada aluno
    para(inteiro i = 0; i < 5; i++){
      escreva(notas[i], "  ")
    }

    escreva("\n")
    escreva("Média da sala: ")

    // Soma as notas na variável média
    para(inteiro i = 0; i < 5; i++){
      media += notas[i]
    }

    // Faz a média das notas
    media /= 5

    escreva(media)
  }
}
