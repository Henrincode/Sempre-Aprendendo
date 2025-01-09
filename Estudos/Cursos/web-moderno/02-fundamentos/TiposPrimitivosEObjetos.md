# Tipos Primitivos e Objetos em JavaScript

Em JavaScript, as variáveis podem armazenar **tipos primitivos** ou **objetos**, e o comportamento de cada um deles é diferente quando se trata de cópias e referências.

---

### Tipos Primitivos

Os tipos primitivos são:
- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `bigint`
- `symbol`

Quando você atribui um valor primitivo a uma variável, ele é armazenado diretamente. Se uma variável for copiada, ela recebe uma cópia independente do valor.

**Exemplo:**

```javascript
let a = 10;
let b = a; // Copia o valor de 'a' para 'b'

a = 20;

console.log(a); // 20
console.log(b); // 10 (b não foi alterado)
```

---

### Objetos

Os objetos incluem:
- Objetos literais: `{ }`
- Arrays: `[ ]`
- Funções: `function() { }`
- Outros tipos criados com `class` ou `new`

Quando você atribui um objeto a uma variável, ela armazena uma **referência** ao local do objeto na memória. Isso significa que várias variáveis podem apontar para o mesmo objeto.

**Exemplo com objetos:**

```javascript
let obj1 = { name: "Henrique" };
let obj2 = obj1; // obj2 aponta para o mesmo objeto que obj1

obj1.name = "Alan";

console.log(obj1.name); // "Alan"
console.log(obj2.name); // "Alan" (ambas variáveis compartilham o mesmo objeto)
```

**Exemplo com arrays:**

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 aponta para o mesmo array que arr1

arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4] (ambas variáveis compartilham o mesmo array)
```

---

### Diferenças Importantes

| **Tipo**        | **Cópia ao Atribuir**                | **Comportamento**                  |
|------------------|-------------------------------------|-------------------------------------|
| **Primitivo**    | Cria uma cópia independente.        | Alterações não afetam outras variáveis. |
| **Objeto/Array** | Compartilha a referência na memória. | Alterações afetam todas as variáveis que apontam para ele. |

---

### Como Fazer Cópias de Objetos ou Arrays

Se precisar criar uma cópia independente de um objeto ou array, use métodos como o operador spread (`...`) ou funções específicas. 

**Exemplo:**

```javascript
let obj1 = { name: "Henrique" };
let obj2 = { ...obj1 }; // Cópia independente

obj1.name = "Alan";

console.log(obj1.name); // "Alan"
console.log(obj2.name); // "Henrique" (não foi alterado)
```

**Para arrays:**

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // Cópia independente

arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3] (não foi alterado)
```

---

Compreender essas diferenças ajuda a evitar bugs e efeitos colaterais no código!