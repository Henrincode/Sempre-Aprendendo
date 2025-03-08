// Desenvolva uma função que receba um objeto como parâmetro e retorne um outro
// objeto que corresponda ao objeto recebido como parâmetro,
// porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:

// Exemplo:

// inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

const inverter = (objeto) => {
    
    const paresDeChaveValorInvertidos = Object.entries(objeto)
        .map(parChaveValor => parChaveValor.reverse());

    const novoObj = Object.fromEntries(paresDeChaveValorInvertidos);

    console.log(novoObj);
}

inverter({ a: 1, b: 2, c: 3}); // retornará { 1: "a", 2: "b", 3: "c"}