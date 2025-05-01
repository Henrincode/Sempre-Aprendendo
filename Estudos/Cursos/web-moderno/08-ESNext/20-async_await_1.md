# ✅ Código com comentários:

```js
// Função que retorna uma Promise que será resolvida após um tempo (padrão: 2000ms)
function esperarPor(tempo = 2000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), tempo);
  });
}

// Exemplo de execução com Promises encadeadas (com .then):
// esperarPor(2000)
//   .then(() => console.log("Executando promise 1..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando promise 2..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando promise 3..."));

// Função que retorna uma Promise resolvida com o valor 10 após 5 segundos
function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000);
  });
}

// Função assíncrona que retorna rapidamente o valor 20
async function retornarValorRapido() {
  return 20;
}

// Função assíncrona que demonstra o uso de async/await
async function executar() {
  let valor = await retornarValorRapido(); // Espera o valor 20 da função assíncrona

  await esperarPor(1500); // Espera 1,5s antes de exibir a próxima linha
  console.log(`Async/Await ${valor}...`);

  await esperarPor(1500);
  console.log(`Async/Await ${valor + 1}...`);

  await esperarPor(1500);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3; // Retorna 23 (20 + 3)
}

// Executa a função e imprime o resultado retornado
executar().then(console.log);

// Essa linha é executada primeiro porque o código acima é assíncrono
console.log("Código sincrono");
```

---

### 📘 **O que foi aprendido com esse código**

#### ⏳ **Promises e temporização**

Você aprendeu como criar funções que retornam Promises com `setTimeout`, permitindo simular ações que levam tempo para serem concluídas (como chamadas de API).

#### ⚙️ **Execução assíncrona com `.then()`**

Vimos um exemplo de como encadear Promises usando `.then()` para executar etapas de forma sequencial.

#### 🧠 **Funções assíncronas com `async/await`**

As palavras-chave `async` e `await` tornam o código assíncrono mais legível e próximo de um código síncrono tradicional. Com `await`, podemos "esperar" a resposta de uma Promise antes de continuar a execução da função.

#### 🔁 **Reutilização com `await`**

Chamamos a função `esperarPor()` várias vezes com `await` para simular atrasos entre logs no console, mostrando como pausar a execução sem bloquear o restante do código.

#### 🔄 **Diferença entre código síncrono e assíncrono**

A linha `console.log("Código sincrono")` é executada imediatamente, antes mesmo do código assíncrono começar, provando que funções `async` não bloqueiam o fluxo principal do programa.
