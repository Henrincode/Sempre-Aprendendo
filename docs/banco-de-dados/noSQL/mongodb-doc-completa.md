# Documentação Completa MongoDB - Operações e Aggregation Framework

## Introdução ao MongoDB

MongoDB é um banco de dados NoSQL orientado a documentos que armazena dados em formato BSON (Binary JSON). Ele oferece flexibilidade, escalabilidade e alto desempenho para aplicações modernas.

## Operações CRUD

### CREATE - Operações de Inserção

As operações de criação são usadas para inserir novos documentos em uma coleção.

**Inserir um documento:**

```javascript
db.collection.insertOne({
    campo1: "valor1",
    campo2: "valor2"
})
```

**Inserir múltiplos documentos:**

```javascript
db.collection.insertMany([
    { campo1: "valor1", campo2: "valor2" },
    { campo1: "valor3", campo2: "valor4" }
])
```

### READ - Operações de Consulta

As operações de leitura recuperam documentos de uma coleção.

**Buscar todos os documentos:**

```javascript
db.collection.find()
```

**Buscar com critérios específicos:**

```javascript
db.collection.find({ 
    idade: 25 
})
```

**Buscar com operadores de comparação:**

```javascript
db.collection.find({ 
    idade: { $gte: 18, $lte: 65 } 
})
```

**Buscar com projeção (campos específicos):**

```javascript
db.collection.find(
    { idade: 25 },
    { nome: 1, email: 1, _id: 0 }
)
```

**Operadores de consulta comuns:**
- `$eq`: igual
- `$ne`: não igual
- `$gt`: maior que
- `$gte`: maior ou igual
- `$lt`: menor que
- `$lte`: menor ou igual
- `$in`: está no array
- `$nin`: não está no array

### UPDATE - Operações de Atualização

As operações de atualização modificam documentos existentes.

**Atualizar um documento:**

```javascript
db.collection.updateOne(
    { _id: 1 },
    { $set: { idade: 26 } }
)
```

**Atualizar múltiplos documentos:**

```javascript
db.collection.updateMany(
    { status: "inativo" },
    { $set: { status: "ativo" } }
)
```

**Operador $push - Adicionar elemento ao array:**

```javascript
db.collection.updateOne(
    { _id: 1 },
    { $push: { tags: "novo_tag" } }
)
```

**$push com $each - Adicionar múltiplos elementos:**

```javascript
db.collection.updateOne(
    { _id: 1 },
    { 
        $push: { 
            tags: { 
                $each: ["tag1", "tag2", "tag3"] 
            } 
        } 
    }
)
```

**Operador $pull - Remover elementos do array:**

```javascript
db.collection.updateOne(
    { _id: 1 },
    { $pull: { tags: "tag_indesejada" } }
)
```

**Operador $set - Atualizar/criar campo:**

```javascript
db.collection.updateOne(
    { _id: 1 },
    { $set: { nome: "Novo Nome", email: "[email protected]" } }
)
```

### DELETE - Operações de Exclusão

As operações de exclusão removem documentos de uma coleção.

**Excluir um documento:**

```javascript
db.collection.deleteOne({ _id: 1 })
```

**Excluir múltiplos documentos:**

```javascript
db.collection.deleteMany({ status: "inativo" })
```

## Aggregation Framework

O Aggregation Framework do MongoDB é uma poderosa ferramenta para processar e transformar dados através de um pipeline de estágios.

### Estrutura Básica do Pipeline

```javascript
db.collection.aggregate([
    { $stage1: {...} },
    { $stage2: {...} },
    { $stage3: {...} }
])
```

Cada estágio transforma os documentos e passa o resultado para o próximo estágio.

### $match - Filtrar Documentos

O operador `$match` filtra documentos baseado em critérios específicos. Geralmente é o primeiro estágio para melhorar a performance.

**Sintaxe:**

```javascript
{ $match: { campo: valor } }
```

**Exemplo:**

```javascript
db.pedidos.aggregate([
    { $match: { status: "concluído" } }
])
```

**Com operadores lógicos:**

```javascript
db.usuarios.aggregate([
    { 
        $match: { 
            $or: [
                { idade: { $gt: 25 } },
                { cidade: "São Paulo" }
            ]
        } 
    }
])
```

### $project - Selecionar e Transformar Campos

O operador `$project` permite incluir, excluir ou criar novos campos calculados.

**Sintaxe:**

