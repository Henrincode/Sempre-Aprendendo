### 🧠 **Funções Globais do JavaScript**

#### 🔢 Conversão de Tipos

- `parseInt(string, radix)`  
    Converte uma string para um número inteiro.
    
- `parseFloat(string)`  
    Converte uma string para número decimal (ponto flutuante).
    
- `isNaN(value)`  
    Verifica se o valor **não é um número**.
    
- `isFinite(value)`  
    Verifica se o valor é **um número finito**.
    

---

#### 📦 Codificação e Decodificação

- `encodeURI(uri)`  
    Codifica uma URL inteira (útil para envio via GET).
    
- `decodeURI(encodedURI)`  
    Decodifica uma URL previamente codificada.
    
- `encodeURIComponent(component)`  
    Codifica uma parte da URL (parâmetros, por exemplo).
    
- `decodeURIComponent(encodedComponent)`  
    Decodifica uma parte da URL previamente codificada.
    

---

#### 🔎 Avaliação de Código

- `eval(string)`  
    Executa código JavaScript representado como string. ⚠️ **Evite usar por segurança e performance!**
    

---

#### 🌍 Outras Funções Úteis

- `globalThis`  
    Retorna o objeto global, seja no navegador (`window`) ou no Node.js (`global`).
    
- `setTimeout(function, delay)`  
    Executa uma função após um tempo determinado (em milissegundos).
    
- `setInterval(function, delay)`  
    Executa repetidamente uma função em intervalos regulares.
    
- `clearTimeout(id)`  
    Cancela um `setTimeout`.
    
- `clearInterval(id)`  
    Cancela um `setInterval`.
    

---

#### 📄 JSON

Embora `JSON` não seja uma função, ele faz parte do escopo global e oferece métodos úteis:

- `JSON.parse()`  
    Converte JSON (texto) em objeto JavaScript.
    
- `JSON.stringify()`  
    Converte objeto JavaScript em string JSON.