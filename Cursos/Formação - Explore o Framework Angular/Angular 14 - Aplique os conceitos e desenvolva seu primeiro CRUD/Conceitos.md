
### O que é Angular
É um framework em front-end criado para desenvolver as aplicações de página única (Single-page application SPA). Por ser uma ferramenta tão completa é considerada uma verdadeira plataforma de desenvolvimento.
- Estrutura baseada em componentes.
- Coleção de bibliotecas integradas.
- Conjunto de ferramentas de desenvolvimento.

### Diretórios e arquivos
- **.browserslistrc:** Lista todos os navegadores que suportam o Angular
- **styles.css:** Estilização global da aplicação. Usado para poder definir um estilo que vai ser usado durante toda a aplicação e não apenas em um único local.
- **polyfills.ts:** Arquivo para dar suporte para navegadores mais antigos.
- **environments:** Na onde são configuradas as variáveis de ambiente para produção e para desenvolvimento.
- **main.ts:** Arquivo de entrada.

### Componentes
Os arquivos são importados por meio de tag, parecendo uma tag html comum. Ao criar um componente usando o comando `ng generate component <my-component>`, o Angular atualiza automaticamente o arquivo `app.module.ts` importando o novo componente e o adicionando na lista de `declarations`.
Ao criar um componente no Angular usando o comando de `ng generate component <my-component>` é criado um diretório com 4 arquivos, na onde cada um é responsável por um comportamento e funcionalidade do componente.
- **CSS:** Arquivo responsável por conter todo o estilo.
- **HTML:** Responsável por toda a estrutura de template.
- **SPEC.TS:** Arquivo de teste.
- **TS:** Contém toda a lógica de comportamento .

### Propriedade Template
Para poder criar um template de um componente não é possível usar a propriedade `template` dentro do `*.component.ts`, veja o exemplo abaixo usando o `app.component.ts`

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Hello world!
      </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'projeto-test';
}
```

---
### Property Binding
Property Binding ou **Vinculação de Propriedade**, ajuda o desenvolvedor a definir valores que se encontram no arquivo **component.ts** para as propriedades de elementos ou diretivas no HTML. É possível usar a vinculação de propriedades para fazer coisas como alterar recursos de botões, definir caminhos programaticamente e compartilhar valores entre componentes.

**Conteúdo no component.ts:**

```
thought = {
	id : "1",
	conteudo : "Aprendendo Angular",
	autoria : "Dev",
	modelo : "",
}
```

**Propriedade sendo usada no template HTML:**

```
<input
	type="text"
	class="input"
	id="input" 
	name="input"
	placeholder="Digite..."
	[value]="objeto.atributo" // utlização do Property Binding
>
```
Perceba que o campo "value" da tag input é envolvido com colchetes para aceitar valores de referencia do arquivo **component.ts**.


**Interpolação no template HTM:**
A interpolação é uma forma de usar o Property Binding quando não temos uma propriedade na tag HTML para fazer uma vinculação,

```
<p>{{ objeto.atributo }}</p>
```

---
### Event Binding
Event Binding ou **Vinculação de Eventos**, permite ao desenvolvedor escutar a resposta às ações do usuário, como pressionamentos de teclas, movimentos do mouse, clique e toques. Dessa forma podemos vincular eventos do usuário com funções que se encontram dentro do arquivo de lógica TypeScript.

**Evento no component.ts:**

```
helloFunction() {
	alert("Hello world!");
}
```

**Evento sendo usada no template HTML:**

```
<button
	(click)="helloFunction()"
>
	Hello
</button>
```
Perceba que adicionamos o campo "click" envolvido por chaves para escutar e receber como parâmetro os eventos que existem no componente.

---
### Two-way binding
Two-way binding ou **vinculação bidirecional**, fornece aos componentes do seu aplicativo uma maneira de compartilhar dados. A vinculação bidirecional serve para escutar eventos e atualizar valores simultaneamente entre componentes pai e filho. Assim, fornecemos para o usuário a possibilidade de realizar alterações nas variáveis e funcionalidades que existem dentro do **component.ts** por meio de eventos e interações.

**Propriedade sendo usada no template HTML:**

```
<input
	type="text"
	class="input"
	id="input" 
	name="input"
	placeholder="Digite..."
	[(ngModel)]="thought.conteudo" // utilização do Two-way binding
