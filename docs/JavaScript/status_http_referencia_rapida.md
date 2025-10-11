# 🛠️ Guia Completo de Códigos de Status HTTP — Referência Rápida

> Documento de referência com todos os grupos de códigos HTTP (1xx–5xx), tabelas com Código, Nome, Tipo, Quando usar e Resposta padrão. Ideal para documentação de API, cheatsheet e aprendizado.

---

## 📘 Introdução
Códigos de status HTTP são retornados pelo servidor para indicar o resultado de uma requisição. Cada código tem um significado padrão, agrupado por faixas (1xx–5xx). Este guia traz tabelas didáticas e exemplos rápidos para você usar como referência e colocar em documentação de APIs.

---

## 🔎 Como usar este guia
- **Coluna "Quando usar"** indica situações práticas para aplicar o código em respostas de API.
- **Resposta padrão** mostra o texto que normalmente acompanha o status.
- Use códigos 2xx para sucesso, 4xx para erros do cliente (validação/autenticação/etc.) e 5xx para problemas no servidor.

---

## 🟦 1xx — Informativo
Esses códigos raramente aparecem em APIs REST comuns.

| Código | Nome | Tipo | Quando usar | Resposta padrão |
|:------:|:-----|:----:|:------------|:---------------|
| 100 | Continue | Informativo | Cliente deve continuar o envio (ex.: upload em várias partes) | "Continue" |
| 101 | Switching Protocols | Informativo | Ao aceitar mudança de protocolo (ex.: para WebSocket) | "Switching Protocols" |
| 102 | Processing | Informativo | Processo iniciado e ainda em andamento (WebDAV) | "Processing" |
| 103 | Early Hints | Informativo | Enviar cabeçalhos preliminares (ex.: pré-load) antes da resposta final | "Early Hints" |

---

## 🟩 2xx — Sucesso
Indicam que a requisição foi compreendida, aceita e processada com sucesso.

| Código | Nome | Tipo | Quando usar | Resposta padrão |
|:------:|:-----|:----:|:------------|:---------------|
| 200 | OK | Sucesso | Requisição bem-sucedida (GET, resposta padrão) | "OK" |
| 201 | Created | Sucesso | Recurso criado com sucesso (POST criando novo recurso) | "Created" |
| 202 | Accepted | Sucesso | Requisição aceita para processamento assíncrono | "Accepted" |
| 203 | Non-Authoritative Information | Sucesso | Resposta a partir de fonte intermediária | "Non-Authoritative Information" |
| 204 | No Content | Sucesso | Operação ok, sem corpo de resposta (ex.: DELETE bem-sucedido) | "No Content" |
| 205 | Reset Content | Sucesso | Solicita que cliente limpe formulários/estado | "Reset Content" |
| 206 | Partial Content | Sucesso | Retorno parcial (Range requests) | "Partial Content" |
| 207 | Multi-Status | Sucesso | Multi-status (WebDAV) | "Multi-Status" |
| 208 | Already Reported | Sucesso | Já relatado (WebDAV) | "Already Reported" |
| 226 | IM Used | Sucesso | Delta encoding aplicado (RFC 3229) | "IM Used" |

---

## 🟨 3xx — Redirecionamento
Cliente deve tomar uma ação adicional (seguir URL, mudar método, etc.).

| Código | Nome | Tipo | Quando usar | Resposta padrão |
|:------:|:-----|:----:|:------------|:---------------|
| 300 | Multiple Choices | Redirecionamento | Várias representações disponíveis | "Multiple Choices" |
| 301 | Moved Permanently | Redirecionamento | Recurso movido permanentemente para nova URL | "Moved Permanently" |
| 302 | Found | Redirecionamento | Recurso temporariamente em outra URL | "Found" |
| 303 | See Other | Redirecionamento | Redirecionar para outra rota (após POST) | "See Other" |
| 304 | Not Modified | Redirecionamento | Cache válido — conteúdo não modificado | "Not Modified" |
| 305 | Use Proxy | Redirecionamento | Recurso acessável via proxy (raramente usado) | "Use Proxy" |
| 307 | Temporary Redirect | Redirecionamento | Redirecionamento temporário (mantém método) | "Temporary Redirect" |
| 308 | Permanent Redirect | Redirecionamento | Redirecionamento permanente (mantém método) | "Permanent Redirect" |

---

## 🟥 4xx — Erro do Cliente
Indicam problemas na requisição enviada pelo cliente (validação, autorização, formato etc.).

