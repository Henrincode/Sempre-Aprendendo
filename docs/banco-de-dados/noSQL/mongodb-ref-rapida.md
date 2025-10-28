# MongoDB - Guia de Referência Rápida

## Operações CRUD

### CREATE - Inserção

| Operação | Sintaxe | Descrição |
|----------|---------|-----------|
| `insertOne()` | `db.collection.insertOne({campo: "valor"})` | Insere um documento |
| `insertMany()` | `db.collection.insertMany([{...}, {...}])` | Insere múltiplos documentos |

### READ - Consulta

| Operação | Sintaxe | Descrição |
|----------|---------|-----------|
| `find()` | `db.collection.find()` | Retorna todos os documentos |
| `find()` com filtro | `db.collection.find({campo: valor})` | Retorna documentos que atendem o critério |
| `findOne()` | `db.collection.findOne({campo: valor})` | Retorna o primeiro documento encontrado |
| Projeção | `db.collection.find({}, {campo1: 1, campo2: 1, _id: 0})` | Retorna apenas campos especificados |

#### Operadores de Comparação

| Operador | Sintaxe | Descrição |
|----------|---------|-----------|
| `$eq` | `{campo: {$eq: valor}}` | Igual a |
| `$ne` | `{campo: {$ne: valor}}` | Diferente de |
| `$gt` | `{campo: {$gt: valor}}` | Maior que |
| `$gte` | `{campo: {$gte: valor}}` | Maior ou igual |
| `$lt` | `{campo: {$lt: valor}}` | Menor que |
| `$lte` | `{campo: {$lte: valor}}` | Menor ou igual |
| `$in` | `{campo: {$in: [v1, v2]}}` | Está no array |
| `$nin` | `{campo: {$nin: [v1, v2]}}` | Não está no array |

#### Operadores Lógicos

| Operador | Sintaxe | Descrição |
|----------|---------|-----------|
| `$and` | `{$and: [{...}, {...}]}` | E lógico |
| `$or` | `{$or: [{...}, {...}]}` | OU lógico |
| `$not` | `{campo: {$not: {...}}}` | Negação |
| `$nor` | `{$nor: [{...}, {...}]}` | NOR lógico |

### UPDATE - Atualização

| Operação | Sintaxe | Descrição |
|----------|---------|-----------|
| `updateOne()` | `db.collection.updateOne({filtro}, {$set: {campo: valor}})` | Atualiza um documento |
| `updateMany()` | `db.collection.updateMany({filtro}, {$set: {campo: valor}})` | Atualiza múltiplos documentos |
| `replaceOne()` | `db.collection.replaceOne({filtro}, {novo_documento})` | Substitui documento completo |

#### Operadores de Atualização

| Operador | Sintaxe | Descrição |
|----------|---------|-----------|
| `$set` | `{$set: {campo: valor}}` | Define/atualiza valor do campo |
| `$unset` | `{$unset: {campo: ""}}` | Remove campo do documento |
| `$inc` | `{$inc: {campo: valor}}` | Incrementa valor numérico |
| `$mul` | `{$mul: {campo: valor}}` | Multiplica valor numérico |
| `$rename` | `{$rename: {campo_antigo: "campo_novo"}}` | Renomeia campo |
| `$currentDate` | `{$currentDate: {campo: true}}` | Define data/hora atual |

#### Operadores de Array

| Operador | Sintaxe | Descrição |
|----------|---------|-----------|
| `$push` | `{$push: {array: valor}}` | Adiciona elemento ao array |
| `$push` + `$each` | `{$push: {array: {$each: [v1, v2]}}}` | Adiciona múltiplos elementos |
| `$pull` | `{$pull: {array: valor}}` | Remove elementos do array |
| `$pop` | `{$pop: {array: 1}}` | Remove último (1) ou primeiro (-1) elemento |
| `$addToSet` | `{$addToSet: {array: valor}}` | Adiciona se não existir (único) |

### DELETE - Exclusão

| Operação | Sintaxe | Descrição |
|----------|---------|-----------|
| `deleteOne()` | `db.collection.deleteOne({filtro})` | Exclui um documento |
| `deleteMany()` | `db.collection.deleteMany({filtro})` | Exclui múltiplos documentos |
| `drop()` | `db.collection.drop()` | Remove toda a coleção |

---

## Aggregation Framework

### Estrutura Básica

