programa {
  funcao inicio() {

    inteiro qtd = 0, numero = 0, soma = 0

    escreva("Quantos números você vai adicionar: ")
    leia(qtd)

    limpa()

    para(inteiro i = 0; i < qtd; i++){
      escreva(i+1, " de ", qtd, "\nDigite o número: ")
      leia(numero)
      soma += numero
      limpa()
    }

    escreva("média é: ", soma/qtd)




    
  }
}
