
## Introdução
Ao longo desse curso desenvolveremos o projeto **"MemoTeca"**, o seu mural de pensamentos. Nele você poderá colocar citações de livros, trechos de música, e aquelas frases legais que você quer deixar de reserva para postar como legenda em suas _selfies_.

## Temas
- Utilize a ferramenta Angular CLI para criar um projeto e diversos tipos de arquivos
- Entenda a estrutura de um componente em Angular
- Aprenda como usar property binding, interpolação, event binding e two-way data binding
- Conheça algumas das principais diretivas do Angular
- Adicione navegação dinâmica entre componentes através das rotas
- Aplique injeção de dependências na aplicação
- Realize requisições HTTP através da classe HttpClient e desenvolva um CRUD

## Pré-requisitos
- JavaScript - Programando a Orientação a Objetos
- JavaScript - Explorando a linguagem
- TypeScript parte 1 - Evoluindo o seu JavaScript
- TypeScript parte 2 - Avançando na linguagem

---
# COMANDOS
### Instalação do Angular

```node
npm install -g @angular/cli
```

### Desinstalação do Angular

```node
npm uninstall -g @angular/cli
```

### Criação de um projeto

```node
ng new my-app
Would you like to add Angular routing? Yes
Which stylesheet format would you like to use? CSS
```

### Inicialização do servidor do projeto

```node
ng serve
```

### Comando para criar um componente

```node
ng generate component <my-component>
// ou
ng g c <my-component>
```

### Comando para criar um service

```node
ng generate service <service-name>
// ou
ng g s <service-name>
```


---
# CONCEITOS
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

```typescript
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

```typescript
item = {
	id : "1",
	conteudo : "Aprendendo Angular",
	autoria : "Dev",
	modelo : "",
}
```

**Propriedade sendo usada no template HTML:**

```typescript
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

```html
<p>{{ objeto.atributo }}</p>
```

---
### Event Binding
Event Binding ou **Vinculação de Eventos**, permite ao desenvolvedor escutar a resposta às ações do usuário, como pressionamentos de teclas, movimentos do mouse, clique e toques. Dessa forma podemos vincular eventos do usuário com funções que se encontram dentro do arquivo de lógica TypeScript.

**Evento no component.ts:**

```typescript
helloFunction() {
	alert("Hello world!");
}
```

**Evento sendo usada no template HTML:**

```html
<button (click)="helloFunction()">
	Hello
</button>
```
Perceba que adicionamos o campo "click" envolvido por chaves para escutar e receber como parâmetro os eventos que existem no componente.

---
### Two-way binding
Two-way binding ou **vinculação bidirecional**, fornece aos componentes do seu aplicativo uma maneira de compartilhar dados. A vinculação bidirecional serve para escutar eventos e atualizar valores simultaneamente entre componentes pai e filho. Assim, fornecemos para o usuário a possibilidade de realizar alterações nas variáveis e funcionalidades que existem dentro do **component.ts** por meio de eventos e interações.

**Propriedade sendo usada no template HTML:**

```typescript
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

```typescript
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
Para usar o **MgModel** é preciso realizar essas mudanças no arquivo `app.module.ts`.

---
### Navegação Dinâmica
Para poder criar rotas em uma aplicação Angular é necessário usar o **RouterOutlet** que atua como um espaço reservado que o Angular preenche dinamicamente com base no estado atual do roteador.

**Adicionar o RouterOutlet no contexto do projeto:**

```html
<app-header></app-header>
<main>
	<router-outlet></router-outlet> // tag do RouterOutlet
</main>
<app-footer></app-footer>
```
Observe que é necessário adicionar a tag `router-outlet` ao arquivo `app.component.html`.

### Configuração de rotas
Para configurar uma rota é preciso adicionar as especificações no arquivo `app-routing.module.ts` dentro da variável `routes` que lista todas as rotas que existem dentro da aplicação.  É preciso criar um objeto que contenha as propriedades `path` e `component`. Na onde o atributo `path` vai especificar o caminho da rota e o `component` vai especificar o componente que deve ser renderizado dentro dela. Exemplo:

```typescript
{
	path: "home-page",
	component: ElementComponent,
}
```

Também é possível especificar uma rota que deve redirecionar para outra, com os atributos `path`, `redirectTo` e `pathMatch`. O `path` especifica a rota em que o usuário deve estar para ser redirecionado, o `redirectTo` especifica a rota para a qual o usuário vai ser redirecionado e o `pathMatch` serve para especificar qual parte da url deve ser observada para o redirecionamento, podendo ser `full` para a url inteira e `prefix` apenas para a primeira parte da url.

