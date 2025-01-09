let numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero);
};
console.log('fora =', numero);

// caso a variavel definida não exista no escopo atual ele vai buscar no escopo superior

let a = 'a';
{
    console.log(a);
}