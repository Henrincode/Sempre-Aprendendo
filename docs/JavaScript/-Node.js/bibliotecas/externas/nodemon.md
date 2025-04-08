# 📚 Documentação - Nodemon no Node.js

## 📦 O que é o Nodemon?

Nodemon é uma ferramenta que monitora automaticamente as mudanças nos arquivos do seu projeto Node.js e reinicia o servidor sempre que detecta uma alteração. Isso facilita muito o desenvolvimento, evitando reiniciar manualmente a aplicação a cada modificação.

---

## 🚀 Instalação

Você pode instalar o Nodemon de duas formas:

### 📍 Instalação local (recomendada para projetos):

```bash
npm install -D nodemon
```

> A flag `-D` (ou `--save-dev`) instala o Nodemon como dependência de desenvolvimento.

### 🌍 Instalação global:

```bash
npm install -g nodemon
```

> Essa opção permite usar o comando `nodemon` diretamente no terminal, sem `npx`.

---

## 🛠️ Como usar

### ✅ Execução direta:

```bash
nodemon app.js
```

> Funciona se o Nodemon estiver instalado globalmente.

---

### ▶️ Executar com `npx`:

```bash
npx nodemon app.js
```

---

### 💡 Executar com `npm run` (recomendado):

Adicione um script no seu `package.json`:

```json
"scripts": {
  "dev": "nodemon app.js"
}
```

E execute com:

```bash
npm run dev
```

---

## ⚙️ Configuração opcional

Você pode criar um arquivo `nodemon.json` na raiz do projeto para personalizar o comportamento do Nodemon:

```json
{
  "watch": ["src"],
  "ext": "js,json",
  "ignore": ["logs/*", "node_modules"],
  "exec": "node src/app.js",
  "delay": "2"
}
```

> Esse exemplo monitora a pasta `src`, reinicia ao detectar mudanças em arquivos `.js` e `.json`, ignora a pasta `logs` e `node_modules`, executa o arquivo `src/app.js` e adiciona um atraso de 2 segundos antes de reiniciar o servidor.

---

## 🔍 Principais opções de uso

### 📁 `--watch`

Monitora um ou mais diretórios/arquivos específicos:

```bash
npx nodemon --watch src app.js
```

---

### 🛑 `--ignore`

Ignora alterações em arquivos ou pastas específicas:

```bash
npx nodemon --ignore node_modules --ignore logs
```

---

### 🔍 `--ext`

Especifica quais extensões de arquivos devem ser monitoradas:

```bash
npx nodemon --ext js,html,json app.js
```

---

### ⏱️ `--delay`

Define um atraso antes do reinício automático:

```bash
npx nodemon --delay 2 app.js
```

---

### 🔧 `--exec`

Permite customizar o comando de execução:

```bash
npx nodemon --exec "node --inspect" app.js
```

---

### 📄 `--config`

Utiliza um arquivo de configuração personalizado:

```bash
npx nodemon --config nodemon.json
```

---

### 💬 `--verbose`

Mostra informações detalhadas sobre os arquivos monitorados:

```bash
npx nodemon --verbose app.js
```

---

### 🔇 `--quiet`

Executa sem exibir logs:

```bash
npx nodemon --quiet app.js
```

---

### 📌 Versão e ajuda

- Ver versão do Nodemon:

```bash
npx nodemon -V
```

- Ver ajuda:

```bash
npx nodemon -h
```

---

### 🔁 Reiniciar manualmente

Durante a execução do Nodemon, você pode digitar `rs` no terminal para forçar um reinício da aplicação.

---

## 📎 Dica de uso

Você pode combinar Nodemon com outras ferramentas, como o `ts-node` para projetos TypeScript:

```bash
npx nodemon --watch src --exec ts-node src/index.ts
```

---

## 🧾 Resumo de Comandos Úteis

| Comando | Alias | Descrição |
|--------|--------|-------------|
| `nodemon app.js` | — | Inicia a aplicação com `nodemon`. |
| `npx nodemon app.js` | — | Executa via `npx`, útil para instalação local. |
| `nodemon --exec node app.js` | — | Define um comando de execução. |
| `nodemon --watch src` | — | Monitora a pasta `src`. |
| `nodemon --ext js,html` | — | Monitora apenas certos tipos de arquivos. |
| `nodemon --delay 2` | — | Adiciona 2 segundos de atraso no reinício. |
| `nodemon --verbose` | — | Mostra detalhes dos arquivos monitorados. |
| `nodemon --ignore logs` | — | Ignora a pasta `logs`. |
| `nodemon --config nodemon.json` | — | Usa arquivo de configuração. |
| `nodemon -q` | `--quiet` | Executa sem mensagens de log. |
| `nodemon -V` | `--version` | Mostra a versão instalada. |
| `nodemon -h` | `--help` | Exibe a ajuda do Nodemon. |
| `rs` | — | Reinicia manualmente. |

---

## 📚 Documentação oficial

Para mais opções e detalhes avançados:  
🔗 [https://github.com/remy/nodemon](https://github.com/remy/nodemon)
