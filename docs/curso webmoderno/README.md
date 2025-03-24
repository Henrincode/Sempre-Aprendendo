# JavaScript, ECMAScript, Node.js e npm

O **JavaScript** é uma linguagem de programação amplamente usada para o desenvolvimento web, trazendo interatividade e dinamismo às páginas. Ele segue o padrão **ECMAScript**, uma especificação que define as funcionalidades e a sintaxe da linguagem, garantindo a compatibilidade e a evolução do JavaScript em diferentes plataformas.

Com o **Node.js**, o JavaScript pode ser executado fora do navegador, diretamente no servidor, o que possibilita a criação de aplicações backend, como APIs, servidores, e até ferramentas de linha de comando. Node.js é baseado no motor V8 do Google Chrome, que compila e executa JavaScript de forma rápida e eficiente.

O **npm** (Node Package Manager) é o gerenciador de pacotes do Node.js. Ele facilita a instalação, atualização e gerenciamento de bibliotecas e ferramentas JavaScript, permitindo que desenvolvedores compartilhem e usem código de terceiros. Esse ecossistema robusto possibilita o uso de JavaScript tanto no frontend quanto no backend, simplificando o desenvolvimento de aplicações completas.

## Instalações

- [Node.js + npm](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

No VS Code, instale a extensão **Code Runner**, criada por *Jun Han*. Com ela, você poderá rodar o código Node.js diretamente no VS Code, usando o atalho `Ctrl+Alt+N` ou clicando no ícone de play no canto superior direito. **IMPORTANTE:** Se você selecionar parte do código, o Code Runner executará apenas o trecho selecionado; para rodar todo o código, deixe o texto sem seleção.

**Configuração Code Runner**

Sempre limpa o terminal quando executa um novo teste:

![image](https://github.com/Henrincode/Sempre-Aprendendo/blob/main/docs/img/code-runner-clear-previous-output.png)

Salva o arquivo antes de rodar o teste:

![image](https://github.com/Henrincode/Sempre-Aprendendo/blob/main/docs/img/code-runner-save-file-before-run.png)

Ignora rodar só o código selecionado, assim ele roda o código todo da página:

![image](https://github.com/Henrincode/Sempre-Aprendendo/blob/main/docs/img/code-runner-ignore-selection.png)




### Atalhos do Visual Code
```ctrl + ;``` "comenta a linha selecionada"<br/>
```shft + alt + A``` "faz comentários de várias linhas"<br/>
```ctrl + shift + P``` "abre a caixa de pesquisa"<br/>
```shift + alt + ↓``` "duplica linha"<br/>
```ctrl + alt + ↓``` "seleciona vários elementos"<br/>
```alt + click``` "seleciona várias áreas do código e edita ao mesmo tempo"<br/>
```alt + ↓``` "move a linha toda"<br/>
```ctrl + X``` "apaga uma linha"

## Terminal

Aprenda a usar o terminal:

- Windows: [Iniciando com o terminal do Windows](https://blog.formacao.dev/iniciando-com-o-terminal-do-windows/)
- Linux/Mac: [Terminal no macOS/Linux](https://blog.formacao.dev/terminal-no-macos-linux/)

### Comandos úteis

```ctrl +``` "almenta o tamanho da fonte"<br/>
```ctrl -``` "diminui o tamanho da fonte" <br/>
```ctrl L``` "limpa o terminal"

Para dar mais de um comando em uma linha:
```
comando1 && comando2
```
Para abrir uma diretório ou caminho:
```
cd nome-do-diretorio ou caminho
```

Para subir um diretório:
```
cd..
```

Para criar um diretório:
```
mkdir nome-da-pasta
```

Para verificar a versão do Node.js instalada:
```
node --version
```

Para verificar a versão do npm instalada:
```bash
npm --version
```

Para abrir um arquivo ou diretório no Visual Code digite "." dentro do diretório:
```
code .
```

Para abrir um arquivo ou pasta no Visual Code:
```
code nomedoarquivo.js
```

Para abrir um arquivo no Node:
```
node nomedoarquivo.js
```
