// Criando um Map chamado 'tecnologias'
// Um Map é uma estrutura de dados que permite armazenar pares chave/valor
const tecnologias = new Map();

// Adicionando pares chave/valor ao Map
// Aqui, "react" está associado a um objeto que diz que não é um framework
// e "angular" está associado a um objeto que diz que é um framework
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

// Tentando acessar diretamente como se fosse um objeto comum (isso retorna undefined)
// Maps não funcionam como objetos ao acessar propriedades diretamente com ponto
console.log(tecnologias.react); // undefined

// Forma correta de acessar um valor dentro de um Map é usando o método get()
console.log(tecnologias.get("react").framework); // false

// Criando um novo Map com diferentes tipos de chave:
// função, objeto e número
const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

// Iterando sobre o Map com forEach
// 'vl' é o valor e 'ch' é a chave
chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

// Verificando se a chave 123 existe no Map
console.log(chavesVariadas.has(123)); // true

// Removendo a chave 123 do Map
chavesVariadas.delete(123);

// Verificando novamente se a chave 123 existe
console.log(chavesVariadas.has(123)); // false

// Exibindo a quantidade de elementos no Map após a remoção
console.log(chavesVariadas.size);

// Reatribuindo valores à chave 123 (substitui o valor anterior)
// Map não permite chaves duplicadas. Se a mesma chave for usada,
// o valor anterior é sobrescrito
chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b"); // substitui "a" por "b"
chavesVariadas.set(456, "b"); // adiciona uma nova chave

// Exibindo o Map atualizado
console.log(chavesVariadas);