```typescript
{
	path: "",
	redirectTo: "home-page",
	pathMatch: "full"
}
```


**Como adicionar caminho das rotas no app-routing.module.ts:**

```typescript
import { ListItemsComponent } from './components/items/list-items/list-items.component';

import { CreateThoughtsComponent } from './components/items/create-items/create-item.component';

const routes: Routes = [
	{
		path: "",
		redirectTo: "list-items",
		pathMatch: "full",
	},
	{
		path: "list-items",
		component: ListItemsComponent,
	},
	{
		path: "create-item",
		component: CreateItemsComponent,
	},
];
```

### Navegação com routerLink
Se trata de um parâmetro que quando aplicado em um elemento em um template, torna esse elemento um link que inicia a navegação para uma rota. A navegação abre um ou mais componentes roteados em um ou mais locais `<router-outlet>` na página. Exemplo:

```html
<button
	routerLink="/home-page"
>
	Navegar
</button>
```

### RouterLinkActivate
Rastreia se a rota vinculada de um elemento está ativa no momento e permite que você especifique uma ou mais classes CSS para adicionar ao elemento quando a rota vinculada estives ativa.

**RouterLinkActivate no template app.component.html**

```html
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

```css
.active{
    border-bottom: 5px solid white;
    color: white;
    transition: 300ms ease-in;
}

.logo.active {
    padding-bottom: 13px;
}
```

## Router
Para poder realizar um redirecionamento de pagina dentro de uma função no `component.ts` podemos usar o `router`, que se trata de uma funcionalidade que permite o redirecionamento do usuário para outra página da aplicação.

Para isso é necessário injetar o serviço dentro do construtor do `component.ts` em que ele vai ser usado:

```typescript
import { Router } from '@angular/router'; // importaão do router

@Component({
	selector: 'app-create-items',
	templateUrl: './create-items.component.html',
	styleUrls: ['./create-items.component.css']
})  

export class CreateItemComponent implements OnInit {
	constructor(
		private router : Router // injeção do router
	) { }
 }
```

Logo após isso basta utilizar o `router` dentro de um método:

```typescript
redirectUser() {
	this.router.navigate(['/home-page']);
}
```

### ActivatedRoute
O serviço `ActivatedRoute` serve para fornecer informações sobre as rotas, alinhando alguns de seus métodos como `snapshot` e `paramMap`.
O `snapshot` seria como um captura ou fotografia da rota do momento em que for acessada.

**Injetando o `ActivatedRoute` no `component.ts`:**

```typescript
constructor(
	private route : ActivatedRoute,
) { }
```

**Utilização do ActivatedRoute em um método do `component.ts:**

```typescript
//Trecho de código omitido
ngInit() : void {
	const id = this.route.snapshot.paramMap.get("id");
}
```

Para que o trecho de código exemplificado acima funcione é necessário que a rota da página esteja configurada corretamente para poder receber o `id` como um parâmetro, da seguinte forma:

```typescript
const routes: Routes = [
    //Trecho de código omitido
    {
            path: 'items/delete-item/:id', // especificações do id como parametro
            component: ExcluirItemComponent
    }
    //Trecho de código omitido
];
```

---
### Listando com `*ngFor`
Se trata de uma diretiva estrutural que renderiza um templete para cada item em uma coleção. A diretiva é colocada em um elemento, que se torna o pai dos templates clonados.
A diretiva `*ngFor` se trata do operador `for` para o Angular.

**Variável lista na classe do componente:**

```typescript
itensList = [
	{}, // objeto que descreve o item
];
```

**Lista sendo renderizada com `*ngFor` no template HTML:**

```html
<div *ngFor="let item of itensList">
	<app-item></app-item>
</div>
```

---
### Comunicação entre componentes

##### `@Input()`
Decorador que marca um campo de classe como uma propriedade de entrada e fornece metadados de configuração. A propriedade de entrada é vinculada a uma propriedade DOM no modelo.
O `@Input()` permite passar parâmetros para um componente, assim o desenvolvedor consegue passar informações de um componente "pai" para um componente "filho".

**Variável lista na classe do componente PAI:**

```typescript
itensList = [
	{
		conteudo: "Passo informações para o componente filho",
		autoria: "Componente pai",
	},
	{
		conteudo: "Minha propriedade é decorada com @Input",
		autoria: "Componente filho",
	},
];
```

**Decorador sendo usado na classe do componente FILHO:**

```typescript
@Input() item = {
	conteudo: "Sem conteúdo",
	autoria: "Ninguem",
}
```
Se nenhuma informação for passada como parâmetro para a variável `item` então, os atributos `conteudo` e  `autoria` seriam preenchidos com o conteúdo padrão, que no caso seria "Sem conteúdo" e "Ninguem" respectivamente.

