# Documentação MySQL: Guia Completo

## Introdução ao MySQL

**MySQL** é um sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado no mundo todo. É conhecido por sua escalabilidade, confiabilidade e facilidade de uso. MySQL é open-source e gratuito, sendo ideal tanto para pequenas aplicações quanto para grandes sistemas empresariais.

### Características Principais
- **Sistema de gerenciamento de banco de dados relacional**
- **Open-source e gratuito**
- **Escalável e confiável**
- **Suporte para múltiplas plataformas**
- **Interface de linha de comando (CLI) robusta**

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
14. [Recursos Avançados](#recursos-avançados)

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
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;
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
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;
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

-- Truncar tabela (remover todos os dados)
TRUNCATE TABLE pessoas;
```

---

## Tipos de Dados

### Tipos de String (Texto)

| Tipo de Dado | Descrição | Tamanho Máximo |
|--------------|-----------|----------------|
| `CHAR(size)` | String de tamanho fixo | 0 a 255 caracteres |
| `VARCHAR(size)` | String de tamanho variável | 0 a 65.535 caracteres |
| `TEXT` | Texto longo de tamanho variável | 65.535 bytes |
| `TINYTEXT` | Texto muito pequeno | 255 caracteres |
| `MEDIUMTEXT` | Texto médio | 16.777.215 caracteres |
| `LONGTEXT` | Texto muito longo | 4.294.967.295 caracteres |
| `ENUM(val1, val2, ...)` | Lista de valores pré-definidos | Até 65.535 valores |

### Tipos Numéricos

| Tipo de Dado | Descrição | Faixa |
|--------------|-----------|-------|
| `TINYINT` | Número inteiro muito pequeno | -128 a 127 (signed) |
| `SMALLINT` | Número inteiro pequeno | -32.768 a 32.767 (signed) |
| `MEDIUMINT` | Número inteiro médio | -8.388.608 a 8.388.607 (signed) |
| `INT` ou `INTEGER` | Número inteiro padrão | -2.147.483.648 a 2.147.483.647 (signed) |
| `BIGINT` | Número inteiro grande | -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807 (signed) |
| `DECIMAL(M,D)` | Número decimal de precisão fixa | M dígitos totais, D decimais |
| `FLOAT(M,D)` | Número de ponto flutuante (precisão simples) | 32 bits |
| `DOUBLE(M,D)` | Número de ponto flutuante (precisão dupla) | 64 bits |

### Tipos de Data e Hora

| Tipo de Dado | Descrição | Formato |
|--------------|-----------|---------|
| `DATE` | Data | YYYY-MM-DD |
| `TIME` | Hora | HH:MM:SS |
| `DATETIME` | Data e hora | YYYY-MM-DD HH:MM:SS |
| `TIMESTAMP` | Timestamp Unix | YYYY-MM-DD HH:MM:SS |
| `YEAR` | Ano | YYYY |

---

## Restrições (Constraints)

### Primary Key (Chave Primária)

```sql
-- Durante criação da tabela
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    nome VARCHAR(50) NOT NULL
);

-- Adicionando depois
ALTER TABLE usuarios ADD PRIMARY KEY (id);
```

### Foreign Key (Chave Estrangeira)

```sql
-- Durante criação
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    produto VARCHAR(100),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Adicionando depois
ALTER TABLE pedidos 
ADD CONSTRAINT fk_usuario
FOREIGN KEY (usuario_id) REFERENCES usuarios(id);
```

### Outras Restrições

```sql
-- NOT NULL
nome VARCHAR(50) NOT NULL

-- UNIQUE
email VARCHAR(100) UNIQUE

-- CHECK (MySQL 8.0+)
idade INT CHECK (idade >= 18)

-- DEFAULT
data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP

-- AUTO_INCREMENT
id INT AUTO_INCREMENT
```

---

## Índices

### Criando Índices

```sql
-- Índice básico
CREATE INDEX idx_nome ON usuarios(nome);

-- Índice único
CREATE UNIQUE INDEX idx_email ON usuarios(email);

-- Índice composto
CREATE INDEX idx_nome_cidade ON usuarios(nome, cidade);

-- Índice com prefixo
CREATE INDEX idx_descricao ON produtos(descricao(50));
```

### Gerenciando Índices

```sql
-- Mostrar índices de uma tabela
SHOW INDEX FROM usuarios;

-- Remover índice
DROP INDEX idx_nome ON usuarios;

-- Adicionar índice via ALTER TABLE
ALTER TABLE usuarios ADD INDEX idx_nome (nome);
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