```javascript
db.collection.aggregate([
    { $stage1: {...} },
    { $stage2: {...} },
    { $stage3: {...} }
])
```

### Estágios Principais

| Estágio | Sintaxe | Descrição | Quando Usar |
|---------|---------|-----------|-------------|
| `$match` | `{$match: {campo: valor}}` | Filtra documentos | Primeiro estágio (otimização) |
| `$project` | `{$project: {campo1: 1, campo2: 0}}` | Seleciona/transforma campos | Remover campos desnecessários |
| `$group` | `{$group: {_id: "$campo", total: {$sum: 1}}}` | Agrupa documentos | Calcular estatísticas |
| `$sort` | `{$sort: {campo1: 1, campo2: -1}}` | Ordena documentos | 1 = ascendente, -1 = descendente |
| `$limit` | `{$limit: número}` | Limita quantidade de documentos | Top N, paginação |
| `$skip` | `{$skip: número}` | Pula documentos | Paginação |
| `$unwind` | `{$unwind: "$campoArray"}` | Desconstrói arrays | Processar elementos individualmente |
| `$lookup` | Ver tabela abaixo | Join entre coleções | Combinar dados relacionados |
| `$addFields` | `{$addFields: {novoCampo: expressão}}` | Adiciona campos calculados | Criar campos sem remover existentes |
| `$count` | `{$count: "nomeCampo"}` | Conta documentos | Total de registros |

### $lookup - Join Entre Coleções

| Tipo | Sintaxe | Uso |
|------|---------|-----|
| Básico | `{$lookup: {from: "coleção", localField: "campo_local", foreignField: "campo_estrangeiro", as: "resultado"}}` | Join simples 1:1 ou 1:N |
| Com Pipeline | `{$lookup: {from: "coleção", let: {var: "$campo"}, pipeline: [{$match: {...}}], as: "resultado"}}` | Join com condições complexas |
| Múltiplos | Usar vários estágios `$lookup` em sequência | Juntar múltiplas coleções |

**Exemplo Múltiplos Lookups:**
```javascript
db.filme.aggregate([
    {
        $lookup: {
            from: "estudio",
            localField: "estudio",
            foreignField: "nome",
            as: "info_estudio"
        }
    },
    {
        $lookup: {
            from: "ator",
            localField: "titulo",
            foreignField: "filme",
            as: "info_ator"
        }
    }
])
```

### $group - Operadores de Acumulação

| Operador | Sintaxe | Descrição |
|----------|---------|-----------|
| `$sum` | `{$sum: 1}` ou `{$sum: "$campo"}` | Soma valores ou conta documentos |
| `$avg` | `{$avg: "$campo"}` | Calcula média |
| `$min` | `{$min: "$campo"}` | Valor mínimo |
| `$max` | `{$max: "$campo"}` | Valor máximo |
| `$first` | `{$first: "$campo"}` | Primeiro valor do grupo |
| `$last` | `{$last: "$campo"}` | Último valor do grupo |
| `$push` | `{$push: "$campo"}` | Cria array com todos os valores |
| `$addToSet` | `{$addToSet: "$campo"}` | Cria array com valores únicos |
| `$count` | `{$count: {}}` | Conta documentos no grupo |

**Exemplo $group:**
```javascript
{
    $group: {
        _id: "$categoria",
        total: { $sum: 1 },
        receita: { $sum: "$valor" },
        media: { $avg: "$preco" }
    }
}
```

### $project - Operadores de Expressão

| Operador | Sintaxe | Descrição |
|----------|---------|-----------|
| `$concat` | `{$concat: ["$campo1", " ", "$campo2"]}` | Concatena strings |
| `$substr` | `{$substr: ["$campo", 0, 5]}` | Extrai substring |
| `$toUpper` | `{$toUpper: "$campo"}` | Converte para maiúsculas |
| `$toLower` | `{$toLower: "$campo"}` | Converte para minúsculas |
| `$multiply` | `{$multiply: ["$campo", valor]}` | Multiplicação |
| `$divide` | `{$divide: ["$campo1", "$campo2"]}` | Divisão |
| `$add` | `{$add: ["$campo1", "$campo2"]}` | Adição |
| `$subtract` | `{$subtract: ["$campo1", "$campo2"]}` | Subtração |
| `$round` | `{$round: ["$campo", 2]}` | Arredonda número |
| `$cond` | `{$cond: {if: expressão, then: valor1, else: valor2}}` | Condicional if-then-else |

