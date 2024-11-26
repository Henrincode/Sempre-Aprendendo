programa {

  inclua biblioteca Tipos --> ti

  cadeia enter = ""
  caracter enter_c = ' '
  inteiro enter_i = 0
  real enter_r = 0.0
  logico enter_l = falso

  funcao inicio() {

    escreva("Digite um número: ")
    leiaCaracter()

  }

  /*
   Trata erros de entrada
  */

  // Transforma cadeia para real
  funcao leiaInteiro() {
    leia(enter)
    se(ti.cadeia_e_inteiro(enter, 10)) {
      enter_i = ti.cadeia_para_inteiro(enter, 10)
    } senao {
      limpa()
      escreva("Erro! o sistema aguarda um número inteiro\nTente novamente: ")
      leiaInteiro()
    }
  }

  // Transforma cadeia en caracter
  funcao leiaCaracter() {
    leia(enter)
    se(ti.cadeia_e_caracter(enter)) {
      enter_c = ti.cadeia_para_caracter(enter)
    } senao {
      limpa()
      escreva("Erro! o sistema aguarda um caracter\nTente novamente: ")
      leiaCaracter()
    }
  }


}