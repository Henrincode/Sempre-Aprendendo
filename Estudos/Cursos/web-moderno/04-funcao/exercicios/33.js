/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

const vetorString  = ["Fulano", "Ciclano", "Beltano", "Zelano"],
      vetorInteiro = [25, 30, 47, 58],
      vetorDouble  = [1.65, 1.78, 1.90, 1.73];

for(i = 0; i < vetorString.length; i++){
    console.log(vetorString[i].concat(", idade: ", vetorInteiro[i], ". Tamanho: ", vetorDouble[i]));
};