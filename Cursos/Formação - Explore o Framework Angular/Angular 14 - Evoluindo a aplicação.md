
## Introdução
Este curso foi feito baseado em uma aplicação de aprendizado chamada Memoteca. Por isso, a recomendação para esse curso é para quem já conhece a estrutura e os conceitos fundamentais do _Angular_ e para aprender como dar os próximos passos.
Você vai aprender como construir um formulário reativo e aplicar validações nele para conseguir mostrar mensagens de erro para a pessoa usuária e também deixar o botão de salvar desabilitado de acordo com o status do formulário.
Você vai conseguir implementar um campo de busca e também paginação dos dados. Além da funcionalidade de favoritar.
Para conseguir fazer tudo isso, vamos mergulhar ainda mais fundo no _Angular_ e aprender sobre a classe _validators_, aprender como utilizar o _HttpParams_ para passar parâmetros na _URL_, utilizar o serviço _Router_ para recarregar um componente.

## Pré-requisitos
- JavaScript - Programando a orientação a objeto
- JavaScript - Explorando a linguagem
- [[Angular 14 - Aplique os conceitos e desenvolva seu primeiro CRUD]]
- TypeScript Part 1 - Evolving your JavaScript
- TypeScript Part 2 - Avançando na linguagem

## Temas
- Aprenda a construir formulários reativos
- Aplique validações no formulário através da classe Validators
- Acrescente a funcionalidade de busca na aplicação
- Adicione paginação aos dados
- Envie parâmetros na URL por meio do HttpParams
- Implemente a função "favoritar"
- Utilize o serviço Router para recarregar um componente

---
# COMANDOS

---
# CONCEITOS

### Formulário com FormBuilder
O `formBuilder` é uma classe que facilita a criação de formulários reativos. Ele fornece métodos que ajudam a construir instâncias de `FormGroup` e `FormControl` de maneira mais simples e concisa.
Ao invés de criar cada controle de formulário manualmente, o `formBuilder` permite que você agrupe esses controles em um único objeto, o que torna o código mais limpo e fácil de entender. Por exemplo, é possível usar o método `group` do `FormBuilder` para criar um `FormGroup` que contém vários controles de formulário.
Para poder usar o `FormBuilder` no projeto é preciso seguir alguns passos:

**Importação do `ReactiveFormsModule` no app.module.ts:**

```typescript
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...],
  imports: [
    ...,
    ReactiveFormsModule // adiciona a propriedade nos imports
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
```

**Utilização da classe no componente:**

```typescript
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})

export class Componente implements OnInit {
	formulario!: FormGroup; // criacao da instancia

	constructor(
		private formBuilder: FormBuilder, // injeção no construtor
	) {}

	ngOnInit(): void {
		// criação da do grupo com os valores iniciais de cada campo
	    this.formulario = this.formBuilder.group({
	      conteudo: ['Formulário reativo'],
	      autoria: [''],
	      modelo: ['modelo1'],
	    });
	 }
}
```