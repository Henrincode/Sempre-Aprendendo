programa
{

  // Objetivo: Realizar operações matemáticas e lógicas.
  // Atividade: Implementar operações básicas (adição, subtração, multiplicação, divisão) e operadores lógicos.
	
	funcao inicio()
	{
    // inicializa variáveis.
    inteiro numero1, numero2, soma, subtracao, multiplicacao, divisao

    // Solicita números ao usuário e salva nas variáveis numero1 e numero2.
    escreva("Digite o primeiro númeor para as operações matemáticas: ")
    leia(numero1)
    escreva("Agora digite o segundo número: ")
    leia(numero2)

    // Atribui o valor da operação aritmétricas nas variáveis.
    soma = numero1 + numero2
    subtracao = numero1 - numero2
    multiplicacao = numero1 * numero2
    divisao = numero1 / numero2

    // Imprime no console o resultado das operações.
    escreva("\n")
    escreva(numero1, " + ", numero2, " = ", soma, "\n")
    escreva(numero1, " - ", numero2, " = ", subtracao, "\n")
    escreva(numero1, " x ", numero2, " = ", multiplicacao, "\n")
    escreva(numero1, " / ", numero2, " = ", divisao, "\n")
	}
}