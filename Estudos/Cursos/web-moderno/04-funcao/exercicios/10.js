/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

const divisivel3 = n => {
    n = n % 3;
    if ( n == 0) {
        console.log(true);
    } else {
        console.log(false);
    };
};

divisivel3(3);
divisivel3(4);
divisivel3(7);
divisivel3(9);
divisivel3(15);