No JavaScript e no Node.js, praticamente **tudo é objeto**, e muitos objetos herdam propriedades e métodos através do **Prototype**.

Aqui está uma lista dos principais objetos com seus **prototypes** disponíveis nativamente:

### 🔑 **Objetos Básicos**
| Objeto               | Métodos/Propriedades do Prototype                                         |
|--------------------|----------------------------------------------------------------------------|
| `Object`           | `constructor`, `hasOwnProperty()`, `isPrototypeOf()`, `propertyIsEnumerable()`, `toString()`, `valueOf()`, `toLocaleString()`, `__proto__`, `__defineGetter__()`, `__defineSetter__()`, `__lookupGetter__()`, `__lookupSetter__()` |
| `Function`         | `apply()`, `bind()`, `call()`, `toString()`, `arguments`, `caller`, `length`, `name` |
| `Array`            | `concat()`, `copyWithin()`, `entries()`, `every()`, `fill()`, `filter()`, `find()`, `findIndex()`, `flat()`, `flatMap()`, `forEach()`, `includes()`, `indexOf()`, `join()`, `keys()`, `lastIndexOf()`, `map()`, `pop()`, `push()`, `reduce()`, `reduceRight()`, `reverse()`, `shift()`, `slice()`, `some()`, `sort()`, `splice()`, `toLocaleString()`, `toString()`, `unshift()`, `values()` |
| `String`           | `charAt()`, `charCodeAt()`, `codePointAt()`, `concat()`, `endsWith()`, `includes()`, `indexOf()`, `lastIndexOf()`, `localeCompare()`, `match()`, `padEnd()`, `padStart()`, `repeat()`, `replace()`, `search()`, `slice()`, `split()`, `startsWith()`, `substring()`, `toLowerCase()`, `toUpperCase()`, `trim()`, `trimEnd()`, `trimStart()`, `valueOf()`, `toString()`, `normalize()` |

---

### 🔢 **Números e Datas**
| Objeto   | Métodos/Propriedades do Prototype                  |
|----------|-------------------------------------------------|
| `Number` | `toExponential()`, `toFixed()`, `toPrecision()`, `toString()`, `valueOf()` |
| `Math`   | **Não tem prototype** (apenas métodos estáticos) |
| `Date`   | `getDate()`, `getDay()`, `getFullYear()`, `getHours()`, `getMilliseconds()`, `getMinutes()`, `getMonth()`, `getSeconds()`, `getTime()`, `getTimezoneOffset()`, `getUTCDate()`, `getUTCDay()`, `getUTCFullYear()`, `getUTCHours()`, `getUTCMilliseconds()`, `getUTCMinutes()`, `getUTCMonth()`, `getUTCSeconds()`, `setDate()`, `setFullYear()`, `setHours()`, `setMilliseconds()`, `setMinutes()`, `setMonth()`, `setSeconds()`, `setTime()`, `toDateString()`, `toISOString()`, `toJSON()`, `toLocaleDateString()`, `toLocaleString()`, `toLocaleTimeString()`, `toString()`, `toTimeString()`, `toUTCString()`, `valueOf()` |

---

### ⚙️ **Objetos de Tipos Avançados**
| Objeto        | Métodos/Propriedades do Prototype        |
|---------------|----------------------------------------|
| `RegExp`      | `exec()`, `test()`, `toString()`, `flags`, `global`, `ignoreCase`, `multiline`, `dotAll`, `unicode`, `sticky` |
| `Error`       | `name`, `message`, `toString()`        |
| `Map`         | `set()`, `get()`, `delete()`, `has()`, `clear()`, `keys()`, `values()`, `entries()`, `forEach()`, `size` |
| `Set`         | `add()`, `delete()`, `has()`, `clear()`, `keys()`, `values()`, `entries()`, `forEach()`, `size` |
| `Promise`     | `then()`, `catch()`, `finally()`        |

---

### 📄 **Protótipos de DOM (apenas no Browser)**
| Objeto        | Métodos/Propriedades                       |
|---------------|--------------------------------------------|
| `Window`      | `alert()`, `confirm()`, `prompt()`, `setTimeout()`, `setInterval()`, `clearTimeout()`, `clearInterval()` |
| `Element`     | `getAttribute()`, `setAttribute()`, `appendChild()`, `removeChild()`, `querySelector()`, `querySelectorAll()` |
| `Node`        | `appendChild()`, `removeChild()`, `cloneNode()`, `contains()`, `insertBefore()` |

---

### 🧠 **Herança de Prototypes**
Todos os objetos seguem essa cadeia de herança:

```
null
  ↑
Object.prototype
  ↑
Function.prototype
  ↑
Array.prototype
  ↑
String.prototype
  ↑
Number.prototype
  ↑
Boolean.prototype
  ↑
Date.prototype
  ↑
RegExp.prototype
  ↑
Error.prototype
  ↑
Map.prototype
  ↑
Set.prototype
  ↑
Promise.prototype
```

---

### 🔥 DICA EXTRA:
Quer ver os prototypes diretamente no console?
Basta rodar:
```js
console.log(Object.getPrototypeOf([]))  // Array
console.log(Object.getPrototypeOf(""))  // String
console.log(Object.getPrototypeOf({}))  // Object
console.log(Object.getPrototypeOf(new Date()))  // Date
console.log(Object.getPrototypeOf(new Map()))  // Map
```

---

### 📌 Conclusão
Com essa lista, você tem uma visão geral de **todos os prototypes** que o JavaScript e Node.js oferecem. Eles são uma parte fundamental para entender o comportamento da linguagem, herança e reaproveitamento de código.

Quer que eu gere um arquivo `.md` com essa lista para colocar na sua documentação? 🚀
