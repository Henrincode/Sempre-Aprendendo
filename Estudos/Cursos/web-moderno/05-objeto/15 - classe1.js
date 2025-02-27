// Classe para representar um lançamento financeiro (entrada ou saída de dinheiro)
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome; // Nome do lançamento (ex.: Salário, Luz)
        this.valor = valor; // Valor associado ao lançamento (positivo para receitas, negativo para despesas)
    }
}

// Classe para representar um ciclo financeiro (um período com vários lançamentos)
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes; // Mês referente ao ciclo financeiro
        this.ano = ano; // Ano referente ao ciclo financeiro
        this.lancamentos = []; // Lista que armazena os lançamentos do ciclo financeiro
    }

    // Método para adicionar um ou mais lançamentos ao ciclo financeiro
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l)); // Percorre cada lançamento e adiciona na lista
    }

    // Método para calcular o saldo consolidado do ciclo financeiro
    sumario() {
        let valorConsolidado = 0; // Inicializa o valor consolidado como zero
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor; // Soma o valor de cada lançamento ao valor consolidado
        });
        return valorConsolidado; // Retorna o saldo total do ciclo financeiro
    }
}

// Criação de lançamentos financeiros
const salario = new Lancamento('Salário', 45000); // Receita positiva
const contaLuz = new Lancamento('Luz', -220); // Despesa negativa

// Criação de um ciclo financeiro para o mês 6 (Junho) de 2018
const contas = new CicloFinanceiro(6, 2018);

// Adicionando os lançamentos criados ao ciclo financeiro
contas.addLancamentos(salario, contaLuz);

// Exibe o saldo consolidado no console
console.log(contas.sumario()); // Resultado esperado: 44780