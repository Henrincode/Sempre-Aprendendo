# Guia Completo do PHP - Do Básico ao Avançado

## Índice
1. [Variáveis](#variáveis)
2. [Constantes](#constantes)
3. [Tipos de Variáveis](#tipos-de-variáveis)
4. [Loops](#loops)
5. [Funções](#funções)
6. [Arrow Functions](#arrow-functions)
7. [Conexão com Banco de Dados](#conexão-com-banco-de-dados)
8. [Imprimir Dados de Forma Segura](#imprimir-dados-de-forma-segura)

---

## Variáveis

Em PHP, as variáveis começam com o símbolo `$` e são dinamicamente tipadas (não precisa declarar o tipo).

```php
<?php
// Declarando variáveis
$nome = "João Silva";
$idade = 25;
$altura = 1.75;
$ativo = true;

// Exibindo variáveis
echo $nome;
echo $idade;

// Verificar o tipo de uma variável
var_dump($nome);     // string(11) "João Silva"
var_dump($idade);    // int(25)
var_dump($altura);   // float(1.75)
var_dump($ativo);    // bool(true)
?>
```

### Escopo de Variáveis

```php
<?php
$variavel_global = "Sou global";

function teste() {
    // $variavel_global não é acessível aqui
    global $variavel_global; // Agora é acessível
    echo $variavel_global;
}

teste();

// Variáveis superglobais (sempre acessíveis)
// $_GET, $_POST, $_REQUEST, $_SERVER, $_SESSION, $_COOKIE, $_FILES, $GLOBALS
?>
```

---

## Constantes

Constantes são valores que **não podem ser alterados** após serem definidos. Não usam o símbolo `$`.

```php
<?php
// Definindo constantes
define("NOME_APP", "Minha Aplicação");
define("VERSAO", "1.0.0");
define("DB_HOST", "localhost");

// Ou usando const (preferido em PHP 5.3+)
const API_URL = "https://api.exemplo.com";
const TEMPO_SESSAO = 3600;

// Usando constantes
echo NOME_APP;           // Minha Aplicação
echo VERSAO;             // 1.0.0
echo TEMPO_SESSAO;       // 3600

// Verificar se uma constante existe
if (defined("NOME_APP")) {
    echo "Constante existe";
}

// Constantes pré-definidas do PHP
echo __FILE__;           // Caminho do arquivo atual
echo __DIR__;            // Diretório do arquivo
echo __LINE__;           // Número da linha
echo PHP_VERSION;        // Versão do PHP
?>
```

---

## Tipos de Variáveis

PHP suporta vários tipos de dados:

```php
<?php
// 1. STRING - Texto
$texto = "Olá Mundo";
$nome = 'João';  // Aspas simples ou duplas

// Concatenação
$mensagem = $texto . " " . $nome;
echo $mensagem;  // Olá Mundo João

// Interpolação (apenas com aspas duplas)
echo "Olá $nome";                    // Olá João
echo "Olá {$nome}";                  // Olá João (mais seguro)

// 2. INTEGER - Números inteiros
$numero = 42;
$negativo = -10;
$zero = 0;

// Verificar se é inteiro
var_dump(is_int($numero));           // bool(true)

// 3. FLOAT - Números decimais
$preco = 19.99;
$taxa = 0.15;

var_dump(is_float($preco));          // bool(true)

// 4. BOOLEAN - Verdadeiro ou Falso
$ativo = true;
$inativo = false;

// 5. ARRAY - Coleção de elementos
$frutas = array("Maçã", "Banana", "Laranja");
$cores = ["Vermelho", "Verde", "Azul"];  // Sintaxe curta

// Acessando elementos
echo $frutas[0];                      // Maçã
echo $cores[1];                       // Verde

// Array associativo (com chaves)
$usuario = [
    "nome" => "Maria",
    "idade" => 30,
    "email" => "maria@email.com"
];

echo $usuario["nome"];                // Maria
echo $usuario["idade"];               // 30

// Adicionando elementos
$frutas[] = "Pera";
$usuario["telefone"] = "11999999999";

// 6. OBJECT - Instância de uma classe
class Pessoa {
    public $nome;
    public $idade;
    
    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }
}

$pessoa = new Pessoa("Carlos", 28);
echo $pessoa->nome;                   // Carlos

// 7. NULL - Valor vazio/não definido
$vazio = null;
$indefinido = NULL;

// 8. RESOURCE - Referência a um recurso externo
$conexao = mysqli_connect("localhost", "usuario", "senha");

// Tipo de verificação
$valor = 42;
gettype($valor);                      // "integer"
gettype(3.14);                        // "double"
gettype("texto");                     // "string"
gettype(true);                        // "boolean"
gettype([]);                          // "array"
gettype(null);                        // "NULL"
?>
```

### Conversão de Tipos

```php
<?php
// Conversão explícita (casting)
$numero_texto = "42";
$numero_int = (int)$numero_texto;     // 42
$numero_float = (float)"3.14";        // 3.14
$texto = (string)42;                  // "42"
$array = (array)"valor";              // ["valor"]

// Conversão implícita
$resultado = "5" + 3;                 // 8 (conversão automática)
$resultado = "5" . 3;                 // "53" (concatenação)
?>
```

---

## Loops

Estruturas de repetição para executar código múltiplas vezes.

### FOR

```php
<?php
// Loop tradicional
for ($i = 0; $i < 5; $i++) {
    echo $i . " ";  // 0 1 2 3 4
}

// Iterando sobre array
$frutas = ["Maçã", "Banana", "Laranja"];
for ($i = 0; $i < count($frutas); $i++) {
    echo $frutas[$i] . "<br>";
}
?>
```

### WHILE

```php
<?php
$i = 0;
while ($i < 5) {
    echo $i . " ";  // 0 1 2 3 4
    $i++;
}

// DO-WHILE (executa pelo menos uma vez)
$x = 10;
do {
    echo $x . " ";  // 10
    $x++;
} while ($x < 5);  // Não executa mais porque $x já é 11
?>
```

### FOREACH

```php
<?php
// Array simples
$frutas = ["Maçã", "Banana", "Laranja"];
foreach ($frutas as $fruta) {
    echo $fruta . "<br>";  // Maçã Banana Laranja
}

// Array associativo
$usuario = [
    "nome" => "Maria",
    "idade" => 30,
    "email" => "maria@email.com"
];

foreach ($usuario as $chave => $valor) {
    echo "$chave: $valor<br>";
    // nome: Maria
    // idade: 30
    // email: maria@email.com
}

// Com índice
$cores = ["Vermelho", "Verde", "Azul"];
foreach ($cores as $indice => $cor) {
    echo "$indice - $cor<br>";
    // 0 - Vermelho
    // 1 - Verde
    // 2 - Azul
}
?>
```

### BREAK e CONTINUE

```php
<?php
// BREAK - Sai do loop
for ($i = 0; $i < 10; $i++) {
    if ($i == 5) {
        break;  // Para quando $i for 5
    }
    echo $i . " ";  // 0 1 2 3 4
}

// CONTINUE - Pula a iteração atual
for ($i = 0; $i < 5; $i++) {
    if ($i == 2) {
        continue;  // Pula quando $i for 2
    }
    echo $i . " ";  // 0 1 3 4
}
?>
```

---

## Funções

Blocos de código reutilizáveis que executam tarefas específicas.

```php
<?php
// Função simples
function saudacao() {
    echo "Olá, bem-vindo!";
}
saudacao();  // Executa a função

// Função com parâmetros
function saudar($nome) {
    echo "Olá, $nome!";
}
saudar("João");  // Olá, João!

// Função com múltiplos parâmetros
function somar($a, $b) {
    return $a + $b;
}
echo somar(5, 3);  // 8

// Função com valores padrão
function calcular($quantidade, $preco = 10.00) {
    return $quantidade * $preco;
}
echo calcular(5);        // 50 (usa preco padrão)
echo calcular(5, 15);    // 75 (usa preco informado)

// Função com tipo de retorno e type hints
function multiplicar(int $a, int $b): int {
    return $a * $b;
}
echo multiplicar(4, 5);  // 20

// Função com parâmetro variável
function listar(...$itens) {
    foreach ($itens as $item) {
        echo $item . "<br>";
    }
}
listar("Maçã", "Banana", "Laranja");

// Função retornando array
function obterDados() {
    return [
        "nome" => "Maria",
        "idade" => 30,
        "ativo" => true
    ];
}
$dados = obterDados();
echo $dados["nome"];  // Maria

// Função com referência (&) - modifica variável original
function incrementar(&$numero) {
    $numero++;
}
$valor = 5;
incrementar($valor);
echo $valor;  // 6

// Função verificando tipo
function processar($valor) {
    if (is_int($valor)) {
        echo "Valor inteiro: $valor";
    } elseif (is_string($valor)) {
        echo "Valor texto: $valor";
    } elseif (is_array($valor)) {
        echo "Valor array";
    }
}
?>
```

---

## Arrow Functions

Sintaxe concisa de funções anônimas (PHP 7.4+). Perfeitas para callbacks.

```php
<?php
// Arrow function simples
$quadrado = fn($x) => $x * $x;
echo $quadrado(5);  // 25

// Sem parâmetros
$saudacao = fn() => "Olá Mundo";
echo $saudacao();   // Olá Mundo

// Múltiplos parâmetros
$somar = fn($a, $b) => $a + $b;
echo $somar(10, 5); // 15

// Com type hints e retorno
$multiplicar = fn(int $a, int $b): int => $a * $b;
echo $multiplicar(3, 4);  // 12

// Arrow function em array_map
$numeros = [1, 2, 3, 4, 5];
$dobrados = array_map(fn($n) => $n * 2, $numeros);
print_r($dobrados);  // Array ( [0] => 2 [1] => 4 [2] => 6 [3] => 8 [4] => 10 )

// Arrow function em array_filter
$pares = array_filter($numeros, fn($n) => $n % 2 == 0);
print_r($pares);  // Array ( [1] => 2 [3] => 4 )

// Arrow function em usort
$dados = [
    ["nome" => "Maria", "idade" => 28],
    ["nome" => "João", "idade" => 25],
    ["nome" => "Ana", "idade" => 30]
];
usort($dados, fn($a, $b) => $a["idade"] - $b["idade"]);
// Ordena por idade

// Acessando variáveis do escopo externo (herança automática)
$multiplicador = 10;
$multiplicar_por_dez = fn($x) => $x * $multiplicador;
echo $multiplicar_por_dez(5);  // 50

// Diferença: função anônima tradicional (use)
$valor_externo = 10;
$funcao_tradicional = function($x) use ($valor_externo) {
    return $x * $valor_externo;
};
echo $funcao_tradicional(5);  // 50 (com 'use' explícito)
?>
```

---

## Conexão com Banco de Dados

### Usando MySQLi (Procedural)

```php
<?php
// Configurações de banco de dados
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "meu_banco";

// Conectar ao banco de dados
$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

// Verificar se a conexão foi bem-sucedida
if (!$conexao) {
    die("Erro na conexão: " . mysqli_connect_error());
}

// Definir charset para UTF-8
mysqli_set_charset($conexao, "utf8mb4");

// ========== OPERAÇÕES BÁSICAS ==========

// 1. INSERT - Inserir dados
$nome = "João Silva";
$email = "joao@email.com";
$idade = 25;

// Preparar a query para evitar SQL Injection
$stmt = mysqli_prepare($conexao, "INSERT INTO usuarios (nome, email, idade) VALUES (?, ?, ?)");
mysqli_stmt_bind_param($stmt, "ssi", $nome, $email, $idade);
mysqli_stmt_execute($stmt);

if (mysqli_stmt_affected_rows($stmt) > 0) {
    echo "Usuário inserido com sucesso!";
    $ultimo_id = mysqli_insert_id($conexao);
    echo "ID do novo usuário: " . $ultimo_id;
} else {
    echo "Erro ao inserir: " . mysqli_error($conexao);
}
mysqli_stmt_close($stmt);

// 2. SELECT - Recuperar dados
$query = "SELECT id, nome, email, idade FROM usuarios WHERE idade > ?";
$stmt = mysqli_prepare($conexao, $query);
$idade_minima = 18;
mysqli_stmt_bind_param($stmt, "i", $idade_minima);
mysqli_stmt_execute($stmt);
$resultado = mysqli_stmt_get_result($stmt);

// Processar resultados
while ($linha = mysqli_fetch_assoc($resultado)) {
    echo "Nome: " . $linha["nome"] . "<br>";
    echo "Email: " . $linha["email"] . "<br>";
    echo "Idade: " . $linha["idade"] . "<br>";
}
mysqli_stmt_close($stmt);

// 3. UPDATE - Atualizar dados
$novo_email = "joao.novo@email.com";
$id_usuario = 1;

$stmt = mysqli_prepare($conexao, "UPDATE usuarios SET email = ? WHERE id = ?");
mysqli_stmt_bind_param($stmt, "si", $novo_email, $id_usuario);
mysqli_stmt_execute($stmt);

if (mysqli_stmt_affected_rows($stmt) > 0) {
    echo "Usuário atualizado com sucesso!";
} else {
    echo "Nenhum usuário foi atualizado ou erro: " . mysqli_error($conexao);
}
mysqli_stmt_close($stmt);

// 4. DELETE - Deletar dados
$id_para_deletar = 1;

$stmt = mysqli_prepare($conexao, "DELETE FROM usuarios WHERE id = ?");
mysqli_stmt_bind_param($stmt, "i", $id_para_deletar);
mysqli_stmt_execute($stmt);

if (mysqli_stmt_affected_rows($stmt) > 0) {
    echo "Usuário deletado com sucesso!";
} else {
    echo "Usuário não encontrado ou erro: " . mysqli_error($conexao);
}
mysqli_stmt_close($stmt);

// Fechar a conexão
mysqli_close($conexao);
?>
```

### Usando MySQLi (Orientado a Objetos)

```php
<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "meu_banco";

// Criar conexão
$conexao = new mysqli($servidor, $usuario, $senha, $banco);

// Verificar conexão
if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}

// Definir charset
$conexao->set_charset("utf8mb4");

// 1. INSERT
$nome = "Maria Santos";
$email = "maria@email.com";
$idade = 28;

$stmt = $conexao->prepare("INSERT INTO usuarios (nome, email, idade) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $nome, $email, $idade);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Usuário inserido! ID: " . $conexao->insert_id;
} else {
    echo "Erro: " . $conexao->error;
}
$stmt->close();

// 2. SELECT
$stmt = $conexao->prepare("SELECT id, nome, email, idade FROM usuarios WHERE idade > ?");
$idade_minima = 20;
$stmt->bind_param("i", $idade_minima);
$stmt->execute();
$resultado = $stmt->get_result();

while ($linha = $resultado->fetch_assoc()) {
    echo "Nome: " . $linha["nome"] . " - Email: " . $linha["email"] . "<br>";
}
$stmt->close();

// 3. UPDATE
$novo_email = "maria.novo@email.com";
$id_usuario = 2;

$stmt = $conexao->prepare("UPDATE usuarios SET email = ? WHERE id = ?");
$stmt->bind_param("si", $novo_email, $id_usuario);
$stmt->execute();

echo "Linhas atualizadas: " . $stmt->affected_rows;
$stmt->close();

// 4. DELETE
$id_para_deletar = 3;

$stmt = $conexao->prepare("DELETE FROM usuarios WHERE id = ?");
$stmt->bind_param("i", $id_para_deletar);
$stmt->execute();

echo "Linhas deletadas: " . $stmt->affected_rows;
$stmt->close();

// Fechar conexão
$conexao->close();
?>
```

### Usando PDO (Recomendado)

```php
<?php
$servidor = "mysql:host=localhost;dbname=meu_banco;charset=utf8mb4";
$usuario = "root";
$senha = "";

try {
    // Conectar usando PDO
    $conexao = new PDO($servidor, $usuario, $senha);
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conectado com sucesso!";
} catch (PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}

// 1. INSERT
$nome = "Carlos Oliveira";
$email = "carlos@email.com";
$idade = 35;

$stmt = $conexao->prepare("INSERT INTO usuarios (nome, email, idade) VALUES (:nome, :email, :idade)");
$stmt->execute([
    ':nome' => $nome,
    ':email' => $email,
    ':idade' => $idade
]);

echo "Linhas inseridas: " . $stmt->rowCount();

// 2. SELECT
$stmt = $conexao->prepare("SELECT id, nome, email, idade FROM usuarios WHERE idade > :idade");
$stmt->execute([':idade' => 20]);

while ($linha = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "Nome: " . $linha["nome"] . " - Email: " . $linha["email"] . "<br>";
}

// 3. UPDATE
$novo_email = "carlos.novo@email.com";
$id_usuario = 3;

$stmt = $conexao->prepare("UPDATE usuarios SET email = :email WHERE id = :id");
$stmt->execute([
    ':email' => $novo_email,
    ':id' => $id_usuario
]);

echo "Linhas atualizadas: " . $stmt->rowCount();

// 4. DELETE
$id_para_deletar = 4;

$stmt = $conexao->prepare("DELETE FROM usuarios WHERE id = :id");
$stmt->execute([':id' => $id_para_deletar]);

echo "Linhas deletadas: " . $stmt->rowCount();

// Fechar conexão
$conexao = null;
?>
```

---

## Imprimir Dados de Forma Segura

Proteção contra vulnerabilidades como XSS (Cross-Site Scripting).

```php
<?php
// ========== FUNÇÕES DE ESCAPING ==========

// 1. htmlspecialchars() - Converte caracteres especiais em entidades HTML
$texto_usuario = '<script>alert("Ataque!");</script>';
echo htmlspecialchars($texto_usuario);
// Exibe: &lt;script&gt;alert(&quot;Ataque!&quot;);&lt;/script&gt;

// 2. htmlentities() - Converte todos os caracteres aplicáveis em entidades
$texto = "São Paulo & Rio de Janeiro";
echo htmlentities($texto);
// Exibe: S&atilde;o Paulo &amp; Rio de Janeiro

// 3. strip_tags() - Remove tags HTML/PHP
$html = "<p>Olá <strong>Mundo</strong></p>";
echo strip_tags($html);
// Exibe: Olá Mundo

// 4. json_encode() - Seguro para JSON
$dados = [
    "nome" => "João",
    "mensagem" => '<script>alert("XSS")</script>'
];
echo json_encode($dados);
// Saída JSON segura

// ========== IMPRIMIR DADOS SEGURAMENTE ==========

// Forma segura com htmlspecialchars
echo htmlspecialchars("Olá <script>alert('teste')</script>", ENT_QUOTES, 'UTF-8');

// Função auxiliar para segurança
function exibir_seguro($valor) {
    return htmlspecialchars($valor, ENT_QUOTES, 'UTF-8');
}

$nome_usuario = $_GET['nome'] ?? '';
echo "<p>Bem-vindo, " . exibir_seguro($nome_usuario) . "</p>";

// ========== IMPRIMIR EM HTML ==========

// Dados de exemplo
$usuario = [
    "id" => 1,
    "nome" => "João Silva",
    "email" => "joao@email.com",
    "idade" => 25,
    "ativo" => true
];

// Exibir em tabela HTML
?>
<table border="1">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><?php echo exibir_seguro($usuario["id"]); ?></td>
            <td><?php echo exibir_seguro($usuario["nome"]); ?></td>
            <td><?php echo exibir_seguro($usuario["email"]); ?></td>
            <td><?php echo exibir_seguro($usuario["idade"]); ?></td>
            <td><?php echo $usuario["ativo"] ? "Ativo" : "Inativo"; ?></td>
        </tr>
    </tbody>
</table>

<?php
// ========== IMPRIMIR LISTA DE DADOS DO BANCO ==========

// Exemplo completo: Listar usuários de forma segura
$usuarios = [
    ["id" => 1, "nome" => "Maria", "email" => "maria@email.com"],
    ["id" => 2, "nome" => "João", "email" => "joao@email.com"],
    ["id" => 3, "nome" => "Ana", "email" => "ana@email.com"]
];

echo "<ul>";
foreach ($usuarios as $user) {
    echo "<li>";
    echo exibir_seguro($user["nome"]) . " (" . exibir_seguro($user["email"]) . ")";
    echo "</li>";
}
echo "</ul>";

// ========== EXIBIR ARRAY EM JSON ==========

// Para enviar para o frontend (JavaScript)
header('Content-Type: application/json; charset=utf-8');
echo json_encode($usuarios);

// ========== DEBUG SEGURO ==========

// var_dump() - Ver estrutura completa (apenas em desenvolvimento)
var_dump($usuario);

// print_r() - Exibir de forma legível (apenas em desenvolvimento)
echo "<pre>";
print_r($usuario);
echo "</pre>";

// Função auxiliar para debug em produção
function debug_log($dados, $titulo = "") {
    if (defined('DEBUG') && DEBUG === true) {
        error_log($titulo . ": " . json_encode($dados));
    }
}

debug_log($usuario, "Dados do Usuário");
?>
```

### Proteção contra XSS em Formulários

```php
<?php
// Formulário HTML
?>
<form method="POST" action="processar.php">
    <label>Nome:</label>
    <input type="text" name="nome" required>
    
    <label>Email:</label>
    <input type="email" name="email" required>
    
    <label>Mensagem:</label>
    <textarea name="mensagem"></textarea>
    
    <button type="submit">Enviar</button>
</form>

<?php
// processar.php - Receber e validar dados com segurança
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar dados
    $nome = isset($_POST["nome"]) ? $_POST["nome"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $mensagem = isset($_POST["mensagem"]) ? $_POST["mensagem"] : "";
    
    // Validar e sanitizar
    $nome = trim($nome);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $mensagem = trim($mensagem);
    
    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email inválido!");
    }
    
    // Exibir de forma segura
    echo "Nome: " . htmlspecialchars($nome, ENT_QUOTES, 'UTF-8') . "<br>";
    echo "Email: " . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "<br>";
    echo "Mensagem: " . htmlspecialchars($mensagem, ENT_QUOTES, 'UTF-8') . "<br>";
    
    // Inserir no banco de dados (exemplo)
    // $stmt = $conexao->prepare("INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)");
    // $stmt->bind_param("sss", $nome, $email, $mensagem);
    // $stmt->execute();
}
?>
```

---

## Boas Práticas

1. **Sempre usar Prepared Statements** para evitar SQL Injection
2. **Validar e sanitizar** todas as entradas do usuário
3. **Usar htmlspecialchars()** ao exibir dados do usuário
4. **Definir charset UTF-8** em todas as conexões e headers
5. **Usar type hints** para melhor segurança de tipo
6. **Usar constantes** para valores que não mudam
7. **Tratar erros** com try-catch ou isset()
8. **Nunca confiar** em dados vindo do usuário
9. **Manter senhas** em variáveis de ambiente (.env)
10. **Usar HTTPS** em produção

---

## Resumo Rápido

| Conceito | Sintaxe | Exemplo |
|----------|---------|---------|
| Variável | `$nome` | `$idade = 25;` |
| Constante | `CONST_NAME` | `const DB_HOST = "localhost";` |
| String | `"texto"` | `"Olá Mundo"` |
| Integer | `42` | `$idade = 30;` |
| Float | `3.14` | `$preco = 19.99;` |
| Array | `[]` | `$cores = ["Vermelho", "Verde"];` |
| Boolean | `true/false` | `$ativo = true;` |
| Função | `function nome() {}` | `function somar($a, $b) { return $a + $b; }` |
| Arrow Function | `fn() =>` | `$quadrado = fn($x) => $x * $x;` |
| Loop For | `for() {}` | `for ($i = 0; $i < 5; $i++)` |
| Loop Foreach | `foreach() {}` | `foreach ($array as $item)` |
| SQL Injection | `prepare() + bind_param()` | `$stmt = mysqli_prepare($conexao, "SELECT * FROM users WHERE id = ?");` |
| XSS Prevention | `htmlspecialchars()` | `echo htmlspecialchars($texto, ENT_QUOTES, 'UTF-8');` |
