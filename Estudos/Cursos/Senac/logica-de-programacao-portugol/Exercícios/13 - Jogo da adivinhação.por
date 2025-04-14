programa {

  inclua biblioteca Util --> ut

  funcao inicio() {
 
    /*
    Objetivo:
    Jogo da adivinhação
    Implemente um jogo de adivinhação onde o usuário tem que adivinhar um número entre 1 e 100.
    O programa deve dar dicas de "maior" ou "menor" após cada tentativa, utilizando um laço de repetição.
    */
    
    inteiro adivinha = ut.sorteia(1, 100), erros = 0, numero
    caracter errado = 's'

    escreva(adivinha,"\n\n")

    escreva("Tente adivinhar um número entre 1 à 100!", "\n\n")
    escreva("Digite um número: ")
    leia(numero)

    faca {

      limpa()

      se(numero == adivinha) {
        errado = 'n'
        escreva("Tente adivinhar um número entre 1 à 100! ", "\n\n")
        escreva("Parabéns! Você acertou o número ", numero, " com ", erros, " tentativas.", "\n\n")

      }senao se(numero >= adivinha) {
        errado = 's'
        erros++
        escreva("Tente adivinhar um número entre 1 à 100! ", "\n\n")
        escreva("Total de tentativas ", erros, ".\n")
        escreva("Número errado, tente um número menor", "\n")
        escreva("<<<<<<<<<<\n")
        escreva("Digite um número: ")
        leia(numero)

      }senao{
        errado = 's'
        erros++
        escreva("Tente adivinhar um número entre 1 à 100! ", "\n\n")
        escreva("Total de tentativas ", erros, ".\n")
        escreva("Número errado, tente um número maior", "\n")
        escreva(">>>>>>>>>>\n")
        escreva("Digite um número: ")
        leia(numero)
      }

    } enquanto(errado == 's')
  }
}