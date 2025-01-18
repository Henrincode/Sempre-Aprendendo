// Função para imprimir o resultado de uma avaliação, considerando a pontuação
function imprimirResultado(pontuacao) {
    // Verifica se a pontuação é um número
    if (typeof pontuacao !== 'number') {
      console.log('A pontuação deve ser um número.');
      return; // Interrompe a execução da função
    }
  
    // Verifica se a pontuação é maior ou igual a 7
    if (pontuacao >= 7) {
      console.log('Aprovado(a)!');
    } else {
      console.log('Reprovado(a)!');
    }
  }
  
  // Exemplos de uso da função
  imprimirResultado(10); // Aprovado
  imprimirResultado(4);  // Reprovado
  imprimirResultado('Epa!'); // Mensagem de erro