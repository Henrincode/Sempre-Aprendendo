// estrutura que armazena valores únicos não indexados, ou seja, sem repetições

const times = new Set(); // Cria um novo conjunto vazio
times.add("Vasco"); // Adiciona "Vasco" ao conjunto
times.add("São Paulo").add("Palmeiras").add("Corinthians"); // Adiciona vários valores encadeando os métodos
times.add("Flamengo");
times.add("Vasco"); // Não será adicionado novamente, pois o Set não permite duplicatas

console.log(times); // Exibe o conteúdo do Set
console.log(times.size); // Exibe a quantidade de elementos no Set
console.log(times.has("vasco")); // false - case sensitive, "vasco" é diferente de "Vasco"
console.log(times.has("Vasco")); // true - exatamente como foi adicionado ao Set
times.delete("Flamengo"); // Remove "Flamengo" do conjunto
console.log(times.has("Flamengo")); // false - foi removido

// Exemplo com array que contém elementos repetidos
const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes); // Cria um Set com os nomes (valores repetidos são eliminados)
console.log(nomesSet); // Exibe o Set contendo apenas valores únicos
