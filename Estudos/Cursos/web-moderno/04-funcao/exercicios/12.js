// Faça um algoritmo que calcule o fatorial de um número.

const fatorial = n => {
    let somaProduto = 1
    let texto = `${n}! = `
    // Se número igual a 0 retorna regra especial
    if(n == 0) {return texto += `1`}
    // Se não faz os calculos
    for(i = n; i > 0; i--) {
        somaProduto *= i;
        texto += `${i} `
    }
    texto += ` = ${somaProduto}`
    return texto
}

console.log(fatorial(0))