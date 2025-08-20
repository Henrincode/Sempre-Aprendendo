No React, você gerencia rotas usando a biblioteca **React Router**, que permite criar **navegação entre páginas sem recarregar a página inteira**. A versão mais usada atualmente é o **React Router v6+**.

---

## 🚀 1. Instalação

```bash
npm install react-router-dom
```

---

## 📁 2. Estrutura básica

```jsx
// App.jsx ou App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Erro404 from './pages/Erro404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

---

## 🧭 3. Criando os componentes de páginas

```jsx
// pages/Home.jsx
export default function Home() {
  return <h1>Página Inicial</h1>
}
```

```jsx
// pages/Sobre.jsx
export default function Sobre() {
  return <h1>Sobre nós</h1>
}
```

```jsx
// pages/Erro404.jsx
export default function Erro404() {
  return <h1>Erro 404 - Página não encontrada</h1>
}
```

---

## 🔗 4. Navegação entre páginas

```jsx
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>
    </nav>
  )
}
```

---

## 🔁 5. Navegação programática (ex: após login)

```jsx
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const fazerLogin = () => {
    // lógica de login
    navigate('/dashboard') // redireciona
  }

  return <button onClick={fazerLogin}>Entrar</button>
}
```

---

## ✅ Dicas Extras

- A URL **na barra do navegador é atualizada automaticamente** (ex: `/home`, `/sobre`).
    
- As rotas são **relativas ao domínio**. Se você está usando **GitHub Pages**, talvez precise usar `basename` no `<BrowserRouter>`:
    

```jsx
<BrowserRouter basename="/nome-do-repo">
```