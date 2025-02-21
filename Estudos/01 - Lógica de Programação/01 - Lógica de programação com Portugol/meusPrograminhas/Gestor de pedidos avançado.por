// Henrique Marques - Henrincode
// Apresento meu primeiro programa completo em Portugol, onde aplico diversas
// funcionalidades essenciais para a construção de um sistema. Neste projeto,
// utilizo bibliotecas, variáveis, arrays (de tipos "cadeia" e "inteiro"),
// organizados para formar uma matriz de dados com estruturas distintas. 
// O código explora condições, laços de repetição e funções, tratamento de erros,
// demonstrando uma abordagem sólida e organizada no uso dessas ferramentas.
// Agradeço por conferirem meu trabalho! Caso decidam reaproveitar, deixem 
// uma referência ao autor :)


// --------------------------------------------------------
// Como o sistema não vai rodar em um servidor recebendo
// várias requisições eu usarei variáveis globais para
// simplificar e facilitar o uso do programa.

programa {

  inclua biblioteca Tipos --> ti
  inclua biblioteca Texto --> te

  // Variáveis globais.
  // Número dos itens sempre serão 8 para esse programa.

  // Uma array cadeia para o nome dos itens.
  // Os indices desse array também serão os ID como em um banco de dados.
  const cadeia menuItens[8] = {
    "Cachorro quente", 
    "Cachorro quente de calabresa", 
    "Cachorro quente de bacon", 
    "Hambúrguer", 
    "Cheeseburguer", 
    "Batata frita", 
    "Nuggets 10un", 
    "Refrigerante 2l"
  }

  // Preço de cada item.
  const real menuPrecos[8] = {10.00, 12.00, 15.00, 17.00, 18.00, 10.00, 10.00, 10.00}

  // Carrinho com o total de cada lanche.
  inteiro carrinho[8] = {0, 0, 0, 0, 0, 0, 0, 0}, valorTotal = 0

  cadeia enter = ""

  // Função principal do programa.
  funcao inicio() {
    carrinhoNovo()
    telaInicial()    
  }

  // Tela inicial.
  funcao telaInicial() {
    limpa()
    titulo()
    
    escreva("Digite 0 para ver o carrinho de compras \n")
    linha(1, 1)
    
    // Lista todos os itens do cardápio.
    para (inteiro i = 0; i < 8; i++) {
      escreva(i + 1, " R$", menuPrecos[i], " - ", menuItens[i], ".\n")
    }

    linha(1, 1)
    escreva("Para adicionar um item digite seu número e ENTER.\n",
            "Para ver o carrinho digite 0 e ENTER\n\n",
            "Aguardando comando: ")
    
    leia(enter)

    // Se ENTER for número continua se não da erro.
    se(eInteiro(enter)) {

      se(tInteiro(enter) <= 8){

        // Converte cadeia ENTER para inteiro.
        
        se(tInteiro(enter) == 0) {
          telaCarrinho()
        } senao se(tInteiro(enter) <= 8) {
          carrinhoAdd(tInteiro(enter) - 1)
          limpa()
          titulo()
          escreva(menuItens[tInteiro(enter) - 1], "\nFoi adicionado ao carrinho, pressione ENTER para continuar")
          
          leia(enter)
          telaInicial()
        } senao {
          opcaoInvalida()
          telaInicial()
        }
      } senao {
        opcaoInvalida()
        telaInicial()
      }
    } senao {
      opcaoInvalida()
      telaInicial()
    }
  }

  // Tela para exibir o carrinho de compras.
  funcao telaCarrinho() {
    limpa()
    titulo()

    // Caso tenha algum produto no carrinho muda pra S e mostra a lista.
    caracter temProduto = 'n'
    valorTotal = 0 // Aqui é o valor total da compra, sempre zera ao exiber o carrinho e soma novamente.

    para(inteiro i = 0; i < 8; i++) {
      se(carrinho[i] > 0) {
        temProduto = 's'
        valorTotal += carrinho[i] * menuPrecos[i]
        escreva("R$", carrinho[i] * menuPrecos[i], " --> ", carrinho[i], " ", menuItens[i], "\n")
      }
    }

    se(temProduto == 'n') {
      escreva("Nenhum produto adicionado ao carrinho.\n",
              "Pressione ENTER para voltar")
      leia(enter)
      telaInicial()
    } senao {
      linha(1,1)
      escreva("R$", valorTotal, " Valor total.\n")
      escreva("\n1 Adicionar mais itens. \n",
              "2 Apagar um item da lista. \n",
              "3 Fechar o pedido. \n\n",
              "Aguardando comando: ")

      leia(enter)

      se(enter == "1") {
        telaInicial()
      } senao se(enter == "2") {
        telaCarrinhoApagar()
      } senao se(enter == "3") {
        telaFechar()
      } senao {
        opcaoInvalida()
        telaCarrinho()
      }
    }
  }

  // Tela para apagar um item do carrinho de compras
  funcao telaCarrinhoApagar() {
    limpa()
    titulo()
    escreva("0 para retornar para o carrinho de compras \n")
    linha(1, 1)
    escreva("Para apagar um item do carrinho digite \n",
            "o número da sua posição e pressione ENTER, só \n",
            "é possivel remover um item de cada vez. \n\n")

    inteiro posicao = 0

    para(inteiro i = 0; i < 8; i++) {
      se(carrinho[i] > 0) {
        posicao++
        escreva("(", posicao, ") ", menuItens[i], "\n")
      }
    }

    escreva("\nDigite a posição do item que deseja apagar: ")
    leia(enter)

    se(eInteiro(enter)){

      se (tInteiro(enter) == 0){

        telaCarrinho()

        } senao se (tInteiro(enter) <= posicao){
    
        posicao = 0

        para(inteiro i = 0; i < 8; i++) {
          se(carrinho[i] > 0){
            posicao++
          }
          se(posicao == tInteiro(enter)) {
            carrinho[i] = carrinho[i] - 1
          }
        }

      } senao {
        opcaoInvalida()
        telaCarrinhoApagar()
      }
    } senao {
      opcaoInvalida()
      telaCarrinhoApagar()
    }

    telaCarrinho()
  }

  // Adiciona um item no carrinho.
  funcao carrinhoAdd(inteiro n) {
    carrinho[n] += 1
  }

  // Zera carrinho.
  funcao carrinhoNovo() {
    para(inteiro i = 0; i < 8; i++) {
      carrinho[i] = 0
    }
  }

  // Titulo.
  funcao titulo() {
    linha(1, 1)
    escreva("LANCHONETE LINHA DE CÓDIGO\n")
    linha(1, 1)
  }

  // Pular linhas com/sem efeito.
  // Parâmetro 1 define o número de linhas.
  // Parâmetro 2 define o estilo da linha.
  funcao linha(inteiro numero, inteiro estilo) {
    para(inteiro i = 0; i < numero; i++) {
      se(estilo == 0) {
        escreva("\n")
      } senao se(estilo == 1) {
        escreva("----------------------------------------\n")
      }
    }
  }

  // Opção inválida.
  funcao opcaoInvalida() {
    limpa()
    linha(1, 1)
    escreva("Opção inválida, pressione ENTER e tente novamente!\n")
    linha(1, 1)
    leia(enter)
  }

  // Fechar pedido.
  funcao telaFechar() {
    limpa()
    escreva("Muito obrigado por usar meu programa.\n",
            "Caso queira entrar em contato meu GitHub é:\n",
            "https://github.com/Henrincode\nHenrique Marques\n\n",
            "Gostaria de rodar o programa novamente?\n",
            "Escreva S ou N, ENTER também encerra: ")

    leia(enter)

    se(tCaracter(enter) == 'S') {
      inicio()
    }
  }

  // Verifica se cadeia é inteiro.
  funcao logico eInteiro(cadeia texto) {
    retorne ti.cadeia_e_inteiro(texto, 10)
  }

  // Transforma cadeia para inteiro.
  funcao inteiro tInteiro(cadeia texto) {
    retorne ti.cadeia_para_inteiro(texto, 10)
  }

  // Retorna primeira letra como caracter.
  funcao caracter tCaracter(cadeia texto) {
    se(texto == "") {
      texto = " "
    }
    retorne te.obter_caracter(te.caixa_alta(texto), 0)
  }
}
