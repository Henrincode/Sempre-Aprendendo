# NPM (Node Package Manager)

## O que é o NPM?
O NPM (Node Package Manager) é o gerenciador de pacotes do Node.js. Ele permite instalar, atualizar, remover e gerenciar dependências de projetos JavaScript.

---

## Instalação do NPM
O NPM é instalado automaticamente junto com o [Node.js](https://nodejs.org/). Para verificar se o NPM está instalado, utilize o comando:

```sh
npm -v
```

Isso exibirá a versão do NPM instalada.

---

## Lista de Comandos do NPM
Abaixo está a lista completa de comandos do NPM, seus aliases e uma breve descrição de cada um:

### 1. Gerenciamento de pacotes

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm install <pacote>` | `npm i <pacote>` | Instala um pacote no projeto |
| `npm install -g <pacote>` | `npm i -g <pacote>` | Instala um pacote globalmente |
| `npm update` | - | Atualiza todos os pacotes do projeto |
| `npm update <pacote>` | - | Atualiza um pacote específico |
| `npm uninstall <pacote>` | `npm remove <pacote>` ou `npm r <pacote>` | Remove um pacote do projeto |
| `npm uninstall -g <pacote>` | `npm remove -g <pacote>` ou `npm r -g <pacote>` | Remove um pacote globalmente |

### 2. Gerenciamento de dependências

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm install <pacote> --save` | - | Adiciona uma dependência ao `package.json` |
| `npm install <pacote> --save-dev` | - | Adiciona uma dependência de desenvolvimento |
| `npm install <pacote> --save-exact` | - | Adiciona um pacote com versão exata |

### 3. Informações sobre pacotes

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm list` | `npm ls` | Lista os pacotes instalados |
| `npm list -g` | `npm ls -g` | Lista os pacotes globais instalados |
| `npm outdated` | - | Mostra pacotes desatualizados |
| `npm info <pacote>` | `npm show <pacote>` | Exibe informações sobre um pacote |

### 4. Execução de Scripts

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm run <script>` | - | Executa um script definido no `package.json` |
| `npm test` | - | Executa o script de teste do projeto |
| `npm start` | - | Executa o script de inicialização do projeto |

### 5. Configuração do NPM

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm init` | - | Inicia um novo projeto e cria um `package.json` |
| `npm init -y` | - | Cria um `package.json` padrão sem perguntas |
| `npm config set <chave> <valor>` | - | Define uma configuração do NPM |
| `npm config get <chave>` | - | Obtém um valor de configuração |
| `npm config delete <chave>` | - | Remove uma configuração |

### 6. Cache do NPM

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm cache clean --force` | - | Limpa o cache do NPM |
| `npm cache verify` | - | Verifica a integridade do cache do NPM |

### 7. Publicação de Pacotes

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm login` | - | Faz login no NPM |
| `npm logout` | - | Faz logout do NPM |
| `npm publish` | - | Publica um pacote no NPM |
| `npm unpublish` | - | Remove um pacote publicado |

### 8. Diagnóstico e Solução de Problemas

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm doctor` | - | Verifica problemas na configuração do NPM |
| `npm audit` | - | Verifica vulnerabilidades em pacotes instalados |
| `npm audit fix` | - | Corrige vulnerabilidades automaticamente |

### 9. Outras funcionalidades

| Comando Original | Alias | Descrição |
|-----------------|-------|-------------|
| `npm help` | - | Exibe a documentação oficial do NPM |
| `npm version` | - | Mostra a versão do NPM instalada |
| `npm whoami` | - | Exibe o usuário autenticado no NPM |

---

## Conclusão
Esta documentação apresenta os principais comandos do NPM, incluindo seus aliases e descrição. O NPM é uma ferramenta essencial para gerenciamento de dependências em projetos Node.js, e dominar seus comandos é fundamental para qualquer desenvolvedor JavaScript.
