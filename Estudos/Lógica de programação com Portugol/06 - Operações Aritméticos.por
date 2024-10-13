programa
{

  // Objetivo: Realizar operações matemáticas e lógicas.
  // Atividade: Implementar operações básicas (adição, subtração, multiplicação, divisão) e operadores lógicos.

  // Para este código vou usar a biblioteca matemática abriviada para mat, assim posso arredondar o resultado da divisão.
  inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
    // inicializa variáveis.
    inteiro numero1, numero2, soma, subtracao, multiplicacao

    // Divisão é usado uma variável do tipo real para caso o número tenha casas decimais.
    real divisao

    // Solicita números ao usuário e salva nas variáveis numero1 e numero2.
    escreva("Digite o primeiro númeor para as operações matemáticas: ")
    leia(numero1)
    escreva("Agora digite o segundo número: ")
    leia(numero2)

    // Atribui o valor da operação aritmétricas nas variáveis.
    soma = numero1 + numero2
    subtracao = numero1 - numero2
    multiplicacao = numero1 * numero2

    // Para arredondar o resultado da divisão foi usado a função mat.arredondar(numero, casas decimais).
    divisao = mat.arredondar(numero1 / numero2, 2)

    // Imprime no console o resultado das operações.
    escreva("\n")
    escreva(numero1, " + ", numero2, " = ", soma, "\n")
    escreva(numero1, " - ", numero2, " = ", subtracao, "\n")
    escreva(numero1, " x ", numero2, " = ", multiplicacao, "\n")
    escreva(numero1, " / ", numero2, " = ", divisao, "\n")

	}
}