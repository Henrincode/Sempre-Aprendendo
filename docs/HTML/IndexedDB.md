# 📚 Documentação: IndexedDB — Guia completo

**O que você vai aprender:**
- O que é IndexedDB e como ele difere de bancos SQL
- Como criar/abrir um banco e *object stores* ("tabelas")
- Operações CRUD: criar, ler, atualizar, apagar
- Uso de índices e cursores para consultas
- Como fazer migração de versão (upgrades)
- Exemplos práticos (com wrapper em Promise + UI mínimo)
- Estrutura de dados e como os registros ficam armazenados
- Boas práticas e limitações

---

## 🔎 O que é IndexedDB?
IndexedDB é uma API do navegador para armazenamento de dados estruturados no cliente. É um banco **NoSQL** baseado em **object stores** (lojas de objetos) — pense nelas como coleções de objetos/registro, não como tabelas relacionais.

**Principais características:**
- Armazenamento de objetos (JSON, `Blob`, `File`, etc.)
- Suporta transações
- Armazenamento grande (muito maior que localStorage)
- Operação assíncrona (baseada em eventos / callbacks)

**IndexedDB ≠ SQL**: não há `JOIN`, `SELECT` ou `WHERE` em SQL tradicional. Em vez disso usa-se índices e cursores para buscar dados.

---

## ✨ Terminologia rápida
- **Database** — o próprio banco (ex.: `ContatosDB`).
- **Version** — número da versão do schema. Quando você incrementa a versão, `onupgradeneeded` será chamado.
- **Object store** — equivalente conceitual a uma "tabela" (ex.: `contatos`).
- **Key** — chave primária de um objeto (p.ex. `id`). Pode ser `autoIncrement`.
- **Index** — um índice secundário para buscas por outro campo (ex.: `email`).
- **Transaction** — operação atômica com modo `readonly` ou `readwrite`.

---

## ⚙️ Abrindo/criando um banco e object store
Exemplo: criar um banco `ContatosDB` com um object store `contatos`.

```js
const request = indexedDB.open('ContatosDB', 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Cria um object store 'contatos' com keyPath 'id' e autoIncrement
  const store = db.createObjectStore('contatos', { keyPath: 'id', autoIncrement: true });

  // Cria índices (não são únicos por padrão)
  store.createIndex('by_name', 'name', { unique: false });
  store.createIndex('by_email', 'email', { unique: true });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  console.log('Banco aberto com sucesso', db);
};

request.onerror = (event) => {
  console.error('Erro ao abrir o DB', event.target.error);
};
```

**Observações:**
- `onupgradeneeded` é chamado apenas quando a versão pedida (`1` no exemplo) é maior que a versão existente ou o banco não existe.
- Dentro de `onupgradeneeded` você pode criar object stores e índices.

---

## 🧩 Wrapper Promisificado (recomendado)
A API nativa é baseada em eventos; para trabalhar melhor com `async/await`, é comum usar um wrapper. Abaixo um helper simples:

```js
function openDB(name, version = 1, upgradeCallback) {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(name, version);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = (event) => {
      if (upgradeCallback) upgradeCallback(event.target.result, event.oldVersion, event.newVersion);
    };
  });
}

function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function transaction(db, storeName, mode = 'readonly') {
  return db.transaction(storeName, mode).objectStore(storeName);
}
```

---

## ✅ Operações CRUD (exemplos completos)
Supondo banco `ContatosDB` e store `contatos`.

### Inserir (create)
```js
async function addContato(db, contato) {
  const tx = db.transaction('contatos', 'readwrite');
  const store = tx.objectStore('contatos');
  const req = store.add(contato); // retorna key gerada
  return promisifyRequest(req);
}

// Uso:
// await addContato(db, { name: 'João', email: 'joao@ex.com', phone: '1234' });
```

### Ler por chave (read)
```js
async function getContato(db, id) {
  const store = transaction(db, 'contatos', 'readonly');
  const req = store.get(id);
  return promisifyRequest(req);
}
```

