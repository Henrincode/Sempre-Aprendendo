/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

const nota = n => {
    if (typeof n !== "number") {
        return "O valor informado deve ser um número"
    } else if( n < 5){
        return "D";
    } else if ( n < 7 ){
        return "C";
    } else if (n < 9){
        return "B";
    } else {
        return "A"
    };
};

console.log(nota(4.9));
console.log(nota(5));
console.log(nota(5.1));
console.log(nota(7));
console.log(nota(8));
console.log(nota(9.9));
console.log(nota("b"));