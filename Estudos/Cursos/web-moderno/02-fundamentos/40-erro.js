// Exemplo de tratamento de erros em JavaScript

function tratarErroELancar(erro) {
    // Lança um objeto de erro personalizado com informações úteis
    throw {
      nome: erro.name,
      mensagem: erro.message,
      data: new Date()
    };
  
    // Exemplos de outros tipos de valores que podem ser lançados como erro:
    // throw new Error('mensagem');
    // throw 10;
    // throw true;
    // throw 'mensagem';
  }
  
  function imprimirNomeEmMaiusculo(objeto) {
    try {
      // Tenta acessar a propriedade 'nome' e converter para maiúsculas
      console.log(objeto.name.toUpperCase() + '!!!');
    } catch (e) {
      // Se ocorrer um erro, chama a função para tratar e lançar
      tratarErroELancar(e);
    } finally {
      // Sempre executado, com ou sem erro
      console.log('Operação finalizada.');
    }
  }
  
  const pessoa = { nome: 'Roberto' };
  
  imprimirNomeEmMaiusculo(pessoa);