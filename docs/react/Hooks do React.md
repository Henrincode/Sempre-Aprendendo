# 📚 Documentação Completa dos Hooks do React

Esta documentação abrange todos os hooks do React com exemplos práticos e explicações detalhadas para ajudar você a dominar essa ferramenta poderosa do React.

## 📖 Índice

- [🔧 O que são Hooks](#-o-que-s%C3%A3o-hooks)
- [⚡ State Hooks](#-state-hooks)
- [🔄 Effect Hooks](#-effect-hooks)
- [🌐 Context Hooks](#-context-hooks)
- [📎 Ref Hooks](#-ref-hooks)
- [⚡ Performance Hooks](#-performance-hooks)
- [🔧 Transition Hooks](#-transition-hooks)
- [🐛 Debug Hooks](#-debug-hooks)
- [🔗 Store Hooks](#-store-hooks)
- [🎯 Hooks Customizados](#-hooks-customizados)
- [🎯 Resumo e Melhores Práticas](#-resumo-e-melhores-pr%C3%A1ticas)


## 🔧 O que são Hooks?

Os Hooks são funções especiais que permitem "conectar-se" ao estado e aos recursos de ciclo de vida do React em componentes funcionais. Eles foram introduzidos no React 16.8 e revolucionaram a forma como escrevemos componentes React.

### ✅ Regras dos Hooks

1. **Sempre chame Hooks no nível superior**: Nunca dentro de loops, condições ou funções aninhadas
2. **Chame Hooks apenas em componentes React**: Ou em hooks customizados

## ⚡ State Hooks

Os State Hooks permitem que componentes "lembrem" de informações como entrada do usuário.

### 🎯 useState

O hook mais fundamental para gerenciar estado local em componentes funcionais.

```jsx
import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
```

**Exemplo com múltiplos estados:**

```jsx
function FormularioUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);

  return (
    <form>
      <input 
        value={nome} 
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="number"
        value={idade} 
        onChange={(e) => setIdade(parseInt(e.target.value))}
        placeholder="Idade"
      />
    </form>
  );
}
```


### 🗂️ useReducer

Para gerenciar estado complexo com lógica de atualização baseada em ações.

```jsx
import React, { useReducer } from 'react';

// Reducer function
const contadorReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

function ContadorComplexo() {
  const [state, dispatch] = useReducer(contadorReducer, { count: 0 });

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
}
```

**Exemplo com lista de tarefas:**

```jsx
const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { 
        id: Date.now(), 
        text: action.text, 
        completed: false 
      }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

function ListaTarefas() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [inputText, setInputText] = useState('');

  const adicionarTarefa = () => {
    if (inputText.trim()) {
      dispatch({ type: 'ADD_TODO', text: inputText });
      setInputText('');
    }
  };

  return (
    <div>
      <input 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```


## 🔄 Effect Hooks

Os Effect Hooks permitem que componentes se conectem e sincronizem com sistemas externos.

### 🎭 useEffect

Para executar efeitos colaterais como buscar dados, assinaturas ou manipular o DOM.

```jsx
import React, { useState, useEffect } from 'react';

function BuscadorDados() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const resultado = await response.json();
        setDados(resultado);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    buscarDados();
  }, []); // Array vazio = executa apenas uma vez

  if (loading) return <p>Carregando...</p>;

  return (
    <ul>
      {dados?.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
}
```

**Exemplo com cleanup:**

```jsx
function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos(seg => seg + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []); // Executa apenas na montagem

  return <div>Timer: {segundos}s</div>;
}
```

**Exemplo com dependências:**

```jsx
function PesquisaUsuario() {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      const buscar = async () => {
        const response = await fetch(`/api/users?search=${query}`);
        const data = await response.json();
        setResultados(data);
      };
      buscar();
    } else {
      setResultados([]);
    }
  }, [query]); // Executa quando query muda

  return (
    <div>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar usuários..."
      />
      <ul>
        {resultados.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```


### 🎨 useLayoutEffect

Executa sincronamente após todas as mutações do DOM, mas antes do navegador pintar.

```jsx
import React, { useLayoutEffect, useRef, useState } from 'react';

function TooltipExample() {
  const buttonRef = useRef();
  const tooltipRef = useRef();
  const [tooltipStyle, setTooltipStyle] = useState({});

  useLayoutEffect(() => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    setTooltipStyle({
      top: buttonRect.bottom + window.scrollY,
      left: buttonRect.left + window.scrollX,
    });
  }, []);

  return (
    <div>
      <button ref={buttonRef}>Hover over me</button>
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          top: `${tooltipStyle.top}px`,
          left: `${tooltipStyle.left}px`,
          background: 'lightgray',
          padding: '5px',
          borderRadius: '3px',
        }}
      >
        Tooltip text
      </div>
    </div>
  );
}
```

**Diferenças entre useEffect e useLayoutEffect:**


| useEffect | useLayoutEffect |
| :-- | :-- |
| Assíncrono - após pintura | Síncrono - antes da pintura |
| Não bloqueia renderização | Pode bloquear renderização |
| Ideal para: fetch, logs, assinaturas | Ideal para: medições DOM, animações |

## 🌐 Context Hooks

### 🎯 useContext

Para consumir contexto e evitar prop drilling.

```jsx
import React, { createContext, useContext, useState } from 'react';

// 1. Criar o Context
const ThemeContext = createContext();

// 2. Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    colors: {
      light: { background: '#ffffff', color: '#000000' },
      dark: { background: '#1a1a1a', color: '#ffffff' }
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook
function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  
  return context;
}

// 4. Component que consome o contexto
function ThemedButton() {
  const { theme, toggleTheme, colors } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: colors[theme].background,
        color: colors[theme].color,
        border: `1px solid ${colors[theme].color}`,
        padding: '10px 20px',
        borderRadius: '5px'
      }}
    >
      Toggle para tema {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}

// 5. App Component
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h1>Exemplo de Context</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}
```

**Exemplo com autenticação:**

```jsx
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se há um usuário logado
    const token = localStorage.getItem('token');
    if (token) {
      // Validar token e buscar dados do usuário
      fetchUserData(token).then(setUser).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const { user, token } = await authAPI.login(email, password);
    localStorage.setItem('token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
```


## 📎 Ref Hooks

### 🎯 useRef

Para referenciar valores que não são necessários para renderização, como elementos DOM.

```jsx
import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // Focar automaticamente quando componente monta
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Digite algo..." />
      <button onClick={focusInput}>Focar Input</button>
    </div>
  );
}
```

**Exemplo com valor persistente:**

```jsx
function ContadorComPrevious() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Agora: {count}, Antes: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

**Exemplo com manipulação direta do DOM:**

```jsx
function ScrollableComponent() {
  const scrollRef = useRef();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;
    setShowScrollTop(scrollTop > 100);
  };

  return (
    <div>
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        style={{ 
          height: '300px', 
          overflow: 'auto',
          border: '1px solid #ccc',
          padding: '20px'
        }}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px'
          }}
        >
          ↑ Topo
        </button>
      )}
    </div>
  );
}
```


### 🎭 useImperativeHandle

Customiza o valor exposto quando usando ref em componentes com `forwardRef`.

```jsx
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => ({
    // Métodos expostos para o componente pai
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      setValue('');
      inputRef.current.focus();
    },
    getValue: () => {
      return value;
    },
    setValue: (newValue) => {
      setValue(newValue);
    }
  }));

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
});

function FormWithCustomInput() {
  const customInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = customInputRef.current.getValue();
    console.log('Valor do input:', inputValue);
  };

  const clearInput = () => {
    customInputRef.current.clear();
  };

  const focusInput = () => {
    customInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput 
        ref={customInputRef} 
        placeholder="Digite algo..."
      />
      <div style={{ marginTop: '10px' }}>
        <button type="button" onClick={focusInput}>
          Focar
        </button>
        <button type="button" onClick={clearInput}>
          Limpar
        </button>
        <button type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}
```

**Exemplo avançado - Modal Controller:**

```jsx
const Modal = forwardRef(({ children, title }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(prev => !prev),
    isOpen: () => isOpen
  }));

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div ref={modalRef} style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '90%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2>{title}</h2>
          <button onClick={() => setIsOpen(false)}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
});

