# ✅ Código com comentários:

```javascript
// Aprendendo a usar async e await - Parte 2

// Função que gera um número aleatório entre "min" e "max", evitando os números da lista "numerosProibidos"
function gerarNumerosEntre(min, max, numerosProibidos) {
  // Se o valor mínimo for maior que o máximo, inverte os valores
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;

    // Se o número já estiver na lista de proibidos, rejeita a Promise
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      // Se não estiver, resolve com o número gerado
      resolve(aleatorio);
    }
  });
}

// Função assíncrona que tenta gerar "qtdeNumeros" diferentes entre 1 e 60
async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
  const numeros = [];

  try {
    // Gera a quantidade desejada de números únicos
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    // Se falhar mais de 10 vezes, lança um erro
    if (tentativas > 10) {
      throw "Não deu certo!";
    } else {
      // Caso contrário, tenta novamente com uma nova tentativa
      return gerarMegaSena(qtdeNumeros, tentativas + 1);
    }
  }
}

// Chama a função e exibe os números ou o erro no console
gerarMegaSena(15).then(console.log).catch(console.log);
```

---

### 📘 O que foi aprendido neste código

#### 🧠 Uso de `async` e `await`

Você aprendeu como lidar com **operações assíncronas** em JavaScript usando `async` e `await`. Isso permite que você escreva código assíncrono de forma mais legível e parecida com código síncrono.

#### 🔁 Repetição com controle assíncrono

Dentro do `for`, usamos `await` para esperar a geração de cada número antes de continuar, garantindo que os números sejam diferentes e não causem conflito.

#### ❌ Tratamento de erros com `try/catch`

Você viu como capturar erros em uma função assíncrona usando `try/catch`, e como tomar decisões com base na tentativa atual (evitando loops infinitos).

#### 🔂 Recursão com limite de tentativas

Se um número for repetido, a função chama a si mesma recursivamente, mas com um **limite de 10 tentativas** para evitar travar o programa.

#### 🎲 Uso de Promises para gerar números aleatórios

A função `gerarNumerosEntre` retorna uma `Promise` que pode ser resolvida (com sucesso) ou rejeitada (número repetido), o que é essencial para simular uma operação que pode falhar, como em sistemas reais.
