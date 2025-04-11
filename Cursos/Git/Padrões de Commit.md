
### Introdução 🚀
De acordo com a documentação do **[Conventional Commits](https://www.conventionalcommits.org/pt-br)**, commits semânticos são uma convenção simples para ser utilizada nas mensagens de commit. Essa convenção define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas.

Esses commits auxiliarão você e sua equipe a entenderem de forma facilitada quais alterações foram realizadas no trecho de código que foi commitado.

Essa identificação ocorre por meio de uma palavra e emoji que identifica se aquele commit realizado se trata de uma alteração de código, atualização de pacotes, documentação, alteração de visual, teste...

---
### Resumo do Conventional Commits 🧭
A especificação do Conventional Commits é uma convenção simples para utilizar nas mensagens de commit. Ela define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação. Esta convenção se encaixa com o [SemVer](https://semver.org/lang/pt-BR/), descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.

---
### Tipos de descrição 📖
O commit semântico possui os elementos estruturais abaixo (tipos), que informam a intenção do seu commit ao utilizador(a) de seu código.

| Tipo            | Significado                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `feat`          | Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).                                                                                                                                                                                                                   |
| `fix`           | Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).                                                                                                                                                                                                |
| `docs`          | Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).                                                                                                                                                                                                         |
| `test`          | Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código.                                                                                                                                                                                      |
| `build`         | Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**.                                                                                                                                                                                                                                                  |
| `perf`          | Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**.                                                                                                                                                                                                                                           |
| `style`         | Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint... (Não inclui alterações em código).                                                                                                                                                                                             |
| `refactor`      | Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.                                                                 |
| `chore`         | Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código).                                                                                                                                                              |
| `ci`            | Commits do tipo ci indicam mudanças relacionadas a **integração contínua** (_continuous integration_).                                                                                                                                                                                                                                                            |
| `raw`           | Commits do tipo raw indicam mudanças relacionadas a arquivos de configurações, dados, features, parâmetros.                                                                                                                                                                                                                                                       |
| `cleanup`       | Commits do tipo cleanup são utilizados para remover código comentado, trechos desnecessários ou qualquer outra forma de limpeza do código-fonte, visando aprimorar sua legibilidade e manutenibilidade.                                                                                                                                                           |
| `remove`        | Commits do tipo remove indicam a exclusão de arquivos, diretórios ou funcionalidades obsoletas ou não utilizadas, reduzindo o tamanho e a complexidade do projeto e mantendo-o mais organizado.                                                                                                                                                                   |
| BREAKING CHANGE | Um commit que contém no rodapé opcional o texto `BREAKING CHANGE:`, ou contém o símbolo `!` depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API (isso se correlaciona com [`MAJOR`](https://semver.org/lang/pt-BR/#sum%C3%A1rio) do versionamento semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer _tipo_. |

---
### Complementos de commit ➕
**RODAPÉ:** informação sobre o revisor e número do card no Trello ou Jira. Exemplo: Reviewed-by: Elisandro Mello Refs #133.
**CORPO:** descrições mais precisas do que está contido no commit, apresentando impactos e os motivos pelos quais foram empregadas as alterações no código, como também instruções essenciais para intervenções futuras. Exemplo: see the issue for details on typos fixed.
**DESCRIÇÕES:** Uma descrição sucinta da mudança. Exemplo: correct minor typos in code.

A mensagem do commit deve ser estruturada da seguinte forma:
```git
<tipo>[escopo opcional]: <descrição> 

[corpo opcional] 

[rodapé(s) opcional(is)]
```

---
### Exemplos de descrição 👀

1. **Mensagem de commit sem escopo:**
```git
docs: ortografia correta de CHANGELOG
```

2. **Mensagem de commit com escopo:**
```git
feat(lang): adiciona tradução para português brasileiro
```

3. **Mensagem de commit com `!` para chamar a atenção para quebra a compatibilidade**
```git
feat!: envia email para o cliente quando o produto é enviado
```

4. **Mensagem de commit com escopo e `!` para chamar a atenção para quebra a compatibilidade**:
```text
feat(api)!: envia email para o cliente quando o produto é enviado
```

5. **Mensagem de commit com `!` e BREAKING CHANGE no rodapé:**
```git
chore!: remove suporte para Node 6 

BREAKING CHANGE: refatorar para usar recursos do JavaScript não disponíveis no Node 6.
```

6. **Mensagem de commit com descrição e modificação que quebra a compatibilidade no rodapé**
```git
feat: permitir que o objeto de configuração fornecido estenda outras configurações 

BREAKING CHANGE: a chave `extends`, no arquivo de configuração, agora é utilizada para estender outro arquivo de configuração
```

7. **Mensagem de commit de uma correção utilizando número de ticket (opcional)**
```git
fix: corrige pequenos erros de digitação no código 

veja o ticket para detalhes sobre os erros de digitação corrigidos 

Revisado por: Daniel Nass 
Refs #133
```

---
### Recomendações 📢
- Adicione um tipo consistente com o título do conteúdo.
- Recomendado que na primeira linha deve ter no máximo 4 palavras.
- Para descrever com detalhes, usar a descrição do commit.
- Usar um emoji no início da mensagem de commit representando sobre o commit.
- Os links precisam ser adicionados em sua forma mais autêntica, ou seja: sem encurtadores de link e links afiliados.

---
### Padrões de emojis 💈
| Tipo do commit                        | Emoji                   | Palavra-chave |
| ------------------------------------- | ----------------------- | ------------- |
| Acessibilidade                        | ♿ `:wheelchair:`        |               |
| Adicionando um teste                  | ✅ `:white_check_mark:`  | `test`        |
| Atualizando a versão de um submódulo  | ⬆️ `:arrow_up:`         |               |
| Retrocedendo a versão de um submódulo | ⬇️ `:arrow_down:`       |               |
| Adicionando uma dependência           | ➕ `:heavy_plus_sign:`   | `build`       |
| Alterações de revisão de código       | 👌 `:ok_hand:`          | `style`       |
| Animações e transições                | 💫 `:dizzy:`            |               |
| Bugfix                                | 🐛 `:bug:`              | `fix`         |
| Comentários                           | 💡 `:bulb:`             | `docs`        |
| Commit inicial                        | 🎉 `:tada:`             | `init`        |
| Configuração                          | 🔧 `:wrench:`           | `chore`       |
| Deploy                                | 🚀 `:rocket:`           |               |
| Documentação                          | 📚 `:books:`            | `docs`        |
| Em progresso                          | 🚧 `:construction:`     |               |
| Estilização de interface              | 💄 `:lipstick:`         | `feat`        |
| Infraestrutura                        | 🧱 `:bricks:`           | `ci`          |
| Lista de ideias (tasks)               | 🔜  `:soon:`            |               |
| Mover/Renomear                        | 🚚 `:truck:`            | `chore`       |
| Novo recurso                          | ✨ `:sparkles:`          | `feat`        |
| Package.json em JS                    | 📦 `:package:`          | `build`       |
| Performance                           | ⚡ `:zap:`               | `perf`        |
| Refatoração                           | ♻️ `:recycle:`          | `refactor`    |
| Limpeza de Código                     | 🧹 `:broom:`            | `cleanup`     |
| Removendo um arquivo                  | 🗑️ `:wastebasket:`     | `remove`      |
| Removendo uma dependência             | ➖ `:heavy_minus_sign:`  | `build`       |
| Responsividade                        | 📱 `:iphone:`           |               |
| Revertendo mudanças                   | 💥 `:boom:`             | `fix`         |
| Segurança                             | 🔒️ `:lock:`            |               |
| SEO                                   | 🔍️ `:mag:`             |               |
| Tag de versão                         | 🔖 `:bookmark:`         |               |
| Teste de aprovação                    | ✔️ `:heavy_check_mark:` | `test`        |
| Testes                                | 🧪 `:test_tube:`        | `test`        |
| Texto                                 | 📝 `:pencil:`           |               |
| Tipagem                               | 🏷️ `:label:`           |               |
| Tratamento de erros                   | 🥅 `:goal_net:`         |               |
| Dados                                 | 🗃️ `:card_file_box:`   | `raw`         |

##### Exemplos de utilização:

|Comando Git|Resultado no GitHub|
|---|---|
|`git commit -m ":tada: Commit inicial"`|🎉 Commit inicial|
|`git commit -m ":books: docs: Atualização do README"`|📚 docs: Atualização do README|
|`git commit -m ":bug: fix: Loop infinito na linha 50"`|🐛 fix: Loop infinito na linha 50|
|`git commit -m ":sparkles: feat: Página de login"`|✨ feat: Página de login|
|`git commit -m ":bricks: ci: Modificação no Dockerfile"`|🧱 ci: Modificação no Dockerfile|
|`git commit -m ":recycle: refactor: Passando para arrow functions"`|♻️ refactor: Passando para arrow functions|
|`git commit -m ":zap: perf: Melhoria no tempo de resposta"`|⚡ perf: Melhoria no tempo de resposta|
|`git commit -m ":boom: fix: Revertendo mudanças ineficientes"`|💥 fix: Revertendo mudanças ineficientes|
|`git commit -m ":lipstick: feat: Estilização CSS do formulário"`|💄 feat: Estilização CSS do formulário|
|`git commit -m ":test_tube: test: Criando novo teste"`|🧪 test: Criando novo teste|
|`git commit -m ":bulb: docs: Comentários sobre a função LoremIpsum( )"`|💡 docs: Comentários sobre a função LoremIpsum( )|
|`git commit -m ":card_file_box: raw: RAW Data do ano aaaa"`|🗃️ raw: RAW Data do ano aaaa|
|`git commit -m ":broom: cleanup: Eliminando blocos de código comentados e variáveis não utilizadas na função de validação de formulário"`|🧹 cleanup: Eliminando blocos de código comentados e variáveis não utilizadas na função de validação de formulário|
|`git commit -m ":wastebasket: remove: Removendo arquivos não utilizados do projeto para manter a organização e atualização contínua"`|🗑️ remove: Removendo arquivos não utilizados do projeto para manter a organização e atualização contínua|
