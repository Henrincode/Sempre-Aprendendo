// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo: String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

const desempenho = pontuacoes => {
    
    pontuacoes = pontuacoes.split(" ").map(Number);
    let maiorPonto = pontuacoes[0];
    let piorPonto =  pontuacoes[0];
    let recordes = 0;
    let piorJogo = 0;

    for(let i = 1; i < pontuacoes.length; i++) {
        // Pega o número de recordes
        if (pontuacoes[i] > maiorPonto) {
            maiorPonto = pontuacoes[i];
            recordes++;
        };
        // Pega o pior jogo
        if (pontuacoes[i] < piorPonto) {
            piorPonto = pontuacoes[i];
            piorJogo = i + 1;
        };
    };


    return [recordes, piorJogo];
};

console.log(desempenho("10 20 20 8 25 3 0 30 1"));