# 🧠 Funções Globais do JavaScript

Este documento lista as principais **funções globais** disponíveis no JavaScript. Essas funções estão acessíveis em qualquer escopo sem a necessidade de importação.

---

## 🔢 Conversão de Tipos

| Função                  | Descrição                                                |
|-------------------------|----------------------------------------------------------|
| `parseInt(string, radix)` | Converte uma string para um número inteiro.             |
| `parseFloat(string)`      | Converte uma string para número decimal (ponto flutuante). |
| `isNaN(value)`            | Verifica se o valor **não é um número**.               |
| `isFinite(value)`         | Verifica se o valor é **um número finito**.            |

---

## 📦 Codificação e Decodificação de URI

| Função                           | Descrição                                                |
|----------------------------------|----------------------------------------------------------|
| `encodeURI(uri)`                 | Codifica uma URL inteira.                                |
| `decodeURI(encodedURI)`         | Decodifica uma URL previamente codificada.               |
| `encodeURIComponent(component)` | Codifica uma parte da URL (ex: parâmetros).              |
| `decodeURIComponent(component)` | Decodifica uma parte da URL previamente codificada.      |

---

## 🔎 Avaliação de Código

| Função        | Descrição                                                        |
|---------------|------------------------------------------------------------------|
| `eval(string)` | Executa código JavaScript representado como string. ⚠️ **Evite usar!** |

---

## ⏱️ Temporizadores

| Função                | Descrição                                                       |
|------------------------|-----------------------------------------------------------------|
| `setTimeout(fn, delay)` | Executa uma função após um tempo (em milissegundos).           |
| `setInterval(fn, delay)`| Executa repetidamente uma função em intervalos regulares.      |
| `clearTimeout(id)`      | Cancela um `setTimeout`.                                       |
| `clearInterval(id)`     | Cancela um `setInterval`.                                      |

---

## 🌍 Objeto Global

| Função/Objeto | Descrição                                                                 |
|----------------|---------------------------------------------------------------------------|
| `globalThis`   | Retorna o objeto global (seja `window` no navegador ou `global` no Node).|

---

## 📄 JSON (Objeto Global)

| Função                | Descrição                                              |
|------------------------|--------------------------------------------------------|
| `JSON.parse(jsonStr)`  | Converte uma string JSON em objeto JavaScript.        |
| `JSON.stringify(obj)`  | Converte um objeto JavaScript em string JSON.         |

---

> 📝 Estas funções são nativas do JavaScript e fazem parte do ambiente global, o que significa que estão disponíveis em qualquer parte do seu código.

