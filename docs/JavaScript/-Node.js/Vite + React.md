# 🚀 Instalando Vite + React com JavaScript

## ✅ Requisitos

Antes de começar, certifique-se de ter o seguinte instalado no seu sistema:

- [Node.js](https://nodejs.org/) (recomendado: versão 18 ou superior)
    
- npm (gerenciador de pacotes que vem junto com o Node.js)
    

Você pode verificar se já tem instalado com:

```bash
node -v
npm -v
```

---

## ❓ O que é o Vite?

**Vite** é um _build tool_ moderno que permite criar projetos front-end com carregamento rápido e ambiente de desenvolvimento super eficiente.  
Comparado ao Webpack, o Vite é mais rápido e simples de configurar.

---

## ⚛️ O que é o React?

**React** é uma biblioteca JavaScript para criar interfaces de usuário (UI).  
Com ele, você pode criar componentes reutilizáveis e trabalhar com o conceito de _SPA_ (Single Page Application).

---

## 🌍 Instalando o Vite Globalmente (opcional)

Você pode instalar o Vite globalmente, se quiser usar o comando `vite` diretamente no terminal:

```bash
npm install -g vite
```

> Isso facilita a execução de comandos como `vite` e `vite build`, mas **não é obrigatório** para criar projetos com `npm create vite@latest`.

---

## 🛠️ Criando um Projeto React com JavaScript

### 📁 Criando um projeto em uma nova pasta:

```bash
npm create vite@latest meu-projeto
```

### 📂 Criando o projeto na pasta atual:

```bash
npm create vite@latest .
```

### 🔽 Durante a criação, selecione:

- **Framework**: `React`
    
- **Variant**: `JavaScript`
    

---

## ▶️ Iniciando o Projeto

Se você criou uma nova pasta, acesse a pasta:

```bash
cd meu-projeto
```

Agora instale as dependências:

```bash
npm install
```

E inicie o servidor de desenvolvimento:

```bash
npm run dev
```

---

## 🌐 Acessando o Projeto

Após o comando acima, o terminal mostrará algo como:

```
  VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

Você pode:

- Segurar **Ctrl** e **clicar** no link `http://localhost:5173/`
    
- Ou copiar e colar no navegador
    

---

## ✅ Projeto funcionando!

Agora seu projeto React com Vite e JavaScript está rodando!  
Você pode abrir a pasta no seu editor de código (como o VS Code) e começar a desenvolver.