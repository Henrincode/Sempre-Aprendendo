# 📚 Documentação: Event Listeners (Ouvintes de Evento) — Guia completo

**O que você vai aprender**
- Como adicionar, remover e editar listeners
- Diferença entre `addEventListener`, propriedades (`onclick`) e handlers inline
- Fases de eventos: *capturing*, *target*, *bubbling*
- Uso avançado: `once`, `passive`, `capture` e `removeEventListener`
- Propriedades importantes do objeto `Event` (`e`) e `EventTarget` (`target`, `currentTarget`)
- Como capturar eventos de teclado, input de arquivo (imagem), formulários, cliques dinâmicos (delegação)
- Tabelas com os eventos/ouvintes mais comuns e quais são obsoletos

---

## 1. Como adicionar um listener
### `addEventListener` (recomendado)
```js
const btn = document.querySelector('#meuBtn');
function onClick(e) {
  console.log('clicou', e);
}
btn.addEventListener('click', onClick);
```

### Propriedade de evento (`onclick`)
```js
btn.onclick = (e) => { console.log('clicou via onclick'); };
```
- `onclick` aceita apenas uma função por vez (atribuição sobrescreve).

### Inline no HTML (não recomendado)
```html
<button onclick="alert('oi')">Clique</button>
```
- Mistura marcação e lógica; ruim para manutenção.

---

## 2. Remover / editar um listener
Para remover um listener você precisa da **mesma referência da função** usada em `addEventListener`:

```js
btn.removeEventListener('click', onClick);
```
Se você registrou com função anônima, não conseguirá remover:
```js
btn.addEventListener('click', () => console.log('anônimo'));
// Não dá para remover porque não tem referência
```

**Editar** um listener normalmente significa remover a implementação antiga e adicionar uma nova:
```js
btn.removeEventListener('click', onClick);
function novoOnClick(e) { /* nova lógica */ }
btn.addEventListener('click', novoOnClick);
```

---

## 3. Opções avançadas ao adicionar listener
```js
el.addEventListener('click', handler, { capture: false, once: true, passive: true });
```
- `capture` (boolean): true faz o listener executar na fase de *capturing* (antes do target). Padrão: `false` (bubbling).
- `once` (boolean): se `true`, o listener é removido automaticamente após a primeira execução.
- `passive` (boolean): se `true`, indica ao browser que o listener **não** chamará `preventDefault()` — melhora performance em eventos de scroll/touch.

**Atenção ao `removeEventListener`:** se você usou `capture: true` para adicionar, passe o mesmo valor ao remover.

---

## 4. Fases do evento
Quando um evento é disparado existem 3 fases:
1. **Capturing phase** — do documento para o target
2. **At target** — evento no próprio elemento alvo
3. **Bubbling phase** — sobe do target até o document

Você pode inspecionar a fase com `e.eventPhase` (1 = Capturing, 2 = At target, 3 = Bubbling).

---

## 5. O objeto `Event` (o `e`) — o que ele traz e como usar
`e` é o objeto que contém informações do evento. Propriedades e métodos importantes:
- `e.type` — tipo do evento (e.g. `'click'`)
- `e.target` — elemento que **originou** o evento (pode ser filho)
- `e.currentTarget` — elemento ao qual o listener está ligado
- `e.eventPhase` — número da fase (1,2,3)
- `e.bubbles` — booleano se o evento borbulha
- `e.cancelable` — se `preventDefault()` tem efeito
- `e.defaultPrevented` — indica se `preventDefault()` já foi chamado
- `e.timeStamp` — timestamp do evento
- `e.composedPath()` — retorna array com o caminho do evento

### Métodos úteis
- `e.preventDefault()` — cancela ação padrão (ex.: envio de formulário, link)
- `e.stopPropagation()` — impede que o evento suba para pais (bubbling)
- `e.stopImmediatePropagation()` — além de `stopPropagation`, impede outros listeners no mesmo elemento

**Exemplo:** evitar envio de formulário
```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // validação e envio via fetch
});
```

---

## 6. Targets: `target` vs `currentTarget` vs `this`
- `e.target` — elemento real que recebeu o evento (onde ocorreu originalmente). Pode ser um filho.
- `e.currentTarget` — elemento onde o listener está registrado.
- `this` dentro do handler (não arrow) é igual a `e.currentTarget`.

```js
ul.addEventListener('click', function(e) {
  console.log('target:', e.target); // elemento clicado
  console.log('currentTarget:', e.currentTarget); // ul
  console.log('this === currentTarget?', this === e.currentTarget);
});
```

---

## 7. Delegação de eventos (event delegation)
Muito útil quando se tem muitos elementos dinâmicos:
```html
<ul id="lista"></ul>
```
```js
const lista = document.getElementById('lista');
lista.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return; // não é botão
  console.log('clicou no botão', btn.dataset.id);
});
```
Benefícios: menos listeners, funciona para elementos adicionados dinamicamente.

---

