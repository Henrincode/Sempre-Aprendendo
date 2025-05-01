# ✅ Código com Comentários:

```javascript
// Função que retorna uma Promise (promessa)
// Essa função simula uma operação que pode dar certo (resolve) ou gerar um erro (reject)
function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      // Erro de digitação: deveria ser console.log
      console.log("temp");

      // Se um número aleatório entre 0 e 1 for menor que chanceErro, a promessa falha
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!"); // Rejeita a promessa com a mensagem de erro
      } else {
        resolve(valor); // Resolve a promessa com o valor fornecido
      }
    } catch (e) {
      // Caso aconteça algum erro inesperado, rejeita a promessa com o erro capturado
      reject(e);
    }
  });
}

// Executa a função funcionarOuNao com o valor "Testando..." e 50% de chance de erro
funcionarOuNao("Testando...", 0.5)
  .then(v => `Valor: ${v}`) // Primeiro then: transforma o valor resolvido em uma string
  .then(
    v => console.log(v),     // Segundo then: imprime o valor
    err => console.log(`Erro Esp: ${err}`) // Trata erro específico desse then
  )
  .then(() => console.log("Quase Fim!")) // Executa após o segundo then, se não houver erro anterior
  .catch(err => console.log(`Erro Geral: ${err}`)) // Captura qualquer erro anterior
  .then(() => console.log("Fim!")); // Será executado sempre, com ou sem erro
```

---

### 📘 Explicação do que foi aprendido

Neste código foi trabalhado o **conceito de Promises em JavaScript**, uma forma de lidar com operações assíncronas (como esperar algo terminar ou dar erro). Vamos aos principais pontos:

#### ✅ O que é uma Promise?
- Uma **Promise** é um objeto que representa o **resultado futuro de uma operação assíncrona**.
- Pode estar em 3 estados:
  - *Pending* (pendente)
  - *Resolved* (resolvida com sucesso)
  - *Rejected* (rejeitada com erro)

#### ✅ Como foi usada:
- A função `funcionarOuNao` retorna uma Promise.
- O `Math.random()` é usado para simular a chance de erro.
- Dentro da Promise usamos `resolve()` para sucesso e `reject()` para erro.
- O `try...catch` é usado para capturar possíveis erros inesperados dentro da Promise.

#### ✅ Encadeamento de `.then()` e `.catch()`:
- `.then()` é usado para tratar valores quando a promessa for resolvida.
- `.catch()` é usado para capturar erros.
- O segundo parâmetro de um `.then()` pode ser usado para tratar erros específicos *antes* do `.catch()`.
- Mesmo após um erro ser tratado, os próximos `.then()` continuam a ser executados se o erro for resolvido corretamente.