| Código | Nome | Tipo | Quando usar | Resposta padrão |
|:------:|:-----|:----:|:------------|:---------------|
| 400 | Bad Request | Erro do Cliente | JSON malformado, campos inválidos, validação falhou | "Bad Request" |
| 401 | Unauthorized | Erro do Cliente | Falta autenticação ou token inválido | "Unauthorized" |
| 402 | Payment Required | Erro do Cliente | Reservado para pagamentos (pouco usado) | "Payment Required" |
| 403 | Forbidden | Erro do Cliente | Autenticado, mas sem permissão para o recurso | "Forbidden" |
| 404 | Not Found | Erro do Cliente | Rota ou recurso inexistente | "Not Found" |
| 405 | Method Not Allowed | Erro do Cliente | Método HTTP não permitido nessa rota | "Method Not Allowed" |
| 406 | Not Acceptable | Erro do Cliente | Tipo de resposta não aceito pelo cliente | "Not Acceptable" |
| 407 | Proxy Authentication Required | Erro do Cliente | Autenticação via proxy necessária | "Proxy Authentication Required" |
| 408 | Request Timeout | Erro do Cliente | Tempo esgotado para envio da requisição | "Request Timeout" |
| 409 | Conflict | Erro do Cliente | Conflito com o estado atual (ex.: duplicidade) | "Conflict" |
| 410 | Gone | Erro do Cliente | Recurso removido permanentemente | "Gone" |
| 411 | Length Required | Erro do Cliente | Cabeçalho Content-Length ausente | "Length Required" |
| 412 | Precondition Failed | Erro do Cliente | Pré-condições enviadas não satisfeitas | "Precondition Failed" |
| 413 | Payload Too Large | Erro do Cliente | Corpo da requisição muito grande | "Payload Too Large" |
| 414 | URI Too Long | Erro do Cliente | URL muito longa para ser processada | "URI Too Long" |
| 415 | Unsupported Media Type | Erro do Cliente | Tipo de mídia não suportado (ex.: enviar XML quando API espera JSON) | "Unsupported Media Type" |
| 416 | Range Not Satisfiable | Erro do Cliente | Intervalo de bytes inválido (Range header) | "Range Not Satisfiable" |
| 417 | Expectation Failed | Erro do Cliente | Cabeçalho Expect não pode ser atendido | "Expectation Failed" |
| 418 | I'm a teapot | Erro do Cliente (RFC 2324) | Código humorístico — não use em produção | "I'm a teapot" |
| 421 | Misdirected Request | Erro do Cliente | Requisição direcionada ao servidor errado | "Misdirected Request" |
| 422 | Unprocessable Entity | Erro do Cliente | Dados semanticamente inválidos (validação avançada) | "Unprocessable Entity" |
| 423 | Locked | Erro do Cliente | Recurso bloqueado (WebDAV) | "Locked" |
| 424 | Failed Dependency | Erro do Cliente | Falha em dependência (WebDAV) | "Failed Dependency" |
| 425 | Too Early | Erro do Cliente | Requisição enviada muito cedo (replay protection) | "Too Early" |
| 426 | Upgrade Required | Erro do Cliente | Requer atualização de protocolo (ex.: para TLS) | "Upgrade Required" |
| 428 | Precondition Required | Erro do Cliente | Servidor exige pré-condições | "Precondition Required" |
| 429 | Too Many Requests | Erro do Cliente | Rate limit — muitas requisições em curto período | "Too Many Requests" |
| 431 | Request Header Fields Too Large | Erro do Cliente | Cabeçalhos muito grandes | "Request Header Fields Too Large" |
| 451 | Unavailable For Legal Reasons | Erro do Cliente | Conteúdo bloqueado por motivos legais | "Unavailable For Legal Reasons" |

---

## ⬛ 5xx — Erro do Servidor
Falhas no servidor, mesmo com requisição válida.

| Código | Nome | Tipo | Quando usar | Resposta padrão |
|:------:|:-----|:----:|:------------|:---------------|
| 500 | Internal Server Error | Erro do Servidor | Erro interno inesperado, exceção não tratada | "Internal Server Error" |
| 501 | Not Implemented | Erro do Servidor | Método não implementado no servidor | "Not Implemented" |
| 502 | Bad Gateway | Erro do Servidor | Gateway/proxy recebeu resposta inválida de upstream | "Bad Gateway" |
| 503 | Service Unavailable | Erro do Servidor | Manutenção ou sobrecarga — servidor temporariamente indisponível | "Service Unavailable" |
| 504 | Gateway Timeout | Erro do Servidor | Timeout ao aguardar resposta de upstream | "Gateway Timeout" |
| 505 | HTTP Version Not Supported | Erro do Servidor | Versão do HTTP não suportada pelo servidor | "HTTP Version Not Supported" |
| 506 | Variant Also Negotiates | Erro do Servidor | Conteúdo negociado incorretamente | "Variant Also Negotiates" |
| 507 | Insufficient Storage | Erro do Servidor | Espaço insuficiente para completar a operação (WebDAV) | "Insufficient Storage" |
| 508 | Loop Detected | Erro do Servidor | Loop infinito detectado (WebDAV) | "Loop Detected" |
| 510 | Not Extended | Erro do Servidor | Extensões necessárias ausentes | "Not Extended" |
| 511 | Network Authentication Required | Erro do Servidor | Autenticação de rede exigida (ex.: portal captive) | "Network Authentication Required" |

---

## 🧪 Exemplos práticos (rápido)
- **POST /usuarios** com body inválido → **400 Bad Request** + `{ "error": "campo 'email' inválido" }`
- **POST /usuarios** com email já cadastrado → **409 Conflict** + `{ "error": "email já cadastrado" }`
- **GET /produto/999** (ID inexistente) → **404 Not Found**
- **DELETE /recurso** bem-sucedido sem resposta → **204 No Content**
- API em manutenção → **503 Service Unavailable** + `{ "error": "manutenção programada" }`

---

## ✅ Boas práticas de resposta de API
- Sempre inclua um corpo JSON explicando o erro para facilitar debugging (ex.: `{ "status": 400, "error": "Bad Request", "message": "campo X é obrigatório" }`).
- Use **códigos semânticos** (por exemplo, 422 para validação semântica) ao invés de sempre retornar 400 genérico.
- Para endpoints que criam recursos, retorne **201 Created** com `Location` apontando para o recurso criado.
- Para operações assíncronas, considere retornar **202 Accepted** com um link de status.

---

## 📎 Conclusão
Esse guia traz uma referência completa e prática dos códigos HTTP mais utilizados e menos comuns. Você pode copiar estas tabelas para a sua documentação de API, cheatsheet ou README.

---

Se quiser, eu posso:
- Exportar este documento para **Markdown (.md)** ou **HTML**;
- Gerar uma versão compacta (apenas códigos essenciais);
- Adicionar exemplos de respostas JSON padronizadas para cada código.

Diga qual opção prefere e eu gero imediatamente.