-- Inserção com algumas colunas
INSERT INTO pessoas (nome, sexo) VALUES ('Carlos', 'M');
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
```

### DELETE - Remover Dados

```sql
-- Remoção com condição
DELETE FROM pessoas WHERE id = 5;

-- Remoção múltipla
DELETE FROM pessoas WHERE peso > 100;

-- Remoção de todos os dados (cuidado!)
DELETE FROM pessoas;

-- Truncate (mais rápido para limpar tabela)
TRUNCATE TABLE pessoas;
```

---

## Consultas (SELECT)

### Sintaxe Básica

```sql
SELECT coluna1, coluna2, ...
FROM tabela
WHERE condição
ORDER BY coluna [ASC|DESC]
LIMIT número;
```

### Exemplos Práticos

```sql
-- Selecionar todas as colunas
SELECT * FROM pessoas;

-- Selecionar colunas específicas
SELECT nome, idade FROM pessoas;

-- Com condição WHERE
SELECT * FROM pessoas WHERE idade >= 18;

-- Ordenação
SELECT * FROM pessoas ORDER BY nome ASC;

-- Limitação de resultados
SELECT * FROM pessoas LIMIT 10;

-- Combinação de cláusulas
SELECT nome, idade 
FROM pessoas 
WHERE idade BETWEEN 20 AND 30 
ORDER BY idade DESC 
LIMIT 5;
```

### Operadores WHERE

```sql
-- Operadores de comparação
WHERE idade = 25
WHERE idade != 30
WHERE idade > 18
WHERE idade < 65
WHERE idade >= 21
WHERE idade <= 60

-- Operadores lógicos
WHERE idade > 18 AND sexo = 'M'
WHERE cidade = 'São Paulo' OR cidade = 'Rio de Janeiro'
WHERE NOT idade < 18

-- BETWEEN
WHERE idade BETWEEN 20 AND 30

-- IN
WHERE cidade IN ('São Paulo', 'Rio de Janeiro', 'Belo Horizonte')

-- LIKE (wildcards)
WHERE nome LIKE 'João%'  -- Começa com João
WHERE nome LIKE '%Silva' -- Termina com Silva
WHERE nome LIKE '%ana%'  -- Contém ana

-- IS NULL / IS NOT NULL
WHERE telefone IS NULL
WHERE email IS NOT NULL
```

### Funções Agregadas

```sql
-- COUNT
SELECT COUNT(*) FROM pessoas;
SELECT COUNT(DISTINCT cidade) FROM pessoas;

-- SUM
SELECT SUM(salario) FROM funcionarios;

-- AVG (média)
SELECT AVG(idade) FROM pessoas;

-- MIN e MAX
SELECT MIN(idade), MAX(idade) FROM pessoas;

-- GROUP BY
SELECT cidade, COUNT(*) 
FROM pessoas 
GROUP BY cidade;

-- HAVING (filtro após GROUP BY)
SELECT cidade, COUNT(*) as total
FROM pessoas 
GROUP BY cidade 
HAVING total > 5;
```

---

## JOINs

### Tipos de JOIN

```sql
-- INNER JOIN (apenas registros com correspondência)
SELECT p.nome, c.nome as cidade
FROM pessoas p
INNER JOIN cidades c ON p.cidade_id = c.id;

-- LEFT JOIN (todos da tabela esquerda)
SELECT p.nome, c.nome as cidade
FROM pessoas p
LEFT JOIN cidades c ON p.cidade_id = c.id;

-- RIGHT JOIN (todos da tabela direita)
SELECT p.nome, c.nome as cidade
FROM pessoas p
RIGHT JOIN cidades c ON p.cidade_id = c.id;

-- CROSS JOIN (produto cartesiano)
SELECT p.nome, c.nome
FROM pessoas p
CROSS JOIN cidades c;
```

### Exemplos Práticos de JOIN

```sql
-- Exemplo com 3 tabelas
SELECT 
    u.nome as usuario,
    p.nome as produto,
    pd.quantidade,
    pd.preco_unitario
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
```

---

## Funções Built-in

### Funções de String

```sql
-- CONCAT - Concatenar strings
SELECT CONCAT(nome, ' - ', sobrenome) as nome_completo FROM usuarios;

-- LENGTH - Comprimento da string
SELECT nome, LENGTH(nome) as tamanho FROM usuarios;

-- UPPER/LOWER - Maiúscula/Minúscula
SELECT UPPER(nome), LOWER(email) FROM usuarios;

-- SUBSTRING - Extrair substring
SELECT SUBSTRING(nome, 1, 3) FROM usuarios;

-- TRIM - Remover espaços
SELECT TRIM('  João  ') as nome_limpo;

