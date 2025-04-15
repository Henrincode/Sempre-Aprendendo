// Link do desafio: https://www.hackerrank.com/challenges/migratory-birds

const migratoryBirds = passaros => {
  const tiposContagem = [];
  let tiposRegistrado = false;

  // Conta cada espécie de pássaro
  passaros.forEach(tipo => {
    for (let i = 0; i < tiposContagem.length; i++) {
      // Se tipo já estiver registrado conta +1 ao total
      if (tipo === tiposContagem[i].tipo) {
        tiposRegistrado = true;
        tiposContagem[i].total++;
      }
    }
    // Se tipo não estiver registrado, cria registro e atribui 1 ao total
    if (!tiposRegistrado) tiposContagem.push({ tipo: tipo, total: 1 });
    // Muda a váriavel para false para o próximo loop
    tiposRegistrado = false;
  });

  const tipoMaisRegistrado = (acc, n) => (acc.total < n.total ? n : acc);
  const nTotal = tiposContagem.reduce(tipoMaisRegistrado, { total: 0 });

  return nTotal.tipo;
};

console.log(migratoryBirds([1, 2, 3, 4, 5, 11, 5, 11, 12, 12, 3, 11, 12, 25]));