**Componente filho sendo chamado no template do componente PAI com passagem de informações:**

```html
<div *ngFor="let item of itensList">
	<app-item [item]="item"></app-item>
</div>
```

---
### Condições com `*ngIf`
Uma diretiva estrutural que inclui condicionalmente um modelo com base no valor de uma expressão coagida para Boolean. Quando a expressão é avaliada como `true`, o Angular renderiza o modelo fornecido em uma cláusula `then`, e quando `false` ou `null`, o Angular renderiza o modelo fornecido em uma cláusula `else` opcional. O modelo padrão para a cláusula `else` é em branco.
A diretiva `*ngIf` se trata do operador `if` para o Angular.

**`*ngIf` sendo usado no template HTML do componente:**

```html
<div *ngIf="itensList.length > 0, else semItens">
	<div *ngFor="let item of itensList">
		<app-thought [item]="item"></app-thought>
	</div>
</div>
```

**Template que vai ser renderizado caso o `*ngIf` não tenha a condição verdadeira:**

```html
<ng-template #semItens>
	<div>
		<p>Ainda não há itens cadastrados!</p>
	</div>
</ng-template>
```
Como o parâmetro `else` foi adicionada ao `*ngIf` logo é possível especificar o que deve aparecer caso a condição do `*ngIf` não seja verdadeira, é preciso apenas adicionar o nome do Template a condição, que no caso exemplificado acima foi `#semItens`.

---
### Estilização com ngClass
O `ngClass` se trata de um tipo de parametrização que é possível passar para um elemento no template html para realizar estilizações no mesmo usando lógicas da classe do `component.ts`.

**`ngClass` sendo usado no elemento do template HTML:**

```html
<div
	class="container"
	[ngClass]="widthContainer()"
>
</div>
```

**Lógica da classe no `component.ts` que está sendo referenciada no ngClass:**

```typescript
widthContainer() : string {
	if(this.item.conteudo.length >= 256) {
		return "container-big";
	}
	return "container-small";
}
```
Dependendo da condição que existe dentro da função `widthContainer` a classe CSS `container-big` ou `container-small` vai ser adicionada ao elemento `div` no template HTML.

---
### Tipos de diretivas:
**Diretivas de componentes:** Usado com um modelo. Esse tipo de diretiva é a mais comum.
- Exemplo: `<app-item>`
**Diretivas estruturais:** Altera o layout do DOM adicionando e removendo elementos DOM.
- Exemplo: NgIf, NgFor ou NgSwitch.
**Diretivas de atributos:** altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.
- Exemplo: NgClass, NgStyle.

---
### Implementação de interfaces
Um dos princípios básicos do TypeScript é que a verificação de tipos foca na forma que os valores têm. Isso às vezes é chamado de "duck typing" ou "structural subtyping". No TypeScript, as interfaces preenchem o papel de nomear esses tipos e são uma maneira poderosa de definir contratos com código fora do seu projeto.
A interface ajuda a criar estruturas mais complexas de variáveis, auxiliando a definir os tipos dos atributos que compõem um objeto por exemplo. Assim, o desenvolvedor cria um "contrato" que define como as variáveis declaradas com aquele tipo de Interface devem ser.

**Interface Note**

```typescript
interface Note {
	id : number
	conteudo : string
	autoria : string
	modelo : string
}
```

---
### Conhecendo services
A estrutura do Angular é muito organizada, e cada arquivo possui uma habilidade bem definida. Portanto, como boa prática de programação, qualquer arquivo com terminação `component.ts` deve conter apenas a lógica para definição dos comportamentos e possibilitar a renderização dos arquivos na tela.
Considerando essa boa prática, é necessário criar um arquivo `service` (serviço em português) que contenha a lógica de negócio e que seja responsável pela comunicação com o servidor. Este arquivo contém todas as requisições ao servidor, ao mesmo tempo que nos auxilia a separar informações importantes e o modo de obtê-las.
O arquivo `service` se trata de uma classe _typescript_ que possui o decorator `@Injectable` do pacote `@angular/core`. Isso significa que essa classe é "injetável", ou seja, pode ser utilizada em outros componentes e classes através do método de **injeção de dependências**.
O `service` também possui o metadado `providedIn` com o valor `root`, que indica a disponibilidade de utilização ou injeção desta classe por toda a aplicação.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
	
    constructor() { }
}
```

### Injeção de dependência
De acordo com a documentação do Angular, injeção de dependência é um padrão de projeto no qual uma classe solicita dependências de fontes externas ao invés de criá-las.
Dependências são serviços, objetos, funções ou até mesmo um valor que uma classe necessita para desempenhar sua função.

**Sem injeção de dependências:**

```typescript
export class BobComponent {
	// declaração do atributo do serviço
	hamburguerDeSiriService : HamburguerDeSiriService;
	
