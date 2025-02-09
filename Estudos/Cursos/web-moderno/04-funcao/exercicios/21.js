/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const convenio = idade => {

    preco = 100;

    if(idade < 10){
        preco += 80;
    } else if(idade <= 30){
        preco += 50;
    } else if(idade <= 60){
        preco += 95;
    } else {
        preco += 130;
    };

    return preco;
};

console.log(convenio(5));
console.log(convenio(10));
console.log(convenio(11));
console.log(convenio(15));
console.log(convenio(20));
console.log(convenio(30));
console.log(convenio(45));
console.log(convenio(90));