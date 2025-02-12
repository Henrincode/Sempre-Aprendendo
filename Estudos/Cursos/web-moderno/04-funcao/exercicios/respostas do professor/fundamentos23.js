function calcularNotaFinal(codAluno, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3];
    notas.sort((a, b) => a < b ? 1 : -1);

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;
    
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Média Final: ${mediaFinal.toFixed(2)}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`);
}

calcularNotaFinal(123, 2.8, 6, 3.5);
calcularNotaFinal(456, 7.5, 8.5, 9);