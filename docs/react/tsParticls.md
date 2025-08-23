# Documentação Completa: Partículas no React com Wrapper e Children

## 1️⃣ Introdução

`tsParticles` é uma **engine moderna de partículas** para JavaScript. Com React, usamos o wrapper oficial `@tsparticles/react`, que facilita integrar partículas animadas em componentes JSX.

Este guia mostra como criar um **componente reutilizável** `<ParticlesBg>` que já aceita `children` para sobreposição de conteúdo.

---

## 2️⃣ Instalação

Instale os pacotes modernos:

```bash
npm install @tsparticles/react @tsparticles/slim
```

> `@tsparticles/react` → wrapper React  
> `@tsparticles/slim` → engine de partículas leve  
> Para todos os recursos, substitua `slim` por `all`.

---

## 3️⃣ Criando o componente `<ParticlesBg>`

O componente aceita `children` e ocupa **100% da largura e altura**, gerenciando `z-index` automaticamente.

```jsx
// src/components/Particles.jsx
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export default function Particulas({ children, options, style }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // inicializa a engine slim
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", ...style }}>
      {/* Partículas no fundo */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Conteúdo sobreposto */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
```

---

## 4️⃣ Usando o `<Particles>` na Home

```jsx
import Particulas from "../components/Particles";

export default function Home() {
  const particlesOptions = {
    background: { color: "#0d47a1" },
    fpsLimit: 60,
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 5 } },
      move: { enable: true, speed: 2 },
      links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
  };

  return (
    <Particulas options={particlesOptions} style={{ width: "100%", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1>Bem-vindo ao meu site</h1>
        <p>Texto sobre as partículas</p>
      </div>
    </Particulas>
  );
}
```

---

## 5️⃣ Principais vantagens deste padrão

- `<ParticlesBg>` já gerencia **fundo e conteúdo sobreposto**.
    
- `children` ocupam **100% da largura e altura** automaticamente.
    
- Fácil de **reutilizar em várias páginas**, basta trocar `options` e `children`.
    
- Mantém **JS puro**, sem necessidade de TypeScript.
    
- Compatível com **Vite + React**.
    

---

## 6️⃣ Playground e Exemplos

- 🌐 **Documentação oficial React:** [https://github.com/tsparticles/react](https://github.com/tsparticles/react)
    
- 💻 **Playground interativo:** [https://particles.js.org/sandbox](https://particles.js.org/sandbox)
    

No playground você pode **criar efeitos, copiar o JSON** e usar diretamente na prop `options`.