// Função `real` usada como *tag function* para templates literais em JavaScript.
// Ela formata automaticamente os valores numéricos como moeda (R$) com duas casas decimais.

function real(partes, ...valores) {
  const resultado = [];

  // Para cada valor interpolado, verifica se é um número
  // Se for, formata como moeda brasileira com duas casas decimais (R$xx.xx)
  // Se não for número, mantém o valor como está
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;

    // Adiciona a parte literal e o valor formatado ao array de resultado
    resultado.push(partes[indice], valor);
  });

  // Junta todas as partes e retorna a string final formatada
  return resultado.join("");
}

// Declaração de variáveis com os preços
const preco = 29.9;
const precoParcela = 11;

// Uso da função `real` como tag function para formatar a saída
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
