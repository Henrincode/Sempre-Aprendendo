// Exemplo de uso de getters e setters em JavaScript

const sequencia = {
    _valor: 1, // Convenção: usamos _ (underline) para indicar que esta propriedade é "privada" (não deve ser acessada diretamente).
    
    // Getter: retorna o valor atual e depois o incrementa
    get valor() { 
        return this._valor++;
    },
    
    // Setter: permite definir um novo valor apenas se for maior que o atual
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
};

console.log(sequencia.valor, sequencia.valor); // Retorna 1 e 2 (pois o getter incrementa após acessar)
sequencia.valor = 1000; // O setter permite essa atribuição, pois 1000 é maior que o valor atual (3)
console.log(sequencia.valor, sequencia.valor); // Retorna 1000 e 1001
sequencia.valor = 900; // O setter ignora essa atribuição, pois 900 é menor que 1002
console.log(sequencia.valor, sequencia.valor); // Retorna 1002 e 1003