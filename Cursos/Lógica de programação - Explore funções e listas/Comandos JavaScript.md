- **document.querySelector:** É uma ferramenta poderosa para selecionar elementos individuais dentro de um documento HTML. Imagine que seu documento HTML seja uma árvore, e cada elemento HTML seja um galho. Com querySelector(), você pode pegar um galho específico dessa árvore. Ele busca apenas o **primeiro elemento** que corresponda ao seletor que você fornecer.
- **innerHTML:** Permite **ler ou modificar o conteúdo HTML dentro de um elemento HTML**. Imagine que você tenha uma caixa e `innerHTML` é o que você vê dentro dessa caixa. Você pode tanto olhar o que está lá dentro (ler), quanto colocar coisas novas ou trocar o que já está lá (modificar).

### Exemplos:
- **document.querySelector:**

```javascript
let title = document.querySelector("h1");  // vai selecionar o primeiro elemento h1 do HTML
```

- **innerHTML:**
```javascript
let title = document.querySelector("h1");
title.innerHTML = "Jogo do número secreto";  // vai adicionar o texto ao elemento h1
```

### Lista de exercícios - 01
 - [x] Altere o conteúdo da tag `h1` com `document.querySelector` e atribua o seguinte texto: `Hora do Desafio`.
 - [x] Crie uma função que exiba no console a mensagem `O botão foi clicado` sempre que o botão `Console` for pressionado.
 - [x] Crie uma função que exiba um alerta com a mensagem: `Eu amo JS`, sempre que o botão `Alerta` for pressionado.
 - [x] Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: `Estive em {cidade} e lembrei de você`.
 - [x] Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

