/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

const trocaVetor = (vetorA, vetorB) => {
    if (vetorA.length == vetorB.length) {
        [vetorA, vetorB] = [vetorB, vetorA];
        return `Vetor A = ${vetorA}. Vetor B = ${vetorB}.`
    } else {
        return "Vetores de tamanhos diferentes."
    }
}
let vetorA = [1, 2, 3], vetorB = ["a", "b", "c"];

console.log(trocaVetor(vetorA, vetorB));
vetorA = [1, 2];
console.log(trocaVetor(vetorA, vetorB));