/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

const semana = n => {
    switch(n) {
        case 1:
            console.log("Sábado!");
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia útil!")
            break;
        case 7:
            console.log("Domingo!");
            break;
        default:
            console.log("Dia inválido");
    };
};

semana(1);
semana(2);
semana(3);
semana(4);
semana(5);
semana(6);
semana(7);