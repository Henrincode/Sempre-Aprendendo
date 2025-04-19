# 💻 Promises no JavaScript

As **Promises** são uma maneira de lidar com operações assíncronas de forma mais legível e estruturada em JavaScript. Elas são especialmente úteis para evitar o "callback hell" e melhorar a legibilidade do código, proporcionando uma maneira mais clara de lidar com resultados assíncronos.

## 🔑 O que é uma Promise?

Uma **Promise** é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona. Ela pode estar em um dos três estados:

1. **Pending (Pendente)**: A operação ainda não foi concluída.
    
2. **Fulfilled (Cumprida)**: A operação foi completada com sucesso.
    
3. **Rejected (Rejeitada)**: A operação falhou.
    

Uma **Promise** pode ser criada usando o construtor `Promise`. O código básico é:

```javascript
let minhaPromise = new Promise((resolve, reject) => {
    // Operação assíncrona
    let sucesso = true; // Simulação de sucesso

    if (sucesso) {
        resolve('Operação bem-sucedida!');
    } else {
        reject('Erro na operação.');
    }
});
```

## 🧑‍💻 Como Usar Promises

Depois de criar uma Promise, podemos usar os métodos `.then()`, `.catch()` e `.finally()` para manipular os resultados ou erros da Promise.

### 🔄 Exemplo Básico com `.then()` e `.catch()`

```javascript
minhaPromise
    .then((resultado) => {
        console.log(resultado); // "Operação bem-sucedida!"
    })
    .catch((erro) => {
        console.log(erro); // "Erro na operação."
    });
```

- **`.then()`**: Usado para manipular um valor retornado com sucesso (fulfilled).
    
- **`.catch()`**: Usado para capturar erros caso a operação tenha sido rejeitada.
    
- **`.finally()`**: Executa uma ação após a Promise ser resolvida, independentemente de sucesso ou erro.
    

```javascript
minhaPromise
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro))
    .finally(() => console.log('Operação finalizada.'));
```

## 🔗 Encadeando Promises

As Promises podem ser encadeadas, o que permite realizar uma sequência de operações assíncronas. Quando uma Promise é resolvida, o valor retornado pode ser passado para o próximo `.then()`.

```javascript
minhaPromise
    .then((resultado) => {
        console.log(resultado); // "Operação bem-sucedida!"
        return 'Outra operação bem-sucedida';
    })
    .then((novoResultado) => {
        console.log(novoResultado); // "Outra operação bem-sucedida"
    })
    .catch((erro) => {
        console.log(erro);
    });
```

## ⏳ Usando Promises com `async` e `await`

O `async` e `await` são recursos que permitem escrever código assíncrono de forma síncrona. A função `async` faz com que uma função retorne uma Promise, e o `await` espera que a Promise seja resolvida antes de continuar a execução do código.

### 📜 Exemplo de uso de `async` e `await`

```javascript
async function minhaFuncaoAssincrona() {
    try {
        const resultado = await minhaPromise;
        console.log(resultado); // "Operação bem-sucedida!"
    } catch (erro) {
        console.log(erro); // "Erro na operação."
    }
}

minhaFuncaoAssincrona();
```

## 🔄 Trabalhando com várias Promises

Quando você precisa lidar com várias Promises ao mesmo tempo, pode usar `Promise.all()` ou `Promise.race()`.

- **`Promise.all()`**: Espera todas as Promises serem resolvidas ou uma ser rejeitada. Retorna um array com os resultados.
    
- **`Promise.race()`**: Retorna a primeira Promise que for resolvida ou rejeitada.
    

### ⚖️ Exemplo com `Promise.all()`

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Primeiro'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Segundo'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Terceiro'));

Promise.all([promise1, promise2, promise3])
    .then((resultados) => {
        console.log(resultados); // ["Primeiro", "Segundo", "Terceiro"]
    })
    .catch((erro) => {
        console.log(erro);
    });
```

### 🏁 Exemplo com `Promise.race()`

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Primeiro'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Segundo'));

Promise.race([promise1, promise2])
    .then((resultado) => {
        console.log(resultado); // "Primeiro" (a primeira Promise resolvida)
    })
    .catch((erro) => {
        console.log(erro);
    });
```

## 🔚 Considerações Finais

- **Promises** são essenciais para lidar com operações assíncronas em Node.js.
    
- Elas melhoram a legibilidade do código em comparação com callbacks.
    
- Usar **async/await** pode tornar o código mais legível, como se fosse síncrono, enquanto **Promise.all()** e **Promise.race()** ajudam a gerenciar várias Promises de uma vez.
    

Essa abordagem facilita o trabalho com operações assíncronas, como leitura de arquivos, requisições HTTP, e interações com bancos de dados, tarefas comuns em Node.js.