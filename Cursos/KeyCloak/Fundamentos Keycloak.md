### Como funciona a autenticação tradicional
- Formulário com nome de usuário e senha
- Credenciais verificadas em uma tabela no banco de dados
- Sessões HTTP armazenadas no Application Service
- Objetivo de proteger a aplicação da Web monolíticos (relativamente fácil)

![[autenticacao_trad_keycloak.png]]

---
### O que mudou da autenticação tradicional para a nova arquitetura que enfrentamos no mercado atual?
- A arquitetura das aplicações empresariais mudaram
- Não é mais um monolito com todos os serviços
- Agora temos vários sistemas e serviços separados com tecnologias diferentes
- Os serviços precisam se comunicar de forma separada
- Não é mais um formulário com nome de usuário e senha

![[o_que_mudou_keycloak.png]]

---
### Qual a nova maneira?
- Várias aplicações diferentes 
- As aplicações são desenvolvidas em linguagens diferentes (nativa e híbrida), APIs, serviços HTTP, etc.
- Em aplicações mobile os usuários não querem ficar logando frequentemente (é preciso administrar o tempo de login de forma independente entre as aplicações)
- Sessões e cookies não são ideiais
- Os serviços HTTP precisam ser públicos (comunicar com serviços externos como PIX)
- Vários logins diferentes
- Necessidade de autenticação em 2 fatores (two-factor Authentication)

---
### Single Sign On
- Gerenciamento de Apps, serviços, usuários, dispositivos, permissões, sessões e logs em um mesmo lugar
- Usuários podem gerenciar suas contas, recuperar senhas, atualizar perfil, habilitar autenticação em 2 fatores (Two-factor Authentication)
- Integração com aplicações de terceiros, LDAP, AD, usuários externos, redes sociais, etc
- Gerenciamento de vulnerabilidades de segurança
- Protocolos: OpenID Connect e SAML 2.0
- OpenID: Oauth 2.0, RestFul, JSON
- SAML 2.0: XML
- Tokens JWT desacopla autenticação, cross-domain, stateless, baseado em padrões.

![[single-sign-on-keycloak.png]]

---
### Comparativo com o mercado:
- Auth0
- Cognito

### Links:
- **Guides:** https://www.keycloak.org/guides
- **Server Guide:** https://www.keycloak.org/docs/latest/server_development/
- **Admin API:** https://www.keycloak.org/docs-api/latest/rest-api/index.html

