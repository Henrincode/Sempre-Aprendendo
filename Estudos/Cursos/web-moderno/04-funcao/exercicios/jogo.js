// Funções
const sortearNumero = (min = 1, max = 99) => Math.floor(Math.random() * (max - min + 1)) + min;

// Vars

let carteira = 100, entrada = 1, martingale = entrada, sorteio = 0, rodada = 0;

//console.log("Carteira:", carteira, "Aposta:", martingale);

while(carteira >= entrada){
    sorteio = sortearNumero();
    // Verifica se acerta ou se perde
    console.log("Rodada:", ++rodada, "Carteira:", carteira, "Aposta:", martingale, "Sorteio:", sorteio);
    if(sorteio <= 49) {
        carteira += martingale;
        martingale = entrada;
        console.log("Win");
    } else if(carteira >= martingale * 2) {
        carteira -= martingale;
        martingale *= 2;
        console.log("Loss");
    } else if(carteira >= entrada) {
        carteira -= entrada;
        martingale = entrada;
        console.log("Reset");
    };
};

console.log("Carteira:", carteira);