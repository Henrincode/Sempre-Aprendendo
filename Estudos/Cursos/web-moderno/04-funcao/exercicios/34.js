/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

const igual = (stringA, stringB) => {
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();

    return stringA === stringB;
};

console.log(igual("teste","tEste"));
console.log(igual("teste","t3ste"));
console.log(igual("testeee","tEste"));