-- REPLACE - Substituir texto
SELECT REPLACE(telefone, '-', '') as telefone_limpo FROM usuarios;
```

### Funções Numéricas

```sql
-- ROUND - Arredondar
SELECT ROUND(preco, 2) FROM produtos;

-- CEIL/FLOOR - Arredondar para cima/baixo
SELECT CEIL(preco), FLOOR(preco) FROM produtos;

-- ABS - Valor absoluto
SELECT ABS(-10) as valor;

-- MOD - Resto da divisão
SELECT MOD(10, 3) as resto;

-- RAND - Número aleatório
SELECT RAND() as numero_aleatorio;
```

### Funções de Data

```sql
-- NOW - Data e hora atual
SELECT NOW() as agora;

-- CURDATE/CURTIME - Data atual/Hora atual
SELECT CURDATE() as data_hoje, CURTIME() as hora_agora;

-- DATE_FORMAT - Formatar data
SELECT DATE_FORMAT(data_nascimento, '%d/%m/%Y') FROM pessoas;

-- DATEDIFF - Diferença entre datas
SELECT DATEDIFF(NOW(), data_nascimento) as dias_vida FROM pessoas;

-- DATE_ADD/DATE_SUB - Adicionar/Subtrair tempo
SELECT DATE_ADD(NOW(), INTERVAL 30 DAY) as daqui_30_dias;
SELECT DATE_SUB(NOW(), INTERVAL 1 YEAR) as ano_passado;

-- EXTRACT - Extrair parte da data
SELECT EXTRACT(YEAR FROM data_nascimento) as ano FROM pessoas;
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

-- Procedure com lógica condicional
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
```

### Executando Stored Procedures

```sql
-- Chamar procedure simples
CALL ObterPessoasPorIdade(25);

-- Chamar procedure com parâmetro OUT
CALL ContarPessoasPorCidade('São Paulo', @total);
SELECT @total;

-- Gerenciar procedures
SHOW PROCEDURE STATUS WHERE db = 'nome_banco';
DROP PROCEDURE IF EXISTS nome_procedure;
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
```

### Exemplos Práticos

```sql
-- Trigger para log de auditoria
CREATE TABLE audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tabela VARCHAR(50),
    operacao VARCHAR(10),
    usuario VARCHAR(50),
    data_operacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$
CREATE TRIGGER pessoas_audit_insert
AFTER INSERT ON pessoas
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (tabela, operacao, usuario) 
    VALUES ('pessoas', 'INSERT', USER());
END $$
DELIMITER ;

-- Trigger BEFORE UPDATE
DELIMITER $$
CREATE TRIGGER pessoas_before_update
BEFORE UPDATE ON pessoas
FOR EACH ROW
BEGIN
    SET NEW.data_modificacao = NOW();
    
    -- Validar email
    IF NEW.email NOT LIKE '%@%' THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Email inválido';
    END IF;
END $$
DELIMITER ;
```

### Gerenciar Triggers

```sql
-- Mostrar triggers
SHOW TRIGGERS;

-- Mostrar triggers de uma tabela específica
SHOW TRIGGERS LIKE 'pessoas';

-- Remover trigger
DROP TRIGGER IF EXISTS nome_trigger;
```

---

## Recursos Avançados

### Views (Visões)

```sql
-- Criar view
CREATE VIEW view_pessoas_ativas AS
SELECT id, nome, email, idade
FROM pessoas 
WHERE ativo = 1;

-- Usar view
SELECT * FROM view_pessoas_ativas WHERE idade > 25;

-- Remover view
DROP VIEW view_pessoas_ativas;
```

### Transações

```sql
-- Iniciar transação
START TRANSACTION;

-- Operações
INSERT INTO contas (nome, saldo) VALUES ('João', 1000);
UPDATE contas SET saldo = saldo - 100 WHERE nome = 'Maria';

-- Confirmar (commit) ou desfazer (rollback)
COMMIT;
-- ou
ROLLBACK;

-- Configurar autocommit
SET autocommit = 0; -- Desabilitar
SET autocommit = 1; -- Habilitar (padrão)
```

### Controle de Usuários e Privilégios

```sql
-- Criar usuário
CREATE USER 'novo_usuario'@'localhost' IDENTIFIED BY 'senha123';

-- Conceder privilégios
GRANT SELECT, INSERT, UPDATE ON banco.tabela TO 'usuario'@'localhost';
GRANT ALL PRIVILEGES ON banco.* TO 'admin'@'localhost';

-- Revogar privilégios
REVOKE INSERT, UPDATE ON banco.tabela FROM 'usuario'@'localhost';

-- Mostrar privilégios
SHOW GRANTS FOR 'usuario'@'localhost';

