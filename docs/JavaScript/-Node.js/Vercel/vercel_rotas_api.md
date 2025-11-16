# API — Vercel (Node.js)

Documento para o repositório **sempre-aprendendo** — caminho sugerido: `docs/javascript/node/vercel/API/README.md`.

Explica como trabalhar com rotas (endpoints) na Vercel usando o padrão recomendado pela plataforma e pela comunidade. Conteúdo em português, focado em Node.js / Vercel Serverless (API Routes) e com exemplos de frontend (fetch).

---

## Índice

1. Visão geral
2. Estrutura de arquivos e onde colocar rotas
3. Endpoints básicos: GET, POST, PUT, DELETE
4. Rotas dinâmicas: `[param].js` e `[...,slug].js`
5. Exemplo completo de backend (vários arquivos)
6. Exemplo único com catch-all (`[...slug].js`)
7. App Router (Next.js) — exemplo recomendado
8. Chamadas do frontend (fetch) — exemplos práticos
9. Boas práticas e organização (separar `core` / services)
10. Avisos importantes sobre Vercel
11. Testando localmente e deploy

---

## 1. Visão geral

A Vercel transforma arquivos colocados em `/api` (na raiz do projeto) em **funções serverless**. Cada arquivo vira uma função isolada que é executada sob demanda quando a rota correspondente é chamada.

- **Não existe** um servidor Node rodando 24/7 (não há `app.listen()` na produção da Vercel).
- **Cada request** carrega e executa o handler do arquivo.
- Rotas dinâmicas são criadas pelo formato de arquivo (`[id].js`, `[...slug].js`).

> Observação: se você usar Next.js com o novo App Router, a pasta `app/api` com `route.js` também é suportada e é a abordagem recomendada em projetos Next modernos.

---

## 2. Estrutura de arquivos

Exemplo mínimo (padrão Vercel / Next.js API Routes):

```
/
├─ api/
│  ├─ cardapio/
│  │  ├─ index.js          // GET /api/cardapio  (listar)  | POST /api/cardapio (criar)
│  │  ├─ [id].js           // GET/PUT/DELETE /api/cardapio/:id
│  │  └─ categoria/
│  │     └─ [cat].js       // GET /api/cardapio/categoria/:cat
├─ core/
│  └─ cardapioService.js   // lógica de negócio (reutilizável)
├─ package.json
└─ vercel.json (opcional)
```

- **Coloque `node_modules` na raiz** do projeto e declare dependências no `package.json` da raiz.
- Use `/api` somente para os handlers que viram rotas públicas.
- A lógica reutilizável deve estar em pastas como `/core`, `/lib` ou `/services`.

---

## 3. Endpoints básicos (exemplo `/api/cardapio/index.js`)

```js
// api/cardapio/index.js
import { listarCardapio, criarItem } from "../../core/cardapioService.js";

export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const itens = listarCardapio();
    return res.status(200).json(itens);
  }

  if (method === "POST") {
    const novo = req.body; // lembre-se de enviar Content-Type: application/json no frontend
    const criado = criarItem(novo);
    return res.status(201).json(criado);
  }

  return res.status(405).json({ error: "Método não permitido" });
}
```

- `req.method` distingue entre GET/POST/PUT/DELETE.
- Use `res.status(...).json(...)` para respostas JSON.

---

## 4. Rotas dinâmicas: `[param].js` e `[...slug].js`

### `[id].js` — rota dinâmica simples

```js
// api/cardapio/[id].js
import { pegarItem, atualizarItem, deletarItem } from "../../core/cardapioService.js";

export default function handler(req, res) {
  const { id } = req.query; // em Vercel/Next, rota dinâmica aparece em req.query
  const method = req.method;

  if (method === "GET") return res.status(200).json(pegarItem(id));
  if (method === "PUT") return res.status(200).json(atualizarItem(id, req.body));
  if (method === "DELETE") return res.status(204).end();

  return res.status(405).json({ error: "Método não permitido" });
}
```

### `[...slug].js` — catch-all (você pode tratar várias rotas em um só arquivo)

```js
// api/cardapio/[...slug].js
import { listarCardapio, listarPorCategoria, pegarItem, criarItem } from "../../core/cardapioService.js";

export default function handler(req, res) {
  const { slug } = req.query; // slug é array ou undefined
  const method = req.method;

  // GET /api/cardapio
  if (!slug || slug.length === 0) {
    if (method === "GET") return res.status(200).json(listarCardapio());
    if (method === "POST") return res.status(201).json(criarItem(req.body));
  }

  // /api/cardapio/categoria/:cat
  if (slug[0] === "categoria" && slug[1]) {
    const cat = slug[1];
    return res.status(200).json(listarPorCategoria(cat));
  }

  // /api/cardapio/:id
  if (slug.length === 1) {
    const id = slug[0];
    if (method === "GET") return res.status(200).json(pegarItem(id));
    if (method === "PUT") return res.status(200).json({});
    if (method === "DELETE") return res.status(204).end();
  }

  return res.status(404).json({ error: "Rota não encontrada" });
}
```

> Observação: `slug` é um array. Exemplos:
>
> - `/api/cardapio` → `slug` undefined ou `[]`
> - `/api/cardapio/5` → `slug = ["5"]`
> - `/api/cardapio/categoria/bebidas` → `slug = ["categoria","bebidas"]`

---

