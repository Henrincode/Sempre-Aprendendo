// Importa o arquivo '07-global.js', executando-o e configurando o objeto global.MinhaApp
require('./07-global');

// Chama o método 'saudacao' do objeto MinhaApp e exibe a mensagem no console
console.log(MinhaApp.saudacao()); // Saída: "Estou em todos os lugares!"

// Tentativa de alterar a propriedade 'nome' (não vai funcionar por causa do Object.freeze)
MinhaApp.nome = 'Eita';

// Exibe o valor de 'nome', que não foi alterado devido ao congelamento do objeto
console.log(MinhaApp.nome); // Saída: "Sistema Legal"