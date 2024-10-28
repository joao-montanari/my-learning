
## Acoplamento:
O acoplamento corresponde ao grau de independência entre dois componentes de um software. Quando há um baixo acoplamento, um componente consegue operar de forma praticamente independente do outro. Alto acoplamento já implica em uma conexão forte entre os dois, que pode torná-los até indistinguíveis.
Quando o acoplamento é alto, as partes do código estão **fortemente interligadas**, como se fossem peças de um quebra-cabeça que só encaixam de um jeito. Se você mudar uma peça, pode ser que precise mudar várias outras para que tudo continue funcionando.

## Template Strings
Este é um conceito que aparece na linguagem de programação do Java Script. Basicamente se tratam de strings que permitem variáveis e expressões dentro delas. Template Strings são uma ferramenta poderosa que pode tornar o seu código mais legível e fácil de manter. Você pode usá-las para criar mensagens personalizadas, formatar strings de forma complexa.

```
let name = "João";
let message = `Hello ${name}, welcome!`;
console.log(message);
```

## Ponto e virgula no Java Script
No Java Script, o uso do ponto e vírgula (`;`) é uma prática recomendada. A linguagem possui um mecanismo chamado "inserção automática de ponto e vírgula" (automatic semicolon insertion - ASI), que tenta adicionar ponto e vírgulas automaticamente em certos pontos do código onde eles são ausentes.

Isso significa que, em alguns casos, o Java Script tentará "corrigir" a falta de ponto e vírgula inserindo-o automaticamente. No entanto, a interpretação do ASI pode levar a comportamentos inesperados e erros sutis, especialmente quando as regras não são claras.

Portanto, para evitar possíveis problemas e garantir a clareza do código, muitos desenvolvedores preferem adicionar explicitamente ponto e vírgula em seus programas.

Apesar da inserção automática de ponto e vírgula poder ajudar a mitigar erros de sintaxe, é uma boa prática adicionar ponto e vírgula manualmente para evitar ambiguidades e problemas de interpretação. Isso é particularmente importante em situações como quando várias instruções estão em uma mesma linha, ao usar declarações de retorno de valor ou ao minificar o código.

Em projetos colaborativos ou de grande escala, a consistência no estilo de codificação e a clareza do código são cruciais, e o uso explícito de ponto e vírgula contribui para um código mais legível e menos sujeito a erros de interpretação por parte dos programadores e do próprio mecanismo de ASI.

### Operador ternário
Esta operador pode ser útil em situações em que desejamos atribuir a uma variável, valores diferentes de acordo com determinadas condição. Usando o operador condicional ternário podemos escrever:

```
let Y = (X == 20) ? 50 : 70;
```

Se X for igual a 20 então Y é igual a 50, se não Y é igual a 70.