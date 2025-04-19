# 🏗️ Função Factory em JavaScript/Node

## O que é uma Function Factory?

Uma **Function Factory** é uma função que retorna outra função. Em outras palavras, ela cria funções com base em parâmetros fornecidos.

No JavaScript, isso é útil quando você deseja gerar funções personalizadas dinamicamente, sem precisar escrever o código repetidamente.

---

## 🛠️ Como Criar uma Function Factory?

Vamos criar uma função que retorna outra função. No exemplo abaixo, temos uma função `multiplicador` que cria funções para multiplicar números por um valor específico.

```javascript
function multiplicador(fator) {
  return function (numero) {
    return numero * fator;
  };
}

const dobrar = multiplicador(2);
console.log(dobrar(5)); // 10

const triplicar = multiplicador(3);
console.log(triplicar(5)); // 15
```

### Explicação:

- A função `multiplicador` recebe um parâmetro `fator` e retorna uma nova função.
    
- A função retornada multiplica um número (`numero`) pelo valor do `fator`.
    

---

## 📚 Exemplos Práticos

### Exemplo 1: Função de Saudações

```javascript
function saudacao(saudacaoInicial) {
  return function (nome) {
    return `${saudacaoInicial}, ${nome}!`;
  };
}

const ola = saudacao('Olá');
console.log(ola('João')); // Olá, João!

const bomDia = saudacao('Bom dia');
console.log(bomDia('Maria')); // Bom dia, Maria!
```

### Exemplo 2: Função de Adição

```javascript
function adder(valor) {
  return function (num) {
    return num + valor;
  };
}

const adicionarCinco = adder(5);
console.log(adicionarCinco(10)); // 15
```

---

## 🚦 Quando Usar?

A **Function Factory** é útil quando você precisa de funções personalizadas baseadas em um parâmetro ou quando deseja criar funções que compartilham algum comportamento comum, mas com valores diferentes.

---

## ✅ Benefícios

- **Reusabilidade**: Crie funções reutilizáveis sem precisar escrever código repetidamente.
    
- **Flexibilidade**: Permite criar funções dinâmicas com base em parâmetros de entrada.
    
- **Clareza**: Torna o código mais legível e modular.
    

---

## 💡 Conclusão

As **Function Factories** são uma poderosa ferramenta em JavaScript/Node para criar funções de maneira dinâmica e personalizada. Com elas, você pode melhorar a modularidade e reusabilidade do seu código, especialmente em projetos mais complexos.