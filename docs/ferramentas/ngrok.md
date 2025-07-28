# 🌐 Usando Ngrok com Live Server

---

## 📖 O que é o Ngrok?

**Ngrok** é uma ferramenta que cria um **túnel seguro (HTTPS)** entre a internet e sua máquina local.

Em outras palavras:

> Ngrok gera um **link público** para acessar seu **localhost** de qualquer lugar — até mesmo em celulares ou computadores fora da sua rede.

---

## 🎯 Para que serve o Ngrok?

O `ngrok` é extremamente útil para:

- Testar sites locais em dispositivos móveis
    
- Fazer funcionar **Service Workers**, **PWA**, **Notificações**, etc.
    
- Compartilhar protótipos com colegas, professores ou clientes
    
- Testar Webhooks de APIs externas (ex: Stripe, GitHub, Telegram)
    

⚠️ Alguns recursos como **Service Worker** só funcionam com HTTPS — e o Ngrok resolve isso!

---

## 🤝 Por que usar Ngrok com Live Server?

O `live-server` cria um servidor local, mas ele:

- ❌ Só funciona no seu próprio computador (`localhost`)
    
- ❌ Não tem HTTPS por padrão
    
- ❌ Não é acessível pelo celular sem configuração extra
    

Com o `ngrok`, você resolve tudo isso:

✅ Link acessível via internet  
✅ HTTPS pronto para uso  
✅ Funciona no celular  
✅ Perfeito para testar PWA e recursos offline

---

## 📦 Requisitos

Certifique-se de ter:

- [Node.js](https://nodejs.org/) instalado
    
- `live-server` instalado globalmente
    
- `ngrok` instalado globalmente (ou via `npx`)
    

---

## 🔧 Instalação

### 1. Instalar o `live-server`:

```bash
npm install -g live-server
```

### 2. Instalar o `ngrok`:

```bash
npm install -g ngrok
```

Ou use sem instalar:

```bash
npx ngrok
```

---

## 🚀 Rodando o site local com Live Server

### 1. Iniciar com suporte a acesso externo:

```bash
live-server --host=0.0.0.0
```

Esse comando permite que outros dispositivos (como o celular ou o `ngrok`) acessem seu servidor local.

---

## 🌍 Expondo o site com Ngrok

### 1. Abrir túnel com Ngrok:

```bash
ngrok http 8080
```

> Substitua `8080` pela porta do `live-server`, se for diferente.

### 2. Ngrok irá mostrar algo como:

```
Forwarding https://abc12345.ngrok.io -> http://localhost:8080
```

### 3. Acessar pelo celular ou outro computador:

No navegador do celular:

```
https://abc12345.ngrok.io
```

---

## 🔐 (Opcional) Adicionar autenticação

Para proteger o acesso com usuário e senha:

```bash
ngrok http 8080 --auth="usuario:senha"
```

Exemplo:

```bash
ngrok http 8080 --auth="admin:1234"
```

---

## 🧪 Testes que funcionam com HTTPS via Ngrok

|Recurso|Funciona com Ngrok?|
|---|---|
|Service Worker|✅ Sim|
|Manifest + PWA|✅ Sim|
|Notificações Push|✅ Sim|
|Testes offline|✅ Sim|
|Web APIs seguras (fetch)|✅ Sim|
|Permissões no navegador|✅ Sim|
|`localhost` no celular|🚫 Não, use ngrok|

---

## 🛠 Dica: Scripts no package.json

Se estiver usando Node.js, pode facilitar os comandos criando scripts:

```json
"scripts": {
  "start": "live-server --host=0.0.0.0",
  "tunnel": "ngrok http 8080"
}
```

Depois use:

```bash
npm run start
# Em outro terminal:
npm run tunnel
```

---

## 🧠 Conclusão

Ngrok é uma ferramenta indispensável para quem:

- Quer testar sites locais em celulares
    
- Precisa de HTTPS para Service Workers e PWA
    
- Deseja compartilhar protótipos online sem publicar em um servidor
    

É seguro, prático e muito útil para desenvolvedores, especialmente em ambientes de testes e aprendizado.