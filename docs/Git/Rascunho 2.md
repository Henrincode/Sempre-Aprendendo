## 🧠 Introdução ao Git e GitHub

### O que é o Git?

Git é um **sistema de controle de versões**. Ele permite que você acompanhe alterações nos arquivos ao longo do tempo e trabalhe com outras pessoas no mesmo projeto, de forma segura e organizada.

### O que é o GitHub?

GitHub é uma **plataforma online** que armazena repositórios Git e permite colaboração, controle de acesso, visualização de histórico e muito mais.

---

## 📦 Instalação

### 🪟 Windows

1. Acesse: [https://git-scm.com/download/win](https://git-scm.com/download/win)
    
2. Baixe o instalador e siga as etapas padrão.
    
3. Após instalar, abra o **Git Bash** (é como um terminal Linux no Windows).
    

### 🐧 Linux (Ubuntu)

```bash
sudo apt update
sudo apt install git
```

---

## ⚙️ Configuração Inicial do Git

Configure o Git com suas informações:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

Para verificar as configurações:

```bash
git config --list
```

---

## 🔐 Autenticação com o GitHub

### Geração de chave SSH

```bash
ssh-keygen -t ed25519 -C "seuemail@exemplo.com"
```

Copie a chave:

```bash
cat ~/.ssh/id_ed25519.pub
```

Adicione no GitHub:

- Vá em **Settings > SSH and GPG keys > New SSH Key**
    
- Cole a chave e salve
    

Teste:

```bash
ssh -T git@github.com
```

---

## 🗂️ Comandos Essenciais do Git

### Criar novo repositório

```bash
git init
```

### Clonar repositório existente do GitHub

```bash
git clone git@github.com:usuario/repositorio.git
# ou usando HTTPS:
git clone https://github.com/usuario/repositorio.git
```

### Ver status das alterações

```bash
git status
```

### Adicionar arquivos ao controle de versão

```bash
git add arquivo.txt
# ou todos os arquivos:
git add .
```

### Criar um commit (salvar uma versão)

```bash
git commit -m "Mensagem explicando o que mudou"
```

### Enviar alterações para o GitHub

```bash
git push origin main
```

### Baixar alterações do GitHub

```bash
git pull origin main
```

---

## 🧪 Branches (Ramificações)

### Criar nova branch

```bash
git checkout -b nome-da-branch
```

### Trocar de branch

```bash
git checkout main
```

### Mesclar branch

```bash
git merge nome-da-branch
```

---

## 🧽 Corrigindo Erros Comuns

### Desfazer alterações locais

```bash
git checkout -- nome-do-arquivo
```

### Desfazer último commit (sem apagar alterações)

```bash
git reset --soft HEAD~1
```

---

## 🌍 Conectar Projeto Local com Repositório do GitHub

1. Crie um repositório no GitHub (sem README).
    
2. No terminal:
    

```bash
git init
git add .
git commit -m "primeiro commit"
git remote add origin git@github.com:usuario/repositorio.git
git branch -M main
git push -u origin main
```

---

## 📁 .gitignore

O arquivo `.gitignore` define o que não deve ser rastreado pelo Git.

Exemplo:

```
node_modules/
.env
*.log
```

---

## 🔄 Fluxo de Trabalho Comum

1. `git pull` → Baixa as últimas alterações.
    
2. `git checkout -b nova-feature` → Cria branch.
    
3. `git add` + `git commit` → Salva mudanças.
    
4. `git push origin nova-feature` → Envia branch.
    
5. Cria Pull Request no GitHub → Solicita revisão.
    

---

## 🧼 Dicas Extras

- Use `git log` para ver o histórico de commits.
    
- `git diff` mostra o que foi alterado.
    
- Faça commits com mensagens claras e objetivas.
    
- Crie um `.gitignore` no início do projeto.
    
- Nunca envie senhas ou arquivos sensíveis para o GitHub.