programa
{

  //Objetivo: Compreender como interagir com o usuário.
  //Atividade: Criar um programa que solicita ao usuário que insira um texto e o exibe.
	
	funcao inicio()
	{

	cadeia nome
	
		escreva("Informe seu nome: ")
    
    // Função leia() vai guardar a informação digitada pelo usuário na variável informada.
    leia(nome)

    // Função para limpar() o terminal
    limpa()
    escreva("Olá ", nome, ".")
	}
}