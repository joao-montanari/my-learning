Vamos entender como funciona a comunicação de um serviço na web. Aprendendo o que é um web service, como ele funciona e o seu objetivo, além das suas arquiteturas.

### 🤔 O que são Web Services
São sistemas ou aplicações que permitem a comunicação e a troca de dados entre diferentes sistemas e dispositivos pela internet, utilizando padrões e protocolos abertos. Eles são projetados para facilitar a interoperabilidade entre plataformas diversas e são amplamente usados para integrar aplicações automatizar processos.
Por exemplo, uma **API é um tipo de Web Service**. Quando nos referimos a Web Service estamos falando de uma arquitetura de comunicação e uma das arquiteturas que podemos seguir é a da API.
Um ponto importante referente a ideia de Web Service é que existem diferentes tipos de tecnologia que podem envolve-lo, com a possibilidade de utilizar diferentes protocolos como o SOAP e HTTP, e também diferentes padrões como o JSON e o XML.
Quando pensamos eu Web Service devemos ter em mente a palavra "padrão", uma vez que um Web Service sempre vai seguir uma arquitetura padronizada para facilitar a comunicação entre as diferentes partes que compõem uma aplicação.

---
### ⚙️ Como funciona um Web Service
Para entender melhor o funcionamento de um Web Service podemos usar uma imagem, veja o exemplo abaixo:

![[Pasted image 20260107121449.png]]

Nessa imagem podemos ver como a comunicação dos Web Services ocorrem por baixo dos panos. De um lado temos o cliente que vai estar acessando o endereço da nossa aplicação usando a internet, assim se comunicando de fato com o servidor que vai estar hospedando o código.
A comunicação que acontece **do cliente para o servidor** é chamada de **Request (requisição)** que solicita alguma informação ou recurso do servidor.
Já a comunicação que acontece **do servidor para o cliente** é chamada de **Response (responsa)** que vai retornar as informações ou recursos solicitados.

O servidor se trata da camada que vai estar executando o código do Back End processando as requisições que são feitas pelo cliente, dessa forma o objetivo do servidor é realizar diferentes processos, tais como validação, persistência de dados, armazenar informações no banco de dados entre outras coisas. Logo, podemos deduzir que o servidor tem o papel de servo do cliente, sempre atendendo as suas necessidades e requisições.

---
### 🏠 Arquiteturas
Ao desenvolver um Web Service você pode utilizar diversos tipos de arquiteturas, veja alguma delas:
- **SOAP:** Basicamente se trata de um protocolo que define como o sistema deve trafegar informações e se comunicar com o cliente. É possível trafegar informações por meio do SOAP usando o padrão XML de estruturação de dados. Com o SOAP é possível trafegar informações como áudio, vídeo, imagem entre outros usando diferentes protocolos, como o HTTP ou SMTP por exemplo.
- **REST:** Define um estilo de comunicação por meio de padrões e definições, utilizando principalmente o protocolo HTTP. O REST por meio do protocolo HTTP define estados para as requisições por meio do GET, POST, READ e DELETE (CRUD), sendo esses estados os mais usados atualmente para a troca de informações em um Web Service.
- **GraphQL:** Se trata de uma arquitetura nova no mercado. O seu principal objetivo é permite aos clientes **solicitar exatamente os dados que precisam**, evitando sobrecarga de dados (over-fetching) comum no REST, através de um único endpoint e um **esquema tipado** que define os dados disponíveis, sendo flexível, agnóstico a transporte e banco de dados, ideal para microsserviços e aplicações complexas, com conceitos chave como **Consultas (Queries)**, **Mutações (Mutations)** e **Assinaturas (Subscriptions)** para dados em tempo real.

Nos últimos tempos o **SOAP** caiu em desuso por ser mais lendo que o **REST** e exigir mais processamento do lado do servidor. Além disso, ele segue como padrão a formatação de dados **XML**, que nos dias atuais também caiu em desuso sendo substituído pelo **JSON** que é mais performático.