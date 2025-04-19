# 📁 Documentação do Módulo `fs` (File System) do Node.js

## 📌 O que é o módulo `fs`?

O módulo `fs` do Node.js permite **interagir com o sistema de arquivos**. Com ele, podemos **ler, escrever, criar, excluir, copiar e mover arquivos ou diretórios** de forma síncrona ou assíncrona.

---

## ✅ Importando o módulo

O módulo `fs` já vem embutido no Node.js, então não precisa instalar nada.

```js
const fs = require('fs');
```

Para usar Promises (mais moderno):

```js
const fs = require('fs/promises');
```

---

## 📂 Operações comuns com `fs`

### 1. **Ler arquivos**

#### Assíncrono com callback

```js
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler:', err);
    return;
  }
  console.log('Conteúdo:', data);
});
```

#### Síncrono

```js
const data = fs.readFileSync('arquivo.txt', 'utf8');
console.log(data);
```

#### Com Promises

```js
const fs = require('fs/promises');

async function lerArquivo() {
  try {
    const data = await fs.readFile('arquivo.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
lerArquivo();
```

---

### 2. **Escrever arquivos**

#### Assíncrono

```js
fs.writeFile('novo.txt', 'Conteúdo do arquivo', (err) => {
  if (err) throw err;
  console.log('Arquivo salvo!');
});
```

#### Síncrono

```js
fs.writeFileSync('novo.txt', 'Conteúdo do arquivo');
```

#### Com Promises

```js
await fs.writeFile('novo.txt', 'Texto com Promises');
```

---

### 3. **Adicionar conteúdo (append)**

```js
fs.appendFile('log.txt', '\nNova linha', (err) => {
  if (err) throw err;
  console.log('Linha adicionada!');
});
```

---

### 4. **Verificar se um arquivo existe**

```js
fs.access('arquivo.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'Não existe' : 'Existe');
});
```

---

### 5. **Deletar arquivos**

```js
fs.unlink('arquivo.txt', (err) => {
  if (err) throw err;
  console.log('Arquivo deletado!');
});
```

---

### 6. **Criar diretórios**

```js
fs.mkdir('pastaNova', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Pasta criada!');
});
```

---

### 7. **Ler conteúdo de diretórios**

```js
fs.readdir('./', (err, files) => {
  if (err) throw err;
  console.log('Arquivos:', files);
});
```

---

### 8. **Renomear ou mover arquivos**

```js
fs.rename('antigo.txt', 'novo.txt', (err) => {
  if (err) throw err;
  console.log('Arquivo renomeado!');
});
```

---

## 💡 Dica: versão síncrona vs assíncrona

- Use **versão assíncrona** (`readFile`, `writeFile`, etc.) sempre que possível — é **não bloqueante** e melhor para desempenho.
    
- Use **versão síncrona** (`readFileSync`, `writeFileSync`, etc.) apenas em scripts simples ou em situações onde a ordem é crítica.
    

---

## 📘 Resumo das principais funções

|Função|Descrição|
|---|---|
|`fs.readFile`|Lê um arquivo|
|`fs.writeFile`|Escreve em um arquivo|
|`fs.appendFile`|Adiciona conteúdo a um arquivo|
|`fs.unlink`|Deleta um arquivo|
|`fs.mkdir`|Cria um diretório|
|`fs.readdir`|Lista arquivos de um diretório|
|`fs.rename`|Renomeia ou move um arquivo|
|`fs.access`|Verifica se um arquivo existe|