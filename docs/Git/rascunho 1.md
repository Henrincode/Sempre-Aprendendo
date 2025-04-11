# Git – Controle de Versão

O **Git** é um sistema de controle de versão distribuído, usado para gerenciar o histórico de alterações em projetos, especialmente de código-fonte. Ele permite que desenvolvedores trabalhem juntos de forma eficiente, com rastreamento completo de mudanças.

---

## 📌 Conceitos Básicos

- **Repositório (repo):** Pasta que contém os arquivos do projeto e a pasta oculta `.git`, que armazena o histórico de versões e configurações internas do Git.
    
- **Commit:** Um snapshot (foto) do projeto em determinado momento.
    
- **Branch (ramo):** Linha paralela de desenvolvimento.
    
- **Merge:** Junta alterações de uma branch para outra.
    
- **Clone:** Cópia local de um repositório remoto.
    
- **Staging Area:** Área temporária onde você prepara os arquivos antes de fazer o commit.
    

---

## 🔧 Comandos Essenciais

### 🟢 Iniciar um repositório

```bash
git init
```

### 📥 Clonar um repositório existente

```bash
git clone <URL-do-repositório>
```

> O comando `git clone` já cria uma cópia local do repositório remoto **e** define o repositório remoto com o nome padrão `origin`, permitindo que você use `git push origin` e `git pull origin` sem necessidade de configurar manualmente.

### ➕ Adicionar arquivos ao staging

```bash
git add <arquivo>     # adiciona um arquivo
git add .             # adiciona todos os arquivos
```

### 📸 Criar um commit

```bash
git commit -m "Mensagem explicando o que foi feito"
```

### 🔍 Ver o status do repositório

```bash
git status
```

### 📜 Ver o histórico de commits

```bash
git log
```

---

## 🌱 Branches

### Criar uma nova branch

```bash
git branch nome-da-branch
```

### Mudar para outra branch

```bash
git checkout nome-da-branch
```

### Criar e mudar de branch ao mesmo tempo

```bash
git checkout -b nome-da-branch
```

### Juntar branch atual com outra

```bash
git merge nome-da-branch
```

---

## 🌐 GitHub (Repositório Remoto)

### Adicionar um repositório remoto manualmente

```bash
git remote add origin https://github.com/usuario/nome-do-repo.git
```

> Esse comando é usado quando você **iniciou o repositório com ****`git init`** e quer conectar com um repositório remoto. O nome `origin` é um **apelido padrão** que representa a URL do repositório remoto. Você pode usar outro nome, mas `origin` é o mais comum.

### Enviar alterações para o repositório remoto

```bash
git push -u origin main
```

### Puxar atualizações do repositório remoto

```bash
git pull origin main
```

---

## 🛠️ Outras Dicas

### Ver alterações feitas

```bash
git diff
```

### Remover arquivo do staging

```bash
git reset <arquivo>
```

### Voltar ao último commit

```bash
git checkout -- <arquivo>
```

---

## 📎 Observações

- Sempre escreva mensagens de commit claras.
    
- Use `.gitignore` para ignorar arquivos/pastas que não devem ir para o repositório.
    
- Use `git status` e `git log` com frequência para acompanhar o que está acontecendo.
    

---

## 📂 Exemplo de `.gitignore`

O `.gitignore` **não é um comando**, mas sim um **arquivo de configuração** que deve ser criado na raiz do projeto. Ele serve para informar ao Git quais arquivos ou pastas devem ser ignorados (não versionados).

### Estrutura de exemplo:

```
# Ignorar arquivos temporários e de sistema
*.log
*.tmp
.DS_Store

# Ignorar diretórios específicos
dist/
node_modules/
build/

# Ignorar arquivos de ambiente
.env
.env.local
```

Você pode personalizar esse arquivo conforme as necessidades do seu projeto.