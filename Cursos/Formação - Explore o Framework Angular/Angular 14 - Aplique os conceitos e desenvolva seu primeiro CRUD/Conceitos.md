
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

### Diretório de arquivos
Os arquivos são importados por meio de tag, parecendo uma tag html comum. Ao criar um componente usando o comando `ng generate component <my-component>`, o Angular atualiza automaticamente o arquivo `app.module.ts` importando o novo componente e o adicionando na lista de `declarations`.

### Propriedade Template
Para poder criar um template de um componente não é possível usar a propriedade `template` dentro do `*.component.ts`, veja o exemplo abaixo usando o `app.component.ts`

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Desafio Aula 1
      </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'projeto-test';
}
```