	constructor() {
		this.hamburguerDeSiriService = new HamburguerDeSiriService();
	}
}
```

**Com injeção de dependências:**

``` typescript
export class BobComponent {
	constructor(private hamburguerDeSiriService : HamburguerDeSiriService) { }
}
```

**Injetando o HttpClient como dependência:**

```typescript
import { HttpClient } from "@angular/common/http";

export class BobComponent {
	constructor(http : HttpClient) {}
}
```

### Tipos de injetores
O decorator `@injectable()`, por padrão, possui um metadado chamado **providedIn**. Esse nome vem de provider (provedor), que significa fornecedor. Ele é o responsável por fornecer uma instância dessa classe através de injeção de dependência. Nesse caso, o valor dessa propriedade: `providedIn: 'root'`, indica que o Angular deve fornecer o serviço no injetor raiz, em outras palavras, significa que esse serviço é visível para toda a aplicação e você pode injeta-lo em qualquer lugar do seu projeto. Essa definição de provider `root` acontece quando queremos ter uma única instância de um serviço em toda a aplicação e pode ser chamada de **Singleton**.

Vale destacar, que o Singleton é um padrão de projeto que busca limitar a quantidade de instâncias de uma classe específica, para que todos os elementos dependentes acessem uma única instância compartilhada. Essa configuração com Singleton pode ser realizada tanto no nível raiz da hierarquia de injeção de dependência quanto através do uso de modificador `providedIn: 'root'`.

Recomenda-se sempre fornecer o seu serviço no injetor `'root'`, a menos que seja um caso em que você deseja que o serviço esteja disponível apenas se o consumidor importar um `@NgModule` específico.

Nesse caso, é possível especificar que um serviço deve ser fornecido em um determinado `@NgModule`. Por exemplo, se você quiser que o `ItemService` só pudesse ser usado nos locais em que um módulo `UserModule` que você criou estivesse importado, você poderia especificar que o service deve ser fornecido no módulo da seguinte forma:

```typescript
import { Injectable } from '@angular/core';
import { UserModule } from './user.module';

@Injectable({
	prividedIn: UserModule
})

export class ItemService {
	constructor() {}
}
```

Além disso, o provider também pode ser definido como any, indicando que um serviço deve ser instanciado de forma diferente com base em se está sendo utilizado em módulos carregados imediatamente (eager loading) ou tardiamente (lazy loading). Se definimos any em módulos carregados imediatamente, todos compartilham a mesma instância do serviço, assim como ocorreria com root. No entanto, em módulos carregados tardiamente, cada módulo recebe sua própria instância do serviço, garantindo isolamento entre os diferentes módulos e evitando conflitos.

Ainda, podemos definir o provider como platform. Na hierarquia de injeção em módulos, o platform é “pai” de root, assim, ele é compartilhado por todas as aplicações na página. Essa abordagem é útil quando você tem várias aplicações Angular em execução em uma única página. Ao fornecer o serviço ao nível da plataforma, você garante que uma única instância desse serviço seja compartilhada entre todas as aplicações Angular na página.

Por fim, há a possibilidade de deixar o injetor como null. Nesse caso, você desabilita a funcionalidade padrão de injeção de dependência para esse serviço e deve fornecer manualmente a instância do serviço sempre que for necessária.

---
### Requisições com HttpClient

Para utilizar o HttpClient dentro do service do projeto é necessário importar o HttpClientModule dentro do arquivo `app.module.ts` na área de importes.

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule, // importação do HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
```

Agora dentro dos services do projeto é possível realizar requisições http usando o `HttpClient`. Dentro do `service` podemos criar métodos responsáveis por executar as funções CRUD (criar, ler, atualizar e deletar) que vão servir para realizar a conexão com a API do projeto.

Para realizar esse tipo de conexão é preciso ir até o `service` e criar uma variável responsável por armazenar a URL da API do projeto:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})

export class ItemService {
	private readonly API = "http://localhost:3000/items";
	
