# 🌍 **JavaScript Global (Navegador)**

### 🧾 VARIÁVEIS GLOBAIS

> _Disponíveis diretamente no escopo global._

- `window`: Representa a janela do navegador.
    
- `document`: Representa o DOM da página.
    
- `location`: Contém a URL atual.
    
- `navigator`: Informações do navegador.
    
- `screen`: Info sobre a tela do usuário.
    
- `history`: Histórico de navegação.
    
- `frames`: Conjunto de frames na página (obsoleto na maioria dos casos).
    

---

### ⚙️ FUNÇÕES GLOBAIS

> _Chamadas diretamente, sem importar nada._

- `alert()`: Mostra um alerta.
    
- `prompt()`: Abre um input de texto.
    
- `confirm()`: Caixa de confirmação (OK/Cancelar).
    
- `setTimeout(fn, ms)`: Executa uma função após um tempo.
    
- `setInterval(fn, ms)`: Executa uma função repetidamente.
    
- `clearTimeout(id)`: Cancela um `setTimeout`.
    
- `clearInterval(id)`: Cancela um `setInterval`.
    
- `parseInt()` / `parseFloat()`: Converte strings para números.
    
- `isNaN()`: Verifica se não é número.
    
- `encodeURI()` / `decodeURI()`
    
- `eval()`: Executa código JS de uma string (⚠️ perigoso).
    

---

### 📦 OBJETOS GLOBAIS

> _Objetos prontos, úteis para diversas tarefas._

- `console`: Saída de logs.
    
- `Math`: Operações matemáticas.
    
- `Date`: Manipulação de datas e horários.
    
- `JSON`: Manipular strings e objetos JSON.
    
- `Intl`: Formatação internacional (moeda, data, número).
    
- `Error`, `TypeError`, `SyntaxError`, etc.: Tratamento de erros.
    
- `localStorage`: Armazenamento permanente.
    
- `sessionStorage`: Armazenamento temporário.
    
- `window`: O próprio escopo global.
    

---

# 🖥️ **Node.js Global**

### 🧾 VARIÁVEIS GLOBAIS

- `__dirname`: Diretório atual do arquivo.
    
- `__filename`: Caminho absoluto do arquivo atual.
    

---

### ⚙️ FUNÇÕES GLOBAIS

- `require()`: Importa módulos CommonJS.
    
- `setTimeout()` / `setInterval()` / `clearTimeout()` / `clearInterval()` (iguais ao navegador).
    
- `setImmediate(fn)`: Executa uma função **logo após** o ciclo atual.
    
- `queueMicrotask(fn)`: Insere uma microtarefa (como Promises).
    
- `require.resolve()`: Resolve caminho de um módulo.
    
- `require.main`: Referência ao módulo principal da execução.
    

---

### 📦 OBJETOS GLOBAIS

- `console`: Para logs.
    
- `process`: Info e controle do processo em execução.
    
- `global`: Escopo global no Node (equivalente ao `window` do navegador).
    
- `module`: Representa o módulo atual.
    
- `exports`: Objeto de exportação do módulo.
    
- `Buffer`: Manipulação de dados binários.
    
- `URL`, `URLSearchParams`: Utilitários de URL.
    

---

### 📌 Comparação rápida

|Nome|Navegador (`window`)|Node.js (`global`)|
|---|---|---|
|`console`|✅|✅|
|`setTimeout`|✅|✅|
|`window`|✅|❌|
|`global`|❌|✅|
|`__dirname`|❌|✅|
|`document`|✅|❌|