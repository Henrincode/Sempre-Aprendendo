### Avaliação de Curto-Circuito (Short-Circuit Evaluation) em JavaScript

Em JavaScript, os operadores lógicos `&&` (AND) e `||` (OR) utilizam **avaliação de curto-circuito**, o que significa que a execução das expressões para assim que o resultado final pode ser determinado:

- **`&&` (E lógico)**:
  - Avalia da esquerda para a direita.
  - Para no primeiro valor `false` (ou "falso") e retorna esse valor.
  - Se todas as condições forem `true` (ou "verdadeiro"), retorna o último valor avaliado.
  - Uso comum: Condicionar a execução de algo apenas se todas as verificações passarem.
  - Exemplo: `condicao && executaAlgo()` só chama `executaAlgo()` se `condicao` for verdadeira.

- **`||` (OU lógico)**:
  - Avalia da esquerda para a direita.
  - Para no primeiro valor `true` (ou "verdadeiro") e retorna esse valor.
  - Se todas as condições forem `false` (ou "falso"), retorna o último valor avaliado.
  - Uso comum: Escolher o primeiro valor válido ou definir um valor padrão.
  - Exemplo: `valor || "default"` retorna `"default"` se `valor` for falso.

Essa técnica é útil para controle de fluxo conciso, evitando `if`s desnecessários, e é amplamente usada em padrões como middlewares ou inicializações seguras.