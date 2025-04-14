programa {

  inclua biblioteca Tipos --> tp

  funcao inicio() {

    /*
    Objetivo:
    Números perfeitos até 1000
    Imprima todos os números perfeitos de 1 a 1000 utilizando um laço de repetição.
    
    (Um número perfeito é um número que é igual à soma de seus divisores próprios, excluindo ele mesmo).
    */
    
    inteiro soma = 0
    cadeia texto

    para(inteiro numero = 0; numero <= 1000; numero++) {
      
      soma = 0

      texto = tp.inteiro_para_cadeia(numero, 10) + " = "

      para(inteiro i = 1; i <= numero; i++) {

        se(numero == i) {

        }senao se(numero % i == 0) {
          soma = soma + i
          texto = texto + "\"" + tp.inteiro_para_cadeia(i, 10) + "\", "
        }
      }

      se(soma == numero e soma != 0) {
        escreva(texto, "\n")
      }
    }
  }
}