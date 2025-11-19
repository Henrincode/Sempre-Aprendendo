# Guia: Framer Motion no Next.js — Instalação e Exemplos Práticos

> Documentação rápida, objetiva e prática para usar **Framer Motion** em projetos Next.js (App Router e Pages Router). Inclui exemplos, boas práticas, performance e dicas de integração com Tailwind.

---

## Índice
1. Introdução rápida
2. Instalação
3. Conceitos básicos do Framer Motion
4. Uso no **App Router** (Next 13+) — exemplos
5. Uso no **Pages Router** (`_app.js`) — exemplo
6. Scroll reveal / whileInView
7. Variants, Stagger e Reutilização
8. AnimatePresence e transições de rota
9. Animações de layout (`layout` / `layoutId`)
10. Acessibilidade e preferências de redução de movimento
11. Performance e boas práticas
12. Exemplos em TypeScript
13. Erros comuns e como resolvê-los
14. Referências rápidas / comandos

---

## 1. Introdução rápida

O **Framer Motion** é uma biblioteca de animações para React extremamente poderosa e declarativa. Em Next.js ela é a opção mais utilizada para animações de componentes, entradas/saídas, transições de página e animações complexas com boa integração ao ecossistema React.

**Pontos-chave**:
- Funciona **apenas em componentes React** (client components no App Router).
- Suporta animações declarativas (`initial`, `animate`, `exit`, `whileInView`, `layout`, etc.).
- Integra bem com Tailwind (use classes Tailwind e `motion.*` para animar).

---

## 2. Instalação

No seu projeto Next.js, rode:

```bash
npm install framer-motion
# ou
yarn add framer-motion
# ou
pnpm add framer-motion
```

Pronto — a biblioteca estará disponível para importação.

---

## 3. Conceitos básicos do Framer Motion

- `motion` — elementos animados (`motion.div`, `motion.button`, etc.).
- `initial` — estado inicial da animação (antes de montar).
- `animate` — estado final/atual a ser animado.
- `exit` — estado para animação de saída (usado com `AnimatePresence`).
- `whileHover`, `whileTap`, `whileInView` — gatilhos *on interaction*.
- `variants` — objeto para agrupar múltiplos estados reutilizáveis.
- `AnimatePresence` — controla animações de entrada/saída de componentes montados/dismountados.
- `layout` e `layoutId` — para animações de layout/posicionamento.

---

## 4. Uso no App Router (Next 13+)

No App Router, componentes que usam framer-motion **devem** ser Client Components. Ou seja, inclua `"use client"` no topo.

### Exemplo mínimo (App Router — `app/page.jsx`)

```jsx
// app/page.jsx
"use client";

import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold">Olá, Framer Motion!</h1>
      </motion.div>
    </main>
  );
}
```

**Observações**:
- Apenas importe `motion` onde for usar animação.
- Não é necessário usar `AnimatePresence` para animações simples de entrada.

---

## 5. Uso no Pages Router (`_app.js`)

Se você usar o Pages Router (`pages/`), pode configurar `AnimatePresence` em `_app.js` para transições de rota.

```jsx
// pages/_app.jsx
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  )
}
```

No componente de página:

```jsx
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      Conteúdo
    </motion.div>
  )
}
```

> `key={router.pathname}` faz com que as páginas sejam tratadas como elementos diferentes pelo `AnimatePresence`.

---

## 6. Scroll reveal / whileInView

Para revelar elementos quando entram na viewport, use `whileInView` e `viewport`.

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
>
  Conteúdo que aparece ao rolar
</motion.div>
```

- `viewport.amount` controla a fração do elemento que precisa estar visível (0.2 = 20%).
- `viewport.once` se `true` anima apenas na primeira vez.

---

## 7. Variants, Stagger e Reutilização

`variants` permitem definir estados nomeados e aplicar a vários elementos. Útil para listas com `staggerChildren`.

```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}

