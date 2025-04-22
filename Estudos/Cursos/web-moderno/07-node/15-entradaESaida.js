// Verifica se o argumento '-a' foi passado na execução do script
const anonimo = process.argv.indexOf("-a") !== -1;

// Se quiser visualizar o valor da variável, descomente a linha abaixo:
// console.log(anonimo);

if (anonimo) {
  // Se o argumento '-a' foi passado, exibe a mensagem e finaliza o programa
  process.stdout.write("Fala Anônimo!\n");
  process.exit();
} else {
  // Se o argumento '-a' não foi passado, solicita o nome do usuário
  process.stdout.write("Informe o seu nome: ");

  // Captura a entrada de dados do usuário pelo terminal
  process.stdin.on("data", data => {
    // Converte os dados recebidos para string e remove quebras de linha (\r\n, \n, \r)
    const nome = data.toString().replace(/(\r\n|\n|\r)/g, ""); // ou data.toString().trim()

    // Exibe uma mensagem personalizada com o nome digitado
    process.stdout.write(`Fala ${nome} !!!!\n`);

    // Finaliza o programa
    process.exit();
  });
}
