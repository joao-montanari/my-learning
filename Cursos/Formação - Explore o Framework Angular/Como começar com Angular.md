
Nesse artigo é abordado pontos importantes para direcionar o aprendizado, desde a história do framework até pré-requisitos, estruturas fundamentais, ferramentas auxiliares e dicas para começar a explorar o Angular.

### História e versões
A história do Angular começa com a primeira versão em 2009. Desenvolvido dentro da Google, o framework era baseado em [JavaScript](https://www.alura.com.br/artigos/javascript) e seguia a filosofia de programação declarativa, estendendo o HTML para facilitar a criação de interfaces com conteúdo dinâmico. Entretanto, com o crescimento da web e o uso da biblioteca, ficaram claros defeitos que exigiam muitos ajustes no código. Assim, uma nova versão foi lançada em 2016, uma reescrita focada em TypeScript, programação reativa e vários outros conceitos e melhorias. Inicialmente, a nova versão foi chamada de Angular 2.

Por ser uma reescrita do zero, decidiu-se por separar ambos. Assim, o que era chamado de Angular 2 é um framework, e a antiga versão é outro. Porém, Angular 2 é um nome ligado à versão 2.0, o que geraria confusão entre as pessoas com novas atualizações.

O que então era Angular 2, hoje é apenas Angular e a versão antiga chama-se AngularJS. Dessa forma, o novo framework poderia crescer e receber novas atualizações sem gerar confusão.

Após a versão 2, houve a atualização para a versão 4, pulando a versão 3. Isso ocorreu para evitar mais confusão já que o pacote do roteador havia sido distribuído com a versão 3.

Desde então, o Angular cresceu muito e atualizações com melhorias são lançadas frequentemente com suporte da Google, que o utiliza em grande parte de seus projetos.

Se notarmos como estava o framework em janeiro de 2024, veremos que ele se encontrava na versão 17.1.1.Entre as versões 2 e 15 não houve mudanças drásticas, e por isso, o aprendizado não se perde. As atualizações são focadas em melhorias pontuais e incrementais.

Apenas com a chegada da **versão 16** é que começamos a receber novas funcionalidades em modo de teste, que foram oficializadas a partir da **versão 17** do Angular, como foi o caso dos [Signals](https://www.alura.com.br/artigos/entendendo-signals-angular).

Essa versão foi a primeira que trouxe algumas mudanças grandes que impactam na experiência de aprendizado e desenvolvimento e caso tenha curiosidade de conhecer essas mudanças.

#### Linha do tempo: Versões do Angular
- **2009:** Google lança a versão Angular 1.0, posteriormente conhecida como AngularJS.
- **2016:** Angular 2.0 - A versão reescrita em TypeScript que hoje conhecemos como Angular.
- **2017:** Angular 4.0 - Melhorias do desempenho e suporte para HttpClient na release 4.3.
- **2017:** Angular 5.0 - Otimizador de build e suporte para web apps progressivos.
- **2018:** Angular 6.0 - Introdução a ferramentas como Angular Elements.
- **2018:** Angular 7.0 - Melhorias no Angular Material e prompts no CLI.
- **2019:** Angular 8.0 - Preview do compilador Ivy.
- **2020:** Angular 9.0 - Compilador Ivy como padrão.
- **2020:** Angular 10 - Inclusão da flag --strict ao criar projeto.
- **2020:** Angular 11 - Inclusão da flag --hmr para facilitar Hot Module Replacement.
- **2021:** Angular 12 - View Engine descontinuado e melhorias na estilização com Sass.
- **2021:** Angular 13 - Remoção do View Engine e atualização na API do componentes.
- **2022:** Angular 14 - Standalone Components em preview.
- **2022:** Angular 15 - Standalone Components estáveis.
- **2023:** Angular 16 - Signals e suporte experimental ao Jest.
- **2023:** Angular 17 ou "resnascimento" - Nova documentação, melhorias na pessoa desenvolvedora, Server-side Rendering, entre outras mudanças.

### O que é o Angular?
Quando falamos de Angular, geralmente estamos falando do framework, mas nem sempre é assim. **Angular é um ecossistema completo, uma plataforma de desenvolvimento que inclui o framework e bibliotecas próprias, tendo em mente as necessidades comuns do desenvolvimento de interfaces e ferramentas para testar, atualizar e fazer o build do projeto**.

Como framework, Angular é baseado em componentes, que são trechos de código reutilizáveis escritos em HTML, TypeScript e CSS. Geralmente representam um elemento da interface. Podem ser testados, usando frameworks como Jest e Jasmine, sendo o último o padrão em projetos Angular gerados pela CLI. Atualmente, o time de desenvolvedores(as) do Angular está promovendo algumas mudanças nas ferramentas de teste. No entanto, a informação divulgada é que o Jasmine permanecerá como padrão, porém agora integrado ao Web Test Runner.
- HTML
- CSS
- TypeScript
- Jasmine

O HTML possui propriedades especiais como diretivas e interpolação que permitem construir conteúdo dinâmico, usando comportamentos e valores definidos na classe do componente escrita em TypeScript. Dessa forma, a biblioteca é popular por ser muito conectada a conceitos como separação de responsabilidades, padrões de projetos e arquitetura modular.

A hierarquia desses componentes também é muito importante. Esses artefatos podem ser compostos por vários outros, e dessa forma, podem se comunicar, sendo essa comunicação com o componente acima ou abaixo.

Angular é uma plataforma completa para desenvolvimento de interfaces, focada no desenvolvimento de aplicações escaláveis, e com pilares na Orientação a Objetos e padrões MVC. Além disso, as possibilidades não estão limitadas à web, com soluções para desenvolvimento de aplicativos móveis e desktop.

### Pré-requisitos e leitura do código
Os requisitos são: HTML, CSS e JavaScript. A biblioteca não utiliza JavaScript puro e sim [TypeScript](https://www.alura.com.br/formacao-typescript-desenvolva-front-end-produtividade), uma versão do JavaScript com funcionalidades adicionais como tipagem. Também é interessante conhecer Orientação a Objetos que é muito utilizada durante o desenvolvimento.

Ainda que você não tenha uma base sólida em todos os requisitos, os projetos são bem estruturados o que facilita o desenvolvimento, porque a clara definição e replicação das estruturas permite que grande parte do código possa ser gerado por outras ferramentas (como a CLI e extensões para editores de código).

Por outro lado, como o Angular é muito verboso e bem automatizado, a leitura de código se torna importante. Entender o que o framework fez, o que compõe um artefato e perceber padrões como [injeção de dependências](https://www.alura.com.br/artigos/services-injecao-dependencia-angular-o-que-sao-como-funcionam) são pontos importantes para o aprendizado.

Um [componente](https://www.alura.com.br/artigos/angular-como-funciona-um-componente), por exemplo, não passa de uma classe escrita em TypeScript, porém, como o Angular possui muitas ferramentas prontas para transformar essa classe em um componente, alguns trechos de código ao redor dela podem fazer uma pessoa iniciante acreditar que não faz a menor ideia do que está acontecendo ali.

Outro ponto importante: utiliza-se muitas classes de pacotes Angular. Como dito anteriormente, o framework é parte de uma plataforma de desenvolvimento que conta com várias bibliotecas. É essencial entender que a plataforma possui vários pacotes para várias tarefas diferentes, como rotas e formulários.

### Estruturas e padrões
O mais simples componente possível em uma aplicação Angular ainda carrega um bom código em TypeScript. Como esse código é padronizado, nem sempre entendemos o que realmente faz ou como funciona. Até por isso, criar componentes geralmente pode seguir dois caminhos: escrever do zero seguindo a estrutura do primeiro componente criado ou usar a Angular CLI (que também será comentada neste artigo). Nenhum dos dois métodos é um problema, faz parte.

Porém, procure sempre observar o código que foi criado para você e, ao invés de entender tudo, procure pontos que sejam familiares: palavras-chave, nomes, operações. Isso ajuda a desmistificar aquele código. No fim, o Angular pode usar várias classes próprias via herança, tipos próprios, mas nunca fará algo completamente distante e indecifrável, por mais que sejam muitas camadas de lógica internas.

De toda forma, quando falamos de estruturas de artefatos aqui, estamos inevitavelmente falando de TypeScript, o que não significa que você deve conhecer tudo de TypeScript, muito pelo contrário. No início, procure se atentar às seguintes funcionalidades:
- Classes, interfaces e herança (extends e implements);
- Métodos, atributos e construtores;
- Decorators;
- Sintaxe de declaração de tipos;
- Injeção de dependência.

Você verá essas estruturas por todo o código, e entendendo-as, pode se sentir mais confortável e confiante. Um exemplo simples é o próprio componente, que contém os padrões citados:

```
import { Component, OnInit } from ‘@angular/core’; 

@Component({ // Decorator 
	selector: ‘botao’ 
	templateUrl: ‘./botao.component.html’, 
	styleUrls: [‘./botao.component.css’], 
}) 

export class BotaoComponent implements ngOnInit { 
	constructor(private exemploService: ExemploService) { 
		// injeção de dependência 
	} 

	ngOnInit { 
		// método 
	} 
}
```

Relacionado a isso, a [documentação do Angular](https://angular.dev/overview) pode ajudar muito. Como a maioria dos dados que são manipulados e métodos que são utilizados implementam alguma interface ou classe, é muito proveitoso verificar a documentação e entender quais são os formatos, entradas e saídas desses artefatos.

### Principais padrões
Itens importantes de se ter em mente no início são:
- Components - [Seção na documentação oficial](https://angular.dev/guide/components)
- Templates - [Seção na documentação oficial](https://angular.dev/guide/templates)
- Diretivas Embutidas - [Seção na documentação oficial](https://angular.dev/guide/directives)
- Injeção de Dependências - [Seção na documentação oficial](https://angular.dev/guide/di)

Os quatro itens acima são muito comuns de se usar porque todos estão relacionados à criação de componentes. Components e Templates, juntos, geram componentes funcionais e visualizáveis. Enquanto Diretivas e Injeção de Dependências permitem operações mais sofisticadas.

Simplificando ao máximo, Injeção de Dependências é um nome refinado para o método de receber como parâmetro objetos/funções que um código depende, ao invés de criar essas dependências diretamente dentro do escopo do código. Lógico que esse processo exige algumas configurações e cuidados, mas o comportamento é esse. Injeção de Dependências, inclusive, é um conceito usado por toda a programação, no front-end e no back-end, e começar a usá-la pelo Angular é uma ótima forma de aprender, porque não exige nenhuma configuração.

Diretivas parecem atributos HTML. São colocadas no template, e acessam o elemento/componente para operar algum tipo de lógica. Elas dão flexibilidade ao código, permitindo que o template se torne dinâmico.

Diretivas podem ser criadas, mas os pacotes Angular possuem várias para que ações comuns possam ser feitas com menos código. O pacote ‘@angular/common’ é o mais comum e permite usar condicionais e laços no template, como abaixo.

```
@if (usuarioLogado) { 
	<ul> 
		@for (transacao of extrato; track $index) { 
			<li>{{ transacao.valor }}</li> 
		} 
	</ul> 
} @else { 
	O usuário precisa fazer login! 
}
```

Acima, se a variável `usuarioLogado` for verdadeira, a lista será mostrada e para cada item de `extrato` teremos uma `li`, usando o laço `for` com o `@for`.

### Ferramentas: Angular CLI e DevTools
As ferramentas oferecidas pelo Angular são soluções que melhoram a experiência de desenvolvimento. Aqui, temos duas ferramentas muito úteis para começar a usar o quanto antes: CLI e DevTools.

### Angular CLI
A CLI é uma ferramenta que pode ser instalada na sua máquina para trabalhar em aplicações Angular com mais praticidade. Criar projetos, criar artefatos e outras ações rotineiras são facilitadas pela CLI. Outro ponto importante para qualquer iniciante é entender que a CLI é uma aplicação que roda no terminal, oferece comandos para que você use no seu projeto, mas não é parte do framework, apenas outra solução que faz parte do ecossistema da plataforma.

Aqui na Alura, temos um artigo que tem foco nos principais pontos da CLI: [Criando aplicações Angular com Angular CLI](https://www.alura.com.br/artigos/criando-aplicacoes-angular-com-angular-cli).

Se quiser saber mais sobre a Angular CLI, pode visitar a documentação: [Angular CLI](https://angular.dev/tools/cli).

### Angular DevTools
Uma das coisas mais desafiadoras no desenvolvimento com frameworks é entender comportamentos inesperados. Um dado não aparece no componente que deveria ou uma ação não é executada quando se espera. Como toda essa lógica é implementada várias camadas acima do HTML e JavaScript puro, não é tão simples procurar o problema, mas o DevTools resolve isso. Essa ferramenta é uma extensão para seu navegador baseado em Chromium (Google Chrome, Microsoft Edge, Brave, Vivaldi, entre outros) que detecta websites que utilizam Angular e oferece algumas ferramentas de análise.
- [Baixe o Angular DevTools na Chrome Web Store](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh).
- [Leia a documentação oficial da ferramenta](https://angular.dev/tools/devtools).
- Para acessar a DevTools, após a instalação, é necessário abrir as Ferramentas do Desenvolvedor (CTRL + Shift + I, por padrão) e procurar pela aba Angular.

A funcionalidade mais interessante em um primeiro momento é a aba Components. Nela é possível verificar toda a árvore de componentes renderizados no momento, e em cada componente ver suas propriedades, dados provenientes do componente-pai, eventos, etc.

Assim fica fácil verificar qual é o atual estado de um componente, qual o valor daquela propriedade naquele momento sem precisar de vários console.log().

### Programação reativa, RxJS e Observables
O Angular utiliza muito o padrão Observable para trabalhar com dados assíncronos. É um tópico relativamente mais avançado, e não é obrigação de nenhum iniciante entender o que está acontecendo a fundo.

Assim, tenha muita atenção e tente sempre entender separadamente o que é Angular e o que é RxJS. Caso queira entender melhor o que é programação reativa recomendamos que assista ao Alura+ do instrutor Vinicius Dias: [O que é Programação Reativa?](https://www.youtube.com/watch?v=ifA-57jTk7Y&ab_channel=Alura)

### Conclusão
Vimos alguns pontos que compõem a plataforma Angular, de pré-requisitos a ferramentas complementares, mas como planejar seus estudos?

É interessante ler a [documentação](https://angular.dev/) de forma linear, seguindo tutoriais, definições e explicações de conceitos. Vale ressaltar que a documentação está em inglês, mas navegadores atuais permitem tradução das páginas, o que pode ajudar.

Aqui na Alura, temos formações do básico ao avançado. A formação **Angular: crie aplicações web ágeis** possui cursos que vão do básico ao desenvolvimento Angular, passando por HTML, CSS, JavaScript, TypeScript e Angular. Além disso, também temos a formação **Explore o Framework Angular**, para quem já tem as habilidades de pré-requisito e quer começar a desbravar esse framework. Se você já conhece bem o Angular e quer se aprofundar de modo mais avançado, indicamos a formação **Desenvolva Aplicações Escaláveis com Angular**.Confira abaixo:

- [Formação Angular: crie aplicações web ágeis](https://www.alura.com.br/formacao-angular-crie-aplicacoes-web-ageis);
- [Formação Explore o Framework Angular](https://www.alura.com.br/formacao-angular-14);
- [Desenvolva Aplicações Escaláveis com Angular](https://www.alura.com.br/formacao-aplicacoes-escalaveis-angular).

E lembre-se: Angular e seus pré-requisitos são conteúdos extensos, paciência faz parte do processo, como também aceitar que não precisa aprender tudo de uma vez só. Experimente e desfrute do aprendizado, e não tenha medo de aprender tentando!

### Autores: 
- **Rafaela Petelin Silvério**
	Graduanda em Sistemas de Informação e Técnica em Desenvolvimento de Sistemas pela ETEC, atua como Scuba, na área de Front-end. Apaixonada por tecnologia, está sempre buscando aprender coisas novas. Seus hobbies favoritos são ler, programar, estudar novos idiomas e assistir séries de comédia.
- **Leonardo Negrão**
	Desenvolvedor Full-Stack que puxa pro lado do Front-End. Estudante de Engenharia de Software cansado. Entusiasta em UX/UI Design.