export default function Lista() {
  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      <motion.li variants={item}>Item 1</motion.li>
      <motion.li variants={item}>Item 2</motion.li>
      <motion.li variants={item}>Item 3</motion.li>
    </motion.ul>
  )
}
```

---

## 8. AnimatePresence e transições de rota

`AnimatePresence` permite animações quando componentes desaparecem (unmount). No App Router isso exige cuidados — o App Router monta novas páginas de forma diferente.

### App Router (exemplo básico no `app/layout.jsx`)

```jsx
// app/layout.jsx
"use client";

import { AnimatePresence } from 'framer-motion';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}
```

**Importante**: `children` precisa ter uma `key` única por rota — se estiver usando `app/`, você geralmente passará `key={router.pathname}` em um componente client que envolva `children`. No App Router pode ser necessário criar um componente client que leia `usePathname()` do `next/navigation` e renderize o `children` com a key apropriada.

### Exemplo de wrapper para rota no App Router

```jsx
// app/RouteTransition.jsx
"use client";
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function RouteTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}
```

E no `app/layout.jsx`:

```jsx
import RouteTransition from './RouteTransition';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RouteTransition>
          {children}
        </RouteTransition>
      </body>
    </html>
  )
}
```

---

## 9. Animações de layout (`layout` e `layoutId`)

Use `layout` para transições suaves quando elementos mudam de posição/size. Para transições entre rotas (efeito "shared element"), use `layoutId` com `AnimatePresence`.

```jsx
<motion.div layout className="card">...</motion.div>

// Para shared element entre duas views com o mesmo layoutId
<motion.img layoutId="avatar-123" src="..." />
```

**Observação**: `layout` pode impactar performance se aplicado a muitos elementos — prefira usar quando necessário.

---

## 10. Acessibilidade / prefers-reduced-motion

Respeite as preferências do usuário:

```jsx
import { useReducedMotion } from 'framer-motion';

export default function Card() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
    >
      Conteúdo
    </motion.div>
  )
}
```

---

## 11. Performance e boas práticas

- **Evite animar todas as propriedades**: prefira `transform` (translate, scale) e `opacity`.
- **Não adicione `layout` a muitos elementos** — é custoso.
- **Use `will-change` com cautela** (o framer já otimiza internamente).
- **Prefira `whileInView` / Intersection Observer** para animações de scroll em vez de `onscroll` manual.
- **Agrupe animações com `variants`** e `staggerChildren` para desempenho e organização.
- **Use `useReducedMotion`** para respeitar preferências do usuário.

---

## 12. Exemplos em TypeScript

```tsx
// ExampleComponent.tsx
"use client";
import { motion } from 'framer-motion';

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Olá TS
    </motion.div>
  );
}
```

Para tipar `variants`:

```ts
import { Variants } from 'framer-motion';

const boxVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}
```

---

## 13. Erros comuns e como resolvê-los

- **Erro: animação quebra SSR / mismatch** → Certifique-se que o componente com animação é `"use client"`.
- **AnimatePresence não anima saída** → Garanta `key` único nos filhos e que `AnimatePresence` esteja no client. Use `mode="wait"` se quiser esperar a saída antes da entrada.
- **Tema / Tailwind não aplicando classes em motion elements** → `motion.div` aceita `className` normalmente; assegure que Tailwind esteja configurado.
- **Layout animation lenta** → Remova `layout` desnecessário ou limite os elementos com `layout`.

---

## 14. Referências rápidas / comandos

- Instalar: `npm install framer-motion`
- Import básico: `import { motion } from 'framer-motion'`
- AnimatePresence: `import { AnimatePresence } from 'framer-motion'`
- `useReducedMotion` para preferências de usuários

---

## Extras: Exemplo completo com Tailwind + App Router + RouteTransition

**Estrutura**:
```
app/
  layout.jsx
  RouteTransition.jsx
  page.jsx
```

**RouteTransition.jsx** (client):
```jsx
"use client";
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function RouteTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
}
```

**layout.jsx**:
```jsx
import RouteTransition from './RouteTransition';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RouteTransition>
          {children}
        </RouteTransition>
      </body>
    </html>
  )
}
```

**page.jsx**:
```jsx
"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold">Home</h1>
    </motion.div>
  );
}
```