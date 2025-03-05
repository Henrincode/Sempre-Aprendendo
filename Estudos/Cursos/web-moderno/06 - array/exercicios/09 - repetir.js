// Crie uma função que receba dois parâmetros. O primeiro parâmetro
// é o elemento que será repetido, enquanto  
// o segundo é o número de vezes que haverá repetição. Um array será retornado.  

// Exemplos:  
// repetir("código", 2) // retornará ["código", "código"]  
// repetir(7, 3) // retornará [7, 7, 7]

const repetir = (repetir, vezes) => {
    let temp = [] // Array que recebera o conteúdo repetido
    for(let i = 0; i < vezes; i++) {
        temp.push(repetir);
    };
    console.log(temp);
};

repetir("código", 2) // retornará ["código", "código"]  
repetir(7, 3) // retornará [7, 7, 7]