```javascript
{ $project: { campo1: 1, campo2: 1, _id: 0 } }
```

**Exemplo básico:**

```javascript
db.usuarios.aggregate([
    { 
        $project: { 
            nome: 1, 
            email: 1, 
            _id: 0 
        } 
    }
])
```

**Criar campos calculados:**

```javascript
db.pedidos.aggregate([
    { 
        $project: { 
            produto: 1,
            totalComImposto: { 
                $multiply: ["$preco", 1.15] 
            }
        } 
    }
])
```

### $group - Agrupar e Agregar Dados

O operador `$group` agrupa documentos por um campo específico e aplica operadores de acumulação.

**Sintaxe:**

```javascript
{
    $group: {
        _id: <expressão_agrupamento>,
        campo1: { <operador_acumulador>: <expressão> }
    }
}
```

**Operadores de acumulação comuns:**
- `$sum`: soma valores
- `$avg`: calcula média
- `$min`: valor mínimo
- `$max`: valor máximo
- `$push`: cria array com valores
- `$count`: conta documentos

**Exemplo - Contar documentos por categoria:**

```javascript
db.produtos.aggregate([
    { 
        $group: { 
            _id: "$categoria",
            total: { $sum: 1 }
        } 
    }
])
```

**Exemplo - Calcular total de vendas por produto:**

```javascript
db.vendas.aggregate([
    { 
        $group: { 
            _id: "$produto",
            totalVendas: { $sum: "$quantidade" },
            receitaTotal: { $sum: "$valor" },
            mediaPreco: { $avg: "$preco" }
        } 
    }
])
```

### $sort - Ordenar Documentos

O operador `$sort` ordena documentos em ordem ascendente (1) ou descendente (-1).

**Sintaxe:**

```javascript
{ $sort: { campo1: 1, campo2: -1 } }
```

**Exemplo:**

```javascript
db.usuarios.aggregate([
    { $sort: { idade: -1, nome: 1 } }
])
```

### $limit - Limitar Número de Documentos

O operador `$limit` retorna apenas um número específico de documentos.

**Sintaxe:**

```javascript
{ $limit: número }
```

**Exemplo:**

```javascript
db.produtos.aggregate([
    { $sort: { preco: -1 } },
    { $limit: 10 }
])
```

### $skip - Pular Documentos

O operador `$skip` pula um número específico de documentos.

**Sintaxe:**

```javascript
{ $skip: número }
```

**Exemplo (paginação):**

```javascript
db.produtos.aggregate([
    { $sort: { nome: 1 } },
    { $skip: 20 },
    { $limit: 10 }
])
```

**Importante:** A ordem `$skip` antes de `$limit` é crucial para paginação correta.

### $unwind - Desconstruir Arrays

O operador `$unwind` desconstrói um campo array, criando um documento para cada elemento do array.

**Sintaxe:**

```javascript
{ $unwind: "$campoArray" }
```

**Exemplo:**

```javascript
db.pedidos.aggregate([
    { $unwind: "$itens" }
])
```

**Antes do $unwind:**
```javascript
{
    "_id": 1,
    "cliente": "João",
    "itens": ["produto1", "produto2", "produto3"]
}
```

**Depois do $unwind:**
```javascript
{ "_id": 1, "cliente": "João", "itens": "produto1" }
{ "_id": 1, "cliente": "João", "itens": "produto2" }
{ "_id": 1, "cliente": "João", "itens": "produto3" }
```

**Com opções avançadas:**

```javascript
db.pedidos.aggregate([
    { 
        $unwind: {
            path: "$itens",
            includeArrayIndex: "indice",
            preserveNullAndEmptyArrays: true
        }
    }
])
```

### $lookup - Join entre Coleções

O operador `$lookup` realiza um left outer join entre coleções, similar ao JOIN do SQL.

**Sintaxe básica:**

```javascript
{
    $lookup: {
        from: "coleção_estrangeira",
        localField: "campo_local",
        foreignField: "campo_estrangeiro",
        as: "nome_array_resultado"
    }
}
```

**Exemplo - Join simples:**

```javascript
db.pedidos.aggregate([
    {
        $lookup: {
            from: "clientes",
            localField: "cliente_id",
            foreignField: "_id",
            as: "info_cliente"
        }
    }
])
```

**Exemplo - Múltiplos lookups:**

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

**$lookup com pipeline (avançado):**