function AppWithModal() {
  const modalRef = useRef();

  return (
    <div>
      <button onClick={() => modalRef.current.open()}>
        Abrir Modal
      </button>
      
      <Modal ref={modalRef} title="Meu Modal">
        <p>Conteúdo do modal aqui!</p>
        <button onClick={() => modalRef.current.close()}>
          Fechar
        </button>
      </Modal>
    </div>
  );
}
```


## ⚡ Performance Hooks

### 🚀 useMemo

Memoriza o resultado de um cálculo caro entre re-renderizações.

```jsx
import React, { useState, useMemo } from 'react';

function ComponenteComCalculoCaro() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Cálculo caro que só deve ser refeito quando todos muda
  const expensiveCalculation = useMemo(() => {
    console.log('Calculando...');
    return todos.reduce((acc, todo) => {
      return acc + (todo.completed ? 1 : 0);
    }, 0);
  }, [todos]); // Só recalcula quando todos muda

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
      <div>
        <p>Tarefas completas: {expensiveCalculation}</p>
        <button onClick={() => setTodos([
          ...todos, 
          { id: Date.now(), text: `Tarefa ${todos.length + 1}`, completed: Math.random() > 0.5 }
        ])}>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}
```

**Exemplo com filtro complexo:**

```jsx
function ListaFiltrada() {
  const [items] = useState(
    Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      category: ['A', 'B', 'C'][i % 3],
      price: Math.random() * 100
    }))
  );
  
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const processedItems = useMemo(() => {
    console.log('Processando items...');
    
    // Filtrar
    let filtered = items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    // Ordenar
    filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

    return filtered;
  }, [items, filter, sortBy]);

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar por nome..."
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Nome</option>
        <option value="price">Preço</option>
      </select>
      
      <div style={{ height: '300px', overflow: 'auto' }}>
        {processedItems.map(item => (
          <div key={item.id}>
            {item.name} - R$ {item.price.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}
```


### 🔄 useCallback

Memoriza uma função entre re-renderizações.

```jsx
import React, { useState, useCallback, memo } from 'react';

// Componente filho memorizado
const ItemTodo = memo(({ todo, onToggle, onDelete }) => {
  console.log('Renderizando ItemTodo:', todo.id);
  
  return (
    <div style={{ padding: '5px', border: '1px solid #ccc', margin: '2px' }}>
      <span 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer' 
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '10px' }}>
        Deletar
      </button>
    </div>
  );
});

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Fazer exercícios', completed: true }
  ]);
  const [inputText, setInputText] = useState('');

  // Sem useCallback, essas funções seriam recriadas a cada render
  const handleToggle = useCallback((id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []); // Array vazio porque não depende de nenhum valor

  const handleDelete = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos(prevTodos => [...prevTodos, {
        id: Date.now(),
        text: inputText,
        completed: false
      }]);
      setInputText('');
    }
  };

  return (
    <div>
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>
      
      <div>
        {todos.map(todo => (
          <ItemTodo
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
```

**Comparação: com e sem useCallback:**

```jsx
// ❌ Sem useCallback - função recriada a cada render
function ComponenteSemCallback({ items }) {
  const [filter, setFilter] = useState('');

  // Nova função criada a cada render
  const handleItemClick = (id) => {
    console.log('Item clicado:', id);
  };

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {items.map(item => (
        <ItemComponent key={item.id} item={item} onClick={handleItemClick} />
      ))}
    </div>
  );
}

// ✅ Com useCallback - função memorizada
function ComponenteComCallback({ items }) {
  const [filter, setFilter] = useState('');

  // Função memorizada, só recriada se dependências mudarem
  const handleItemClick = useCallback((id) => {
    console.log('Item clicado:', id);
  }, []); // Sem dependências

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {items.map(item => (
        <ItemComponent key={item.id} item={item} onClick={handleItemClick} />
      ))}
    </div>
  );
}
```


## 🔧 Transition Hooks

### ⚡ useTransition

Permite marcar atualizações de estado como transições não-urgentes.

```jsx
import React, { useState, useTransition } from 'react';

function SearchApp() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  // Simulando uma busca custosa
  const performSearch = (searchTerm) => {
    // Simular processamento pesado
    const items = Array.from({ length: 20000 }, (_, i) => ({
      id: i,
      name: `Item ${i} - ${searchTerm}`,
      description: `Descrição do item ${i}`
    }));

    const filtered = items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered.slice(0, 100)); // Limitar resultados
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Atualização urgente (input responsivo)

    // Marcar a busca como transição não-urgente
    startTransition(() => {
      performSearch(value);
    });
  };

  return (
    <div>
      <h1>Busca com useTransition</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Digite sua busca..."
        style={{ 
          padding: '10px', 
          fontSize: '16px',
          width: '300px',
          opacity: isPending ? 0.7 : 1 
        }}
      />
      
      {isPending && <p>Buscando...</p>}
      
      <div style={{ marginTop: '20px' }}>
        <h3>Resultados ({results.length}):</h3>
        <div style={{ maxHeight: '400px', overflow: 'auto' }}>
          {results.map(item => (
            <div key={item.id} style={{ padding: '5px', borderBottom: '1px solid #eee' }}>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```


### 📊 useDeferredValue

Adia a atualização de uma parte da UI.

```jsx
import React, { useState, useDeferredValue, memo } from 'react';

// Componente custoso de renderizar
const ExpensiveList = memo(({ query }) => {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i} - ${query}`);
  
  return (
    <div>
      <p>Lista custosa renderizada para: "{query}"</p>
      <div style={{ maxHeight: '300px', overflow: 'auto' }}>
        {items.slice(0, 50).map((item, index) => (
          <div key={index} style={{ padding: '2px' }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
});

function DeferredValueExample() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <h1>useDeferredValue Example</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite para buscar..."
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      
      <p>Query atual: {query}</p>
      <p>Query diferida: {deferredQuery}</p>
      
      {/* Este componente usa o valor diferido */}
      <ExpensiveList query={deferredQuery} />
    </div>
  );
}
```

**Comparação useTransition vs useDeferredValue:**


| useTransition | useDeferredValue |
| :-- | :-- |
| Envolve o código de atualização | Envolve o valor |
| Controle total sobre quando usar | Útil quando não há acesso ao código de atualização |
| Retorna `isPending` | Não fornece estado de pending |
| `startTransition(() => setState())` | `const deferred = useDeferredValue(value)` |

## 🐛 Debug Hooks

### 🔍 useDebugValue

Adiciona rótulos customizados para hooks customizados no React DevTools.

```jsx
import React, { useState, useDebugValue } from 'react';

// Hook customizado com debug
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Mostrar valor personalizado no DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

// Hook customizado mais complexo
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao carregar ${key} do localStorage:`, error);
      return initialValue;
    }
  });

  // Debug com formatação customizada
  useDebugValue(value, (val) => 
    `${key}: ${JSON.stringify(val).substring(0, 50)}...`
  );

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error);
    }
  };

  return [value, setStoredValue];
}

