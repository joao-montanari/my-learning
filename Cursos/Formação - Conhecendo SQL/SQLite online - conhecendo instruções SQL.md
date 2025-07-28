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