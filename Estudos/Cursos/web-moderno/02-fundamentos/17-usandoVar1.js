// A variável declarada com var pode ser exibida fora do escopo "bloco de código" que ela foi definida, exceto quando definida em uma função, já a let não pode ser acessada dentro do escopo

// var:
// Tem escopo global ou de função.
// Ignora o escopo de blocos, como if, for, ou {}.
// Por isso, variáveis var podem causar conflitos ou comportamento inesperado se declaradas em diferentes partes do código.

// let:
// Tem escopo de bloco.
// Respeita os limites do bloco em que foi declarada.
// É mais segura para evitar acessos acidentais ou conflitos.
// Recomendações:
// Prefira usar let ou const em vez de var, pois são mais previsíveis e ajudam a evitar erros relacionados ao escopo. Use let para variáveis que podem mudar de valor e const para aquelas que não mudam.

// var fica visivel dentro do escopo global "chrome é windo e NodeJS é global", a menos que seja em uma função, ai fica visivel no escopo da função

{
    {
        {
            {
                var sera = 'Será???';
            }
        }
    }
}

