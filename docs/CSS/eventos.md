# 📚 Documentação de Eventos JavaScript

Uma referência prática e organizada de eventos nativos do JavaScript, categorizada por contexto de uso. Útil para consulta rápida durante o desenvolvimento de aplicações web.

## 🖱️ Eventos de Mouse e Ponteiros

**Interações com dispositivos de entrada como mouse, caneta ou toque.**

|Evento|Descrição|
|---|---|
|`click`|Clique simples|
|`dblclick`|Clique duplo|
|`mousedown`|Botão pressionado|
|`mouseup`|Botão solto|
|`mousemove`|Movimento do mouse|
|`mouseenter`|Mouse entra no elemento (não propaga)|
|`mouseleave`|Mouse sai do elemento (não propaga)|
|`mouseover`|Mouse entra (propaga)|
|`mouseout`|Mouse sai (propaga)|
|`contextmenu`|Clique com botão direito|
|`pointerdown`|Pressiona qualquer ponteiro (mouse, caneta, dedo)|
|`pointerup`|Solta ponteiro|
|`pointermove`|Move ponteiro|
|`pointerenter`|Ponteiro entra|
|`pointerleave`|Ponteiro sai|
|`pointercancel`|Ponteiro cancelado|

## ⌨️ Eventos de Teclado

**Detectam interações com o teclado físico do usuário.**

|Evento|Descrição|
|---|---|
|`keydown`|Tecla pressionada|
|`keyup`|Tecla solta|
|`keypress`|(obsoleto) — use `keydown`|

## 📝 Eventos de Formulário / Input

**Relacionados à interação com elementos de formulário e entrada de dados.**

|Evento|Descrição|
|---|---|
|`input`|Valor de `<input>` muda (ao digitar)|
|`change`|Valor muda e perde o foco|
|`submit`|Formulário enviado|
|`reset`|Formulário resetado|
|`focus`|Recebe foco|
|`blur`|Perde o foco|
|`invalid`|Validação HTML5 falhou|
|`focusin`|Um filho ganhou foco (propaga)|
|`focusout`|Um filho perdeu foco (propaga)|

## 📄 Eventos de Documento / Página

**Ocorrem no carregamento da página ou mudanças de estado do documento.**

|Evento|Descrição|
|---|---|
|`DOMContentLoaded`|HTML completamente carregado|
|`load`|Tudo (HTML, CSS, imagens) carregado|
|`beforeunload`|Antes da aba ser fechada|
|`unload`|Quando a aba é fechada (obsoleto)|
|`visibilitychange`|Quando a aba fica visível/invisível|
|`readystatechange`|Mudança no `document.readyState`|
|`pageshow`|Quando a aba/página é mostrada (inclusive após bfcache)|
|`pagehide`|Quando a aba/página é ocultada|

## 🔗 Eventos de URL / Navegação

**Alterações no histórico ou na âncora da URL.**

|Evento|Descrição|
|---|---|
|`hashchange`|Quando a `#` muda na URL|
|`popstate`|Quando o histórico do navegador muda (SPA)|

## 📐 Eventos de Janela / Layout

**Envolvem mudanças no layout da janela ou na orientação da tela.**

|Evento|Descrição|
|---|---|
|`resize`|Redimensionamento da janela|
|`scroll`|Rolagem da página|
|`orientationchange`|Mudança de orientação (portrait/landscape)|

## 💾 Eventos de Armazenamento

**Detectam alterações no `localStorage` e `sessionStorage`.**

|Evento|Descrição|
|---|---|
|`storage`|Alteração no `localStorage` ou `sessionStorage` (em outra aba)|

## 📦 Eventos de Drag and Drop

**Relacionados a ações de arrastar e soltar elementos na página.**

|Evento|Descrição|
|---|---|
|`drag`|Elemento sendo arrastado|
|`dragstart`|Início do arraste|
|`dragend`|Fim do arraste|
|`dragenter`|Elemento sendo arrastado entra em área-alvo|
|`dragover`|Elemento sendo arrastado sobre área-alvo|
|`dragleave`|Sai da área-alvo|
|`drop`|Solta o item na área-alvo|

## 🎥 Eventos de Mídia

**Usados com elementos `<audio>` e `<video>`.**

|Evento|Descrição|
|---|---|
|`play`|Início da reprodução|
|`pause`|Pausado|
|`ended`|Fim da reprodução|
|`volumechange`|Mudança de volume|
|`timeupdate`|Atualização de tempo de reprodução|
|`loadeddata`|Dados carregados|
|`error`|Erro na mídia|

## 📶 Eventos de Conectividade

**Relacionados à conexão da aplicação com a internet.**

|Evento|Descrição|
|---|---|
|`online`|Dispositivo ficou online|
|`offline`|Dispositivo ficou offline|

## 📋 Eventos de Área de Transferência

**Monitoram ações de copiar, recortar e colar.**

|Evento|Descrição|
|---|---|
|`copy`|Usuário copia conteúdo|
|`cut`|Conteúdo recortado|
|`paste`|Conteúdo colado|

## 🎨 Eventos de CSS e Estilo

**Relacionados a transições e animações CSS.**

|Evento|Descrição|
|---|---|
|`animationstart`|Início de uma animação CSS|
|`animationend`|Fim da animação CSS|
|`transitionend`|Fim da transição CSS|

## 🧪 Eventos de Promises e Erros

**Tratamento de erros e estado de Promises.**

|Evento|Descrição|
|---|---|
|`rejectionhandled`|Uma Promise rejeitada foi tratada|
|`unhandledrejection`|Uma Promise rejeitada sem tratamento|
|`securitypolicyviolation`|Violação de CSP (Content Security Policy)|

## 📡 Eventos de WebSocket

**Comunicação via WebSocket com o servidor.**

|Evento|Descrição|
|---|---|
|`open`|Conexão WebSocket foi aberta|
|`message`|Mensagem recebida do servidor|
|`error`|Ocorreu um erro|
|`close`|Conexão foi fechada|

## 🔧 Eventos de Service Workers

**Relacionados ao ciclo de vida e ações de um Service Worker.**

|Evento|Descrição|
|---|---|
|`install`|Service Worker sendo instalado|
|`activate`|Service Worker ativado|
|`fetch`|Intercepta requisição de rede|
|`sync`|Background sync|
|`push`|Push notification recebida|

## 📱 Eventos de Dispositivos Móveis

**Detectam interações físicas e sensoriais em dispositivos móveis.**

|Evento|Descrição|
|---|---|
|`touchstart`|Dedo toca a tela|
|`touchend`|Dedo solta|
|`touchmove`|Dedo desliza|
|`touchcancel`|Toque cancelado|
|`devicemotion`|Movimento do dispositivo (aceleração)|
|`deviceorientation`|Orientação do dispositivo (giroscópio)|

## 🧬 Eventos de APIs de Observação

**Observam mudanças no DOM, visibilidade ou tamanho de elementos.**

|Evento|Descrição|
|---|---|
|`intersectionobserver`|Observa quando um elemento entra na viewport|
|`mutationobserver`|Observa alterações no DOM|
|`resizeobserver`|Observa quando um elemento é redimensionado|