### Ler todos (read all)
```js
async function getAllContatos(db) {
  const store = transaction(db, 'contatos', 'readonly');
  const req = store.getAll();
  return promisifyRequest(req);
}
```

### Atualizar (update)
Em IndexedDB não há `UPDATE` separado — usa-se `put`, que insere ou atualiza com base na key.

```js
async function updateContato(db, contato) {
  const tx = db.transaction('contatos', 'readwrite');
  const store = tx.objectStore('contatos');
  const req = store.put(contato); // se contato.id existe, atualiza
  return promisifyRequest(req);
}

// Exemplo: const c = await getContato(db, 1); c.phone = '9999'; await updateContato(db, c);
```

### Deletar (delete)
```js
async function deleteContato(db, id) {
  const tx = db.transaction('contatos', 'readwrite');
  const store = tx.objectStore('contatos');
  const req = store.delete(id);
  return promisifyRequest(req);
}
```

### Limpar toda a store
```js
async function clearContatos(db) {
  const tx = db.transaction('contatos', 'readwrite');
  const store = tx.objectStore('contatos');
  const req = store.clear();
  return promisifyRequest(req);
}
```

---

## 🔎 Consultas com índices e cursores
Índices são úteis para buscar por campos que não são chave primária.

### Buscar por índice (ex.: email)
```js
async function getByEmail(db, email) {
  const tx = db.transaction('contatos', 'readonly');
  const store = tx.objectStore('contatos');
  const index = store.index('by_email');
  const req = index.get(email);
  return promisifyRequest(req);
}
```

### Iterar com cursor (ex.: listar por letra inicial)
```js
async function listByInitial(db, initial) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('contatos', 'readonly');
    const store = tx.objectStore('contatos');
    const index = store.index('by_name');
    const range = IDBKeyRange.bound(initial, initial + "\uffff");
    const req = index.openCursor(range);
    const results = [];

    req.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        results.push(cursor.value);
        cursor.continue();
      } else {
        resolve(results);
      }
    };

    req.onerror = () => reject(req.error);
  });
}
```

---

## 🛠️ Migração de versão (onupgradeneeded)
Quando você precisa mudar a estrutura (ex.: criar nova store ou índice), aumente a versão do DB.

```js
const req = indexedDB.open('ContatosDB', 2); // versão 2
req.onupgradeneeded = (event) => {
  const db = event.target.result;
  const oldVersion = event.oldVersion;

  if (oldVersion < 1) {
    // criar stores iniciais
  }

  if (oldVersion < 2) {
    // adicionar um novo índice ou store na v2
    const store = event.currentTarget.transaction.objectStore('contatos');
    store.createIndex('by_phone', 'phone', { unique: false });
  }
};
```

**Dica:** use `if (oldVersion < X)` para executar etapas incrementais de migração.

---

## 📁 Estrutura do banco e exemplo de dados
Suponha que temos: banco `ContatosDB`, store `contatos`, `keyPath` = `id`, índices `by_name`, `by_email`.

### Visualização conceitual (estrutura)
```text
ContatosDB (versão 1)
 └─ objectStore: contatos (keyPath: 'id', autoIncrement: true)
     ├─ index: by_name -> campo 'name'
     └─ index: by_email -> campo 'email' (unique)
```

### Exemplo de registros (JSON armazenado)
```json
{
  "id": 1,
  "name": "Ana Silva",
  "email": "ana@example.com",
  "phone": "(19) 99999-1111",
  "tags": ["cliente", "vip"]
}

{
  "id": 2,
  "name": "Pedro Souza",
  "email": "pedro@example.com",
  "phone": "(19) 98888-2222",
  "notes": "Fez pedido em 2025-10-01"
}
```

IndexedDB armazena objetos exatamente assim (serializa-os internamente). Se você armazenar um `Blob` ou `File`, o próprio objeto binário é guardado.

---

## 🧾 Exemplo completo — UI simples (HTML + JS)
Este exemplo faz: abrir DB, inserir um contato, listar todos e deletar.