>
```
Observe que anteriormente o  campo `thought.conteudo` estava sendo usado na tag input por meio do parámetro `value` envolvido por colchetes. Quando usamos a vinculação bidirecional retiramos o `[value]` e substituímos por `[(mgModel)]`.

**Adicionando o MgModel ao contexto do projeto:**

```
import { FormsModule } from '@angular/forms'; // importação do FormsModule

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		TitleComponent,
		CreateThoughtsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule, // Adiciona o FormsModule aos imports
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
```
Para usar o **MgModel** é preciso adicionar essas mudanças no arquivo `app.module.ts`.

---
### Navegação Dinâmica
Para poder criar rotas em uma aplicação Angular é necessário usar o **RouterOutlet** que atua como um espaço reservado que o Angular preenche dinamicamente com base no estado atual do roteador.

**Adicionar o RouterOutlet no contexto do projeto:**

```
<app-header></app-header>
<main>
	<router-outlet></router-outlet> // tag do RouterOutlet
</main>
<app-footer></app-footer>
```
Observe que é necessário adicionar a tag `router-outlet` ao arquivo `app.component.html`.

### Configuração de rotas
Para configurar uma rota é preciso adicionar as especificações no arquivo `app-routing.module.ts` dentro da variável `routes` que lista todas as rotas que existem dentro da aplicação.  É preciso criar um objeto que contenha as propriedades `path` e `component`. Na onde o atributo `path` vai especificar o caminho da rota e o `component` vai especificar o componente que deve ser renderizado dentro dela. Exemplo:

```
{
	path: "home-page",
	component: ElementComponent,
}
```

Também é possível especificar uma rota que deve redirecionar para outra, com os atributos `path`, `redirectTo` e `pathMatch`. O `path` especifica a rota em que o usuário deve estar para ser redirecionado, o `redirectTo` especifica a rota para a qual o usuário vai ser redirecionado e o `pathMatch` serve para especificar qual parte da url deve ser observada para o redirecionamento, podendo ser `full` para a url inteira e `prefix` apenas para a primeira parte da url.

```
{
	path: "",
	redirectTo: "home-page",
	pathMatch: "full"
}
```


**Como adicionar caminho das rotas no app-routing.module.ts:**

```
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';

const routes: Routes = [
	{
		path: "",
		redirectTo: "list-thought",
		pathMatch: "full",
	},
	{
		path: "list-thought",
		component: ListThoughtsComponent,
	},
	{
		path: "create-thought",
		component: CreateThoughtsComponent,
	},
];
```

### Navegação com routerLink
Se trata de um parâmetro que quando aplicado em um elemento em um template, torna esse elemento um link que inicia a navegação para uma rota. A navegação abre um ou mais componentes roteados em um ou mais locais `<router-outlet>` na página. Exemplo:

```
<button
	routerLink="/home-page"
>
	Navegar
</button>
```

### RouterLinkActivate
Rastreia se a rota vinculada de um elemento está ativa no momento e permite que você especifique uma ou mais classes CSS para adicionar ao elemento quando a rota vinculada estives ativa.

**RouterLinkActivate no template app.component.html**

```
<nav>
	<ul>
		<li
			routerLink="/first"
			routerLinkActivate="active" // implementação da classe CSS
			class="links-nav py-1"
		>
			<a>First</a>
		</li>
		<li
			routerLink="/second"
			routerLinkActivate="active" // implementação da classe CSS
			class="links-nav py-1"
		>
			<a>Second</a>
		</li>
		<img
	        class="logo"
	        routerLink="/home"
	        routerLinkActive="active" // implementação da classe CSS
	        src="./assets/logo.png" 
	        alt=""
        >
	</ul>
</nav>
```

**Classes CSS que estão sendo implementadas a partir do app.component.css**

```
.active{
    border-bottom: 5px solid white;
    color: white;
    transition: 300ms ease-in;
}

.logo.active {
    padding-bottom: 13px;
}
```

---
