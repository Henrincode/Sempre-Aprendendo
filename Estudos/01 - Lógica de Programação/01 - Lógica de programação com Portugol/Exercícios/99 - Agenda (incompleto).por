programa {

  inclua biblioteca Tipos --> ti

  cadeia enter = "", agendaNome[50]
  caracter enter_c = ' '
  inteiro enter_i = 0, agendaTamanho = 0
  real enter_r = 0.0
  logico enter_l = falso

  funcao inicio() {

    limpa()
    agendaExibir()
    agendaAdd()
    agendaOrdem()
    inicio()

    


    }

  /*
    Organiza agenda
  */

    // Adiciona nomes
    funcao agendaAdd() {
      leia(enter)
      se(agendaTamanho < 50){
        agendaNome[agendaTamanho] = enter
        agendaTamanho++
      }
    }

    // Organiza os nomes
    funcao agendaOrdem() {
      cadeia atual = ""
      para (inteiro i = 0; i < 49; i++) {
        se(agendaNome[i] > agendaNome[i+1]) {
          atual = agendaNome[i]
          agendaNome[i] = agendaNome[i+1]
          agendaNome[i+1] = atual
        }
      }
    }

    // Exibe Agenda
    funcao agendaExibir() {
      se(agendaTamanho > 0) {
        para(inteiro i = 0; i <= agendaTamanho; i++) {
        escreva(agendaNome[i], "\n")
        }
      }
    }


  /*
    Trata erros de entrada
  */

    // Transforma cadeia para caracter
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

    // Transforma cadeia para inteiro
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

    // Transforma cadeia en real
    funcao leiaReal() {
      leia(enter)
      se(ti.cadeia_e_real(enter)) {
        enter_c = ti.cadeia_para_real(enter)
      } senao {
        limpa()
        escreva("Erro! o sistema aguarda um número com cadas decimais exp: 1.23\nTente novamente: ")
        leiaCaracter()
      }
    }
}