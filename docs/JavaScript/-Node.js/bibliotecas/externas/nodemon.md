## 📚 Documentação - Nodemon no Node.js

### 📦 O que é o Nodemon?

Nodemon é uma ferramenta que monitora automaticamente as mudanças nos arquivos do seu projeto Node.js e reinicia o servidor sempre que detecta uma alteração. Isso facilita muito o desenvolvimento, evitando reiniciar manualmente a aplicação a cada modificação.

---

### 🚀 Instalação

```bash
npm install -D nodemon
```

> A flag `-D` (ou `--save-dev`) instala o Nodemon como dependência de desenvolvimento.

---

### 🛠️ Como usar

#### ✅ Primeiramente, você pode executar um arquivo usando:

```bash
npm nodemon arquivo.js
```

> Essa forma funciona se o nodemon estiver instalado globalmente. Para instalar globalmente, use `npm install -g nodemon`.

---

#### 1. Executar diretamente com `npx`:

```bash
npx nodemon app.js
```

---

#### 2. Executar com `npm` (recomendado):

Adicione um script no seu `package.json`:

```json
"scripts": {
  "dev": "nodemon app.js"
}
```

Depois, execute com:

```bash
npm run dev
```

---

### ⚙️ Configuração opcional

Você pode criar um arquivo `nodemon.json` na raiz do projeto para personalizar o comportamento do Nodemon.

```json
{
  "watch": ["src"],
  "ext": "js,json",
  "ignore": ["node_modules"],
  "exec": "node src/app.js"
}
```

---

### 🔍 Principais opções de uso

#### 📁 `--watch`

Monitora um ou mais diretórios/arquivos específicos:

```bash
npx nodemon --watch src app.js
```

---

#### 🛑 `--ignore`

Ignora alterações em arquivos ou pastas específicas:

```bash
npx nodemon --ignore node_modules
```

---

#### 🧪 `--exec`

Permite customizar o comando de execução:

```bash
npx nodemon --exec "node --inspect" app.js
```

---

#### 🔁 Reiniciar manualmente

Durante a execução do Nodemon, você pode digitar `rs` no terminal para forçar um reinício da aplicação.

---

### 📎 Dica de uso

Você pode combinar Nodemon com outras ferramentas, como o `ts-node` para projetos TypeScript:

```bash
npx nodemon --watch src --exec ts-node src/index.ts
```

---

### 📚 Documentação oficial

Para mais opções e detalhes avançados:  
🔗 [https://github.com/remy/nodemon](https://github.com/remy/nodemon)