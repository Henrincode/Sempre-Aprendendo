# Documentação MySQL: Guia Completo e Detalhado

## Introdução ao MySQL

**MySQL** é um sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado no mundo todo. É conhecido por sua escalabilidade, confiabilidade e facilidade de uso. MySQL é open-source e gratuito, sendo ideal tanto para pequenas aplicações quanto para grandes sistemas empresariais.

### Características Principais

- **Sistema de gerenciamento de banco de dados relacional**
- **Open-source e gratuito**
- **Escalável e confiável**
- **Suporte para múltiplas plataformas**
- **Interface de linha de comando (CLI) robusta**
- **Suporte a múltiplas conexões simultâneas**
- **Segurança com autenticação de usuários**
- **Compatibilidade com diversos frameworks e linguagens**

---

## Índice

1. [Instalação e Configuração](#instalação-e-configuração)
2. [Comandos Básicos](#comandos-básicos)
3. [Criando e Gerenciando Bancos de Dados](#criando-e-gerenciando-bancos-de-dados)
4. [Trabalhando com Tabelas](#trabalhando-com-tabelas)
5. [Tipos de Dados](#tipos-de-dados)
6. [Restrições (Constraints)](#restrições-constraints)
7. [Índices](#índices)
8. [Manipulação de Dados (DML)](#manipulação-de-dados-dml)
9. [Consultas (SELECT)](#consultas-select)
10. [JOINs](#joins)
11. [Funções Built-in](#funções-built-in)
12. [Stored Procedures](#stored-procedures)
13. [Triggers](#triggers)
14. [Views](#views)
15. [Transações](#transações)
16. [Recursos Avançados](#recursos-avançados)
17. [Exemplos Práticos Completos](#exemplos-práticos-completos)

---

## Instalação e Configuração

### Conectando ao MySQL

Para conectar ao MySQL, você precisa fornecer as seguintes informações:

- **Host do servidor**: IP ou URL (padrão: localhost)
- **Porta**: porta do servidor MySQL (padrão: 3306)
- **Nome de usuário**: conta de usuário para conectar
- **Senha**: senha do usuário

```bash
# Conectar ao servidor local
mysql -u username -p

# Conectar a um servidor remoto
mysql -h remote_host -u username -p

# Conectar especificando porta
mysql -h remote_host -P 3306 -u username -p

# Conectar diretamente a um banco específico
mysql -u username -p database_name

# Conectar com senha na mesma linha (não recomendado por segurança)
mysql -u username -psenha123 database_name
```

---

## Comandos Básicos

### Comandos Essenciais do MySQL

```sql
-- Mostrar bancos de dados disponíveis
SHOW DATABASES;

-- Usar um banco de dados específico
USE nome_banco;

-- Mostrar tabelas do banco atual
SHOW TABLES;

-- Descrever estrutura de uma tabela
DESCRIBE nome_tabela;

-- Mostrar status do servidor
STATUS;

-- Sair do MySQL
EXIT;
-- ou
QUIT;

-- Mostrar versão do MySQL
SELECT VERSION();

-- Mostrar usuário conectado
SELECT USER();
```

---

## Criando e Gerenciando Bancos de Dados

### Criar Banco de Dados

```sql
-- Sintaxe básica
CREATE DATABASE nome_banco;

-- Exemplo prático
CREATE DATABASE teste;

-- Com configurações específicas
CREATE DATABASE bancoConfigurado
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_unicode_ci;

-- Com IF NOT EXISTS (evita erro se existir)
CREATE DATABASE IF NOT EXISTS novo_banco;
```

### Gerenciar Bancos de Dados

```sql
-- Usar um banco de dados
USE nome_banco;

-- Alterar banco para somente leitura
ALTER DATABASE nome_banco READ ONLY = 1;

-- Desabilitar modo somente leitura
ALTER DATABASE nome_banco READ ONLY = 0;

-- Apagar banco de dados
DROP DATABASE nome_banco;

-- Com IF EXISTS (não gera erro se não existir)
DROP DATABASE IF EXISTS nome_banco;

-- Ver informações do banco
SHOW CREATE DATABASE nome_banco;
```

---

## Trabalhando com Tabelas

### Criar Tabelas

```sql
CREATE TABLE pessoas (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE,
    sexo ENUM('M', 'F'),
    peso DECIMAL(5, 2),
    altura DECIMAL(3, 2),
    nacionalidade VARCHAR(20) DEFAULT 'Brasil',
    ativo BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8mb4;
```

### Alterar Estrutura da Tabela

```sql
-- Adicionar coluna
ALTER TABLE pessoas ADD COLUMN profissao VARCHAR(10);

-- Adicionar coluna em posição específica
ALTER TABLE pessoas ADD profissao VARCHAR(10) AFTER nome;

-- Adicionar coluna como primeira
ALTER TABLE pessoas ADD COLUMN codigo INT FIRST;

-- Remover coluna
ALTER TABLE pessoas DROP COLUMN profissao;

-- Modificar coluna existente
ALTER TABLE pessoas MODIFY COLUMN nome VARCHAR(50);

-- Renomear coluna
ALTER TABLE pessoas CHANGE COLUMN nome nome_completo VARCHAR(50);

-- Renomear tabela
ALTER TABLE pessoas RENAME TO usuarios;

-- Modificar engine da tabela
ALTER TABLE pessoas ENGINE = InnoDB;
```

### Gerenciar Tabelas

```sql
-- Descrever estrutura da tabela
DESCRIBE pessoas;
-- ou
DESC pessoas;

-- Mostrar comando de criação da tabela
SHOW CREATE TABLE pessoas;

-- Apagar tabela
DROP TABLE pessoas;

-- Com IF EXISTS (não gera erro se não existir)
DROP TABLE IF EXISTS pessoas;

-- Truncar tabela (remover todos os dados, mantém estrutura)
TRUNCATE TABLE pessoas;

-- Copiar estrutura de uma tabela
CREATE TABLE pessoas_backup LIKE pessoas;

-- Copiar estrutura e dados
CREATE TABLE pessoas_backup AS SELECT * FROM pessoas;
```

---

## Tipos de Dados

### Tipos de String (Texto)

| Tipo de Dado | Descrição | Tamanho Máximo | Caso de Uso |
|--------------|-----------|---|---|
| `CHAR(size)` | String de tamanho fixo | 0 a 255 caracteres | Campos com tamanho fixo (ex: código de país) |
| `VARCHAR(size)` | String de tamanho variável | 0 a 65.535 caracteres | Emails, nomes, descrições curtas |
| `TEXT` | Texto longo de tamanho variável | 65.535 bytes | Descrições médias, comentários |
| `TINYTEXT` | Texto muito pequeno | 255 caracteres | Pequenas anotações |
| `MEDIUMTEXT` | Texto médio | 16.777.215 caracteres | Artigos de blog |
| `LONGTEXT` | Texto muito longo | 4.294.967.295 caracteres | Livros, documentações |
| `ENUM(val1, val2, ...)` | Lista de valores pré-definidos | Até 65.535 valores | Estados (ativo/inativo), categorias fixas |
| `SET(val1, val2, ...)` | Múltiplos valores pré-definidos | Até 64 valores | Permissões, tags múltiplas |
| `JSON` | Dados em formato JSON | 4GB | Dados estruturados complexos |

**Exemplos de String:**

```sql
-- CHAR - tamanho fixo
CREATE TABLE paises (
    codigo_pais CHAR(2),  -- Sempre 2 caracteres
    nome VARCHAR(100)
);

-- VARCHAR - tamanho variável
CREATE TABLE usuarios (
    email VARCHAR(100),   -- Até 100 caracteres
    telefone VARCHAR(20)
);

-- TEXT - conteúdo longo
CREATE TABLE artigos (
    titulo VARCHAR(200),
    conteudo TEXT         -- Até 65KB
);

-- ENUM - valores predefinidos
CREATE TABLE pedidos (
    status ENUM('pendente', 'processando', 'enviado', 'entregue', 'cancelado'),
    prioridade ENUM('baixa', 'média', 'alta', 'urgente')
);

-- SET - múltiplos valores
CREATE TABLE usuarios_permissoes (
    permissoes SET('leitura', 'escrita', 'delete', 'admin')
);
```

### Tipos Numéricos

| Tipo de Dado | Descrição | Faixa | Tamanho | Caso de Uso |
|--------------|-----------|-------|--------|---|
| `TINYINT` | Número inteiro muito pequeno | -128 a 127 (signed) | 1 byte | Flags, contadores pequenos |
| `SMALLINT` | Número inteiro pequeno | -32.768 a 32.767 (signed) | 2 bytes | Contadores médios |
| `MEDIUMINT` | Número inteiro médio | -8.388.608 a 8.388.607 (signed) | 3 bytes | Contadores moderados |
| `INT` ou `INTEGER` | Número inteiro padrão | -2.147.483.648 a 2.147.483.647 (signed) | 4 bytes | Identificadores, contadores |
| `BIGINT` | Número inteiro grande | -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807 (signed) | 8 bytes | Timestamps Unix, grande volume |
| `DECIMAL(M,D)` | Número decimal de precisão fixa | M dígitos totais, D decimais | Variável | Preços, valores monetários |
| `NUMERIC(M,D)` | Sinônimo para DECIMAL | Igual ao DECIMAL | Variável | Cálculos precisos |
| `FLOAT` | Número de ponto flutuante | Precisão simples | 4 bytes | Valores aproximados |
| `DOUBLE` | Número de ponto flutuante | Precisão dupla | 8 bytes | Cálculos científicos |
| `REAL` | Sinônimo para DOUBLE | Igual ao DOUBLE | 8 bytes | Compatibilidade |

**Exemplos de Numéricos:**

```sql
-- TINYINT - valores pequenos
CREATE TABLE atividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prioridade TINYINT UNSIGNED,  -- 0 a 255
    tentativas TINYINT DEFAULT 0
);

-- INT - valores comuns
CREATE TABLE pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idade INT,
    salario INT
);

-- BIGINT - grandes valores
CREATE TABLE logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    timestamp BIGINT,  -- Unix timestamp
    valor_grande BIGINT
);

-- DECIMAL - valores monetários (SEMPRE use para dinheiro!)
CREATE TABLE produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    preco DECIMAL(10, 2),      -- 10 dígitos, 2 casas decimais (ex: 12345678.99)
    custo DECIMAL(10, 2)
);

-- FLOAT/DOUBLE - valores aproximados
CREATE TABLE medidas (
    id INT PRIMARY KEY,
    temperatura FLOAT,
    peso DOUBLE
);

-- UNSIGNED - apenas valores positivos
CREATE TABLE vendas (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    quantidade INT UNSIGNED,  -- Sempre positivo
    valor DECIMAL(10, 2) UNSIGNED
);
```

### Tipos de Data e Hora

| Tipo de Dado | Descrição | Formato | Intervalo | Tamanho | Caso de Uso |
|--------------|-----------|---------|-----------|--------|---|
| `DATE` | Data | YYYY-MM-DD | 1000-01-01 a 9999-12-31 | 3 bytes | Datas de nascimento, eventos |
| `TIME` | Hora | HH:MM:SS | -838:59:59 a 838:59:59 | 3 bytes | Horários de funcionamento |
| `DATETIME` | Data e hora | YYYY-MM-DD HH:MM:SS | 1000-01-01 00:00:00 a 9999-12-31 23:59:59 | 8 bytes | Registros com data e hora |
| `TIMESTAMP` | Timestamp Unix | YYYY-MM-DD HH:MM:SS | 1970-01-01 00:00:01 a 2038-01-19 03:14:07 | 4 bytes | Auditoria, criação/modificação |
| `YEAR` | Ano | YYYY | 1901 a 2155 | 1 byte | Anos isolados |

**Exemplos de Data/Hora:**

```sql
-- DATE - apenas datas
CREATE TABLE pessoas (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    data_nascimento DATE,
    data_admissao DATE
);

-- TIME - apenas horas
CREATE TABLE horarios (
    id INT PRIMARY KEY,
    nome_evento VARCHAR(100),
    horario_inicio TIME,
    horario_fim TIME
);

-- DATETIME - data e hora completa
CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente VARCHAR(100),
    data_pedido DATETIME,  -- Exemplo: 2024-01-15 14:30:45
    data_entrega DATETIME
);

-- TIMESTAMP - com atualização automática
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- YEAR - apenas ano
CREATE TABLE historico (
    id INT PRIMARY KEY,
    ano_evento YEAR,  -- Exemplo: 2024
    descricao TEXT
);
```

### Tipos Binários

| Tipo de Dado | Descrição | Tamanho Máximo | Caso de Uso |
|--------------|-----------|---|---|
| `BINARY(size)` | Dados binários de tamanho fixo | 0 a 255 bytes | Hashes fixos |
| `VARBINARY(size)` | Dados binários de tamanho variável | 0 a 65.535 bytes | Imagens pequenas |
| `TINYBLOB` | Dados binários muito pequenos | 255 bytes | Ícones pequenos |
| `BLOB` | Dados binários | 65.535 bytes | Imagens, arquivos |
| `MEDIUMBLOB` | Dados binários médios | 16.777.215 bytes | Áudio, vídeos |
| `LONGBLOB` | Dados binários muito grandes | 4.294.967.295 bytes | Vídeos grandes |

**Exemplos de Binários:**

```sql
-- BLOB - armazenar imagens
CREATE TABLE produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    imagem BLOB,  -- Imagem em bytes
    thumbnail TINYBLOB  -- Pequena prévia
);

-- VARBINARY - dados binários variáveis
CREATE TABLE certificados (
    id INT PRIMARY KEY,
    usuario_id INT,
    dados_certificado VARBINARY(1000)
);
```

### Resumo Comparativo de Tipos de Dados

```sql
-- Exemplo completo de uma tabela com vários tipos
CREATE TABLE exemplo_tipos (
    -- Identificadores
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo_referencia CHAR(10),  -- Tamanho fixo
    
    -- Textos
    nome VARCHAR(100),           -- Tamanho variável
    descricao TEXT,              -- Texto longo
    status ENUM('ativo', 'inativo', 'pendente'),
    
    -- Números inteiros
    quantidade INT UNSIGNED,     -- Sempre positivo
    idade TINYINT,               -- 0 a 255
    contador BIGINT,             -- Números muito grandes
    
    -- Números decimais
    preco DECIMAL(10, 2),        -- 10 dígitos, 2 decimais (use para dinheiro!)
    taxa FLOAT,                  -- Valor aproximado
    
    -- Data e Hora
    data_criacao DATE,           -- Apenas data
    horario_agendado TIME,       -- Apenas hora
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modificado_em DATETIME,      -- Data e hora
    ano_referencia YEAR,         -- Apenas ano
    
    -- JSON
    dados_adicionais JSON,       -- Dados estruturados flexíveis
    
    -- Binário
    imagem BLOB,                 -- Arquivo binário
    
    -- Booleano (armazenado como TINYINT)
    ativo BOOLEAN DEFAULT TRUE   -- 0=falso, 1=verdadeiro
);
```

---

## Restrições (Constraints)

### Primary Key (Chave Primária)

```sql
-- Método 1: Durante criação da tabela
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    nome VARCHAR(50) NOT NULL
);

-- Método 2: Em linha
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT,
    email VARCHAR(100),
    nome VARCHAR(50),
    PRIMARY KEY (id)
);

-- Método 3: Adicionando depois
ALTER TABLE usuarios ADD PRIMARY KEY (id);

-- Chave primária composta
CREATE TABLE matriculas (
    aluno_id INT,
    curso_id INT,
    data_matricula DATE,
    PRIMARY KEY (aluno_id, curso_id)
);
```

### Foreign Key (Chave Estrangeira)

```sql
-- Durante criação
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    produto VARCHAR(100),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Adicionando depois
ALTER TABLE pedidos 
ADD CONSTRAINT fk_usuario
FOREIGN KEY (usuario_id) REFERENCES usuarios(id);

-- Com diferentes ações
CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    texto TEXT,
    FOREIGN KEY (post_id) REFERENCES posts(id)
        ON DELETE CASCADE      -- Deleta comentários se post for deletado
        ON UPDATE CASCADE      -- Atualiza post_id se mudar
);

-- Remover constraint
ALTER TABLE pedidos DROP FOREIGN KEY fk_usuario;
```

### Outras Restrições

```sql
-- NOT NULL - não pode ser vazio
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

-- UNIQUE - valor único
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    cpf VARCHAR(11) UNIQUE
);

-- CHECK - validação de valores (MySQL 8.0+)
CREATE TABLE pessoas (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT CHECK (idade >= 0 AND idade <= 150)
);

-- DEFAULT - valor padrão
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    ativo BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pais VARCHAR(50) DEFAULT 'Brasil'
);

-- AUTO_INCREMENT - incremento automático
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

-- Modificar valor inicial de AUTO_INCREMENT
ALTER TABLE usuarios AUTO_INCREMENT = 100;

-- Combinação de restrições
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL CHECK (total > 0),
    status ENUM('pendente', 'processando', 'entregue') DEFAULT 'pendente',
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    UNIQUE KEY uk_referencia (id)
);
```

---

## Índices

### Criando Índices

```sql
-- Índice básico (melhora SELECT)
CREATE INDEX idx_nome ON usuarios(nome);

-- Índice único (garante unicidade)
CREATE UNIQUE INDEX idx_email ON usuarios(email);

-- Índice composto (múltiplas colunas)
CREATE INDEX idx_nome_cidade ON usuarios(nome, cidade);

-- Índice com prefixo (apenas primeiros caracteres)
CREATE INDEX idx_descricao ON produtos(descricao(50));

-- Índice FULLTEXT (busca de texto)
CREATE FULLTEXT INDEX idx_conteudo ON artigos(conteudo);

-- Durante criação de tabela
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    nome VARCHAR(100),
    cidade VARCHAR(50),
    
    UNIQUE INDEX idx_email (email),
    INDEX idx_nome (nome),
    INDEX idx_nome_cidade (nome, cidade)
);
```

### Gerenciando Índices

```sql
-- Mostrar índices de uma tabela
SHOW INDEX FROM usuarios;

-- Remover índice
DROP INDEX idx_nome ON usuarios;

-- Adicionar índice via ALTER TABLE
ALTER TABLE usuarios ADD INDEX idx_nome (nome);
ALTER TABLE usuarios ADD UNIQUE INDEX idx_email (email);

-- Ver índices com informações detalhadas
SHOW INDEXES FROM usuarios;

-- Análise de índices
ANALYZE TABLE usuarios;

-- Otimizar tabela
OPTIMIZE TABLE usuarios;
```

### Dicas de Índices

```sql
-- Bom para WHERE
CREATE INDEX idx_idade ON pessoas(idade);

-- Bom para ORDER BY
CREATE INDEX idx_data_pedido ON pedidos(data_pedido);

-- Bom para JOINs
CREATE INDEX idx_usuario_id ON pedidos(usuario_id);

-- Evite muitos índices (lentifica INSERT/UPDATE/DELETE)
-- Use índices em colunas frequentemente consultadas
```

---

## Manipulação de Dados (DML)

### INSERT - Inserir Dados

```sql
-- Inserção básica
INSERT INTO pessoas (nome, nascimento, sexo, peso, altura, nacionalidade) 
VALUES ('João', '1990-05-15', 'M', 75.5, 1.80, 'Brasil');

-- Inserção múltipla
INSERT INTO pessoas (nome, nascimento, sexo, peso, altura, nacionalidade) VALUES
('Maria', '1985-03-22', 'F', 60.2, 1.65, 'Brasil'),
('Pedro', '1992-11-08', 'M', 82.1, 1.75, 'Portugal'),
('Ana', '1988-07-13', 'F', 55.8, 1.68, 'Espanha');

-- Inserção com algumas colunas (outras pegam DEFAULT)
INSERT INTO pessoas (nome, sexo) VALUES ('Carlos', 'M');

-- Inserção sem especificar colunas (todas devem ter valor)
INSERT INTO pessoas VALUES (NULL, 'Roberto', '1995-01-10', 'M', 70.0, 1.75, 'Argentina', TRUE, CURRENT_TIMESTAMP);

-- Inserção com valores DEFAULT
INSERT INTO usuarios (nome, email, data_cadastro) 
VALUES ('João', 'joao@email.com', DEFAULT);

-- Inserção com SELECT
INSERT INTO usuarios_backup (nome, email, idade)
SELECT nome, email, idade FROM usuarios WHERE idade > 30;

-- Inserção IGNORAR duplicatas
INSERT IGNORE INTO usuarios (email, nome) VALUES ('joao@email.com', 'João');

-- Inserção com ON DUPLICATE KEY UPDATE
INSERT INTO usuarios (id, email, nome) VALUES (1, 'novo@email.com', 'Novo Nome')
ON DUPLICATE KEY UPDATE 
    email = VALUES(email),
    nome = VALUES(nome);
```

### UPDATE - Atualizar Dados

```sql
-- Atualização básica
UPDATE pessoas 
SET peso = 76.0, altura = 1.81 
WHERE nome = 'João';

-- Atualização múltipla
UPDATE pessoas 
SET nacionalidade = 'Brasileiro' 
WHERE nacionalidade = 'Brasil';

-- Atualização com cálculos
UPDATE produtos 
SET preco = preco * 1.1 
WHERE categoria = 'eletrônicos';

-- Atualização com valor NULL
UPDATE usuarios 
SET telefone = NULL 
WHERE id = 5;

-- Atualização com função
UPDATE usuarios 
SET email = LOWER(email) 
WHERE email IS NOT NULL;

-- Atualização com data
UPDATE pedidos 
SET data_entrega = CURRENT_TIMESTAMP 
WHERE status = 'enviado';

-- Atualização com JOIN
UPDATE pedidos p
SET p.status = 'cancelado'
WHERE p.usuario_id IN (
    SELECT id FROM usuarios WHERE pais = 'Canadá'
);

-- Cuidado: UPDATE sem WHERE atualiza TUDO!
-- Não faça: UPDATE produtos SET preco = 100;
```

### DELETE - Remover Dados

```sql
-- Remoção com condição
DELETE FROM pessoas WHERE id = 5;

-- Remoção múltipla
DELETE FROM pessoas WHERE peso > 100;

-- Remoção com múltiplas condições
DELETE FROM pedidos 
WHERE status = 'cancelado' AND data_pedido < '2023-01-01';

-- Remoção com IN
DELETE FROM usuarios 
WHERE id IN (1, 2, 3, 4, 5);

-- Remoção com JOIN
DELETE p FROM pedidos p
JOIN usuarios u ON p.usuario_id = u.id
WHERE u.email = 'inativo@email.com';

-- Truncate (mais rápido para limpar tabela, reseta AUTO_INCREMENT)
TRUNCATE TABLE pessoas;

-- Cuidado: DELETE sem WHERE deleta TUDO!
-- Não faça: DELETE FROM usuarios;
```

---

## Consultas (SELECT)

### Sintaxe Básica

```sql
SELECT coluna1, coluna2, ...
FROM tabela
WHERE condição
GROUP BY coluna
HAVING condição_grupo
ORDER BY coluna [ASC|DESC]
LIMIT [OFFSET,] número;
```

### Exemplos Práticos

```sql
-- Selecionar todas as colunas
SELECT * FROM pessoas;

-- Selecionar colunas específicas
SELECT nome, idade FROM pessoas;

-- Alias para colunas
SELECT nome AS nome_completo, idade AS anos FROM pessoas;

-- Alias para tabelas
SELECT p.nome, p.idade FROM pessoas AS p;

-- Com condição WHERE
SELECT * FROM pessoas WHERE idade >= 18;

-- Ordenação
SELECT * FROM pessoas ORDER BY nome ASC;
SELECT * FROM pessoas ORDER BY idade DESC;

-- Ordenação múltipla
SELECT * FROM pessoas ORDER BY cidade ASC, nome ASC;

-- Limitação de resultados
SELECT * FROM pessoas LIMIT 10;

-- Limitação com OFFSET (paginação)
SELECT * FROM pessoas LIMIT 10 OFFSET 20;  -- Pega registros 21-30
SELECT * FROM pessoas LIMIT 20, 10;         -- Sintaxe alternativa

-- Combinação de cláusulas
SELECT nome, idade 
FROM pessoas 
WHERE idade BETWEEN 20 AND 30 
ORDER BY idade DESC 
LIMIT 5;

-- DISTINCT (remover duplicatas)
SELECT DISTINCT cidade FROM pessoas;

-- Contar com DISTINCT
SELECT COUNT(DISTINCT cidade) FROM pessoas;
```

### Operadores WHERE

```sql
-- Operadores de comparação
WHERE idade = 25
WHERE idade != 30         -- diferente
WHERE idade <> 30         -- diferente (alternativo)
WHERE idade > 18
WHERE idade < 65
WHERE idade >= 21
WHERE idade <= 60

-- Operadores lógicos
WHERE idade > 18 AND sexo = 'M'
WHERE cidade = 'São Paulo' OR cidade = 'Rio de Janeiro'
WHERE NOT idade < 18

-- BETWEEN (inclusivo)
WHERE idade BETWEEN 20 AND 30
WHERE data BETWEEN '2024-01-01' AND '2024-12-31'

-- IN (lista de valores)
WHERE cidade IN ('São Paulo', 'Rio de Janeiro', 'Belo Horizonte')
WHERE id IN (1, 2, 3, 4, 5)

-- NOT IN
WHERE cidade NOT IN ('São Paulo', 'Rio de Janeiro')

-- LIKE (wildcards)
WHERE nome LIKE 'João%'        -- Começa com João
WHERE nome LIKE '%Silva'        -- Termina com Silva
WHERE nome LIKE '%ana%'         -- Contém ana
WHERE nome LIKE 'M_ria'         -- M?ria (um caractere)

-- IS NULL / IS NOT NULL
WHERE telefone IS NULL
WHERE email IS NOT NULL

-- Combinação complexa
WHERE (idade > 18 AND sexo = 'M') OR (idade > 21 AND sexo = 'F')
```

### Funções Agregadas

```sql
-- COUNT
SELECT COUNT(*) FROM pessoas;                    -- Total de registros
SELECT COUNT(id) FROM pessoas;                   -- Não conta NULLs
SELECT COUNT(DISTINCT cidade) FROM pessoas;     -- Cidades únicas

-- SUM
SELECT SUM(salario) FROM funcionarios;           -- Total de salários
SELECT SUM(preco * quantidade) FROM vendas;     -- Total de vendas

-- AVG (média)
SELECT AVG(idade) FROM pessoas;
SELECT ROUND(AVG(preco), 2) FROM produtos;

-- MIN e MAX
SELECT MIN(idade), MAX(idade) FROM pessoas;
SELECT MIN(preco) as preco_minimo, MAX(preco) as preco_maximo FROM produtos;

-- GROUP BY
SELECT cidade, COUNT(*) 
FROM pessoas 
GROUP BY cidade;

-- Múltiplas agregações
SELECT 
    departamento, 
    COUNT(*) as total_funcionarios,
    AVG(salario) as salario_medio,
    MAX(salario) as salario_maximo
FROM funcionarios
GROUP BY departamento;

-- HAVING (filtro após GROUP BY)
SELECT cidade, COUNT(*) as total
FROM pessoas 
GROUP BY cidade 
HAVING total > 5;

-- HAVING com condições complexas
SELECT 
    departamento,
    AVG(salario) as media_salarial
FROM funcionarios
GROUP BY departamento
HAVING AVG(salario) > 3000 AND COUNT(*) > 5;
```

### Ordenação e Limite Avançado

```sql
-- ORDER BY com múltiplas colunas
SELECT nome, cidade, idade 
FROM pessoas 
ORDER BY cidade ASC, nome ASC;

-- ORDER BY com números (posição da coluna)
SELECT nome, idade, cidade FROM pessoas ORDER BY 2 DESC;  -- Ordena por idade

-- LIMIT e OFFSET para paginação
SELECT * FROM usuarios LIMIT 10;              -- Primeiros 10
SELECT * FROM usuarios LIMIT 10 OFFSET 0;    -- Página 1 (0-9)
SELECT * FROM usuarios LIMIT 10 OFFSET 10;   -- Página 2 (10-19)
SELECT * FROM usuarios LIMIT 10 OFFSET 20;   -- Página 3 (20-29)
```

---

## JOINs

### Tipos de JOIN

```sql
-- INNER JOIN (apenas registros com correspondência em ambas tabelas)
SELECT p.nome, c.nome as cidade
FROM pessoas p
INNER JOIN cidades c ON p.cidade_id = c.id;

-- LEFT JOIN (todos da tabela esquerda + correspondências da direita)
SELECT p.nome, c.nome as cidade
FROM pessoas p
LEFT JOIN cidades c ON p.cidade_id = c.id;

-- RIGHT JOIN (todos da tabela direita + correspondências da esquerda)
SELECT p.nome, c.nome as cidade
FROM pessoas p
RIGHT JOIN cidades c ON p.cidade_id = c.id;

-- FULL OUTER JOIN (todos de ambas tabelas) - MySQL não suporta nativamente
SELECT p.nome, c.nome as cidade
FROM pessoas p
LEFT JOIN cidades c ON p.cidade_id = c.id
UNION
SELECT p.nome, c.nome as cidade
FROM pessoas p
RIGHT JOIN cidades c ON p.cidade_id = c.id;

-- CROSS JOIN (produto cartesiano)
SELECT p.nome, c.nome
FROM pessoas p
CROSS JOIN cidades c;

-- NATURAL JOIN (com base em colunas com mesmo nome)
SELECT *
FROM pessoas
NATURAL JOIN cidades;
```

### Exemplos Práticos de JOIN

```sql
-- Exemplo com 2 tabelas
SELECT 
    p.nome as pessoa,
    c.nome as cidade,
    c.populacao
FROM pessoas p
LEFT JOIN cidades c ON p.cidade_id = c.id;

-- Exemplo com 3 tabelas
SELECT 
    u.nome as usuario,
    p.nome as produto,
    pd.quantidade,
    pd.preco_unitario,
    (pd.quantidade * pd.preco_unitario) as total
FROM usuarios u
INNER JOIN pedidos pd ON u.id = pd.usuario_id
INNER JOIN produtos p ON pd.produto_id = p.id
WHERE pd.data_pedido >= '2024-01-01';

-- SELF JOIN (join da tabela com ela mesma)
SELECT 
    f1.nome as funcionario,
    f2.nome as gerente
FROM funcionarios f1
LEFT JOIN funcionarios f2 ON f1.gerente_id = f2.id;

-- JOIN com múltiplas condições
SELECT *
FROM pedidos po
INNER JOIN itens_pedido ip ON po.id = ip.pedido_id
INNER JOIN produtos pr ON ip.produto_id = pr.id
WHERE po.data_pedido >= '2024-01-01' AND pr.categoria = 'eletrônicos';

-- JOIN com agregação
SELECT 
    u.nome,
    COUNT(p.id) as total_pedidos,
    SUM(p.total) as valor_total
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nome
HAVING COUNT(p.id) > 0;
```

---

## Funções Built-in

### Funções de String

```sql
-- CONCAT - Concatenar strings
SELECT CONCAT(nome, ' - ', sobrenome) as nome_completo FROM usuarios;
SELECT CONCAT(rua, ', ', numero, ' - ', cidade) as endereco FROM endereco;

-- CONCAT_WS - Concatenar com separador
SELECT CONCAT_WS(' ', nome, sobrenome) as nome_completo FROM usuarios;

-- LENGTH - Comprimento da string
SELECT nome, LENGTH(nome) as tamanho FROM usuarios;

-- CHAR_LENGTH - Comprimento (suporta UTF-8 melhor)
SELECT nome, CHAR_LENGTH(nome) as tamanho FROM usuarios;

-- UPPER/LOWER - Maiúscula/Minúscula
SELECT UPPER(nome), LOWER(email) FROM usuarios;

-- SUBSTRING - Extrair substring
SELECT SUBSTRING(nome, 1, 3) FROM usuarios;        -- Primeiros 3 caracteres
SELECT SUBSTRING(nome, -3) FROM usuarios;          -- Últimos 3 caracteres

-- SUBSTR - Sinônimo para SUBSTRING
SELECT SUBSTR(email, 1, POSITION('@' IN email)-1) as usuario_email FROM usuarios;

-- TRIM - Remover espaços
SELECT TRIM('  João  ') as nome_limpo;
SELECT LTRIM('  João');     -- Remove espaços à esquerda
SELECT RTRIM('João  ');     -- Remove espaços à direita

-- REPLACE - Substituir texto
SELECT REPLACE(telefone, '-', '') as telefone_limpo FROM usuarios;
SELECT REPLACE(email, '@gmail.com', '@yahoo.com') FROM usuarios;

-- LOCATE - Encontrar posição
SELECT LOCATE('@', email) as posicao_arroba FROM usuarios;

-- INSTR - Sinônimo para LOCATE
SELECT INSTR(email, '@') as posicao FROM usuarios;

-- REVERSE - Inverter string
SELECT REVERSE(nome) FROM usuarios;

-- REPEAT - Repetir string
SELECT REPEAT('*', 5) as asteriscos;  -- *****

-- RPAD/LPAD - Preenchimento à direita/esquerda
SELECT RPAD(nome, 20, '.') FROM usuarios;   -- Nome + pontos até 20 caracteres
SELECT LPAD(numero_conta, 10, '0') FROM contas;  -- Preenche com zeros à esquerda

-- SPACE - Espaços em branco
SELECT CONCAT('Nome:', SPACE(5), nome) FROM usuarios;
```

### Funções Numéricas

```sql
-- ROUND - Arredondar
SELECT ROUND(preco, 2) FROM produtos;            -- 2 casas decimais
SELECT ROUND(19.5) FROM numeros;                 -- Arredonda para 20

-- CEIL - Arredondar para cima
SELECT CEIL(19.1) as resultado;  -- 20
SELECT CEIL(preco) FROM produtos;

-- FLOOR - Arredondar para baixo
SELECT FLOOR(19.9) as resultado;  -- 19
SELECT FLOOR(preco) FROM produtos;

-- TRUNCATE - Truncar sem arredondar
SELECT TRUNCATE(19.99, 1) as resultado;  -- 19.9

-- ABS - Valor absoluto
SELECT ABS(-10) as valor;
SELECT ABS(saldo) FROM contas;

-- MOD - Resto da divisão
SELECT MOD(10, 3) as resto;  -- 1
SELECT id FROM usuarios WHERE MOD(id, 2) = 0;  -- IDs pares

-- SQRT - Raiz quadrada
SELECT SQRT(16) as resultado;  -- 4

-- POWER - Potência
SELECT POWER(2, 3) as resultado;  -- 8 (2³)

-- SIGN - Sinal do número
SELECT SIGN(-10), SIGN(0), SIGN(10);  -- -1, 0, 1

-- RAND - Número aleatório
SELECT RAND() as numero_aleatorio;
SELECT ROUND(RAND()*100) as numero_aleatorio_0_100;

-- Números aleatórios entre limites
SELECT FLOOR(RAND() * (max - min + 1)) + min as numero_aleatorio;
```

### Funções de Data

```sql
-- NOW - Data e hora atual
SELECT NOW() as agora;

-- CURDATE/CURRENT_DATE - Data atual
SELECT CURDATE() as data_hoje;
SELECT CURRENT_DATE;

-- CURTIME/CURRENT_TIME - Hora atual
SELECT CURTIME() as hora_agora;
SELECT CURRENT_TIME;

-- DATE - Extrair apenas a data
SELECT DATE(data_hora) FROM logs;

-- TIME - Extrair apenas a hora
SELECT TIME(data_hora) FROM eventos;

-- DATE_FORMAT - Formatar data
SELECT DATE_FORMAT(data_nascimento, '%d/%m/%Y') FROM pessoas;
SELECT DATE_FORMAT(NOW(), '%d de %B de %Y') as data_formatada;
-- Formatos: %d (dia), %m (mês), %Y (ano), %H (hora), %i (minuto), %s (segundo)

-- STR_TO_DATE - Converter string em data
SELECT STR_TO_DATE('15/05/1990', '%d/%m/%Y') as data_convertida;

-- DATEDIFF - Diferença entre datas (em dias)
SELECT DATEDIFF(NOW(), data_nascimento) as dias_de_vida FROM pessoas;

-- TIMEDIFF - Diferença entre horas
SELECT TIMEDIFF('14:30:00', '10:00:00') as diferenca;

-- DATE_ADD/DATE_SUB - Adicionar/Subtrair tempo
SELECT DATE_ADD(NOW(), INTERVAL 30 DAY) as daqui_30_dias;
SELECT DATE_SUB(NOW(), INTERVAL 1 YEAR) as ano_passado;
SELECT DATE_ADD(NOW(), INTERVAL 2 MONTH) as daqui_2_meses;

-- Alternativa para DATE_ADD e DATE_SUB
SELECT DATE_ADD(NOW(), INTERVAL -1 WEEK) as semana_passada;
SELECT DATE_ADD(data_pedido, INTERVAL 7 DAY) as data_entrega FROM pedidos;

-- EXTRACT - Extrair parte da data
SELECT EXTRACT(YEAR FROM data_nascimento) as ano FROM pessoas;
SELECT EXTRACT(MONTH FROM NOW()) as mes_atual;

-- YEAR, MONTH, DAY, HOUR, MINUTE, SECOND - Extrair componentes
SELECT 
    YEAR(data_nascimento) as ano,
    MONTH(data_nascimento) as mes,
    DAY(data_nascimento) as dia
FROM pessoas;

-- WEEK - Número da semana
SELECT WEEK(data_pedido) as semana FROM pedidos;

-- DAYNAME - Nome do dia
SELECT DAYNAME(NOW()) as dia_semana;  -- 'Monday', 'Tuesday'...

-- MONTHNAME - Nome do mês
SELECT MONTHNAME(NOW()) as mes;  -- 'January', 'February'...

-- LAST_DAY - Último dia do mês
SELECT LAST_DAY('2024-02-15') as ultimo_dia;  -- 2024-02-29

-- ADDTIME - Adicionar tempo
SELECT ADDTIME('10:00:00', '02:30:00') as resultado;  -- 12:30:00

-- DATE_ADD para diferenças
SELECT 
    data_pedido,
    DATE_ADD(data_pedido, INTERVAL 7 DAY) as esperado_em
FROM pedidos
WHERE status = 'pendente';
```

### Funções Condicionais

```sql
-- IF - Condicional simples
SELECT 
    nome,
    IF(idade >= 18, 'Adulto', 'Menor') as categoria
FROM pessoas;

-- CASE - Condicional múltiplo
SELECT 
    nome,
    CASE 
        WHEN idade < 18 THEN 'Menor'
        WHEN idade < 60 THEN 'Adulto'
        ELSE 'Idoso'
    END as categoria_idade
FROM pessoas;

-- CASE com valores
SELECT 
    nome,
    CASE status
        WHEN 'pendente' THEN 'Aguardando'
        WHEN 'processando' THEN 'Em Processamento'
        WHEN 'enviado' THEN 'Enviado'
        WHEN 'entregue' THEN 'Entregue'
        ELSE 'Desconhecido'
    END as status_legivel
FROM pedidos;

-- IFNULL - Retorna alternativa se NULL
SELECT IFNULL(telefone, 'Não informado') FROM usuarios;

-- COALESCE - Retorna primeiro não-NULL
SELECT COALESCE(celular, telefone, '(11) 9999-9999') as contato FROM usuarios;

-- NULLIF - Retorna NULL se valores são iguais
SELECT NULLIF(salario_atual, salario_anterior) as mudanca_salarial FROM funcionarios;
```

### Funções de Tipo

```sql
-- CAST - Converter tipo
SELECT CAST(idade AS VARCHAR) as idade_texto FROM pessoas;
SELECT CAST('123' AS INTEGER) as numero;
SELECT CAST(19.99 AS INT) as numero_inteiro;

-- CONVERT - Alternativa para CAST
SELECT CONVERT(idade, CHAR) FROM pessoas;

-- HEX - Converter para hexadecimal
SELECT HEX('MySQL') as hexadecimal;

-- UNHEX - Converter de hexadecimal
SELECT UNHEX('4D7953514C') as texto;

-- BIN - Converter para binário
SELECT BIN(10) as binario;  -- 1010

-- OCT - Converter para octal
SELECT OCT(10) as octal;   -- 12
```

---

## Stored Procedures

### Criando Stored Procedures

```sql
-- Procedure simples
DELIMITER $$
CREATE PROCEDURE ObterPessoasPorIdade(IN idade_minima INT)
BEGIN
    SELECT * FROM pessoas WHERE idade >= idade_minima;
END $$
DELIMITER ;

-- Chamar a procedure
CALL ObterPessoasPorIdade(25);
```

### Exemplos Avançados

```sql
-- Procedure com parâmetros IN e OUT
DELIMITER $$
CREATE PROCEDURE ContarPessoasPorCidade(
    IN cidade_nome VARCHAR(50),
    OUT total INT
)
BEGIN
    SELECT COUNT(*) INTO total 
    FROM pessoas 
    WHERE cidade = cidade_nome;
END $$
DELIMITER ;

-- Usar com OUTPUT
CALL ContarPessoasPorCidade('São Paulo', @total);
SELECT @total;

-- Procedure com INOUT (entrada e saída)
DELIMITER $$
CREATE PROCEDURE AtualizarSalario(
    INOUT novo_salario DECIMAL(10,2),
    IN aumento DECIMAL(5,2)
)
BEGIN
    SET novo_salario = novo_salario * (1 + aumento/100);
END $$
DELIMITER ;

-- Procedure com variáveis locais
DELIMITER $$
CREATE PROCEDURE ClassificarIdade(IN pessoa_id INT)
BEGIN
    DECLARE pessoa_idade INT;
    DECLARE classificacao VARCHAR(20);
    
    SELECT idade INTO pessoa_idade 
    FROM pessoas 
    WHERE id = pessoa_id;
    
    IF pessoa_idade < 18 THEN
        SET classificacao = 'Menor';
    ELSEIF pessoa_idade < 60 THEN
        SET classificacao = 'Adulto';
    ELSE
        SET classificacao = 'Idoso';
    END IF;
    
    SELECT pessoa_idade, classificacao;
END $$
DELIMITER ;

-- Procedure com loop
DELIMITER $$
CREATE PROCEDURE InserirNumeros(IN quantidade INT)
BEGIN
    DECLARE contador INT DEFAULT 1;
    
    WHILE contador <= quantidade DO
        INSERT INTO numeros (valor) VALUES (contador);
        SET contador = contador + 1;
    END WHILE;
END $$
DELIMITER ;

-- Procedure com tratamento de erro
DELIMITER $$
CREATE PROCEDURE InserirUsuarioSeguro(
    IN email VARCHAR(100),
    IN nome VARCHAR(100),
    OUT resultado VARCHAR(100)
)
BEGIN
    DECLARE EXIT HANDLER FOR 1062
    BEGIN
        SET resultado = 'Email já existe';
    END;
    
    INSERT INTO usuarios (email, nome) VALUES (email, nome);
    SET resultado = 'Usuário inserido com sucesso';
END $$
DELIMITER ;
```

### Executando Stored Procedures

```sql
-- Chamar procedure simples
CALL ObterPessoasPorIdade(25);

-- Chamar com parâmetro OUT
CALL ContarPessoasPorCidade('São Paulo', @total);
SELECT @total;

-- Usar resultado de procedure em SELECT
CREATE TABLE resultado_procedure AS
CALL ObterPessoasPorIdade(25);

-- Gerenciar procedures
SHOW PROCEDURE STATUS WHERE db = 'nome_banco';
SHOW CREATE PROCEDURE ObterPessoasPorIdade;
DROP PROCEDURE IF EXISTS ObterPessoasPorIdade;
```

---

## Triggers

### Criando Triggers

```sql
-- Trigger BEFORE INSERT
DELIMITER $$
CREATE TRIGGER trigger_antes_inserir
BEFORE INSERT ON pessoas
FOR EACH ROW
BEGIN
    SET NEW.data_cadastro = NOW();
    
    IF NEW.idade < 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Idade não pode ser negativa';
    END IF;
END $$
DELIMITER ;

-- Trigger AFTER INSERT
DELIMITER $$
CREATE TRIGGER trigger_depois_inserir
AFTER INSERT ON pessoas
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (tabela, operacao, id_registro, usuario, data_operacao)
    VALUES ('pessoas', 'INSERT', NEW.id, USER(), NOW());
END $$
DELIMITER ;
```

### Exemplos Práticos

```sql
-- Trigger para log de auditoria
CREATE TABLE audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tabela VARCHAR(50),
    operacao VARCHAR(10),
    id_registro INT,
    usuario VARCHAR(50),
    data_operacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$
CREATE TRIGGER pessoas_audit_insert
AFTER INSERT ON pessoas
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (tabela, operacao, id_registro, usuario) 
    VALUES ('pessoas', 'INSERT', NEW.id, USER());
END $$
DELIMITER ;

-- Trigger BEFORE UPDATE
DELIMITER $$
CREATE TRIGGER pessoas_before_update
BEFORE UPDATE ON pessoas
FOR EACH ROW
BEGIN
    SET NEW.data_modificacao = NOW();
    
    IF NEW.email NOT LIKE '%@%' THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Email inválido';
    END IF;
END $$
DELIMITER ;

-- Trigger AFTER UPDATE
DELIMITER $$
CREATE TRIGGER pessoas_audit_update
AFTER UPDATE ON pessoas
FOR EACH ROW
BEGIN
    IF OLD.email != NEW.email THEN
        INSERT INTO audit_log (tabela, operacao, id_registro, usuario)
        VALUES ('pessoas', 'UPDATE', NEW.id, USER());
    END IF;
END $$
DELIMITER ;

-- Trigger AFTER DELETE
DELIMITER $$
CREATE TRIGGER pessoas_audit_delete
AFTER DELETE ON pessoas
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (tabela, operacao, id_registro, usuario)
    VALUES ('pessoas', 'DELETE', OLD.id, USER());
END $$
DELIMITER ;

-- Trigger com NEW e OLD
DELIMITER $$
CREATE TRIGGER tracking_mudancas
AFTER UPDATE ON produtos
FOR EACH ROW
BEGIN
    IF NEW.preco != OLD.preco THEN
        INSERT INTO historico_preco (produto_id, preco_antigo, preco_novo, data_mudanca)
        VALUES (NEW.id, OLD.preco, NEW.preco, NOW());
    END IF;
END $$
DELIMITER ;
```

### Gerenciar Triggers

```sql
-- Mostrar todos os triggers
SHOW TRIGGERS;

-- Mostrar triggers de um banco
SHOW TRIGGERS FROM nome_banco;

-- Mostrar triggers de uma tabela
SHOW TRIGGERS LIKE 'pessoas';

-- Ver comando de criação
SHOW CREATE TRIGGER nome_trigger;

-- Remover trigger
DROP TRIGGER IF EXISTS nome_trigger;

-- Remover trigger de um banco específico
DROP TRIGGER IF EXISTS nome_banco.nome_trigger;
```

---

## Views

### Criar Views

```sql
-- View simples
CREATE VIEW view_pessoas_ativas AS
SELECT id, nome, email, idade
FROM pessoas 
WHERE ativo = 1;

-- Usar a view
SELECT * FROM view_pessoas_ativas WHERE idade > 25;

-- View com JOINs
CREATE VIEW view_pedidos_detalhados AS
SELECT 
    p.id as pedido_id,
    u.nome as cliente,
    pr.nome as produto,
    ip.quantidade,
    ip.preco_unitario,
    (ip.quantidade * ip.preco_unitario) as total
FROM pedidos p
INNER JOIN usuarios u ON p.usuario_id = u.id
INNER JOIN itens_pedido ip ON p.id = ip.pedido_id
INNER JOIN produtos pr ON ip.produto_id = pr.id;

-- View com agregação
CREATE VIEW view_vendas_por_cliente AS
SELECT 
    u.nome as cliente,
    COUNT(p.id) as total_pedidos,
    SUM(p.total) as valor_total,
    AVG(p.total) as ticket_medio
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nome;

-- View com filtros
CREATE VIEW view_pedidos_pendentes AS
SELECT * FROM pedidos
WHERE status = 'pendente' AND data_pedido >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- View com WITH CHECK OPTION (garante integridade)
CREATE VIEW view_funcionarios_ativos AS
SELECT id, nome, departamento, salario
FROM funcionarios
WHERE ativo = 1
WITH CHECK OPTION;
```

### Gerenciar Views

```sql
-- Mostrar todas as views
SHOW TABLES;  -- Mostra também views
SHOW FULL TABLES WHERE table_type = 'VIEW';

-- Ver comando de criação
SHOW CREATE VIEW view_pessoas_ativas;

-- Alterar view
ALTER VIEW view_pessoas_ativas AS
SELECT id, nome, email, idade, cidade
FROM pessoas 
WHERE ativo = 1;

-- Remover view
DROP VIEW view_pessoas_ativas;

-- Remover múltiplas views
DROP VIEW IF EXISTS view1, view2, view3;

-- Verificar dependências de views
SELECT DISTINCT REFERENCED_TABLE_NAME 
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
WHERE TABLE_SCHEMA = DATABASE() 
AND TABLE_NAME IN (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS 
WHERE TABLE_SCHEMA = DATABASE());
```

---

## Transações

### Controlando Transações

```sql
-- Iniciar transação
START TRANSACTION;

-- Operações
INSERT INTO contas (nome, saldo) VALUES ('João', 1000);
UPDATE contas SET saldo = saldo - 100 WHERE nome = 'Maria';

-- Confirmar (commit)
COMMIT;

-- Ou desfazer (rollback)
ROLLBACK;

-- Transação simples com BEGIN
BEGIN;
    INSERT INTO usuarios (nome, email) VALUES ('João', 'joao@email.com');
    UPDATE usuarios SET ativo = 1 WHERE id = 1;
COMMIT;
```

### Configurações de Transação

```sql
-- Configurar autocommit
SET autocommit = 0;  -- Desabilitar (manual commit)
SET autocommit = 1;  -- Habilitar (padrão)

-- Ver status de autocommit
SELECT @@autocommit;

-- Savepoint (ponto de restauração dentro de transação)
START TRANSACTION;
    INSERT INTO usuarios (nome, email) VALUES ('João', 'joao@email.com');
    SAVEPOINT sp1;
    
    INSERT INTO usuarios (nome, email) VALUES ('Maria', NULL);  -- Erro!
    ROLLBACK TO SAVEPOINT sp1;  -- Desfaz apenas o último INSERT
    
    INSERT INTO usuarios (nome, email) VALUES ('Maria', 'maria@email.com');  -- OK
COMMIT;

-- Transaction Isolation Levels
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Verificar isolamento
SELECT @@transaction_isolation;
```

---

## Recursos Avançados

### Controle de Usuários e Privilégios

```sql
-- Criar usuário
CREATE USER 'novo_usuario'@'localhost' IDENTIFIED BY 'senha123';

-- Criar usuário sem senha
CREATE USER 'usuario_sem_senha'@'%';

-- Conceder privilégios
GRANT SELECT, INSERT, UPDATE ON banco.tabela TO 'usuario'@'localhost';
GRANT ALL PRIVILEGES ON banco.* TO 'admin'@'localhost';
GRANT SELECT ON banco.* TO 'leitor'@'%';

-- Revogar privilégios
REVOKE INSERT, UPDATE ON banco.tabela FROM 'usuario'@'localhost';
REVOKE ALL PRIVILEGES ON banco.* FROM 'admin'@'localhost';

-- Mostrar privilégios
SHOW GRANTS FOR 'usuario'@'localhost';

-- Alterar senha
ALTER USER 'usuario'@'localhost' IDENTIFIED BY 'nova_senha';
SET PASSWORD FOR 'usuario'@'localhost' = PASSWORD('nova_senha');

-- Remover usuário
DROP USER 'usuario'@'localhost';

-- Recarregar privilégios
FLUSH PRIVILEGES;
```

### Backup e Restauração

```bash
# Backup de um banco
mysqldump -u usuario -p nome_banco > backup.sql

# Backup de uma tabela específica
mysqldump -u usuario -p nome_banco nome_tabela > backup_tabela.sql

# Backup de todos os bancos
mysqldump -u usuario -p --all-databases > backup_completo.sql

# Backup com compressão
mysqldump -u usuario -p nome_banco | gzip > backup.sql.gz

# Restaurar backup
mysql -u usuario -p nome_banco < backup.sql

# Restaurar do arquivo comprimido
gunzip < backup.sql.gz | mysql -u usuario -p nome_banco

# Backup apenas de estrutura (sem dados)
mysqldump -u usuario -p --no-data nome_banco > estrutura.sql

# Backup apenas de dados
mysqldump -u usuario -p --no-create-info nome_banco > dados.sql
```

### Otimização e Performance

```sql
-- Analisar plano de execução
EXPLAIN SELECT * FROM pessoas WHERE idade > 25;

-- Analisar performance detalhada
EXPLAIN FORMAT=JSON SELECT * FROM pessoas WHERE idade > 25;

-- Mostrar warnings
SHOW WARNINGS;

-- Analisar uso de índices
SHOW INDEX FROM pessoas;

-- Otimizar tabela (reorganiza dados)
OPTIMIZE TABLE pessoas;

-- Analisar tabela (atualiza estatísticas)
ANALYZE TABLE pessoas;

-- Reparar tabela (corrige erros)
REPAIR TABLE pessoas;

-- Ver configurações de performance
SHOW VARIABLES LIKE 'innodb_buffer_pool_size';
SHOW VARIABLES LIKE 'query_cache_size';
SHOW VARIABLES LIKE 'max_connections';

-- Mostrar status do servidor
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Queries';

-- Mostrar processos em execução
SHOW PROCESSLIST;

-- Matar processo
KILL process_id;
```

---

## Exemplos Práticos Completos

### Sistema de E-commerce Básico

```sql
-- Criar banco de dados
CREATE DATABASE ecommerce;
USE ecommerce;

-- Tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) UNIQUE,
    telefone VARCHAR(20),
    ativo BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_cpf (cpf)
);

-- Tabela de endereços
CREATE TABLE enderecos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    tipo ENUM('residencial', 'comercial', 'outro'),
    rua VARCHAR(100) NOT NULL,
    numero INT,
    complemento VARCHAR(100),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado VARCHAR(2),
    cep VARCHAR(8),
    padrao BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    INDEX idx_usuario_id (usuario_id)
);

-- Tabela de categorias
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT,
    ativa BOOLEAN DEFAULT TRUE
);

-- Tabela de produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL CHECK (preco > 0),
    categoria_id INT NOT NULL,
    estoque INT DEFAULT 0,
    sku VARCHAR(50) UNIQUE,
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id),
    INDEX idx_categoria (categoria_id),
    INDEX idx_sku (sku),
    FULLTEXT INDEX idx_nome_descricao (nome, descricao)
);

-- Tabela de imagens de produtos
CREATE TABLE imagens_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    caminho VARCHAR(255) NOT NULL,
    principal BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);

-- Tabela de pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    endereco_entrega_id INT,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pendente', 'processando', 'enviado', 'entregue', 'cancelado') DEFAULT 'pendente',
    total DECIMAL(10,2) NOT NULL CHECK (total >= 0),
    cupom_desconto_id INT,
    observacoes TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (endereco_entrega_id) REFERENCES enderecos(id),
    INDEX idx_usuario_id (usuario_id),
    INDEX idx_data_pedido (data_pedido),
    INDEX idx_status (status)
);

-- Tabela de itens do pedido
CREATE TABLE itens_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL CHECK (quantidade > 0),
    preco_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id),
    INDEX idx_pedido_id (pedido_id)
);

-- Tabela de cupons de desconto
CREATE TABLE cupons_desconto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    descricao VARCHAR(200),
    tipo ENUM('percentual', 'fixo'),
    valor DECIMAL(10,2),
    ativo BOOLEAN DEFAULT TRUE,
    data_inicio DATE,
    data_fim DATE,
    usos_permitidos INT,
    usos_realizados INT DEFAULT 0
);

-- Tabela de avaliações
CREATE TABLE avaliacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    usuario_id INT NOT NULL,
    classificacao TINYINT CHECK (classificacao >= 1 AND classificacao <= 5),
    comentario TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    UNIQUE KEY uk_produto_usuario (produto_id, usuario_id)
);

-- Inserir dados de exemplo
INSERT INTO categorias (nome, descricao) VALUES 
('Eletrônicos', 'Produtos eletrônicos em geral'),
('Roupas', 'Vestuário masculino e feminino'),
('Casa', 'Produtos para casa e decoração');

INSERT INTO usuarios (nome, email, senha, cpf, telefone) VALUES
('João Silva', 'joao@email.com', SHA2('senha123', 256), '12345678901', '(11) 9999-1111'),
('Maria Santos', 'maria@email.com', SHA2('senha456', 256), '98765432101', '(21) 8888-2222');

INSERT INTO produtos (nome, descricao, preco, categoria_id, estoque, sku) VALUES
('Smartphone Samsung Galaxy', 'Celular Android 128GB com câmera dupla', 1899.99, 1, 50, 'SAMSUNG-GALAXY-01'),
('Camiseta Polo Premium', 'Camiseta polo masculina em algodão puro azul', 79.90, 2, 100, 'CAMISA-POLO-AZUL'),
('Mesa de Centro Madeira', 'Mesa de centro em madeira maciça design moderno', 499.99, 3, 20, 'MESA-CENTER-001');

-- Consultas úteis
-- Produtos por categoria com quantidade em estoque
SELECT 
    p.nome,
    p.preco,
    c.nome as categoria,
    p.estoque
FROM produtos p
INNER JOIN categorias c ON p.categoria_id = c.id
WHERE c.nome = 'Eletrônicos';

-- Pedidos com informações do cliente
SELECT 
    ped.id,
    u.nome as cliente,
    ped.data_pedido,
    ped.total,
    ped.status
FROM pedidos ped
INNER JOIN usuarios u ON ped.usuario_id = u.id
WHERE u.email = 'joao@email.com'
ORDER BY ped.data_pedido DESC;

-- Produtos mais vendidos
SELECT 
    p.nome,
    SUM(ip.quantidade) as total_vendido,
    ROUND(SUM(ip.quantidade * ip.preco_unitario), 2) as faturamento
FROM produtos p
INNER JOIN itens_pedido ip ON p.id = ip.produto_id
INNER JOIN pedidos ped ON ip.pedido_id = ped.id
WHERE ped.status IN ('entregue', 'enviado')
GROUP BY p.id, p.nome
ORDER BY total_vendido DESC
LIMIT 10;

-- Faturamento por mês
SELECT 
    DATE_FORMAT(data_pedido, '%Y-%m') as mes,
    COUNT(*) as quantidade_pedidos,
    ROUND(SUM(total), 2) as faturamento_total,
    ROUND(AVG(total), 2) as ticket_medio
FROM pedidos
WHERE status = 'entregue'
GROUP BY DATE_FORMAT(data_pedido, '%Y-%m')
ORDER BY mes DESC;

-- Clientes com maior gasto
SELECT 
    u.nome,
    COUNT(ped.id) as total_pedidos,
    ROUND(SUM(ped.total), 2) as gasto_total,
    ROUND(AVG(ped.total), 2) as ticket_medio
FROM usuarios u
INNER JOIN pedidos ped ON u.id = ped.usuario_id
WHERE ped.status = 'entregue'
GROUP BY u.id, u.nome
ORDER BY gasto_total DESC
LIMIT 10;
```

---

## Conclusão

Esta documentação aborda os principais aspectos do MySQL, desde conceitos básicos até recursos avançados. O MySQL é uma ferramenta poderosa para gerenciamento de dados relacionais, e dominar seus recursos é essencial para desenvolvedores e administradores de banco de dados.

### Próximos Passos

1. **Pratique regularmente**: A prática é fundamental para dominar SQL
2. **Estude casos reais**: Trabalhe com projetos práticos e complexos
3. **Explore recursos avançados**: Aprofunde-se em replicação, sharding e otimização
4. **Mantenha-se atualizado**: MySQL evolui constantemente com novas funcionalidades
5. **Aprenda sobre segurança**: Implemente boas práticas de segurança de dados

### Recursos Adicionais

- [Documentação oficial do MySQL](https://dev.mysql.com/doc/)
- [MySQL Tutorial](https://www.mysqltutorial.org/)
- [W3Schools MySQL](https://www.w3schools.com/mysql/)
- [Stack Overflow - MySQL](https://stackoverflow.com/questions/tagged/mysql)

---

**Nota**: Esta documentação foi criada com base nas melhores práticas e versões recentes do MySQL. Sempre consulte a documentação oficial para informações mais específicas e atualizadas.