// Filtrar usuários ativos com filter()
// Dado um array de objetos representando usuários, retorne apenas os que estão ativos.

// const usuarios = [
//   { nome: "Alice", ativo: true },
//   { nome: "Guilherme", ativo: false },
//   { nome: "Carlos", ativo: true },
//   { nome: "Daniela", ativo: false },
// ];

// Saída esperada: [{ nome: "Alice", ativo: true }, { nome: "Carlos", ativo: true }]

const usuarios = [
  { nome: "Alice", ativo: true },
  { nome: "Guilherme", ativo: false },
  { nome: "Carlos", ativo: true },
  { nome: "Daniela", ativo: false },
];

const usuariosAtivos = usuarios.filter(u => u.ativo);

console.log(usuariosAtivos);
