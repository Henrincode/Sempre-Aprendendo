# console.log()

Em JavaScript, o `console.log()` é um método utilizado para exibir mensagens no console do navegador ou do ambiente de desenvolvimento (como o Node.js). Ele é muito útil para depuração, ou seja, para verificar o valor de variáveis, o fluxo de execução do código, ou identificar possíveis problemas no código.

### Exemplo simples:
```javascript
console.log("Olá, mundo!");
// Também podem ser usadas aspas simples ''
console.log('Olá, mundo!');
```
**Saída no console:**
```
Olá, mundo!
Olá, mundo!
```

### Outros usos:
- **Exibir variáveis:**
```javascript
let nome = "Henrique";
console.log("O nome é:", nome);
```

**Saída no console:**
```
O nome é: Henrique
```

- **Exibir valores de objetos ou arrays:**
```javascript
let pessoa = { nome: "Henrique", idade: 34 };
console.log(pessoa);
```

**Saída no console:**
```
{ nome: "Henrique", idade: 34 }
```

- **Depuração:**
Se você quiser entender como o código está funcionando, pode usar `console.log()` para "espiar" os valores em determinados pontos.

```javascript
function soma(a, b) {
  console.log("Valores recebidos:", a, b);
  return a + b;
}

console.log(soma(3, 5));
```

**Saída no console:**
```
Valores recebidos: 3 5
8
```

### Nota:
- No navegador, você pode abrir o console com a tecla `F12` ou `Ctrl + Shift + I` (Windows/Linux) ou `Cmd + Option + I` (Mac) e acessar a aba "Console".
- Em Node.js, o `console.log()` exibe as mensagens diretamente no terminal.