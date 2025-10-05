# Documentação PostgreSQL: Guia Adaptado (a partir da documentação MySQL)

Esta é uma adaptação da sua documentação MySQL para **PostgreSQL**. Mantive a mesma estrutura e exemplos, mas converti comandos, tipos e features para o estilo e as melhores práticas do PostgreSQL, além de destacar diferenças importantes entre os dois SGBDs.

---

## Introdução ao PostgreSQL

**PostgreSQL** (ou **Postgres**) é um sistema de gerenciamento de banco de dados relacional (RDBMS) avançado, open-source, conhecido por seu foco em conformidade ACID, extensibilidade e suporte a funcionalidades avançadas (tipos customizados, JSONB, índices GIN/BRIN, etc.). É adequado desde pequenos projetos até sistemas corporativos complexos.

### Características Principais

* **RDBMS open-source e robusto**
* **Conformidade ACID e forte integridade**
* **Extensível (tipos, operadores, funções)**
* **Suporte a JSON/JSONB nativo**
* **Ferramenta de linha de comando `psql` muito poderosa**

---

## Índice

1. [Instalação e Conexão](#instalação-e-conexão)
2. [Comandos Básicos do `psql`](#comandos-básicos-do-psql)
3. [Criando e Gerenciando Bancos de Dados](#criando-e-gerenciando-bancos-de-dados)
4. [Trabalhando com Tabelas](#trabalhando-com-tabelas)
5. [Tipos de Dados](#tipos-de-dados)
6. [Restrições (Constraints)](#restrições-constraints)
7. [Índices](#índices)
8. [Manipulação de Dados (DML)](#manipulação-de-dados-dml)
9. [Consultas (SELECT)](#consultas-select)
10. [JOINs](#joins)
11. [Funções Built-in e Diferenças](#funções-built-in-e-diferenças)
12. [Funções / Stored Procedures (PL/pgSQL)](#funções--stored-procedures-plpgsql)
13. [Triggers](#triggers)
14. [Recursos Avançados](#recursos-avançados)
15. [Backup e Restauração](#backup-e-restauração)
16. [Otimização e Performance](#otimização-e-performance)
17. [Exemplo Prático: E-commerce](#exemplo-prático-e-commerce)

---

## Instalação e Conexão

### Conectar ao PostgreSQL com `psql`

Parâmetros comuns: **host**, **porta** (padrão `5432`), **usuário**, **senha**, **database**.

```bash
# Conectar ao servidor local (interativo)
psql -U username -h localhost -p 5432 -d database_name

# Conectar a um servidor remoto
psql -U username -h remote_host -p 5432 -d database_name

# Conectar utilizando variável de ambiente (ex.: PGHOST/PGUSER)
export PGHOST=remote_host
export PGUSER=username
psql -d database_name
```

No `psql` você também pode usar `\c nome_banco` para conectar a outro banco.

---

## Comandos Básicos do `psql`

Alguns comandos úteis no prompt `psql` (começam com `\`):

```sql
-- Listar bancos de dados
\l

-- Conectar em um banco
\c nome_banco

-- Listar tabelas do schema atual
\dt

-- Descrever estrutura de uma tabela (equivalente ao DESCRIBE)
\d nome_tabela
-- Mais detalhes
\d+ nome_tabela

-- Ver funções
\df

-- Sair do psql
\q
```

Para ver parâmetros de configuração parecidos com `SHOW VARIABLES` do MySQL:

```sql
-- Mostrar uma variável
SHOW work_mem;

-- Listar configurações (pg_settings)
SELECT name, setting FROM pg_settings WHERE name LIKE 'shared_buffers' OR name LIKE 'wal_level';
```

---

## Criando e Gerenciando Bancos de Dados

### Criar Banco de Dados (com encoding e collate)

```sql
-- Sintaxe básica
CREATE DATABASE nome_banco;

-- Com encoding e collation (exemplo para UTF-8)
CREATE DATABASE banco_utf8
  WITH ENCODING = 'UTF8'
       LC_COLLATE = 'pt_BR.UTF-8'
       LC_CTYPE = 'pt_BR.UTF-8'
       TEMPLATE = template0;
```

### Gerenciar Bancos de Dados

```sql
-- Conectar em um banco
\c nome_banco

-- Apagar banco de dados
DROP DATABASE nome_banco;
```

> Observação: não existe `ALTER DATABASE ... READ ONLY = 1` como no MySQL; controle de leitura/escrita em nível de servidor geralmente é feito por configuração do servidor ou políticas de roles.

---

## Trabalhando com Tabelas

### Criar Tabelas — diferença chave: auto-increment

Em PostgreSQL, para colunas auto-increment use **SERIAL / BIGSERIAL** ou **IDENTITY** (Postgres 10+). Exemplo convertido:

```sql
CREATE TABLE pessoas (
    id SERIAL PRIMARY KEY,              -- SERIAL cria sequência automaticamente
    nome VARCHAR(50) NOT NULL,          -- aumentei tamanho como exemplo
    nascimento DATE,
    sexo CHAR(1),                       -- 'M' ou 'F' (ENUM tratado abaixo)
    peso NUMERIC(5,2),
    altura NUMERIC(3,2),
    nacionalidade VARCHAR(50) DEFAULT 'Brasil'
);
```

**Obs. sobre ENUM:** Postgres suporta tipos ENUM, mas é comum criar um tipo ENUM antes ou usar `CHECK`:

```sql
-- Criar tipo ENUM
CREATE TYPE sexo_tipo AS ENUM ('M', 'F');

-- Usar no CREATE TABLE
CREATE TABLE pessoas2 (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    sexo sexo_tipo
);
```

ou

```sql
CREATE TABLE pessoas3 (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50),
  sexo CHAR(1) CHECK (sexo IN ('M','F'))
);
```

### Alterar Estrutura da Tabela

```sql
-- Adicionar coluna
ALTER TABLE pessoas ADD COLUMN profissao VARCHAR(100);

-- Adicionar coluna em posição específica: PostgreSQL não tem BEFORE/AFTER; colunas são adicionadas no final.
-- Para reordenar colunas geralmente recria-se a tabela.

-- Remover coluna
ALTER TABLE pessoas DROP COLUMN profissao;

-- Modificar coluna existente (tipo/tamanho)
ALTER TABLE pessoas ALTER COLUMN nome TYPE VARCHAR(100);

-- Renomear coluna
ALTER TABLE pessoas RENAME COLUMN nome TO nome_completo;

-- Renomear tabela
ALTER TABLE pessoas RENAME TO pessoas_antigas;
```

### Gerenciar Tabelas

```sql
-- Mostrar comando de criação: use pg_dump para obter SQL DDL ou \d+ nome_tabela para detalhes
-- Ex.: gerar DDL da tabela com pg_dump:
pg_dump -s -t pessoas nome_banco > pessoas_ddl.sql

-- Apagar tabela
DROP TABLE pessoas;

-- Truncar tabela
TRUNCATE TABLE pessoas;
```

---

## Tipos de Dados

### Tipos de Texto

Postgres tem `CHAR`, `VARCHAR(n)`, `TEXT`. `TEXT` é ilimitado (prático para longos textos).

| Tipo         | Observação         |
| ------------ | ------------------ |
| `CHAR(n)`    | tamanho fixo       |
| `VARCHAR(n)` | tamanho variável   |
| `TEXT`       | sem limite prático |

Postgres **não** usa `TINYTEXT`, `MEDIUMTEXT`, `LONGTEXT` — use `TEXT`.

### Tipos Numéricos

| Tipo               | Observação                                       |
| ------------------ | ------------------------------------------------ |
| `SMALLINT`         | 2 bytes                                          |
| `INTEGER`          | 4 bytes                                          |
| `BIGINT`           | 8 bytes                                          |
| `NUMERIC(p,s)`     | precisão exata (equivalente ao DECIMAL do MySQL) |
| `REAL`             | float4                                           |
| `DOUBLE PRECISION` | float8                                           |

### Tipos de Data/Hora

| Tipo                                       | Formato / Observação |
| ------------------------------------------ | -------------------- |
| `DATE`                                     | YYYY-MM-DD           |
| `TIME [WITHOUT TIME ZONE]`                 | HH:MM:SS             |
| `TIMESTAMP [WITHOUT TIME ZONE]`            | YYYY-MM-DD HH:MM:SS  |
| `TIMESTAMP WITH TIME ZONE` (`timestamptz`) | data-hora com fuso   |
| `INTERVAL`                                 | intervalo de tempo   |

---

## Restrições (Constraints)

### Primary Key

```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  nome VARCHAR(50) NOT NULL
);
```

### Foreign Key

```sql
CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER,
  produto VARCHAR(100),
  CONSTRAINT fk_usuario FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
```

### Outras Restrições

```sql
-- NOT NULL
nome VARCHAR(50) NOT NULL

-- UNIQUE
email VARCHAR(100) UNIQUE

-- CHECK
idade INT CHECK (idade >= 18)

-- DEFAULT
data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

> Observação: `AUTO_INCREMENT` do MySQL é substituído por `SERIAL`, `BIGSERIAL` ou `GENERATED ... AS IDENTITY`.

---

## Índices

```sql
-- Índice básico
CREATE INDEX idx_nome ON usuarios(nome);

-- Índice único
CREATE UNIQUE INDEX idx_email ON usuarios(email);

-- Índice composto
CREATE INDEX idx_nome_cidade ON usuarios(nome, cidade);

-- Índice com expressão (ex.: primeiros 50 caracteres)
CREATE INDEX idx_descricao_sub ON produtos (left(descricao,50));
```

Mostrar índices:

```sql
-- Ver índices (psql)
\d+ usuarios

-- Ou consultar view
SELECT * FROM pg_indexes WHERE tablename = 'usuarios';
```

Remover índice:

```sql
DROP INDEX idx_nome;
-- ou DROP INDEX IF EXISTS idx_nome;
```

---

## Manipulação de Dados (DML)

### INSERT

```sql
INSERT INTO pessoas (nome, nascimento, sexo, peso, altura, nacionalidade)
VALUES ('João', '1990-05-15', 'M', 75.5, 1.80, 'Brasil');

-- Inserção múltipla
INSERT INTO pessoas (nome, nascimento, sexo, peso, altura, nacionalidade) VALUES
('Maria', '1985-03-22', 'F', 60.2, 1.65, 'Brasil'),
('Pedro', '1992-11-08', 'M', 82.1, 1.75, 'Portugal'),
('Ana', '1988-07-13', 'F', 55.8, 1.68, 'Espanha');

-- Inserção retornando id gerado
INSERT INTO usuarios (nome, email) VALUES ('Carlos','c@ex.com') RETURNING id;
```

### UPDATE

```sql
UPDATE pessoas
SET peso = 76.0, altura = 1.81
WHERE nome = 'João';
```

### DELETE

```sql
DELETE FROM pessoas WHERE id = 5;

-- Remover todos os dados
DELETE FROM pessoas;

-- Truncate
TRUNCATE TABLE pessoas;
```

---

## Consultas (SELECT)

Sintaxe básica: idêntica em grande parte ao MySQL.

```sql
SELECT coluna1, coluna2, ...
FROM tabela
WHERE condição
ORDER BY coluna [ASC|DESC]
LIMIT número OFFSET n;
```

Exemplos práticos:

```sql
SELECT * FROM pessoas;

SELECT nome, idade FROM pessoas;

SELECT * FROM pessoas WHERE idade >= 18;

SELECT * FROM pessoas ORDER BY nome ASC;

SELECT * FROM pessoas LIMIT 10 OFFSET 0;

-- BETWEEN, IN, LIKE são equivalentes
WHERE nome LIKE 'João%' -- funciona igual
```

### Funções Agregadas

Idênticas ou muito parecidas: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`, `GROUP BY`, `HAVING`.

---

## JOINs

Mesmo comportamento e sintaxe:

```sql
-- INNER JOIN
SELECT p.nome, c.nome as cidade
FROM pessoas p
INNER JOIN cidades c ON p.cidade_id = c.id;

-- LEFT JOIN
SELECT p.nome, c.nome as cidade
FROM pessoas p
LEFT JOIN cidades c ON p.cidade_id = c.id;

-- RIGHT JOIN (suportado)
-- CROSS JOIN (produto cartesiano)
```

---

## Funções Built-in e Diferenças importantes

Algumas funções do MySQL mudam de nome ou comportamento no PostgreSQL:

### Strings

```sql
-- CONCAT: funciona, mas em PG também é comum usar ||
SELECT CONCAT(nome, ' - ', sobrenome) AS nome_completo FROM usuarios;
-- ou
SELECT nome || ' - ' || sobrenome AS nome_completo FROM usuarios;

-- LENGTH: retorna número de caracteres
SELECT nome, LENGTH(nome) as tamanho FROM usuarios;

-- UPPER/LOWER, SUBSTRING, TRIM, REPLACE: mesmas ideias
SELECT UPPER(nome), LOWER(email) FROM usuarios;
SELECT SUBSTRING(nome FROM 1 FOR 3) FROM usuarios;
```

### Números

```sql
SELECT ROUND(preco, 2) FROM produtos;
SELECT CEIL(preco), FLOOR(preco) FROM produtos;
SELECT ABS(-10);
-- RANDOM() ao invés de RAND()
SELECT RANDOM() as numero_aleatorio;
-- MOD(a,b) funciona ou operador %
SELECT MOD(10,3);
SELECT 10 % 3;
```

### Datas

```sql
-- Data e hora atual
SELECT NOW() as agora;
SELECT CURRENT_DATE, CURRENT_TIME;

-- Formatar data (DATE_FORMAT do MySQL -> TO_CHAR no Postgres)
SELECT TO_CHAR(data_nascimento, 'DD/MM/YYYY') FROM pessoas;

-- Diferença entre datas: date - date => interval, AGE() recomendado
SELECT NOW() - data_nascimento AS intervalo;
SELECT AGE(NOW(), data_nascimento) as idade_intervalo;
-- Para dias (inteiros)
SELECT (NOW()::date - data_nascimento)::int AS dias_vida FROM pessoas;

-- DATE_ADD / DATE_SUB -> use + INTERVAL / - INTERVAL
SELECT NOW() + INTERVAL '30 days' AS daqui_30_dias;
SELECT NOW() - INTERVAL '1 year' AS ano_passado;

-- EXTRACT (igual)
SELECT EXTRACT(YEAR FROM data_nascimento) as ano FROM pessoas;
```

---

## Funções / Stored Procedures (PL/pgSQL)

PostgreSQL tem `FUNCTION` (mais usado) e `PROCEDURE` (adicionado em versões recentes). Exemplo de função que retorna linhas:

```sql
-- Função simples que retorna SETOF registros
CREATE OR REPLACE FUNCTION obter_pessoas_por_idade(idade_minima INT)
RETURNS TABLE(id INT, nome TEXT, idade INT) AS $$
BEGIN
  RETURN QUERY
  SELECT id, nome, EXTRACT(YEAR FROM AGE(CURRENT_DATE, nascimento))::int
  FROM pessoas
  WHERE EXTRACT(YEAR FROM AGE(CURRENT_DATE, nascimento))::int >= idade_minima;
END;
$$ LANGUAGE plpgsql;

-- Chamar função
SELECT * FROM obter_pessoas_por_idade(25);
```

Exemplo com parâmetro OUT:

```sql
CREATE OR REPLACE FUNCTION contar_pessoas_por_cidade(cidade_nome TEXT, OUT total INT)
AS $$
BEGIN
  SELECT COUNT(*) INTO total FROM pessoas WHERE cidade = cidade_nome;
END;
$$ LANGUAGE plpgsql;

-- Chamar
SELECT contar_pessoas_por_cidade('São Paulo');
-- Ou usar CALL para PROCEDURE (se for PROCEDURE)
```

> Observações:
>
> * Não há `DELIMITER` como no MySQL. Use dollar-quoting (`$$`) para corpo da função.
> * Para lançar erros use `RAISE EXCEPTION 'mensagem';` (substitui SIGNAL).

---

## Triggers

Em Postgres, triggers executam funções do tipo `trigger` que devem retornar `trigger`. Exemplo de trigger para auditoria:

```sql
-- Tabela de log
CREATE TABLE audit_log (
  id SERIAL PRIMARY KEY,
  tabela TEXT,
  operacao TEXT,
  usuario TEXT,
  data_operacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Função de trigger
CREATE OR REPLACE FUNCTION pessoas_audit_insert()
RETURNS trigger AS $$
BEGIN
  INSERT INTO audit_log (tabela, operacao, usuario)
  VALUES (TG_TABLE_NAME, TG_OP, current_user);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger
CREATE TRIGGER trg_pessoas_after_insert
AFTER INSERT ON pessoas
FOR EACH ROW
EXECUTE FUNCTION pessoas_audit_insert();
```

Exemplo de validação antes de update (lançar erro se email inválido):

```sql
CREATE OR REPLACE FUNCTION pessoas_before_update()
RETURNS trigger AS $$
BEGIN
  IF NEW.email NOT LIKE '%@%' THEN
    RAISE EXCEPTION 'Email inválido';
  END IF;
  NEW.data_modificacao := CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_pessoas_before_update
BEFORE UPDATE ON pessoas
FOR EACH ROW
EXECUTE FUNCTION pessoas_before_update();
```

Mostrar triggers pode ser feito consultando `pg_trigger`/`pg_catalog` ou via `\d` em `psql`.

---

## Recursos Avançados

### Views

```sql
CREATE VIEW view_pessoas_ativas AS
SELECT id, nome, email, (EXTRACT(YEAR FROM AGE(CURRENT_DATE, nascimento)))::int AS idade
FROM pessoas
WHERE ativo = TRUE;

-- Usar view
SELECT * FROM view_pessoas_ativas WHERE idade > 25;

-- Remover view
DROP VIEW view_pessoas_ativas;
```

### Transações

```sql
BEGIN;

INSERT INTO contas (nome, saldo) VALUES ('João', 1000);
UPDATE contas SET saldo = saldo - 100 WHERE nome = 'Maria';

COMMIT;
-- ou
ROLLBACK;

-- Autocommit é padrão no psql. Para controlar em sessão use BEGIN/COMMIT.
```

### Controle de Usuários e Privilégios

```sql
-- Criar usuário (role com login)
CREATE ROLE novo_usuario WITH LOGIN PASSWORD 'senha123';

-- Conceder privilégios
GRANT SELECT, INSERT, UPDATE ON TABLE esquema.tabela TO novo_usuario;

-- Conceder todos privilégios em um banco (cuidado)
GRANT ALL PRIVILEGES ON DATABASE nome_banco TO novo_usuario;

-- Revogar
REVOKE INSERT, UPDATE ON tabela FROM novo_usuario;

-- Mostrar privilégios
-- Existem queries em pg_catalog; também `\du` mostra roles
\du
```

---

## Backup e Restauração

Ferramentas padrão: `pg_dump`, `pg_restore`, `pg_dumpall`, `psql`.

```bash
# Backup de um banco (dump SQL)
pg_dump -U usuario -h host -F p -f backup.sql nome_banco

# Backup em formato custom (compactado)
pg_dump -U usuario -h host -F c -b -v -f backup.dump nome_banco

# Restaurar dump SQL
psql -U usuario -h host -d nome_banco -f backup.sql

# Restaurar dump custom
pg_restore -U usuario -h host -d nome_banco -v backup.dump

# Backup de todos os bancos (inclui roles) - use com cuidado
pg_dumpall -U usuario -h host > all_databases.sql
```

---

## Otimização e Performance

### Analisar plano de execução

```sql
EXPLAIN SELECT * FROM pessoas WHERE idade > 25;
EXPLAIN ANALYZE SELECT * FROM pessoas WHERE idade > 25;
```

### Estatísticas e views

* `pg_stat_activity`, `pg_stat_user_tables`, `pg_stat_user_indexes`
* `pg_indexes`, `pg_class`, `pg_stat_all_tables` — úteis para diagnosticar

### Dicas de otimização

1. Crie índices apropriados (incluindo índices parciais e índices GIN/BRIN quando necessário).
2. Evite `SELECT *` em queries críticas.
3. Use `EXPLAIN ANALYZE` para entender custos.
4. Considere `VACUUM ANALYZE` periodicamente (ou configure autovacuum).
5. Use `CREATE INDEX CONCURRENTLY` para criar índices sem bloquear leituras.

---

## Exemplos Práticos Completos (E-commerce)

```sql
-- Criar banco e conectar
CREATE DATABASE ecommerce WITH ENCODING='UTF8' TEMPLATE=template0;
\c ecommerce

-- Tabela usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela categorias
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT
);

-- Tabela produtos
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco NUMERIC(10,2) NOT NULL,
    categoria_id INTEGER REFERENCES categorias(id),
    estoque INTEGER DEFAULT 0,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela pedidos
-- Para status, podemos usar tipo ENUM ou CHECK
CREATE TYPE pedido_status AS ENUM ('pendente','processando','enviado','entregue','cancelado');

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status pedido_status DEFAULT 'pendente',
    total NUMERIC(10,2) NOT NULL
);

-- Tabela itens_pedido
CREATE TABLE itens_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER NOT NULL REFERENCES pedidos(id) ON DELETE CASCADE,
    produto_id INTEGER NOT NULL REFERENCES produtos(id),
    quantidade INTEGER NOT NULL,
    preco_unitario NUMERIC(10,2) NOT NULL
);

-- Inserir dados de exemplo (igual sintaxe)
INSERT INTO categorias (nome, descricao) VALUES
('Eletrônicos','Produtos eletrônicos em geral'),
('Roupas','Vestuário masculino e feminino'),
('Casa','Produtos para casa e decoração');

INSERT INTO usuarios (nome, email, senha) VALUES
('João Silva','joao@email.com','senha123'),
('Maria Santos','maria@email.com','senha456');

INSERT INTO produtos (nome, descricao, preco, categoria_id, estoque) VALUES
('Smartphone Samsung','Celular Android 128GB',899.99,1,50),
('Camiseta Polo','Camiseta polo masculina azul',79.90,2,100),
('Mesa de Centro','Mesa de centro em madeira',299.99,3,20);

-- Consultas úteis (muito parecidas)
SELECT p.nome, p.preco, c.nome as categoria
FROM produtos p
JOIN categorias c ON p.categoria_id = c.id
WHERE c.nome = 'Eletrônicos';

SELECT p.id, p.data_pedido, p.total, p.status
FROM pedidos p
JOIN usuarios u ON p.usuario_id = u.id
WHERE u.email = 'joao@email.com';

SELECT p.nome, SUM(ip.quantidade) as total_vendido
FROM produtos p
JOIN itens_pedido ip ON p.id = ip.produto_id
GROUP BY p.id, p.nome
ORDER BY total_vendido DESC
LIMIT 10;
```

---

## Diferenças importantes entre MySQL e PostgreSQL (resumo rápido)

* **CLI**: `mysql` → `psql`. Comandos internos também mudam (`SHOW DATABASES` → `\l`, `DESCRIBE` → `\d`).
* **Porta padrão**: MySQL `3306` → Postgres `5432`.
* **Auto-increment**: MySQL `AUTO_INCREMENT` → Postgres `SERIAL` / `BIGSERIAL` / `IDENTITY`.
* **ENUM**: MySQL `ENUM(...)` → Postgres `CREATE TYPE ... AS ENUM` ou `CHECK(...)`.
* **Charset/collation**: Postgres define encoding/collation no `CREATE DATABASE`. Collations depend do sistema operacional.
* **Stored routines**: MySQL `CREATE PROCEDURE` com `DELIMITER` → Postgres `CREATE FUNCTION` / `CREATE PROCEDURE` com dollar quoting e `LANGUAGE plpgsql`.
* **Triggers**: Postgres precisa de função `RETURNS trigger` e `CREATE TRIGGER ... EXECUTE FUNCTION`.
* **BACKUP**: MySQL `mysqldump` → Postgres `pg_dump` / `pg_restore` / `pg_dumpall`.
* **Funções**: `RAND()` → `RANDOM()`, `DATE_FORMAT()` → `TO_CHAR()`, `DATEDIFF()` → `AGE()` ou `date - date`.
* **Índices**: Postgres suporta mais tipos de índice (GIN, GiST, BRIN) e `CREATE INDEX CONCURRENTLY`.