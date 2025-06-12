# 📘 Documentação Completa de Comandos Git

## 📌 Introdução

O **Git** é um sistema de controle de versões distribuído, usado para gerenciar projetos e acompanhar mudanças no código ao longo do tempo.

---

## 🛠️ Configuração Inicial

### `git config`

Configura informações do usuário:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Ver todas as configurações:

```bash
git config --list
```

---

## 📁 Inicialização e Clonagem

### `git init`

Inicia um novo repositório Git:

```bash
git init
```

### `git clone`

Clona um repositório remoto:

```bash
git clone https://github.com/usuario/repositorio.git
```

---

## 📄 Status e Logs

### `git status`

Exibe o estado atual dos arquivos no diretório:

```bash
git status
```

### `git log`

Mostra o histórico de commits:

```bash
git log
```

Com histórico resumido:

```bash
git log --oneline
```

---

## 📥 Adicionar e Confirmar Mudanças

### `git add`

Adiciona arquivos ao staging (área de preparação):

```bash
git add nome-do-arquivo.txt
git add .            # Adiciona todos os arquivos
```

### `git commit`

Salva as mudanças no histórico:

```bash
git commit -m "Mensagem do commit"
```

---

## 🔄 Atualizar Repositório

### `git pull`

Baixa e mescla alterações do repositório remoto:

```bash
git pull origin main
```

### `git fetch`

Baixa as mudanças sem mesclar automaticamente:

```bash
git fetch
```

---

## 🚀 Enviar para o Repositório Remoto

### `git push`

Envia os commits locais para o repositório remoto:

```bash
git push origin main
```

---

## 🌿 Branches

### `git branch`

Lista todas as branches:

```bash
git branch
```

Cria uma nova branch:

```bash
git branch nome-da-branch
```

Apaga uma branch:

```bash
git branch -d nome-da-branch
```

### `git checkout`

Muda para outra branch:

```bash
git checkout nome-da-branch
```

Cria e muda para nova branch:

```bash
git checkout -b nova-branch
```

---

## 🔀 Mesclagem de Branches

### `git merge`

Mescla uma branch à atual:

```bash
git merge nome-da-branch
```

---

## 🧼 Desfazendo Mudanças

### `git reset`

Remove arquivos do staging:

```bash
git reset nome-do-arquivo.txt
```

Volta a um commit anterior (mantendo arquivos):

```bash
git reset --soft HEAD~1
```

Desfaz o commit e as alterações:

```bash
git reset --hard HEAD~1
```

### `git restore`

Restaura arquivo para o último commit:

```bash
git restore nome-do-arquivo.txt
```

---

## 🧾 Tags

### `git tag`

Lista as tags:

```bash
git tag
```

Cria uma nova tag:

```bash
git tag -a v1.0 -m "Versão 1.0"
```

Envia tags para o repositório remoto:

```bash
git push origin v1.0
```

---

## 🔍 Comparação

### `git diff`

Mostra diferenças entre arquivos modificados:

```bash
git diff
```

---

## 📂 Repositórios Remotos

### `git remote`

Lista repositórios remotos:

```bash
git remote -v
```

Adiciona um novo repositório remoto:

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

---

## 🧪 Stash (Guardar alterações temporariamente)

### `git stash`

Guarda as alterações:

```bash
git stash
```

Recupera alterações guardadas:

```bash
git stash pop
```

---

## ⚠️ Reverter Mudanças

### `git revert`

Cria um novo commit que desfaz outro:

```bash
git revert <id-do-commit>
```

---

## 🧹 Limpeza

### `git clean`

Remove arquivos não rastreados:

```bash
git clean -f      # Remove arquivos
git clean -fd     # Remove arquivos e diretórios
```