# Controle de Versão no NPM (SemVer)

O NPM utiliza o **Semantic Versioning (SemVer)** para gerenciar versões de pacotes no formato **MAJOR.MINOR.PATCH** (ex.: `1.2.3`):

- **MAJOR**: Mudanças incompatíveis (ex.: `2.0.0`).
- **MINOR**: Novas funcionalidades compatíveis (ex.: `1.3.0`).
- **PATCH**: Correções de bugs (ex.: `1.2.4`).

## Símbolos no `package.json`

Os símbolos no `package.json` definem quais atualizações são permitidas:

### **^ (Caret)**
- Permite atualizações de **MINOR** e **PATCH**, mas não **MAJOR**.
- Exemplo: `"axios": "^1.2.3"` → Aceita `1.2.4`, `1.3.0`, mas não `2.0.0`.

### **~ (Tilde)**
- Permite apenas atualizações de **PATCH**.
- Exemplo: `"axios": "~1.2.3"` → Aceita `1.2.4`, mas não `1.3.0`.

### **Sem símbolo**
- Fixa a versão exata.
- Exemplo: `"axios": "1.2.3"` → Apenas `1.2.3`.

## Outros Símbolos

- **`>` `<` `>=` `<=`**: Define intervalos (ex.: `>1.2.3 <2.0.0`).
- **`||` (ou)**: Combina intervalos (ex.: `"1.2.3 || 2.0.0"`).
- **`-` (intervalo)**: Exemplo: `"1.2.3 - 1.5.0"`.
- **`*` ou `x`**: Aceita qualquer versão (ex.: `"1.2.x"` → `1.2.*`).
- **`latest`**: Sempre a versão mais recente.

## Dicas Úteis

- Use `npm update` para atualizar pacotes dentro dos intervalos definidos.
- O `package-lock.json` trava versões exatas para garantir reprodutibilidade.

## Exemplo no `package.json`

```json
{
  "dependencies": {
    "axios": "^1.2.3",    // Aceita 1.x.x
    "lodash": "~4.17.21", // Aceita 4.17.x
    "express": "4.18.2"   // Versão fixa
  }
}
```