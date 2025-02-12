/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

let vetorA = [1, 2, 3], vetorB = ["a", "b", "c"];

[vetorA, vetorB] = [vetorB, vetorA];

console.log(vetorA, vetorB);