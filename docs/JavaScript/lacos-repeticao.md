# Laços de Repetição em JavaScript

Os laços de repetição são usados para executar um bloco de código várias vezes, dependendo de uma condição. Eles podem ser classificados em **tradicionais** e **baseados em condição**.

---

## 1. Tradicionais (Estruturas de Controle)

Esses laços são usados quando se sabe o número exato de repetições ou para percorrer elementos de objetos e arrays.

### 1.1 for (Estrutura de repetição controlada)

- Usado quando há um número fixo de iterações.
- Possui três partes: inicialização, condição e incremento/decremento.

```javascript
for (let i = 0; i < 5; i++) {
	console.log(i); // Saída: 0, 1, 2, 3, 4
}
```

---

### **1.2 for in** (Percorre propriedades de objetos)

- Itera sobre as **chaves** de um objeto (ou índices de um array, mas não é recomendado para arrays).

```javascript
const pessoa = { nome: "Henrique", idade: 34 };

for (let chave in pessoa) {
	console.log(chave, pessoa[chave]); 
	// Saída: nome Henrique
	//        idade 34
}
```

---

### **1.3 for of** (Percorre valores de arrays e iteráveis)

- Itera diretamente sobre os **valores** de arrays, strings, Map, Set e outros iteráveis.

```javascript
const numeros = [10, 20, 30];

for (let valor of numeros) {
	console.log(valor); // Saída: 10, 20, 30
}
```

---

## 2. Baseados em Condição

Esses laços são usados quando não se sabe exatamente quantas vezes o código será repetido.

### **2.1 while** (Executa enquanto a condição for verdadeira)

- Verifica a condição antes de executar o bloco de código.

```javascript
let contador = 0;

while (contador < 3) {
	console.log(contador);
	contador++;
}
// Saída: 0, 1, 2
```

---

### **2.2 do while** (Executa pelo menos uma vez antes de verificar a condição)

- Executa o bloco primeiro, depois verifica a condição.

```javascript
let i = 5;

do {
	console.log(i);
	i++;
} while (i < 3); 

// Saída: 5 (executa pelo menos uma vez, mesmo que a condição seja falsa)
```