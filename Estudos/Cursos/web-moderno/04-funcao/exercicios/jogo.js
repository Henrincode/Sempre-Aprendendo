const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

const printBoard = () => {
    console.log(`\n  0 1 2`);
    board.forEach((row, i) => console.log(i, row.join('|')));
};

const checkWin = () => {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true;
        if (board[0][i] !== ' ' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true;
    }
    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true;
    if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true;
    return false;
};

const checkDraw = () => board.flat().every(cell => cell !== ' ');

const getBestMove = () => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === ' ') {
                board[i][j] = 'O';
                if (checkWin()) {
                    return [i, j];
                }
                board[i][j] = 'X';
                if (checkWin()) {
                    return [i, j];
                }
                board[i][j] = ' ';
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === ' ') {
                return [i, j];
            }
        }
    }
};

const makeMove = () => {
    printBoard();
    if (currentPlayer === 'X') {
        rl.question(`\nJogador ${currentPlayer}, digite linha e coluna (ex: 1 2): `, input => {
            const [row, col] = input.split(' ').map(Number);
            if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
                board[row][col] = currentPlayer;
                if (checkWin()) {
                    printBoard();
                    console.log(`\nJogador ${currentPlayer} venceu!`);
                    return rl.close();
                }
                if (checkDraw()) {
                    printBoard();
                    console.log('\nEmpate!');
                    return rl.close();
                }
                currentPlayer = 'O';
                makeMove();
            } else {
                console.log('\nJogada inválida. Tente novamente.');
                makeMove();
            }
        });
    } else {
        console.log('\nBot está jogando...');
        const [botRow, botCol] = getBestMove();
        board[botRow][botCol] = 'O';
        if (checkWin()) {
            printBoard();
            console.log('\nO bot venceu!');
            return rl.close();
        }
        if (checkDraw()) {
            printBoard();
            console.log('\nEmpate!');
            return rl.close();
        }
        currentPlayer = 'X';
        makeMove();
    }
};

console.log('Bem-vindo ao Jogo da Velha!');
makeMove();