-- Remover usuário
DROP USER 'usuario'@'localhost';
```

### Backup e Restauração

```bash
# Backup de um banco
mysqldump -u usuario -p nome_banco > backup.sql

# Backup de uma tabela específica
mysqldump -u usuario -p nome_banco nome_tabela > backup_tabela.sql

# Backup de todos os bancos
mysqldump -u usuario -p --all-databases > backup_completo.sql

# Restaurar backup
mysql -u usuario -p nome_banco < backup.sql
```

---

## Otimização e Performance

### Análise de Consultas

```sql
-- Analisar plano de execução
EXPLAIN SELECT * FROM pessoas WHERE idade > 25;

-- Analisar performance detalhada
EXPLAIN FORMAT=JSON SELECT * FROM pessoas WHERE idade > 25;

-- Mostrar warnings
SHOW WARNINGS;

-- Analisar uso de índices
SHOW INDEX FROM pessoas;
```

### Dicas de Otimização

1. **Use índices apropriados**: Crie índices nas colunas frequentemente usadas em WHERE, JOIN e ORDER BY
2. **Evite SELECT ***: Especifique apenas as colunas necessárias
3. **Use LIMIT**: Limite resultados quando apropriado
4. **Otimize JOINs**: Use INNER JOIN quando possível
5. **Analise consultas lentas**: Use EXPLAIN para identificar problemas

### Configurações de Performance

```sql
-- Ver configurações atuais
SHOW VARIABLES LIKE 'innodb_buffer_pool_size';
SHOW VARIABLES LIKE 'query_cache_size';

-- Mostrar status do servidor
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Queries';
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
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de categorias
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT
);

-- Tabela de produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    categoria_id INT,
    estoque INT DEFAULT 0,
    ativo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabela de pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pendente', 'processando', 'enviado', 'entregue', 'cancelado') DEFAULT 'pendente',
    total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabela de itens do pedido
CREATE TABLE itens_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserir dados de exemplo
INSERT INTO categorias (nome, descricao) VALUES 
('Eletrônicos', 'Produtos eletrônicos em geral'),
('Roupas', 'Vestuário masculino e feminino'),
('Casa', 'Produtos para casa e decoração');

INSERT INTO usuarios (nome, email, senha) VALUES
('João Silva', 'joao@email.com', 'senha123'),
('Maria Santos', 'maria@email.com', 'senha456');

INSERT INTO produtos (nome, descricao, preco, categoria_id, estoque) VALUES
('Smartphone Samsung', 'Celular Android 128GB', 899.99, 1, 50),
('Camiseta Polo', 'Camiseta polo masculina azul', 79.90, 2, 100),
('Mesa de Centro', 'Mesa de centro em madeira', 299.99, 3, 20);

-- Consultas úteis
-- Produtos por categoria
SELECT p.nome, p.preco, c.nome as categoria
FROM produtos p
JOIN categorias c ON p.categoria_id = c.id
WHERE c.nome = 'Eletrônicos';

-- Pedidos de um usuário
SELECT p.id, p.data_pedido, p.total, p.status
FROM pedidos p
JOIN usuarios u ON p.usuario_id = u.id
WHERE u.email = 'joao@email.com';

-- Produtos mais vendidos
SELECT p.nome, SUM(ip.quantidade) as total_vendido
FROM produtos p
JOIN itens_pedido ip ON p.id = ip.produto_id
GROUP BY p.id, p.nome
ORDER BY total_vendido DESC
LIMIT 10;
```

---

## Conclusão

Esta documentação aborda os principais aspectos do MySQL, desde conceitos básicos até recursos avançados. O MySQL é uma ferramenta poderosa para gerenciamento de dados relacionais, e dominar seus recursos é essencial para desenvolvedores e administradores de banco de dados.

### Próximos Passos

1. **Pratique regularmente**: A prática é fundamental para dominar SQL
2. **Estude casos reais**: Trabalhe com projetos práticos
3. **Explore recursos avançados**: Aprofunde-se em tópicos como replicação, sharding e otimização
4. **Mantenha-se atualizado**: MySQL evolui constantemente com novas funcionalidades

### Recursos Adicionais

- [Documentação oficial do MySQL](https://dev.mysql.com/doc/)
- [MySQL Tutorial](https://www.mysqltutorial.org/)
- [W3Schools MySQL](https://www.w3schools.com/mysql/)
- [Stack Overflow - MySQL](https://stackoverflow.com/questions/tagged/mysql)

---

**Nota**: Esta documentação foi criada com base nas melhores práticas e versões recentes do MySQL. Sempre consulte a documentação oficial para informações mais específicas e atualizadas.