## 🧠 Introdução ao Git e GitHub

### 💡 _Dica Rápida! — Assista antes de continuar ou você vai se perder!_

Se você está começando, use o **GitHub Desktop** — é bem mais fácil que o terminal.  
[Youtube - Veja esse vídeo do Guanabara ensinando](https://youtu.be/P0Hvrf8T3zo?si=ACcqKstrKVAJIP9V&t=121)

Quer entender os **conceitos por trás do Git e GitHub** de forma visual e didática? A Attekita Dev tem um vídeo excelente explicando tudo sem usar comandos.  
[Youtube - Conceitos de Git e GitHub com Attekita Dev](https://www.youtube.com/watch?v=P9xXbEhqhqA)

Antes de seguir, também vale muito a pena assistir esse curso gratuito de 45 minutos do **Código Fonte TV** — ele cobre tudo o que você precisa saber para começar com Git e GitHub.  
[Youtube - Curso completo de Git em 45 minutos](https://www.youtube.com/watch?v=ts-H3W1uLMM)

---

### O que é o **Git**?

O **Git** é uma ferramenta que ajuda você a **salvar o histórico do seu projeto**. Ele registra cada alteração que você faz nos arquivos, permitindo que você volte atrás se cometer algum erro ou queira recuperar uma versão anterior. Também é muito usado quando várias pessoas estão trabalhando juntas no mesmo projeto.

> Imagine que você está escrevendo um livro. O Git vai salvando cópias de cada versão, assim você pode voltar para uma parte antiga se quiser.

### O que é o **GitHub**?

O **GitHub** é um site onde você pode **guardar os seus projetos que usam Git**. Ele permite que você acesse seus projetos de qualquer lugar, compartilhe com outras pessoas e trabalhe em equipe de forma organizada.

> O Git cuida dos arquivos. O GitHub é onde esses arquivos ficam guardados online.

---

## 🔁 Exemplo de fluxo de trabalho

1. `git pull` → Puxa as atualizações do projeto.
    
2. `git add` e depois `git commit` → Adiciona e salva as mudanças.
    
3. `git push origin main` → Envia pro GitHub.
    

---

## 📦 Como instalar o Git

### 💻 Como instalar o Git no Windows

1. Acesse o site oficial: [https://git-scm.com/download/win](https://git-scm.com/download/win)
    
2. Baixe e instale o Git (pode seguir as opções padrão).
    
3. Após instalar, abra o **Git Bash**, que é um terminal próprio do Git.
    

### 🐧 No Linux (Ubuntu)

Abra o terminal e digite os comandos:

```bash
sudo apt update
sudo apt install git
```

---

## ⚙️ Configurando o Git pela primeira vez

Depois de instalar, você precisa dizer ao Git quem é você:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

Essas informações vão aparecer em cada alteração (commit) que você fizer.

Para ver se deu certo:

```bash
git config --list
```

---

## 🗂️ Comandos Git que você vai usar bastante

### 📁 Criar um novo repositório (projeto Git)

```bash
git init
```

> Cria um repositório Git vazio na pasta atual.

---

### 📅 Clonar um projeto que já está no GitHub

```bash
git clone https://github.com/usuario/repositorio.git
```

> Copia um repositório que está no GitHub para o seu computador.

---

### 📌 Ver o que mudou

```bash
git status
```

> Mostra quais arquivos foram modificados, adicionados ou ainda não estão no controle do Git.

---

### ➕ Adicionar arquivos para salvar no Git

```bash
git add nome-do-arquivo.txt
```

Ou, para adicionar **todos os arquivos de uma vez**:

```bash
git add .
```

---

### 📂 Criar um "salvamento" (commit)

```bash
git commit -m "Descrição do que você fez"
```

> Salva oficialmente uma nova versão do projeto.

---

### 🚀 Enviar alterações para o GitHub

```bash
git push origin main
```

> Manda os commits do seu computador para o repositório online (GitHub).

---

### 📄 Baixar atualizações do GitHub

```bash
git pull origin main
```

> Traz as últimas mudanças do repositório online para seu computador.

---

## 🌿 Usando **branches** (ramificações)

Branches permitem que você trabalhe em novas ideias sem bagunçar o código principal.

### Criar uma nova branch

```bash
git checkout -b nome-da-branch
```

### Trocar de branch

```bash
git checkout main
```

### Juntar uma branch com outra

```bash
git merge nome-da-branch
```

---

## ❌ Corrigindo erros comuns

### Desfazer mudanças em um arquivo

```bash
git checkout -- nome-do-arquivo
```

> Volta o arquivo ao estado anterior.

---

### Desfazer o último commit (sem perder o que escreveu)

```bash
git reset --soft HEAD~1
```

---

## 🌍 Subindo seu projeto pro GitHub

1. Crie um novo repositório no GitHub (sem marcar o README).
    
2. No terminal, dentro da pasta do seu projeto:
    

```bash
git init
git add .
git commit -m "primeiro commit"
git remote add origin git@github.com:usuario/repositorio.git
git branch -M main
git push -u origin main
```

---

## 📁 O que é `.gitignore`?

Esse arquivo serve para **dizer ao Git o que ele deve ignorar**, ou seja, arquivos que não precisam ir para o GitHub (como senhas, arquivos temporários ou pastas grandes).

Exemplo de `.gitignore`:

```
node_modules/
.env
*.log
```

---

## 🧼 Dicas Finais

- Use `git log` para ver o histórico dos commits.
    
- `git diff` mostra o que exatamente foi alterado.
    
- Escreva mensagens de commit claras e objetivas (ex: "adiciona botão de login").
    
- Use `.gitignore` desde o início do projeto.
    
- **Nunca** envie senhas ou arquivos secretos para o GitHub!
    

---

## 📝 Boas práticas de commit

- Escreva mensagens curtas e claras, descrevendo o que foi feito.
    
- Use o tempo verbal no imperativo: "corrige erro", "adiciona validação", "remove botão".
    
- Use prefixos para indicar o tipo da mudança (em inglês, com tradução contextual):
    

|Prefixo|Tradução contextual|Exemplo|
|---|---|---|
|feat|nova funcionalidade|feat: adiciona funcionalidade de login|
|fix|correção de bug|fix: corrige erro no formulário de cadastro|
|docs|documentação|docs: atualiza README com instruções|
|style|estilo de código|style: remove espaços em branco|
|refactor|refatoração|refactor: simplifica lógica de autenticação|
|test|testes|test: adiciona testes para componente Header|
|chore|tarefa técnica|chore: atualiza dependências do projeto|