// Hook customizado para contador com histórico
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([initialValue]);

  // Debug value com informações do histórico
  useDebugValue(
    { count, historyLength: history.length },
    ({ count, historyLength }) => 
      `Count: ${count}, History: ${historyLength} items`
  );

  const increment = () => {
    setCount(prev => {
      const newValue = prev + 1;
      setHistory(prevHistory => [...prevHistory, newValue]);
      return newValue;
    });
  };

  const decrement = () => {
    setCount(prev => {
      const newValue = prev - 1;
      setHistory(prevHistory => [...prevHistory, newValue]);
      return newValue;
    });
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    history
  };
}

// Componente que usa os hooks customizados
function DebugExample() {
  const isOnline = useOnlineStatus();
  const [name, setName] = useLocalStorage('userName', '');
  const counter = useCounter(10);

  return (
    <div>
      <h1>Debug Hooks Example</h1>
      
      <div>
        <h2>Status Online</h2>
        <p>Você está: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
      </div>
      
      <div>
        <h2>LocalStorage</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome..."
        />
        <p>Nome salvo: {name}</p>
      </div>
      
      <div>
        <h2>Contador com Histórico</h2>
        <p>Valor: {counter.count}</p>
        <button onClick={counter.increment}>+</button>
        <button onClick={counter.decrement}>-</button>
        <button onClick={counter.reset}>Reset</button>
        <p>Histórico: {counter.history.join(' → ')}</p>
      </div>
      
      <p style={{ fontSize: '12px', color: '#666' }}>
        💡 Abra o React DevTools para ver as informações de debug dos hooks customizados
      </p>
    </div>
  );
}
```


## 🔗 Store Hooks

### 🔄 useSyncExternalStore

Permite subscrever-se a stores externos.

```jsx
import React, { useSyncExternalStore } from 'react';

