// middleware pattern (chain of responsability)
// Função que representa o primeiro passo (middleware) na cadeia
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'; // Adiciona a propriedade valor1 ao objeto ctx
    next(); // Chama o próximo middleware na sequência
};

// Função que representa o segundo passo (middleware) na cadeia
const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'; // Adiciona a propriedade valor2 ao objeto ctx
    next(); // Chama o próximo middleware na sequência
};

// Função que representa o terceiro passo (middleware), sem next porque é o último
const passo3 = (ctx) => {
    ctx.valor3 = 'mid3'; // Adiciona a propriedade valor3 ao objeto ctx
};

// Função principal que executa os middlewares em sequência
const exec = (ctx, ...middlewares) => {
    // Função interna recursiva que executa cada middleware
    const execPasso = (indice) => {
        // Verifica se ainda há middlewares a executar e se o índice é válido
        middlewares && indice < middlewares.length &&
        // Chama o middleware atual, passando o ctx e a função next (recursiva)
        middlewares[indice](ctx, () => execPasso(indice + 1))

        // O código a cima é um curto-circuito, e faz o mesmo que:
        // if (middlewares && indice < middlewares.length) {
        //     middlewares[indice](ctx, () => execPasso(indice + 1));
        // }

    };
    execPasso(0); // Inicia a execução a partir do primeiro middleware
};

// Objeto que será modificado pelos middlewares
const ctx = {};
exec(ctx, passo1, passo2, passo3); // Executa a cadeia de middlewares
console.log(ctx); // Exibe o objeto ctx com as propriedades adicionadas