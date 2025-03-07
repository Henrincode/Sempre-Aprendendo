// Desenvolva uma função que receba uma string como parâmetro e
// retorne essa string somente com as consoantes, ou seja, sem as vogais.

// Exemplos:

// removeVogais("Cod3r") // retornará "Cd3r"
// removeVogais("Fundamentos") // retornará "Fndmnts"

const removeVogais = texto => {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    vogais.forEach(vogal => texto = texto.replace(vogal,''));
    console.log(texto);
}

removeVogais("Cod3r") // retornará "Cd3r"
removeVogais("Fundamentos") // retornará "Fndmnts"