// 1. Store externo simples
class CounterStore {
  constructor() {
    this.count = 0;
    this.subscribers = new Set();
  }

  // Obter snapshot atual
  getSnapshot = () => {
    return this.count;
  };

  // Subscrever a mudanças
  subscribe = (callback) => {
    this.subscribers.add(callback);
    
    // Função de unsubscribe
    return () => {
      this.subscribers.delete(callback);
    };
  };

  // Notificar subscribers
  notify = () => {
    this.subscribers.forEach(callback => callback());
  };

  // Ações
  increment = () => {
    this.count += 1;
    this.notify();
  };

  decrement = () => {
    this.count -= 1;
    this.notify();
  };

  reset = () => {
    this.count = 0;
    this.notify();
  };
}

// Instância global do store
const counterStore = new CounterStore();

// Hook customizado para usar o store
function useCounterStore() {
  return useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getSnapshot
  );
}

// Componentes que usam o store
function Counter1() {
  const count = useCounterStore();

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Contador 1</h3>
      <p>Valor: {count}</p>
      <button onClick={counterStore.increment}>+</button>
      <button onClick={counterStore.decrement}>-</button>
    </div>
  );
}

function Counter2() {
  const count = useCounterStore();

  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', margin: '10px' }}>
      <h3>Contador 2</h3>
      <p>Mesmo valor: {count}</p>
      <button onClick={counterStore.reset}>Reset</button>
    </div>
  );
}
```

**Exemplo com localStorage:**

```jsx
// Store que sincroniza com localStorage
class LocalStorageStore {
  constructor(key, initialValue = null) {
    this.key = key;
    this.subscribers = new Set();
    
    // Valor inicial do localStorage ou default
    try {
      this.value = JSON.parse(localStorage.getItem(key)) ?? initialValue;
    } catch {
      this.value = initialValue;
    }
  }

