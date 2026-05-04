### 🚀 Fluxo de Configuração: Do Zero ao Ambiente Pronto

Siga esta ordem para garantir que as dependências e permissões de segurança sejam aplicadas corretamente:

#### 1. Preparação do Sistema (PowerShell Adm)
Antes de tudo, desbloqueie a execução de scripts para que os gerenciadores funcionem.
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### 2. Instalação das Ferramentas Base (Winget)
Instale o gerenciador de Node, o controle de versão (Git) e o editor de código.
```powershell
# Gerenciador de Versões do Node
winget install -e --id CoreyButler.NVMforWindows

# Git para controle de versão
winget install -e --id Git.Git

# VS Code (Seu IDE principal)
winget install -e --id Microsoft.VisualStudioCode
```
> **Nota:** Feche e abra o terminal após estas instalações para o Windows reconhecer os novos comandos.

#### 3. Configuração do Node e pnpm
Agora instale o motor do seu desenvolvimento Web.
```powershell
# Instala e ativa a versão estável (LTS v24.15.0)
nvm install lts
nvm use lts

# Habilita o pnpm nativamente
corepack enable pnpm
```

#### 4. Integração Git + VS Code (Tratamento de Conflitos)
Configure o Git para usar a interface visual do VS Code em vez do terminal para resolver problemas de código.
```powershell
# Define o VS Code como editor de mensagens e commits
git config --global core.editor "code --wait"

# Configura o VS Code como a ferramenta oficial de MERGE (conflitos)
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd "code --wait --merge $REMOTE $LOCAL $BASE $MERGED"
```

#### 5. Ambiente Mobile (Android Studio)
Finalize instalando o pesado para o desenvolvimento mobile.
```powershell
winget install -e --id Google.AndroidStudio
```

---

### Como testar se o fluxo deu certo?
Para garantir que a integração do Git com o VS Code funcionou, você pode rodar:
`git config --global -l`

Se as linhas de `merge.tool=vscode` aparecerem lá, você está pronto! Agora é só abrir o VS Code e focar no **Next.js 16**.

---

Ao rodar o React Native Expo, antes configure o Emulador do Android Studio e ao menos a primeira vez que for rodar o React Native Expo esteja com o emulador do android aberto para o React instalar o Expo/Go dentro do android