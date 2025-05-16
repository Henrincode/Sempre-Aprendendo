# 📌 **CSS `position`: Guia Completo**

A propriedade `position` do CSS define como um elemento é posicionado no documento. Ela determina se o elemento será posicionado em relação ao documento, ao seu elemento pai, ou se seguirá o fluxo normal da página.

---

## ⚙️ **Valores possíveis de `position`**

### 🔹 `static` (padrão)

- É o valor padrão de todos os elementos.
    
- Os elementos seguem o fluxo normal do HTML.
    
- Propriedades como `top`, `right`, `bottom` e `left` **não têm efeito**.
    

```css
.elemento {
  position: static;
}
```

---

### 📦 `relative` (relativo)

- O elemento **permanece no fluxo normal**, mas pode ser deslocado com `top`, `right`, `bottom` ou `left`.
    
- O deslocamento é **relativo à sua posição original**.
    

```css
.elemento {
  position: relative;
  top: 10px;
  left: 5px;
}
```

---

### 🧭 `absolute` (absoluto)

- O elemento **sai do fluxo normal**.
    
- É posicionado em relação ao **ancestral mais próximo que tenha `position` diferente de `static`**.
    
- Se nenhum ancestral for posicionado, será relativo ao `<html>`.
    

```css
.elemento {
  position: absolute;
  top: 20px;
  left: 50px;
}
```

---

### 🧲 `fixed` (fixo)

- O elemento é **fixado em relação à janela de visualização (viewport)**.
    
- Não se move quando a página é rolada.
    

```css
.elemento {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

---

### 🎯 `sticky` (grudento)

- Combina o comportamento de `relative` e `fixed`.
    
- Age como `relative` até atingir um limite de rolagem, e então se comporta como `fixed`.
    

```css
.elemento {
  position: sticky;
  top: 0;
}
```

> ⚠️ Para funcionar corretamente, o elemento pai deve ter altura definida.

---

## 📐 **Propriedades relacionadas**

- `top`, `right`, `bottom`, `left`: definem a posição quando o `position` é diferente de `static`.
    
- `z-index`: controla a sobreposição dos elementos.
    

---

## 📝 **Resumo Rápido**

|Valor|Sai do fluxo?|Posição relativa a...|
|---|---|---|
|`static`|❌ Não|Fluxo padrão|
|`relative`|❌ Não|Sua própria posição original|
|`absolute`|✅ Sim|Ancestral posicionado|
|`fixed`|✅ Sim|Janela de visualização (viewport)|
|`sticky`|❌/✅ Parcial|Funciona como `relative` + `fixed`|