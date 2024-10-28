- **alert:** serve para mostrar uma mensagem na tela com uma caixa flutuante.
- **prompt:** mostra uma caixa flutuante com uma entrada de texto na onde o usuário pode inserir informações.
- **console.log:** permite colocar mensagens de texto dentro do console do navegador. É importante lembrar que, quando o projeto ficar disponível para todas as pessoas, o que chamamos no contexto de software de ambiente de produção, os comandos `console.log` devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança.
- **comentários:** para colocar um comentário em um arquivo JS é preciso inserir duas barras (//) no início do texto.
- **Math.random:** A função tem o objetivo de retornar um número racional (decimal) pseudo-aleatório entre 0 e 1, sendo o 0 inclusivo e o 1 exclusivo e com uma precisão de até 16 casas decimais.

### Exemplos
- **alert:**
```
alert("Welcome to secret number game!");
```

- **prompt:**
```
let chooseNumber = prompt("Choose a number between 1 and 100");
```

- **console.log:**
```
console.log("Você acertou o número secreto");
```

- **comentário:**
```
// exemplo de comentário
```

- **Math.random():**
```
let aleatorio01 = Math.random();   // Gera um número aleatorio entre 0 e 0.9
let aleatorio02 = Math.random() * 10;   // Gera um número aleatório entre 0 e 9
let aleatorio03 = parseInt(Math.random() * 10);   // Gera um número aleatório inteiro entre 0 e 9
```

### Tipos de operadores lógicos
| Operador | Nome           | Exemplo | Resultado                              |
| -------- | -------------- | ------- | -------------------------------------- |
| ==       | Igual          | A == B  | Verdadeiro se A for igual a B          |
| !=       | Diferente      | A != B  | Verdadeiro se A não for igual a B      |
| <        | Menor que      | A < B   | Verdadeiro se A for menor que B        |
| >        | Maior que      | A > B   | Verdadeiro se A for maior que B        |
| <=       | Menor ou igual | A <= B  | Verdadeiro se A for menor ou igual a B |
| >=       | Maior ou igual | A >= B  | Verdadeiro se A for maior ou igual a B |

### Operadores lógicos
| Operador | Nome    | Exemplo               | Resultado                                              |
| -------- | ------- | --------------------- | ------------------------------------------------------ |
| &&       | E / AND | (A > B) && (B == C)   | Verdadeiro se A for maior que B **E** B for igual a C  |
| \|\|     | OU / OR | (A > B) \|\| (B == C) | Verdadeiro se A for maior que B **OU** B for igual a C |
| !        | NEGAÇÃO | !(A == B)             | Verdadeiro se A **NÃO** for igual a B                  |

### Lista de exercícios - 01
- [x] Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
- [x] Declare uma variável chamada `nome` e atribua a ela o valor "Lua".
- [x] Crie uma variável chamada `idade` e atribua a ela o valor 25.
- [x] Defina uma variável `numeroDeVendas` e atribua a ela o valor 50.
- [x] Defina uma variável `saldoDisponivel` e atribua a ela o valor 1000.
- [x] Exiba um alerta com o texto "Erro! Preencha todos os campos"
- [x] Declare uma variável chamada `mensagemDeErro` e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável `mensagemDeErro`.
- [x] Use um prompt para perguntar o nome do usuário e armazená-lo na variável `nome`.
- [x] Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável `idade`.
- [x] Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

### Lista de exercícios - 02
- [x] Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
- [x] Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
- [x] Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar".
- [x] Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
- [x] Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

### Lista de exercícios - 03
- [x] Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
- [x] Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
- [x] Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
- [x] Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

### Lista de exercícios - 04
- [x] Crie um programa que utilize o `console.log` para exibir uma mensagem de boas-vindas.
- [x] Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, seu nome!" no console do navegador.
- [x] Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o `alert` para exibir a mensagem "Olá, seu nome!" .
- [x] Utilize o `prompt` e faça a seguinte pergunta: `Qual a linguagem de programação que você mais gosta?`. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
- [x] Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de valor1 e valor2 é igual a resultado." no console.
- [x] Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre valor1 e valor2 é igual a resultado." no console.
- [x] Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
- [x] Crie uma variável "numero" e peça um valor com `prompt` verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
- [x] Use um loop while para imprimir os números de 1 a 10 no console.
- [x] Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
- [x] Use o `Math.random` para gerar qualquer número aleatório e exiba esse número no console.
- [x] Use o `Math.random` para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
- [x] Use o `Math.random` para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.