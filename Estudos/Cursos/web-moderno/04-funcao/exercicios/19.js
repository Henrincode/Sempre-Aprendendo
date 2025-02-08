/*
O cardápio de uma lanchonete é o seguinte:

Código  Descrição do Produto    Preço

100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const cardapio = (codigo, quantidade) => {
    let preco;
    console.log("------------");
    switch (codigo) {
        case 100:
            preco = 3;
            console.log(`Cachorro Quente. Preço R$${preco.toFixed(2).replace(".", ",")}.`);
            console.log(`Qtd: ${quantidade}x. Total: R$${(preco * quantidade).toFixed(2).replace(".", ",")}.`);
            break;
        case 200:
            preco = 4;
            console.log(`Hambúrger Simples. Preço R$${preco.toFixed(2).replace(".", ",")}.`);
            console.log(`Qtd: ${quantidade}x. Total: R$${(preco * quantidade).toFixed(2).replace(".", ",")}.`);
            break;
        case 300:
            preco = 5.5;
            console.log(`Cheeseburger. Preço R$${preco.toFixed(2).replace(".", ",")}.`);
            console.log(`Qtd: ${quantidade}x. Total: R$${(preco * quantidade).toFixed(2).replace(".", ",")}.`);
            break;
        case 400:
            preco = 7.5;
            console.log(`Bauru. Preço R$${preco.toFixed(2).replace(".", ",")}.`);
            console.log(`Qtd: ${quantidade}x. Total: R$${(preco * quantidade).toFixed(2).replace(".", ",")}.`);
            break;
        case 500:
            preco = 3.5;
            console.log(`Refrigerante. Preço R$${preco.toFixed(2).replace(".", ",")}.`);
            console.log(`Qtd: ${quantidade}x. Total: R$${(preco * quantidade).toFixed(2).replace(".", ",")}.`);
            break;
        case 600:
            preco = 2.8;
            console.log(`Suco. Preço R$${preco.toFixed(2).replace(".", ",")}.`);
            console.log(`Qtd: ${quantidade}x. Total: R$${(preco * quantidade).toFixed(2).replace(".", ",")}.`);
            break;
        default:
            console.log("Produto não existe.");
    };
    console.log("------------");
};

cardapio(100, 2);
cardapio(200, 3);
cardapio(300, 4);
cardapio(400, 5);
cardapio(500, 6);
cardapio(600, 7);
cardapio(700, 8);
cardapio(800, 9);