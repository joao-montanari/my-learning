### Preparando o ambiente: iniciando o projeto

Para começar, vamos usar a ferramenta [SQL Online](https://sqliteonline.com/) para aprender os conceitos iniciais de SQL. Por meio do site é possível importar arquivos CSV que vão ser transformados em tabela, veja um exemplo prático abaixo:

1. Clicar na opção **Import** localizada na parte superior central do site:
![[sql_online_step_01.png]]

2. Uma nova janela de importação será aberta e iremos clicar na opção open:
![[sql_online_step_02.webp]]

3. Isso nos levará à pasta de documentos da sua máquina, onde podemos importar arquivos CSVs, nesse caso é importado a tabela de fornecedores:
![[sql_online_step_03.webp]]

4. Agora as informações do arquivo aparecerão dentro da janela de importação e iremos modificar o nome das colunas (Column name), vamos tirar da opção auto e deixar na opção **first line** e depois clicar em OK, na parte inferior da janela.
![[sql_online_step_04.webp]]

5. Dessa forma a nossa primeira tabela foi importada com sucesso e já está disponível na plataforma para fazermos nossas consultas:
![[sql_online_step_05.webp]]

---
### Acessando o SQLite online

SQL vem do termo em Inglês "_Structured Query Language_" (**Linguagem de Consultas Estruturadas**). É uma linguagem que consegue fazer **consultas em bancos de dados relacionais**.
Os bancos de dados relacionais são bancos de dados que possuem** tabelas que se comunicam**, tabelas que têm **informações que se ligam de alguma forma**. Então, SQL é ideal para trabalhar fazendo consultas nesse tipo de dado. Para isso, precisamos de uma plataforma que leia essa linguagem. Ou seja, um sistema que consiga traduzir essa linguagem SQL e trazer os dados desses bancos de dados.
Para tal, vamos escolher um **SGBD**, sendo um **Sistema Gerencial de Banco de Dados**. E há vários tipos de SGBDs diferentes. Inclusive, vamos deixar uma atividade explicando um pouco mais sobre cada SGBD e as suas particularidades.
Para o projeto, vamos utilizar o _**SQLite Online**_, que é um SGBD que tem uma vantagem: ele **não precisa de instalação**, como a maioria dos SGBDs que exigem um trabalho para fazer instalação. No _SQLite Online_, vamos poder utilizá-lo diretamente no nosso navegador. No navegador, digitamos `sqliteonline.com`. Com isso, entramos na plataforma.

---
### Para saber mais: sistema de gerenciamento de banco de dados

Um Sistema de Gerenciamento de Banco de Dados (SGBD) é uma peça fundamental no mundo da tecnologia da informação. Trata-se de um software projetado para armazenar, organizar, recuperar e gerenciar dados de maneira eficiente e segura.
Nesse sentido, as principais características de um Sistema de Gerenciamento de Banco de Dados são:
1. **Armazenamento Estruturado:** Os SGBDs são projetados para armazenar dados de forma estruturada, o que significa que os dados são organizados em tabelas, com colunas que representam tipos específicos de informações. Essa estrutura facilita a busca e a recuperação de dados.
2. **Segurança:** Os SGBDs oferecem recursos avançados de segurança, incluindo controle de acesso, autenticação e criptografia, para proteger os dados contra acesso não autorizado.
3. **Recuperação de Dados:** Eles fornecem mecanismos para recuperar dados de maneira rápida e eficiente, usando consultas que permitem localizar informações específicas com facilidade.
4. **Concorrência:** Os SGBDs são projetados para permitir o acesso concorrente aos dados, o que significa que várias pessoas ou aplicativos podem acessar e modificar os dados ao mesmo tempo, sem corrompê-los.
5. **Integridade dos Dados:** Garantem a integridade dos dados por meio de restrições e validações, evitando a entrada de informações inconsistentes ou inválidas no banco de dados.
6. **Recuperação de Falhas:** Os SGBDs incluem mecanismos de recuperação que garantem que os dados não sejam perdidos em caso de falhas no sistema, como panes de hardware.
7. **Escalabilidade:** Permitem que os sistemas cresçam à medida que a quantidade de dados e o número de usuários aumentam, sem comprometer o desempenho.
8. **Suporte a Múltiplos Usuários:** Podem atender a várias solicitações de usuários simultaneamente, gerenciando transações de forma eficiente.
9. **Backup e Restauração:** Facilitam a criação de cópias de segurança regulares dos dados, tornando possível a restauração em caso de perda de dados.

Existem vários Sistemas de Gerenciamento de Banco de Dados (SGBD) disponíveis no mercado, cada um com suas características e usos específicos. Aqui estão alguns exemplos populares:
1. **MySQL:** Um SGBD de código aberto amplamente utilizado, conhecido por sua velocidade e confiabilidade. É comumente usado em aplicativos da web e é compatível com várias linguagens de programação.
2. **Oracle Database:** Um SGBD comercial poderoso que é frequentemente usado em empresas para gerenciar grandes volumes de dados. Ele oferece recursos avançados de segurança, escalabilidade e recuperação.
3. **Microsoft SQL Server:** Desenvolvido pela Microsoft, é uma escolha popular para aplicativos Windows e é amplamente utilizado em ambientes corporativos. Oferece integração com tecnologias Microsoft.
4. **PostgreSQL:** Outro SGBD de código aberto, conhecido por sua extensibilidade e suporte a recursos avançados. É usado em uma ampla gama de aplicativos, incluindo sistemas geoespaciais.
5. **SQLite:** Um SGBD incorporado que é leve e não requer um servidor separado. É comumente usado em aplicativos móveis e navegadores da web.

Estes são apenas alguns exemplos de SGBDs disponíveis no mercado. A escolha do SGBD adequado depende das necessidades específicas do seu projeto, como volume de dados, escalabilidade, integração com outras tecnologias e requisitos de segurança. Cada SGBD tem suas próprias vantagens e desvantagens, e a escolha certa depende das prioridades do seu sistema.

---
### Utilizando o comando SELECT

Vamos destrinchar o seguinte comando:

```SQL
SELECT * FROM tabela;
```

Uma coisa que vamos notar é que a linguagem SQL está em inglês. Então, muitas coisas da linguagem SQL, traduzidas, já permitem entender o que quer dizer. Esse primeiro comando, o `SELECT`, realmente vai selecionar as informações que queremos visualizar da nossa tabela.

Mas vamos entender esse comando inteiro, o que ele está dizendo para nós. Temos como primeira palavra o `SELECT`, que em inglês significa **selecionar**. Logo, esse comando vai selecionar o quê? A próxima coisa que colocamos será especificando, poderíamos colocar uma coluna, mas no caso, temos o **asterisco** que significa que queremos selecionar **todos os dados**. Então, `SELECT *`.

E de onde queremos que selecione esses dados? Para mostrar de onde queremos, colocamos a cláusula `FROM`, que em Inglês também quer dizer **de onde**, seguido pelo nome da tabela, ou de onde queremos que venham esses dados. No caso, é da tabela de pedidos.

É importante lembrar que para cada comando em SQL escrito na plataforma é importante adicionar ponto e vírgula ao final da sentença. Assim, dizemos a plataforma que esse comando terminou.

---
### Aplicando filtros - WHERE e DISTINCT

O `WHERE` vem de "onde". Com ela conseguimos especificar onde algum dado é igual a uma condição específica. Por exemplo, em uma tabela de fornecedores que tenha a coluna "país" nós podemos filtrar os clientes que tenham o país igual a "China", usando o operador `=` e o `WHERE`. O símbolo de igual serve para colocarmos a informação que queremos dessa coluna.
Sempre que formos colocar um dado que seja _string_ (texto), temos que colocar **entre aspas simples** para o sistema entender que aquilo é um texto e não o nome de uma coluna, ou o nome de uma tabela, ou uma cláusula. Então, `'China'` vai entre aspas simples. Veja o exemplo abaixo:

```SQL
SELECT * FROM tabelafornecedores WHERE país = 'China';
```

Analisando o comando, mantivemos a estrutura `SELECT`, então "selecione todos os dados da tabela de fornecedores". Na sequência temos o `FROM`, seguido do nome da tabela, `tabelafornecedores`, e a nova cláusula que acabamos de aprender, `WHERE`, onde o `país`, que é a coluna que especificamos, seja igual à China.
Colocamos o nome da coluna `país`, o símbolo de igual `=`, e o termo que queremos que contenha nessa coluna. Nesse caso, é "China".

##### Como evitar duplicidades com a cláusula `distinct`

A cláusula `distinct` serve para filtrar os dados distintos de uma instrução, dessa forma um dado não vai se repetir duas vezes no resultado final do filtro.
Para criar uma instrução que contenha `DISTINCT` vamos colocar o `SELECT`, seguido da cláusula `DISTINCT`, e seguir colocando o nome da coluna que queremos trazer esses dados distintos. Por exemplo, temos uma tabela de pedidos e queremos filtrar de forma distinta e única a coluna "cliente" que contém todos os IDs dos clientes.
Colocamos o nome da coluna, no caso é `Cliente`, e vamos colocar a cláusula `FROM`, porque queremos saber os clientes de onde. Então, `FROM TABELA`, o nome da tabela que vamos trazer, que é a tabela de pedidos.

```SQL
SELECT DISTINCT cliente FROM tabelapedidos;
```

##### Desafio
Você é uma pessoa analista de dados em uma empresa de comércio eletrônico e foi escolhido dentro da equipe para analisar o **banco de dados de vendas da empresa**. Você precisa extrair informações específicas sobre os clientes e os produtos vendidos.

Liste todos os IDs únicos dos produtos vendidos pela empresa, ou seja, uma lista de produtos distintos. Utilize a cláusula DISTINCT para garantir que os IDs dos produtos sejam únicos.

Identifique os clientes que se cadastraram na empresa antes de 2020. Liste o nome e a data de cadastro desses clientes. Utilize a cláusula WHERE para filtrar os registros.

Para resolver esses desafios importe para o sqlite online as seguintes tabelas:

![[tabela+vendas+desafio+aula+1.csv]]

![[tabela+produtos+desafio+aula+1.csv]]

![[tabela+clientes+desafio+aula+1+.csv]]

**Resposta:**
Para listar todos os IDs únicos dos produtos vendidos utilizamos o seguinte comando:

```SQL
SELECT DISTINCT id_produto FROM tabelavendasdesafioaula1;
```

Para identificar os clientes que se cadastraram antes de 2020 utilizamos o seguinte código:

```SQL
SELECT nome_do_cliente, data_de_cadastro FROM tabelaclientesdesafioaula1 WHERE data_de_cadastro < '2020-01-01';
```
