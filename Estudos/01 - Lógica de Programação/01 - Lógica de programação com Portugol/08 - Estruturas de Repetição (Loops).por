programa
{

  // Objetivo: Aprender a repetir blocos de código.
  // Atividade: Implementar loops for e while para executar ações repetidamente.

  // Para este código vou usar a biblioteca matemática abriviada para mat, assim posso arredondar o resultado da divisão.
  inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
    // inicializa variáveis.
    inteiro numero1, numero2, operacao, soma, subtracao, multiplicacao

    // Divisão é usado uma variável do tipo real para caso o número tenha casas decimais.
    real divisao

    // Se variável contunuar for igual a 's' ou 'S' repete o programa.
    caracter continuar = 'n'

    // Estrutura de repetição para ver se o usuáiro quer fazer outra conta.
    faca{

      // Solicita números ao usuário e salva nas variáveis numero1 e numero2.
      escreva("Digite o primeiro númeor para as operações matemáticas: ")
      leia(numero1)
      escreva("Agora digite o segundo número: ")
      leia(numero2)
      limpa()

      // Solicita o tipo de operação ao usuário
      escreva("Agora informe o tipo de operação digitando apenas o número de referencia:", "\n\n")
      escreva("1 - SOMAR", "\n")
      escreva("2 - SUBTRAIR", "\n")
      escreva("3 - MUTIPLICAR", "\n")
      escreva("4 - DIVIDIR", "\n\n")
      leia(operacao)
      limpa()

      // Atribui o valor da operação aritmétricas nas variáveis.
      soma = numero1 + numero2
      subtracao = numero1 - numero2
      multiplicacao = numero1 * numero2

      // Para arredondar o resultado da divisão foi usado a função mat.arredondar(numero, casas decimais).
      divisao = mat.arredondar(numero1 / numero2, 2)

      // Imprime no console o resultado das operações.
      // Condição para operação
      se(operacao == 1){
        escreva(numero1, " + ", numero2, " = ", soma, "\n")
      }
      senao se(operacao == 2){
        escreva(numero1, " - ", numero2, " = ", subtracao, "\n")
      }
      senao se(operacao == 3){
        escreva(numero1, " x ", numero2, " = ", multiplicacao, "\n")
      }
      senao se(operacao == 4){
        escreva(numero1, " / ", numero2, " = ", divisao, "\n")
      }
      senao{
        escreva("Número digitado não está entre 1 à 4", "\n")
      }

      escreva("Deseja fazer uma nova operação? Sim ou não? ")
      leia(continuar)
      limpa()

    }enquanto(continuar == 's' ou continuar == 'S')
	}
}