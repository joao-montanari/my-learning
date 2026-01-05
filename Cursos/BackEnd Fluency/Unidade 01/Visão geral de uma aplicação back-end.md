O objetivo desse módulo é criar uma fundamentação em relação ao que de fato é o Back End, deixando claro o que é Front End e Back End, entendendo onde o Back End é utilizado.

A imagem abaixo trás uma ideia geral de como funciona o Back End:

![[Pasted image 20260105105132.png]]

Na imagem podemos ver que o usuário faz o acesso ao sistema através de um site qualquer (como a Amazon) se deparando com o Front End (camada com maior interação com o usuário). Além disso, já é possível ver uma comunicação que acontece por baixo dos panos que se chama "Request" e "Response" que acontece entre o Back End e o Front End, nessa comunicação ocorre também o tráfico de dados na onde o Back End envia ou recebe informações do Front End.
Um Exemplo seria quando tentamos realizar login em uma página na internet, quando fazemos isso estamos enviando dados como e-mail, usuário e senha para o Back End, isso seria uma **requisição (request)**. Caso esteja tudo correto com as informações de login o Back End vai retornar para o Front End uma **resposta (response)** dizendo que deu tudo certo e você pode entrar na plataforma como usuário.

Outro ponto importante que podemos observar na imagem é de que o Back End não se trata de uma caixa fechada, é possível ver interações do Back End com arquivos e banco de dados. De modo geral ele se trata de um serviço que roda em uma linguagem de programação como Java Script e com isso é possível fazer diversas funcionalidades, como persistir dados, manipular dados, verificar informações e etc. Logo, o Back End se trata de uma camada que existe por baixo dos panos do Front End que tem o objetivo de fazer o processamento de dados que muitas vezes vão exigir um maior desempenho dos recursos alocados.

---
### 📦 Banco de dados

Em relação ao banco de dados existem vários, durante o curso o banco de dados utilizado vai ser o MongoDB. Cada banco de dados tem um objetivo, no caso do Mongo hoje em dia ele é um dos principais utilizados por sua facilidade e performance, sendo o ideal para trabalhar com grandes massas de dados, permitindo consultar as informações de forma bem performática.

---
### 👅 Linguagens de programação

Agora falando um pouco sobre linguagens de programação, assim como os bancos de dados, existem várias linguagens cada uma com um objetivo diferente, sendo cada uma adaptada para resolver um problema em questão. Durante o curso vai ser usada a linguagem Java Script no ambiente de execução do Node.js. O Ponto positivo de se utilizar o Java Script é que ela se trata de uma linguagem flexível que pode ser utilizada tanto no Front End quanto no Back End e isso torna a curva de aprendizado mais rápida, uma vez que não é necessário aprender uma nova linguagem do zero.
Além disso tudo no Node.js é muito utilizado dentro do mercado de trabalho, sendo o Java Script uma linguagem bastante difundida e performática, utilizada normalmente para lidar com o processamento de grande volume de dados, logo faz bastante sentido querer usar o Java Script junto com o Mongo.
Alguns exemplos de empresas que utilizam essas duas ferramentas (MongoDB e Node.js) são a Amazon e a Netflix (na ideia de otimizar o processamento de vídeos/stream).