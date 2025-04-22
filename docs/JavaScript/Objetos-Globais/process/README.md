# 📄 Objeto `process` no Node.js

O objeto global `process` fornece uma forma de interagir com o processo atual do Node.js. Ele está sempre disponível, sem necessidade de importar módulos.

---

## 🔹 Índice das Funcionalidades

1. Acessar argumentos com `process.argv`
    
2. Escrever e ler do terminal (`stdin` e `stdout`)
    
3. Encerrar o processo com `process.exit()` e `process.exitCode`
    
4. Variáveis de ambiente com `process.env`
    
5. Eventos de processo com `process.on()`
    
6. Outras propriedades úteis
    

---

## 1. Acessar argumentos com `process.argv`

Permite capturar argumentos passados via terminal.

```js
// Exemplo: node app.js --modo=dev
console.log(process.argv);
// Saída: [ 'node', '/caminho/app.js', '--modo=dev' ]
```

---

## 2. Escrever e ler do terminal (`stdin` e `stdout`)

### 🟢 `process.stdout.write()`

Escreve no terminal sem quebra de linha automática.

```js
process.stdout.write('Digite seu nome: ');
```

### 🟢 `process.stdin.on('data')`

Lê dados digitados pelo usuário no terminal:

```js
process.stdin.on('data', data => {
    const nome = data.toString().trim();
    process.stdout.write(`Olá, ${nome}!\n`);
});
```

---

## 3. Encerrar o processo com `process.exit()` e `process.exitCode`

### 🔴 `process.exit([código])`

Finaliza o processo. Código `0` indica sucesso, outros indicam erro.

```js
process.exit(0); // sucesso
process.exit(1); // erro
```

### 🔴 `process.exitCode`

Define o código de saída sem encerrar imediatamente:

```js
process.exitCode = 1;
```

---

## 4. Variáveis de ambiente com `process.env`

Permite acessar variáveis definidas no ambiente do sistema:

```js
console.log(process.env.PATH); // ou qualquer outra env var
```

Definindo uma variável no terminal:

```bash
MODO=dev node app.js
```

No código:

```js
console.log(process.env.MODO); // "dev"
```

---

## 5. Eventos de processo com `process.on()`

### 🔸 Captura eventos do processo, como erros ou saída:

```js
process.on('exit', code => {
    console.log(`Processo está saindo com código: ${code}`);
});

process.on('uncaughtException', err => {
    console.error('Erro não tratado:', err);
});
```

---

## 6. Outras propriedades úteis

|Propriedade|Descrição|
|---|---|
|`process.pid`|ID do processo atual|
|`process.cwd()`|Diretório atual|
|`process.uptime()`|Tempo de execução em segundos|
|`process.memoryUsage()`|Memória usada pelo processo|
|`process.hrtime()`|Tempo de alta resolução|
|`process.platform`|Plataforma do sistema (ex: `win32`, `linux`)|
|`process.arch`|Arquitetura do processador (ex: `x64`)|
|`process.version`|Versão do Node.js|
|`process.versions`|Versões dos componentes (V8, etc.)|

---

## ✅ Exemplo prático combinando várias funcionalidades:

```js
if (process.argv.includes('-a')) {
    process.stdout.write('Fala Anônimo!\n');
    process.exit();
}

process.stdout.write('Informe o seu nome: ');
process.stdin.on('data', data => {
    const nome = data.toString().trim();
    process.stdout.write(`Fala ${nome}!\n`);
    process.exit();
});

process.on('exit', code => {
    console.log(`Finalizando com código: ${code}`);
});
```