### $unwind - Opções

| Opção | Sintaxe | Descrição |
|-------|---------|-----------|
| Básico | `{$unwind: "$array"}` | Desconstrói array |
| Com índice | `{$unwind: {path: "$array", includeArrayIndex: "indice"}}` | Adiciona índice do elemento |
| Preservar vazios | `{$unwind: {path: "$array", preserveNullAndEmptyArrays: true}}` | Mantém docs sem array/array vazio |

---

## Pipeline Completo - Exemplo

```javascript
db.vendas.aggregate([
    // 1. Filtrar
    { $match: { status: "concluído" } },
    
    // 2. Join
    {
        $lookup: {
            from: "produtos",
            localField: "produto_id",
            foreignField: "_id",
            as: "produto"
        }
    },
    
    // 3. Desconstruir array
    { $unwind: "$produto" },
    
    // 4. Adicionar campo calculado
    {
        $addFields: {
            total: { $multiply: ["$quantidade", "$produto.preco"] }
        }
    },
    
    // 5. Agrupar
    {
        $group: {
            _id: "$produto.categoria",
            receita: { $sum: "$total" }
        }
    },
    
    // 6. Ordenar
    { $sort: { receita: -1 } },
    
    // 7. Limitar
    { $limit: 10 }
])
```

---

## Boas Práticas de Performance

| Prática | Descrição | Impacto |
|---------|-----------|---------|
| `$match` primeiro | Filtrar dados no início do pipeline | Alto - reduz volume processado |
| Criar índices | Indexar campos usados em `$match` e `$sort` | Alto - acelera consultas |
| `$project` cedo | Remover campos desnecessários | Médio - reduz uso de memória |
| Ordem `$sort` + `$limit` | Usar juntos (otimização automática) | Alto - MongoDB otimiza internamente |
| `allowDiskUse: true` | Para agregações > 100MB RAM | Alto - evita erros de memória |
| Evitar `$lookup` aninhados | Preferir pipeline otimizado | Médio - reduz complexidade |

**Sintaxe allowDiskUse:**
```javascript
db.collection.aggregate(pipeline, { allowDiskUse: true })
```

---

## Ordem de Execução Recomendada

| Ordem | Estágio | Motivo |
|-------|---------|--------|
| 1º | `$match` | Reduzir volume de dados |
| 2º | `$lookup` | Join após filtrar |
| 3º | `$unwind` | Desconstruir arrays |
| 4º | `$addFields` / `$project` | Transformar dados |
| 5º | `$group` | Agregar resultados |
| 6º | `$sort` | Ordenar após agrupar |
| 7º | `$skip` / `$limit` | Paginação no final |
| 8º | `$count` | Contar resultado final |

---

## Comandos Úteis de Banco

| Comando | Sintaxe | Descrição |
|---------|---------|-----------|
| Mostrar bancos | `show dbs` | Lista todos os bancos |
| Usar banco | `use nomeBanco` | Seleciona/cria banco |
| Mostrar coleções | `show collections` | Lista coleções do banco atual |
| Criar coleção | `db.createCollection("nome")` | Cria nova coleção |
| Excluir banco | `db.dropDatabase()` | Remove banco atual |
| Criar índice | `db.collection.createIndex({campo: 1})` | Cria índice (1=asc, -1=desc) |
| Listar índices | `db.collection.getIndexes()` | Mostra índices da coleção |
| Estatísticas | `db.collection.stats()` | Info sobre a coleção |

---

## Exemplos Rápidos por Caso de Uso

### Paginação
```javascript
db.collection.aggregate([
    { $sort: { campo: 1 } },
    { $skip: 20 },
    { $limit: 10 }
])
```

### Top 10
```javascript
db.collection.aggregate([
    { $sort: { campo: -1 } },
    { $limit: 10 }
])
```

### Contar por Categoria
```javascript
db.collection.aggregate([
    { $group: { _id: "$categoria", total: { $sum: 1 } } }
])
```

### Buscar e Juntar Dados
```javascript
db.collection.aggregate([
    { $match: { status: "ativo" } },
    {
        $lookup: {
            from: "outra_colecao",
            localField: "campo_id",
            foreignField: "_id",
            as: "dados_relacionados"
        }
    }
])
```

### Calcular Média por Grupo
```javascript
db.collection.aggregate([
    {
        $group: {
            _id: "$categoria",
            media: { $avg: "$valor" }
        }
    }
])
```