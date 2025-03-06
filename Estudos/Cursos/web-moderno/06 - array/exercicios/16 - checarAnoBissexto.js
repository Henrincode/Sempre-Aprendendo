// A fim de manter o calendário anual ajustado com o movimento de translação da Terra,
// criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.

// Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4.
// Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.

// Com isso em mente, desenvolva uma função que receba um número correspondente
// a um ano e retorna se ele é bissexto ou não.

// Exemplos:
// checarAnoBissexto(2020) // retornará true
// checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400

const checarAnoBissexto = ano => {
    console.log(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0);
}

checarAnoBissexto(2000) // Divisível por 4 e não por 100 → Bissexto.
checarAnoBissexto(2019) // Divisível por 4 e por 100, mas não por 400 → Não bissexto.
checarAnoBissexto(2020) // Divisível por 4, por 100 e por 400 → Bissexto.
checarAnoBissexto(2100) // Não divisível por 4 → Não bissexto.