// Elabore uma função que receba um número como parâmetro e
// retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

// Exemplos:
// símboloMais(2) // retornará "++"
// símboloMais(4) // retornará "++++"

const simboloMais = x => {
    if(x < 1) return console.log("O valor precisa ser maior que 0");
    let temp = "+";
    for(let i = 0; i < x-1; i++){
        temp += "+";
    };
    console.log(temp);
};

simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"