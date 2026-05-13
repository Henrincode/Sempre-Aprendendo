# Fluxo de Configuração: Do Zero ao Ambiente Pronto

Siga esta ordem para garantir que as dependências e permissões de segurança sejam aplicadas corretamente:

## 1. Preparação do Sistema (PowerShell Adm)
Antes de tudo, desbloqueie a execução de scripts para que os gerenciadores funcionem.
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 2. Instalação das Ferramentas Base (Winget)

Abra o PowerShell como administrador e rode os comandos abaixo:

- Google Chrome (Browser)

    ```powershell
    winget install -e --id Google.Chrome
    ```

- VS Code (IDE principal)

    ```powershell
    winget install -e --id Microsoft.VisualStudioCode
    ```

- Git (Controle de versão)

    ```powershell
    winget install -e --id Git.Git
    ```

- NVM (Gerenciador de versões do Node)

    ```powershell
    winget install -e --id CoreyButler.NVMforWindows
    ```

- Android Studio

    ```powershell
    winget install -e --id Google.AndroidStudio
    ```

***Nota:** Feche e abra o terminal após estas instalações para o Windows reconhecer os novos comandos.*

## 3. Configuração do Node e pnpm
Agora instale o motor do seu desenvolvimento Web.

- Instala a versão estável (LTS)

    ```powershell
    nvm install lts
    ```

- Ativa a versão LTS

    ```powershell
    nvm use lts
    ```

- Habilita o pnpm nativamente **opcional*

    ```powershell
    corepack enable pnpm
    ```

## 4. Integração Git + VS Code (Tratamento de Conflitos)
Configure o Git para usar a interface visual do VS Code em vez do terminal para resolver problemas de código.

- Define o VS Code como editor de mensagens e commits

    ```powershell
    git config --global core.editor "code --wait"
    ```

- Configura o VS Code como a ferramenta oficial de MERGE (conflitos)

    ```powershell
    git config --global merge.tool vscode
    ```

    ```powershell
    git config --global mergetool.vscode.cmd "code --wait --merge $REMOTE $LOCAL $BASE $MERGED"
    ```

### Configurar usuário e email

Quando instalamos o git via terminal é necessário configurar o nome de usuário e email:

- Nome de usuário do github

    ```powershell
    git config --global user.name "seu-nome"
    ```

- E-Mail do github

    ```powershell
    git config --global user.email "seu-email@exemplo.com"
    ```
## Como testar se o fluxo deu certo?
Para garantir que a integração do Git com o VS Code funcionou, você pode rodar:
`git config --global -l`

Se as linhas de `merge.tool=vscode` aparecerem lá, você está pronto! Agora é só abrir o VS Code e focar no **Next.js 16**.

---

Ao rodar o React Native Expo, antes configure o Emulador do Android Studio e ao menos a primeira vez que for rodar o React Native Expo esteja com o emulador do android aberto para o React instalar o Expo/Go dentro do android