// Função que gera um número aleatório entre "min" e "max" após um tempo de espera (delay)
function gerarNumerosEntre(min, max, tempo) {
  // Garante que min seja sempre menor que max, invertendo se necessário
  if (min > max) [min, max] = [max, min];

  // Retorna uma Promise que resolve com um número aleatório após o tempo especificado
  return new Promise(resolve => {
    setTimeout(() => {
      const fator = max - min + 1; // Calcula o intervalo de valores possíveis
      const aleatorio = parseInt(Math.random() * fator) + min; // Gera número aleatório dentro do intervalo
      resolve(aleatorio); // Finaliza a Promise com o número gerado
    }, tempo);
  });
}

// Função que gera vários números aleatórios ao mesmo tempo (em paralelo)
// usando a função gerarNumerosEntre com diferentes tempos de espera
function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500),
  ]);
}

// Inicia a medição de tempo com o rótulo "promise"
console.time("promise");

// Chama a função que gera os números e exibe o resultado
// Em seguida, finaliza a medição de tempo
gerarVariosNumeros()
  .then(console.log) // Exibe o array com os números gerados
  .then(() => console.timeEnd("promise")); // Mostra quanto tempo demorou para todas as Promises terminarem
