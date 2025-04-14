programa
{

  // Objetivo: Organizar o código em blocos reutilizáveis.
  // Atividade: Criar funções simples que recebem parâmetros e retornam valores.
	
	funcao inicio(){

    cadeia nome
    inteiro idade
    real altura

    pegarDados(nome, idade, altura)
    limpa()
    escreverPerfil(nome, idade, altura)
	}

  // Solicita dados ao usuáril
  funcao pegarDados(cadeia &nome, inteiro &idade, real &altura){

    escreva("Informe o nome: ")
    pularLinha(1)
    leia(nome)
    pularLinha(1)

    escreva("Informe a idade: ")
    pularLinha(1)
    leia(idade)
    pularLinha(1)

    escreva("Informe a altura: ")
    pularLinha(1)
    leia(altura)
    pularLinha(1)
  }

  // Escreve o perfil
  funcao escreverPerfil(cadeia &nome, inteiro &idade, real &altura){

    escreva("Nome: ", nome)
    pularLinha(1)
    escreva("Idade: ", idade)
    pularLinha(1)
    escreva("Altura: ", altura)
    pularLinha(1)
  }

  // Pula a quantidade de linhas informado como parâmetros
  funcao pularLinha(inteiro linhas){

    para(inteiro i = 0; i < linhas; i++){
      escreva("\n")
    }
  }

}