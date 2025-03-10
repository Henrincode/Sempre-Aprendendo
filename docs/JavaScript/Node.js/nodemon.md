# Nodemon no Node.js

## Introdução ao Nodemon
O `nodemon` é uma ferramenta que monitora as alterações nos arquivos do seu projeto e reinicia automaticamente o servidor Node.js sempre que um arquivo for modificado. Isso evita a necessidade de reiniciar manualmente o servidor toda vez que uma mudança é feita no código.

## Instalação
O `nodemon` pode ser instalado globalmente ou apenas no projeto:

### Instalação global:
```sh
npm install -g nodemon
```

### Instalação local (no projeto):
```sh
npm install --save-dev nodemon
```

## Uso Básico
Para iniciar um arquivo com `nodemon`, basta rodar o seguinte comando:
```sh
nodemon app.js
```
Se o `nodemon` estiver instalado apenas no projeto, utilize:
```sh
npx nodemon app.js
```
Ou adicione um script no `package.json`:
```json
"scripts": {
  "dev": "nodemon app.js"
}
```
E execute:
```sh
npm run dev
```

## Lista de Comandos do Nodemon
Abaixo está uma lista com os comandos do `nodemon`, seus aliases e descrições:

| Comando | Alias | Descrição |
|---------|-------|-------------|
| `nodemon app.js` | - | Inicia a aplicação com `nodemon`. |
| `nodemon` | - | Tenta rodar o script definido no `package.json`. |
| `nodemon --exec node app.js` | - | Define um comando específico para ser executado. |
| `nodemon --watch src` | - | Monitora uma pasta específica (ex: `src`). |
| `nodemon --ext js,html` | - | Especifica quais tipos de arquivos devem ser monitorados. |
| `nodemon --delay 2` | - | Define um atraso (em segundos) antes de reiniciar o servidor. |
| `nodemon --verbose` | - | Mostra informações detalhadas sobre os arquivos monitorados. |
| `nodemon --ignore logs` | - | Ignora arquivos/pastas especificados. |
| `nodemon --config nodemon.json` | - | Usa um arquivo de configuração personalizado. |
| `nodemon -q` | `nodemon --quiet` | Executa o `nodemon` sem exibir mensagens de log. |
| `nodemon -V` | `nodemon --version` | Exibe a versão instalada do `nodemon`. |
| `nodemon -h` | `nodemon --help` | Exibe a ajuda do `nodemon`. |
| `rs` | - | Reinicia manualmente o `nodemon` sem precisar parar e reiniciar o comando. |

## Exemplo de Uso com Arquivo de Configuração
O `nodemon` permite usar um arquivo de configuração (`nodemon.json`). Um exemplo:
```json
{
  "watch": ["src"],
  "ext": "js,json",
  "ignore": ["logs/*"],
  "exec": "node app.js",
  "delay": "2"
}
```
Isso configura o `nodemon` para:
- Monitorar apenas a pasta `src`
- Reiniciar para arquivos `.js` e `.json`
- Ignorar arquivos na pasta `logs`
- Usar `node app.js` como comando principal
- Adicionar um atraso de 2 segundos antes de reiniciar

## Considerações Finais
O `nodemon` é uma ferramenta essencial para desenvolvedores Node.js, facilitando a execução de aplicações durante o desenvolvimento. Para mais informações, consulte a [documentação oficial do nodemon](https://github.com/remy/nodemon).

