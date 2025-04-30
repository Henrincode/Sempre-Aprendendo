// Evitando callback hell com promise
// Função que gera um número aleatório entre os valores "min" e "max"
// Se o valor de "min" for maior que o de "max", os valores são trocados
function gerarNumerosEntre(min, max) {
  if (min > max) {
    [min, max] = [max, min]; // Inverte os valores se necessário
  }

  // Retorna uma Promise que resolve com um número aleatório inteiro entre min e max
  return new Promise(resolve => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min; // Gera o número aleatório
    resolve(aleatorio); // Resolve a Promise com o número gerado
  });
}

// Chamada da função com os valores 1 e 60
gerarNumerosEntre(1, 60)
  .then(num => num * 10) // Multiplica o número gerado por 10
  .then(num10x => `Número aleatório vezes 10 = ${num10x}`) // Formata a mensagem
  .then(console.log); // Exibe o resultado no console