```html
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Demo IndexedDB</title>
<style>
  body{font-family:Arial;margin:20px}
  input,button{margin:5px}
  li{margin:8px 0}
</style>
</head>
<body>
  <h2>Demo IndexedDB - Contatos</h2>
  <input id="name" placeholder="Nome"><br>
  <input id="email" placeholder="Email"><br>
  <button id="addBtn">Adicionar</button>
  <button id="clearBtn">Limpar todos</button>

  <h3>Lista</h3>
  <ul id="list"></ul>

<script>
(async () => {
  // wrappers do documento
  function promisifyRequest(request){
    return new Promise((res, rej) => { request.onsuccess = () => res(request.result); request.onerror = () => rej(request.error); });
  }

  const db = await new Promise((res, rej) => {
    const r = indexedDB.open('ContatosDB', 1);
    r.onupgradeneeded = (e) => {
      const db = e.target.result;
      const st = db.createObjectStore('contatos', { keyPath: 'id', autoIncrement: true });
      st.createIndex('by_name', 'name', { unique: false });
      st.createIndex('by_email', 'email', { unique: true });
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });

  async function addContato(obj){
    const tx = db.transaction('contatos','readwrite');
    const st = tx.objectStore('contatos');
    return promisifyRequest(st.add(obj));
  }

  async function getAll(){
    const st = db.transaction('contatos','readonly').objectStore('contatos');
    return promisifyRequest(st.getAll());
  }

  async function del(id){
    const tx = db.transaction('contatos','readwrite');
    const st = tx.objectStore('contatos');
    return promisifyRequest(st.delete(id));
  }

  // UI
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const addBtn = document.getElementById('addBtn');
  const clearBtn = document.getElementById('clearBtn');
  const listEl = document.getElementById('list');

  async function render(){
    listEl.innerHTML = '';
    const items = await getAll();
    items.forEach(it => {
      const li = document.createElement('li');
      li.textContent = `${it.id} — ${it.name} (${it.email}) `;
      const b = document.createElement('button');
      b.textContent = 'Apagar';
      b.onclick = async () => { await del(it.id); render(); };
      li.appendChild(b);
      listEl.appendChild(li);
    });
  }

  addBtn.onclick = async () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if(!name || !email){ alert('Preencha nome e email'); return; }
    try {
      await addContato({ name, email });
      nameInput.value = '';
      emailInput.value = '';
      await render();
    } catch (err) {
      alert('Erro ao adicionar: ' + err.message);
    }
  };

  clearBtn.onclick = async () => {
    if(!confirm('Deletar todos os contatos?')) return;
    const tx = db.transaction('contatos','readwrite');
    tx.objectStore('contatos').clear();
    tx.oncomplete = render;
  };

  render();
})();
</script>
</body>
</html>
```

---

## ✅ É SQL ou NoSQL?
IndexedDB é **NoSQL**. Ele armazena objetos em *object stores* (key-value) e não usa SQL para consultas. Em vez disso, você usa chaves, índices e cursores.

---

## ⚠️ Limitações e pontos importantes
- **Quota e limites** variam por navegador; grandes quantidades podem pedir permissão ao usuário.
- **Sincronização entre abas:** cada aba tem acesso ao mesmo DB, mas transações são independentes.
- **Evite blocos de UI:** operações podem ser pesadas; use `requestIdleCallback` ou Web Workers para tarefas massivas.
- **Compatibilidade:** suportado pela maioria dos navegadores modernos (Chrome, Firefox, Edge, Safari 10+), mas sempre verifique versões específicas.
- **Evite armazenar segredos sensíveis** (como senhas em texto); use criptografia quando necessário.

---

## 📌 Boas práticas
- Use índices para consultas frequentes.
- Normalize menos: a ideia é armazenar objetos completos (noSQL).
- Trate erros de transações (tx.onerror, request.onerror).
- Planeje migrações de versão com cuidado.

---

## 🔗 Bibliotecas úteis (opcional)
Se preferir não escrever seu próprio wrapper, use bibliotecas consolidadas como **idb** (do Jake Archibald) — simplifica muito o uso com Promises e `async/await`.