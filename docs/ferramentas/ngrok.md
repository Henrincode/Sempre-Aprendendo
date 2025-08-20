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

Ou usar sem instalar:

```bash
npx ngrok
```

---

## 🆔 Criar conta no ngrok e configurar token de autenticação

A partir da versão 3.x, o ngrok **exige que você tenha uma conta grátis e configure um token para usar túneis**.

### Passo a passo:

1. Crie uma conta grátis no site oficial:
    
    [https://dashboard.ngrok.com/signup](https://dashboard.ngrok.com/signup)
    
    - Você pode usar e-mail ou login via GitHub, Google, etc.
        
2. Após criar a conta e fazer login, acesse a página para copiar seu token:
    
    [https://dashboard.ngrok.com/get-started/your-authtoken](https://dashboard.ngrok.com/get-started/your-authtoken)
    
3. No terminal, configure seu ngrok local com o token (só precisa fazer uma vez):
    

Se instalou

```bash
ngrok config add-authtoken SEU_TOKEN_AQUI
```

Se não instalou

```bash
npx ngrok config add-authtoken SEU_TOKEN_AQUI
```

Substitua `SEU_TOKEN_AQUI` pelo token copiado no site.

---

## 🚀 Rodando o site local com Live Server

### 1. Iniciar o live-server aceitando conexões externas:

```bash
live-server --host=0.0.0.0
```

---

## 🌍 Expondo o site com Ngrok

### 1. Abrir túnel com ngrok:

```bash
ngrok http 8080
```

Ou, se estiver usando npx:

```bash
npx ngrok http 8080
```

> Substitua `8080` pela porta que seu live-server está rodando.

### 2. Ngrok mostrará algo como:

```
Forwarding https://abc12345.ngrok.io -> http://localhost:8080
```

### 3. Agora acesse pelo celular ou outro dispositivo a URL HTTPS fornecida.

---

## 🔐 (Opcional) Adicionar autenticação para acesso ao túnel

Proteja seu túnel com usuário e senha:

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

Para facilitar, crie scripts no seu `package.json`:

```json
"scripts": {
  "start": "live-server --host=0.0.0.0",
  "tunnel": "ngrok http 8080"
}
```

Use:

```bash
npm run start
# Em outro terminal:
npm run tunnel
```

---

## ℹ️ Nota importante sobre o token de autenticação

- O comando `npx ngrok config add-authtoken SEU_TOKEN` precisa ser executado **apenas uma vez por máquina**.
    
- Depois disso, o token fica salvo localmente e você pode usar `npx ngrok http 8080` quantas vezes quiser **sem precisar adicionar o token de novo**.
    

---

## 🧠 Conclusão

Ngrok é uma ferramenta indispensável para quem:

- Quer testar sites locais em celulares
    
- Precisa de HTTPS para Service Workers e PWA
    
- Deseja compartilhar protótipos online sem publicar em um servidor
    

É seguro, prático e muito útil para desenvolvedores, especialmente em ambientes de testes e aprendizado.

---

Quer que eu gere esse conteúdo em Markdown, PDF, ou te ajude a montar o passo a passo no seu projeto?