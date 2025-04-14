// Programa desenvolvido por Henrique Marques - Henrincode
//
// Observação: para melhor funcionamento, utilize a versão web do Portugol Studio em https://portugol.dev.
// A versão desktop da IDE pode apresentar incompatibilidades com o código atual devido a diferenças entre as versões.
//
// Acompanhe mais projetos e estudos no GitHub: https://github.com/Henrincode

// Código deve:
// adicionar nome
// organizar nome
// apagar nome
// não aceitar que comece com espaço

programa {

  cadeia lista[10000]
  inteiro listaTamanho = 0

  funcao inicio() {

    listaAdd()

    enquanto(1 == 1){

      limpa()
      listaImprimir()
      escreva("\n")
      listaAdd()
    }
    
  }

  // Adiciona um nome na lista
  funcao listaAdd() {

    escreva("Digite um nome: ")
    leia(lista[listaTamanho])

    listaTamanho++
    listaOrganizar()
  }

  // Imprime uma lista com todos os nomes
  funcao listaImprimir() {

    inteiro id = listaTamanho

    para(inteiro i = 0; i < listaTamanho; i++) {

      escreva(lista[i], "\n")
    }
  }

  // Organiza a lista em ordem alfabética
  funcao listaOrganizar() {

    cadeia temp // Variável temporária para troca de valores

    para(inteiro i = 0; i < listaTamanho; i++) {
      para(inteiro j = 0; j < listaTamanho; j++) {

        se(j < listaTamanho e lista[j] > lista[j+1]) {

          temp = lista[j]
          lista[j] = lista[j+1]
          lista[j+1] = temp
        }
      }
    }
}
}