```javascript
db.pedidos.aggregate([
    {
        $lookup: {
            from: "produtos",
            let: { produto_id: "$produto_id" },
            pipeline: [
                { 
                    $match: { 
                        $expr: { $eq: ["$_id", "$$produto_id"] } 
                    } 
                },
                { $project: { nome: 1, preco: 1 } }
            ],
            as: "info_produto"
        }
    }
])
```

### $addFields - Adicionar Novos Campos

O operador `$addFields` adiciona novos campos aos documentos sem remover campos existentes.

**Sintaxe:**

```javascript
{
    $addFields: {
        novoCampo1: <expressão>,
        novoCampo2: <expressão>
    }
}
```

**Exemplo:**

```javascript
db.vendas.aggregate([
    {
        $addFields: {
            totalComImposto: { $multiply: ["$total", 1.15] },
            dataFormatada: { $dateToString: { format: "%d/%m/%Y", date: "$data" } }
        }
    }
])
```

### $count - Contar Documentos

O operador `$count` retorna o número total de documentos no estágio.

**Sintaxe:**

```javascript
{ $count: "nome_campo_resultado" }
```

**Exemplo:**

```javascript
db.pedidos.aggregate([
    { $match: { status: "concluído" } },
    { $count: "totalConcluidos" }
])
```

## Pipeline de Agregação Completo - Exemplo Prático

Aqui está um exemplo completo que combina vários estágios:

```javascript
db.vendas.aggregate([
    // 1. Filtrar vendas do último ano
    { 
        $match: { 
            data: { 
                $gte: ISODate("2024-01-01"),
                $lte: ISODate("2024-12-31")
            }
        } 
    },
    
    // 2. Join com coleção de produtos
    {
        $lookup: {
            from: "produtos",
            localField: "produto_id",
            foreignField: "_id",
            as: "info_produto"
        }
    },
    
    // 3. Desconstruir array de produtos
    { $unwind: "$info_produto" },
    
    // 4. Adicionar campos calculados
    {
        $addFields: {
            valorTotal: { $multiply: ["$quantidade", "$preco"] }
        }
    },
    
    // 5. Agrupar por categoria
    {
        $group: {
            _id: "$info_produto.categoria",
            totalVendas: { $sum: "$quantidade" },
            receitaTotal: { $sum: "$valorTotal" },
            mediaPreco: { $avg: "$preco" }
        }
    },
    
    // 6. Projetar campos finais
    {
        $project: {
            _id: 0,
            categoria: "$_id",
            totalVendas: 1,
            receitaTotal: { $round: ["$receitaTotal", 2] },
            mediaPreco: { $round: ["$mediaPreco", 2] }
        }
    },
    
    // 7. Ordenar por receita
    { $sort: { receitaTotal: -1 } },
    
    // 8. Limitar aos top 10
    { $limit: 10 }
])
```

## Otimização de Performance

**Boas práticas para agregação:**

1. **Use $match no início:** Filtre dados o mais cedo possível para reduzir o volume processado
2. **Crie índices:** Campos usados em $match e $sort devem ter índices
3. **Use $project estrategicamente:** Remova campos desnecessários para reduzir o uso de memória
4. **allowDiskUse:** Para agregações grandes que excedem 100MB de RAM

```javascript
db.collection.aggregate(
    pipeline,
    { allowDiskUse: true }
)
```

5. **Ordem dos estágios importa:** $sort seguido de $limit é otimizado automaticamente

## Referência Rápida dos Principais Estágios

| Estágio | Função | Uso Comum |
|---------|--------|-----------|
| $match | Filtrar documentos | Primeiro estágio para reduzir dados |
| $project | Selecionar/transformar campos | Remover campos desnecessários |
| $group | Agrupar e agregar | Calcular estatísticas por grupo |
| $sort | Ordenar documentos | Ordenação de resultados |
| $limit | Limitar quantidade | Paginação e top N |
| $skip | Pular documentos | Paginação |
| $unwind | Desconstruir arrays | Processar elementos individuais |
| $lookup | Join entre coleções | Combinar dados relacionados |
| $addFields | Adicionar campos | Campos calculados |
| $count | Contar documentos | Total de registros |

Esta documentação cobre os conceitos fundamentais e operadores mais importantes do MongoDB, incluindo operações CRUD completas e o Aggregation Framework com todos os principais estágios como $match, $project, $group, $sort, $limit, $skip, $unwind, $lookup, $addFields e $count, fornecendo uma base sólida para trabalhar com MongoDB de forma eficiente.