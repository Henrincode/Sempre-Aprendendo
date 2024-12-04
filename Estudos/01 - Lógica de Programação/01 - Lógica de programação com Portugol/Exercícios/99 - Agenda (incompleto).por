programa {

  inclua biblioteca Tipos --> ti

  cadeia enter = "", agendaNome[50]
  caracter enter_c = ' '
  inteiro enter_i = 0, agendaTel[50], agendaTamanho = 0
  real enter_r = 0.0
  logico enter_l = falso

  funcao inicio() {

    limpa()
    agendaOrdem()
    agendaExibir()
    agendaAdd()
    inicio()

    }

  /*
    Organiza agenda
  */

    // Adiciona nomes
    funcao agendaAdd() {
      se(agendaTamanho < 50){
        escreva("Digite um nome: ")
        leia(enter)
        agendaNome[agendaTamanho] = enter
        escreva("\nDigite um telefone: ")
        leiaInteiro()
        agendaTel[agendaTamanho] = enter_i
        agendaTamanho++
      }
    }

    funcao agendaAddTel() {
      escreva("Digite um telefone para o cotato: ")

      
    }

    // Organiza os nomes
    funcao agendaOrdem() {
      cadeia atualNome = ""
      inteiro atualTel = 0
      para (inteiro j = 0; j < agendaTamanho; j++) {
        para (inteiro i = 0; i < agendaTamanho; i++) {
          se(agendaNome[i] > agendaNome[i+1]) {
            atualNome = agendaNome[i]
            agendaNome[i] = agendaNome[i+1]
            agendaNome[i+1] = atualNome
            
            atualTel = agentaTel[i]
            agendaTel[i] = agentaTel[i+1]
            agendaTel[i+1] = atualTel
          }
        }
     }
    }

    // Exibe Agenda
    funcao agendaExibir() {
      se(agendaTamanho > 0) {
        para(inteiro i = 0; i <= agendaTamanho; i++) {
        escreva(agendaTel[i], " - ", agendaNome[i], "\n")
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