	constructor(private http : HttpClient) { }
}
```
Dentro da classe `ItemService` criamos uma variável chamada `API` que é privada por meio da especificação `private`, e que pode ser apenas lida e não aditada por conta da especificação `readonly`.

Após isso é possível ciar um método que vai ser responsável por realizar uma requisição a API, como por exemplo listar:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Item } from "./item";

@Injectable({
	providedIn: 'root'
})

export class ItemService {
	private readonly API = "http://localhost:3000/items";
	
	constructor(private http : HttpClient) { }

	list() {
		return this.http.get<Item[]>(this.API);
	}
}
```
O método `list()` por meio do `http` injetado consegue realizar a requisição de `get` (read) para o BackEnd usando a variável `API` como atributo. Com este processo feito, temos um método dentro do `service` que solicitará ao HTTP a lista de itens que se encontra na API e que vai recebê-la na forma de um arranjo de itens.

Para que um componente do projeto possa consumir o serviço oferecido por meio do método `list()` basta acessar o arquivo `component.ts` do componente e injetar o `service` dentro do `construtor` dentro da seção `export` da classe.

```typescript
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
	selector: 'app-list-items',
	templateUrl: './list-items.component.html',
	styleUrls: ['./list-items.component.css']
})

export class ListItemsComponent implements OnInit {
	listItems : Item[] = [];
	
	constructor(private service: ItemService) { } //Injeção do service
	
	ngOnInit(): void { }
}
```
Com a injeção realizada por meio do construtor da classe, agora o componente de listagem possui acesso a todos os métodos do serviço.

Para utilizar o método `list()` do `service` podemos usar a seção `ngOnInit()` que se encontra dentro da classe `ListItemsComponent`. Essa seção faz parte da configuração do ciclo de vida do componente, portanto, é possível inserir dentro dela qualquer comando que queremos executar junto ao carregamento do componente.

```typescript
ngOnInit : void {
	this.service.list();
}
```

Para que os métodos do `service` funcionem é preciso entender como o `Observable` funciona, assunto que é abordado no próximo tópico.
### Compreendendo Observables
O `Observable` funciona como de forma similar ao `promise` do _JavaScript_, mas com a vantagem de possuir uma transferência de dados contínua. Ou seja, o `Observable` é capaz de emitir dados várias vezes durante a sua existência. Este comando faz parte da biblioteca RXJS, que é utilizada de forma camuflada pelo _Angular_ e já vem instalada na aplicação.
Para usar o `Observable` basta adiciona-lo dentro dos métodos do `service`. Um `Observable` pode ser acessado em várias partes da aplicação , basta se inscrever usando o método `subscribe()`.

**Adicionando o `Observable` no `service.ts`:**

```typescript
import { Observable } from 'rxjs';
```

```typescript
list() : Observable<Item[]> {
	return this.http.get<Item[]>(this.API);
}
```
Observe que agora especificamos o retorno do método com o `Observable` e a lista  `Item[]`, formando: `Observable<Item[]>`.

Após isso é necessário ir até o arquivo `component.ts` na onde o método está sendo chamado e informar o nosso interesse nas informações que está sendo retornadas por meio do comando `subscribe`. O método `subscribe` sinaliza ao `Observable` que é necessário emitir notificações sempre que houver uma mudança.

**Adicionando o método `subscribe` e aprimorando o método:**

```typescript
ngOnInit(): void {
	this.service.list().subscribe((items))
}
```

Em seguida é possível inserir a função tipo _arrow function_ (também é conhecida como "função de seta") para permitir que a lista de serviço receba a lista do `Observable`.

```typescript
export class ListThoughtsComponent implements OnInit {
	listItems : Item[] = [];
	
	constructor(private service: ItemService) { }
	
	ngOnInit(): void {
		this.service.list().subscribe((items) => {
			this.listItems = items;
		});
	}
}
```

**Criação do método `create` no `service.ts`:**

```typescript
create(item : Item) : Observable<Item> {
	return this.http.post<Item>(this.API, item);
}
```
- Utilização do método do `component.ts`:
```typescript
createItem() {
	this.service.create(this.item).subscribe();
}
```

**Criação do método `delete` no `service.ts`:**

```typescript
delete(id : number) : Observable<Item> {
	const url = "${this.API}/${id}";
	return this.http.delete<Item>(url);
}
```
- Utilização do método do `component.ts`:
```typescript
deleteItem() {
	if(this.item.id) {
			this.service.delete(this.item.id).subscribe(() => {
			this.router.navigate(["/list-items"]);
		});
	}
}
```

**Criação do método `update` no `service.ts`:**

```typescript
edit(item : Item) : Observable<Item> {
	const url = "${this.API}/${item.id}";
	return this.http.put<Item>(url, item);
}
```
- Utilização do método do `component.ts`:
```typescript
editItem() {
    this.service.edit(this.item).subscribe(() => {
      this.router.navigate(["/list-items"]);
    });
}
```