## 5. Exemplo completo de backend (vários arquivos)

**Estrutura**:

```
api/cardapio/index.js
api/cardapio/[id].js
api/cardapio/categoria/[cat].js
core/cardapioService.js
```

**core/cardapioService.js** (exemplo simples em memória):

```js
let db = [
  { id: "1", nome: "Coxinha", categoria: "salgados", preco: 5 },
  { id: "2", nome: "Suco", categoria: "bebidas", preco: 4 },
];

export function listarCardapio() { return db; }
export function pegarItem(id) { return db.find(i => i.id === id) || null; }
export function listarPorCategoria(cat) { return db.filter(i => i.categoria === cat); }
export function criarItem(item) { const novo = { id: String(Date.now()), ...item }; db.push(novo); return novo; }
export function atualizarItem(id, dados) { db = db.map(i => i.id === id ? { ...i, ...dados } : i); return pegarItem(id); }
export function deletarItem(id) { db = db.filter(i => i.id !== id); }
```

---

## 6. Exemplo único com catch-all (`[...slug].js`)

Já mostramos o exemplo no item 4 — ele é útil quando você prefere centralizar o roteamento em um único arquivo (estilo Express), porém:

- **Prós:** menos arquivos, controla várias rotas num lugar só.
- **Contras:** arquivo tende a crescer e pode ficar confuso; perde a vantagem do roteamento baseado em arquivos.

Use quando estiver migrando do Express e quiser uma transição suave.

---

## 7. App Router (Next.js) — exemplo recomendado pela comunidade

Se estiver usando Next.js com **App Router**, você pode usar `app/api/.../route.js` e exportar funções `GET`, `POST`, `PUT`, `DELETE` diretamente.

```js
// app/api/cardapio/route.js
export async function GET(req) {
  // listar
  return new Response(JSON.stringify([{ id: 1, nome: 'Ex' }]), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  return new Response(JSON.stringify({ ok: true, body }), { status: 201 });
}
```

Para rotas dinâmicas com App Router:

```
app/api/cardapio/[id]/route.js  // acessível em /api/cardapio/:id
```

> A App Router é a opção moderna e muitas vezes recomendada para novos projetos Next.js. Em termoss de Vercel, tanto `api/` (funções serverless tradicionais) quanto `app/api` (App Router) são suportados.

---

## 8. Chamadas do frontend (fetch)

### GET geral

```js
const res = await fetch('/api/cardapio');
const itens = await res.json();
```

### GET por id

```js
const res = await fetch('/api/cardapio/5');
const item = await res.json();
```

### GET por categoria

```js
const res = await fetch('/api/cardapio/categoria/bebidas');
const itens = await res.json();
```

### POST

```js
await fetch('/api/cardapio', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: 'Coxinha', preco: 5, categoria: 'salgados' })
});
```

### PUT

```js
await fetch('/api/cardapio/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ preco: 6 })
});
```

### DELETE

```js
await fetch('/api/cardapio/123', { method: 'DELETE' });
```

---

## 9. Boas práticas

- **Separe lógica**: handlers (`/api`) só roteiam e convocam services em `/core` ou `/lib`.
- **Seja stateless**: evite armazenar estado na memória da função para dados persistentes — use DB (Supabase, PostgreSQL, MongoDB, etc.).
- **Tempo de execução curto**: funções serverless têm limites de tempo; evite operações longas.
- **Evite dependências pesadas** que aumentam o cold-start.
- **Use variáveis de ambiente** no painel da Vercel (não commitar `.env` no repositório).
- **Valide entrada** (schema, tipos) antes de usar `req.body`.
- **Retorne status corretos**: 200, 201, 204, 400, 404, 500.
- **API versioning**: se necessário, use `/api/v1/...`.

---

## 10. Avisos importantes

- **Não** espere que Vercel rode `npm start` ou `app.listen()` no deploy. Essas rotas são serverless.
- **node_modules** deve ficar na raiz do projeto.
- **WebSockets** e conexões persistentes não são ideais em serverless — use serviços especializados (Pusher, Supabase Realtime, websockets em servidores que suportam long-living connections).
- **Sessões baseadas em memória** não funcionam como num servidor persistente — prefira cookies JWT ou armazenamento externo (Redis).

---

## 11. Testando localmente e deploy

- Para Next.js: `npm run dev` (rodar localmente)
- Para simular a Vercel: `vercel dev` (CLI da Vercel) — reproduz behavior das serverless functions.
- Crie `vercel.json` se precisar de configurações customizadas (rewrites, headers, builds).
- Deploy simples: `vercel` (com CLI) ou integrando GitHub/GitLab ao Vercel.

---

## Exemplo de `package.json` mínimo

```json
{
  "name": "sempre-aprendendo",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {}
}
```

---

## Conclusão

Este README mostra o padrão de roteamento recomendado pela Vercel e pela comunidade: **usar API Routes baseadas em arquivos**, preferindo o **App Router** em projetos Next.js modernos, organizando a lógica em pastas separadas e usando `fetch` no frontend para consumir as rotas.

Se quiser, eu posso:

- Gerar os arquivos de exemplo prontos para copiar e colar (`/api/cardapio/index.js`, `/api/cardapio/[id].js`, `/core/cardapioService.js`).
- Converter seu código Express atual para rotas serverless ou App Router.

Só me dizer qual opção prefere que eu gere os arquivos agora.