  getSnapshot = () => {
    return this.value;
  };

  subscribe = (callback) => {
    this.subscribers.add(callback);
    
    // Escutar mudanças no localStorage de outras abas
    const handleStorageChange = (e) => {
      if (e.key === this.key) {
        try {
          this.value = JSON.parse(e.newValue);
        } catch {
          this.value = null;
        }
        callback();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      this.subscribers.delete(callback);
      window.removeEventListener('storage', handleStorageChange);
    };
  };

  setValue = (newValue) => {
    this.value = newValue;
    localStorage.setItem(this.key, JSON.stringify(newValue));
    this.subscribers.forEach(callback => callback());
  };
}

// Hook customizado para localStorage
function useLocalStorageStore(key, initialValue) {
  const store = React.useMemo(
    () => new LocalStorageStore(key, initialValue),
    [key, initialValue]
  );

  const value = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot
  );

  return [value, store.setValue];
}

// Componente exemplo
function LocalStorageExample() {
  const [name, setName] = useLocalStorageStore('userName', '');
  const [theme, setTheme] = useLocalStorageStore('theme', 'light');

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
      minHeight: '200px'
    }}>
      <h2>Exemplo localStorage Store</h2>
      
      <div>
        <label>
          Nome: 
          <input
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>
      
      <div style={{ marginTop: '10px' }}>
        <label>
          Tema: 
          <select 
            value={theme} 
            onChange={(e) => setTheme(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </label>
      </div>

      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        💡 Abra esta página em outra aba para ver a sincronização automática!
      </p>
    </div>
  );
}
```

**Store mais complexo - Todo List:**

```jsx
class TodoStore {
  constructor() {
    this.todos = [];
    this.subscribers = new Set();
    this.nextId = 1;
  }