## 8. Capturar tecla: `keydown`, `keyup`, `keypress` (obsoleto)
- `keydown` — disparado quando tecla é pressionada (recomendado para capturar *todas* as teclas).
- `keyup` — disparado quando a tecla é solta.
- `keypress` — **obsoleto/deprecated** em muitos contextos; evita usá-lo.

Exemplo de atalho (Ctrl+S):
```js
window.addEventListener('keydown', (e) => {
  if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    salvarDocumento();
  }
});
```

**Observação:** use `e.key` (valor legível) em vez de `e.keyCode` (legacy).

---

## 9. Capturar input de imagem (file input) e pré-visualizar
```html
<input type="file" id="file" accept="image/*">
<img id="preview" alt="preview">
```
```js
const file = document.getElementById('file');
const preview = document.getElementById('preview');

file.addEventListener('change', (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const url = URL.createObjectURL(f); // cria URL temporária
  preview.src = url;
  // opcional: salvar Blob no indexedDB
});
```
- `change` é o evento ideal para `input[type=file]`.
- `input` também funciona para texto e outros campos, disparando sempre que o valor muda.

---

## 10. Eventos de formulário
- `submit` — quando o formulário é enviado (use `e.preventDefault()` para evitar envio tradicional)
- `change` — quando elemento perde foco e valor mudou (bom para `<select>`, `<input type=file>`)
- `input` — dispara enquanto o valor muda (bom para validação em tempo real)

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // coletar dados e enviar via fetch
});
```

---

## 11. Eventos touch / pointer / mouse
- `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`
- `touchstart`, `touchmove`, `touchend` (dispositivos touchscreen)
- `pointerdown`, `pointermove`, `pointerup` (unifica mouse/touch/pen)

**Dica:** prefira `pointer*` quando suportado para unificar entradas.

---

## 12. Boas práticas de performance
- Use delegação para listas grandes.
- Use `passive: true` para listeners de scroll/touch que não chamam `preventDefault()`.
- Debounce/throttle para `resize`/`scroll`/`input` quando necessário.
- Remova listeners quando elementos forem removidos (para evitar leaks).

---

## 13. Tabelas de referência (com status)
### Eventos de teclado / input
| Evento | O que faz | Observações / Status |
|--------|----------:|----------------------|
| `keydown` | Disparado ao pressionar tecla | Recomendado ✅ |
| `keyup` | Disparado ao soltar tecla | Recomendado ✅ |
| `keypress` | Disparado ao pressionar tecla que gera caractere | **Obsoleto / Deprecated** ⚠️ |
| `input` | Disparado quando valor do input muda | Recomendado ✅ |
| `change` | Quando valor muda e perde foco (ou file selecionado) | Recomendado ✅ |

### Eventos de mouse / ponteiro
| Evento | O que faz | Observações / Status |
|--------|----------:|----------------------|
| `click` | Clique completo (mousedown+mouseup) | Comum ✅ |
| `dblclick` | Duplo clique | Comum ✅ |
| `mousedown` / `mouseup` | Pressionar / soltar botão | Comum ✅ |
| `mousemove` | Movimento do mouse | Use com throttle/debounce ⚠️ |
| `pointerdown` / `pointerup` / `pointermove` | Unifica mouse/touch/pen | Recomendado para cross-input ✅ |
| `touchstart` / `touchend` / `touchmove` | Eventos touch nativos | Use se precisar de controle fino 📱 |

### Eventos de formulário / outros
| Evento | O que faz | Observações / Status |
|--------|----------:|----------------------|
| `submit` | Formulário enviado | Use `preventDefault()` para controle ✅ |
| `focus` / `blur` | Ganha / perde foco | Não borbulha (use `focusin`/`focusout` para borbulhar) |
| `focusin` / `focusout` | Versões que borbulham | Úteis para delegação ✅ |
| `load` | Recurso carregado (window ou image) | Comum ✅ |
| `error` | Erro no carregamento | Comum ✅ |

---

## 14. Exemplos práticos rápidos
### Ex1 — Delegação: remover item clicado
```html
<ul id="tasks"><li data-id="1">Tarefa <button class="del">X</button></li></ul>
```
```js
document.getElementById('tasks').addEventListener('click', (e) => {
  const del = e.target.closest('button.del');
  if (!del) return;
  const li = del.closest('li');
  li.remove();
});
```

### Ex2 — Listener com opção `once`
```js
button.addEventListener('click', function on(e){
  console.log('executa apenas 1 vez');
}, { once: true });
```

### Ex3 — Teclas: contar letras (keydown)
```js
window.addEventListener('keydown', (e) => {
  console.log('Tecla:', e.key);
});
```

---

## 15. Checklist rápido (quando criar listeners)
- Use `addEventListener` em vez de inline/`onclick` quando possível.
- Sempre mantenha referência da função se precisar remover depois.
- Use delegação para listas e elementos dinâmicos.
- Use `passive: true` em scroll/touch sem `preventDefault()`.
- Evite `keypress` — use `keydown`/`keyup`.