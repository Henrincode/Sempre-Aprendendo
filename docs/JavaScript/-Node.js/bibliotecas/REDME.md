# 📚 Principais Bibliotecas e Módulos do Node.js

Este documento lista os **principais módulos internos**, **bibliotecas externas** e **frameworks modernos** utilizados no desenvolvimento com **Node.js**.

---

## 📦 Módulos Internos (Core Modules)

Esses módulos já vêm instalados com o Node.js.

| Módulo              | Descrição                                                                 |
|---------------------|---------------------------------------------------------------------------|
| `fs`                | Manipula arquivos e diretórios (ler, criar, escrever, excluir).           |
| `http`              | Cria servidores web HTTP.                                                 |
| `https`             | Cria servidores web seguros (HTTPS).                                      |
| `url`               | Manipula URLs (parse, format).                                            |
| `path`              | Trabalha com caminhos de arquivos e diretórios.                          |
| `os`                | Informações sobre o sistema operacional.                                 |
| `crypto`            | Funções de criptografia (hash, HMAC, etc).                               |
| `events`            | Criação e gerenciamento de eventos.                                      |
| `stream`            | Manipulação de fluxos de dados (streams).                                |
| `buffer`            | Manipulação de dados binários.                                           |
| `util`              | Funções utilitárias.                                                     |
| `child_process`     | Executa comandos do sistema ou scripts externos.                         |
| `timers`            | Temporizadores como `setTimeout` e `setInterval`.                        |
| `readline`          | Interface para leitura linha por linha no terminal.                      |
| `zlib`              | Compactação e descompactação de dados (gzip).                            |

---

## 📦 Bibliotecas Externas (npm)

| Biblioteca           | Descrição                                                                  |
|----------------------|----------------------------------------------------------------------------|
| `express`            | Framework minimalista para criação de APIs e servidores HTTP.              |
| `axios`              | Cliente HTTP para fazer requisições a APIs externas.                       |
| `nodemon`            | Reinicia o servidor automaticamente ao detectar alterações no código.      |
| `dotenv`             | Carrega variáveis de ambiente de um arquivo `.env`.                        |
| `cors`               | Middleware para lidar com permissões entre origens (CORS).                 |
| `mongoose`           | ODM para MongoDB (modelagem e acesso ao banco com JavaScript).             |
| `jsonwebtoken`       | Criação e verificação de tokens JWT para autenticação.                     |
| `bcrypt` / `bcryptjs`| Criptografia de senhas (hash).                                             |
| `joi`                | Validação de dados (ex: parâmetros e corpo de requisições).                |
| `express-validator`  | Middleware de validação no Express.                                        |
| `multer`             | Middleware para upload de arquivos com Express.                            |
| `sequelize`          | ORM para bancos de dados relacionais (MySQL, PostgreSQL, etc).             |
| `chalk`              | Permite estilizar textos no terminal com cores.                            |
| `commander`          | Criação de CLIs (interfaces de linha de comando).                          |
| `yargs`              | Alternativa ao Commander, também para criação de CLIs.                     |
| `inquirer`           | Interação com usuário no terminal (menus, inputs, checkboxes, etc).        |
| `ejs` / `handlebars` | Motores de template para gerar HTML a partir de dados.                     |

---

## 🚀 Frameworks e Ferramentas Modernas

| Ferramenta/Framework | Descrição                                                                 |
|----------------------|---------------------------------------------------------------------------|
| `NestJS`             | Framework backend Node.js baseado em módulos e decorators (inspirado no Angular). Ideal para APIs REST e GraphQL. |
| `Next.js`            | Framework React com suporte fullstack (SSR, API Routes, static generation). Excelente para aplicações web completas. |
| `Tailwind CSS`       | Framework CSS utilitário, facilita a estilização com classes prontas. Muito usado com React e Next.js.             |

---

> 📝 Essas ferramentas modernas ampliam o poder do Node.js, integrando front-end e back-end de forma eficiente, produtiva e escalável.
