// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro
// fornecido for booleano, o retorno da função deverá ser o inverso.
// Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1,
// o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipo acima,
//  retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

// Exemplos:

// inverso(true) retornará false
// inverso("6") retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
// inverso(-2000) retornará 2000
// inverso("programação") retornará "booleano ou números esperado, mas o parâmetro é do tipo string"

const inverso = p => {
    if(typeof p === "boolean") {
        console.log(!p);
    } else if (typeof p === "number") {
        console.log(p * -1);
    } else {
        console.log("booleano ou números esperado, mas o parâmetro é do tipo string");
    };
};

inverso(true);
inverso("6");
inverso(-2000);
inverso("programação");