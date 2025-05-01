# ✅ Código com comentários:

```javascript
// Criando um Map chamado 'tecnologias'
// Um Map é uma estrutura de dados que armazena pares chave/valor e mantém a ordem de inserção
const tecnologias = new Map();

// Adicionando pares chave/valor ao Map
// Aqui, a chave "react" está associada a um objeto com a propriedade 'framework' como false
// A chave "angular" está associada a um objeto com 'framework' como true
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

// Tentativa de acessar a propriedade diretamente com ponto (como em objetos)
// Isso retorna undefined porque Map não funciona assim
console.log(tecnologias.react); // undefined

// Forma correta de acessar valores em um Map é usando o método get()
console.log(tecnologias.get("react").framework); // false

// Criando um novo Map chamado 'chavesVariadas' com diferentes tipos de chave:
// função, objeto e número
const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

// Iterando sobre o Map com forEach
// 'vl' é o valor e 'ch' é a chave
chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

// Verificando se a chave 123 existe no Map
console.log(chavesVariadas.has(123)); // true

// Removendo a chave 123 do Map
chavesVariadas.delete(123);

// Verificando novamente se a chave 123 ainda existe
console.log(chavesVariadas.has(123)); // false

// Exibindo a quantidade de elementos restantes no Map
console.log(chavesVariadas.size);

// Reatribuindo valores à chave 123
// Maps não permitem chaves duplicadas. Se a chave já existe, o valor será substituído
chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b"); // substitui "a" por "b"
chavesVariadas.set(456, "b"); // adiciona uma nova chave com valor "b"

// Exibindo o conteúdo atualizado do Map
console.log(chavesVariadas);
```

---

### 📚 **Documentação Didática - O que foi aprendido**

#### 🗺️ O que é `Map`?

`Map` é uma estrutura de dados do JavaScript usada para armazenar **pares chave/valor**. Diferente de objetos, ele permite:
- Qualquer tipo de dado como chave (funções, objetos, números, etc.)
- Manter a **ordem de inserção** dos elementos
- Métodos específicos como `.set()`, `.get()`, `.has()`, `.delete()` e `.size`

#### ⚙️ Métodos úteis do Map

- `.set(chave, valor)` → Adiciona ou atualiza uma entrada
- `.get(chave)` → Retorna o valor da chave
- `.has(chave)` → Verifica se a chave existe
- `.delete(chave)` → Remove a entrada com a chave especificada
- `.size` → Retorna a quantidade de entradas

#### ❗ Diferença entre Map e Objeto

- Objetos acessam valores com `obj.chave`
- Maps precisam de `map.get(chave)`
- Maps aceitam chaves de **qualquer tipo**, enquanto objetos só aceitam strings ou Symbols como chaves

#### 🔁 Iteração

Você pode usar `.forEach()` para percorrer os pares chave/valor do Map.

#### 🔄 Substituição de valores

Quando você chama `.set()` com uma chave que já existe, o valor anterior é **sobrescrito**.