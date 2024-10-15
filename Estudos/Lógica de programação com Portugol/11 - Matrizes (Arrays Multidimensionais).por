programa {

  //  Objetivo: Trabalhar com dados em formato tabular.
  //  Atividade: Criar matrizes, acessar elementos específicos e realizar operações básicas.

  funcao inicio() {

    // Matriz notas vai armazenar média das notas de 3 salas de aula, cada uma com 5 alunos.
    real notas[3][5] = {
      {10.0, 8.5, 5.0, 5.5, 8.0},   // sala 1.
      {9.0, 7.5, 3.0, 6.0, 7.0},    // sala 2.
      {10.0, 10.0, 9.5, 8.0, 8.5} // sala 3.
    },
    media[3] = {
        0.0, // sala 1.
        0.0, // sala 2.
        0.0  // sala 3.
    }

    // Imprime todas as notas de cada sala.
    para(inteiro sala = 0; sala < 3; sala++){

      escreva("As notas da sala ", sala+1, " foram: ")

      para(inteiro nota = 0; nota < 5; nota++){

        escreva(notas[sala][nota], "  ")
        media[sala] += notas[sala][nota]
      }

      media[sala] /= 5
      escreva("\n", "Média das notas: ", media[sala], "\n\n")
    }

    // Verifica qual sala teve a melhor média.
    inteiro vencedora = 0
    para(inteiro sala = 0; sala < 3; sala++){
      se(media[sala] > media[vencedora]){
        vencedora = sala
      }
    }

    escreva("A sala ", vencedora + 1, " obiteve a maior média!")
  }
}