  getSnapshot = () => {
    return {
      todos: this.todos,
      completedCount: this.todos.filter(t => t.completed).length,
      totalCount: this.todos.length
    };
  };

  subscribe = (callback) => {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  };

  notify = () => {
    this.subscribers.forEach(callback => callback());
  };

  addTodo = (text) => {
    this.todos.push({
      id: this.nextId++,
      text,
      completed: false,
      createdAt: new Date().toISOString()
    });
    this.notify();
  };

  toggleTodo = (id) => {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.notify();
    }
  };

  removeTodo = (id) => {
    this.todos = this.todos.filter(t => t.id !== id);
    this.notify();
  };

  clearCompleted = () => {
    this.todos = this.todos.filter(t => !t.completed);
    this.notify();
  };
}

const todoStore = new TodoStore();

function useTodoStore() {
  return useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot
  );
}

function TodoApp() {
  const { todos, completedCount, totalCount } = useTodoStore();
  const [inputText, setInputText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      todoStore.addTodo(inputText.trim());
      setInputText('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>📝 Todo App com Store Externo</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Adicionar nova tarefa..."
          style={{ padding: '10px', width: '70%' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '5px' }}>
          Adicionar
        </button>
      </form>

      <div style={{ margin: '20px 0' }}>
        <p>Total: {totalCount} | Completas: {completedCount}</p>
        {completedCount > 0 && (
          <button onClick={todoStore.clearCompleted}>
            Limpar Completas
          </button>
        )}
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#f5f5f5',
            margin: '5px 0',
            borderRadius: '4px'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => todoStore.toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{
              flex: 1,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#666' : '#000'
            }}>
              {todo.text}
            </span>
            <button
              onClick={() => todoStore.removeTodo(todo.id)}
              style={{
                background: '#ff4444',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '40px' }}>
          Nenhuma tarefa ainda. Adicione uma acima! 👆
        </p>
      )}
    </div>
  );
}
```


## 🎯 Hooks Customizados

Você pode criar seus próprios hooks combinando os hooks existentes:

```jsx
// Hook para gerenciar estado de loading e erro
function useAsync(asyncFunction, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let canceled = false;
    
    const execute = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await asyncFunction();
        if (!canceled) {
          setData(result);
        }
      } catch (err) {
        if (!canceled) {
          setError(err);
        }
      } finally {
        if (!canceled) {
          setLoading(false);
        }
      }
    };

    execute();

    return () => {
      canceled = true;
    };
  }, dependencies);

  return { data, loading, error };
}

// Hook para debounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Hook para toggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, { toggle, setTrue, setFalse }];
}

// Hook para copiar para clipboard
function useClipboard(text, timeout = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async (customText) => {
    try {
      await navigator.clipboard.writeText(customText || text);
      setIsCopied(true);
      
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    } catch (error) {
      console.error('Erro ao copiar para clipboard:', error);
    }
  }, [text, timeout]);

  return [isCopied, copy];
}

// Hook para capturar teclas
function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}

// Hook para dimensões da janela
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Exemplo de uso dos hooks customizados
function ExemploHooksCustomizados() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [isModalOpen, { toggle: toggleModal, setTrue: openModal }] = useToggle();
  const [isCopied, copy] = useClipboard('Texto copiado!');
  const isEscPressed = useKeyPress('Escape');
  const windowSize = useWindowSize();

  // Fechar modal quando ESC é pressionado
  useEffect(() => {
    if (isEscPressed && isModalOpen) {
      toggleModal();
    }
  }, [isEscPressed, isModalOpen, toggleModal]);

  const { data: results, loading, error } = useAsync(
    async () => {
      if (debouncedSearchTerm) {
        // Simular busca
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [`Resultado 1 para "${debouncedSearchTerm}"`, `Resultado 2 para "${debouncedSearchTerm}"`];
      }
      return [];
    },
    [debouncedSearchTerm]
  );

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🎯 Hooks Customizados</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>🔍 Busca com Debounce</h3>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite para buscar..."
          style={{ padding: '10px', width: '100%' }}
        />
        
        {loading && <p>Buscando...</p>}
        {error && <p>Erro: {error.message}</p>}
        
        <ul>
          {results?.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>📋 Clipboard</h3>
        <button onClick={() => copy()}>
          {isCopied ? '✅ Copiado!' : 'Copiar texto'}
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>🚪 Modal (pressione ESC para fechar)</h3>
        <button onClick={openModal}>Abrir Modal</button>
        
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '400px'
            }}>
              <h3>Modal Aberto!</h3>
              <p>Pressione ESC ou clique no botão para fechar</p>
              <button onClick={toggleModal}>Fechar</button>
            </div>
          </div>
        )}
      </div>

      <div>
        <h3>📐 Tamanho da Janela</h3>
        <p>Largura: {windowSize.width}px</p>
        <p>Altura: {windowSize.height}px</p>
      </div>
    </div>
  );
}
```


## 🎯 Resumo e Melhores Práticas

### ✅ Melhores Práticas

1. **Use useState para estado simples**, useReducer para estado complexo
2. **useEffect para efeitos colaterais**, useLayoutEffect apenas quando necessário
3. **useMemo e useCallback com moderação** - só quando há problemas de performance
4. **useContext para evitar prop drilling**, mas não abuse
5. **useRef para valores que não causam re-render** e referências DOM
6. **Hooks customizados para reutilizar lógica** entre componentes

### ⚠️ Armadilhas Comuns

1. **Esquecer dependências no useEffect** pode causar bugs
2. **Usar useMemo/useCallback desnecessariamente** pode prejudicar performance
3. **Mutação direta do estado** em vez de criar novos objetos/arrays
4. **useLayoutEffect desnecessário** pode bloquear a renderização

### 🚀 Performance

- Use React DevTools Profiler para identificar problemas reais
- Memorização (useMemo/useCallback) deve ser baseada em medições
- React.memo para componentes que re-renderizam frequentemente
- Divida estado em pedaços menores quando possível


### 📋 Checklist dos Hooks

#### State Hooks

- [ ] `useState` - Estado local simples
- [ ] `useReducer` - Estado complexo com ações


#### Effect Hooks

- [ ] `useEffect` - Efeitos colaterais
- [ ] `useLayoutEffect` - Efeitos síncronos antes da pintura


#### Context Hooks

- [ ] `useContext` - Consumir contexto


#### Ref Hooks

- [ ] `useRef` - Referências mutáveis
- [ ] `useImperativeHandle` - Customizar ref com forwardRef


#### Performance Hooks

- [ ] `useMemo` - Memorizar valores computados
- [ ] `useCallback` - Memorizar funções


#### Transition Hooks

- [ ] `useTransition` - Transições não-urgentes
- [ ] `useDeferredValue` - Valores diferidos


#### Debug Hooks

- [ ] `useDebugValue` - Debug para hooks customizados


#### Store Hooks

- [ ] `useSyncExternalStore` - Sincronizar com stores externos

Esta documentação cobre todos os principais hooks do React com exemplos práticos. Lembre-se de que a prática é fundamental para dominar essas ferramentas poderosas! 🚀

***

## 📚 Links Úteis

- [Documentação Oficial dos Hooks](https://react.dev/reference/react)
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)

