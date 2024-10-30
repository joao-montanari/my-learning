#### Apresentação
A modelagem de sistemas orientados a objetos possibilita a representação dos requisitos e das soluções de análise e projeto de sistemas de qualquer porte e finalidade. A linguagem de modelagem unificada (UML) é a ferramenta utilizada para criar modelos, na forma de diagramas padronizados, que auxiliam a equipe de desenvolvimento a compreender o que o sistema deve fazer em um primeiro momento e como o sistema deve fazer em um momento posterior.

---
# Temas abordados no módulo
### Desenvolvimento do sistema computacional organizado em fases
- Levantamento de requisitos
- Análise
- Projeto
- Implementação
- Testes
- Implantação 
### Modelos como elementos de comunicação
 - Entendimento e validação dos modelos junto aos usuários.
 - Entendimento do sistema por membros da equipe de desenvolvimento.
### Orientação a Objeto
- Orientação a objetos
	- Reaproveitamento e extensibilidade de código.
	- Mais fácil de escrever e manter o programa.
- Programação estruturada
	- Dificuldade de manutenção.
	- Baixo reuso.
### Análise de Sistemas Orientados a Objetos
- Levantamento de Requisitos
	- Funcionais
	- Não funcionais
- Análise de Requisitos
	- Domínio
	- Aplicação

# Utilizando modelos

#### Exemplos de modelos:
- Uma família decide adquirir um imóvel na planta para moradia. Ela vai, então, a um lançamento imobiliário a convite de um corretor conhecido. Chegando lá, deparam-se com o terreno vazio e um stand de vendas. A maquete do empreendimento e a planta do apartamento são modelos.
- Um projeto elétrico é um modelo a ser utilizado pelos engenheiros e arquitetos junto aos eletricistas.
- Um projeto hidráulico é um modelo.
**Lidam com várias dimensões:**
Na construção civil:
- Maquete
- Elétrica
- Hidráulica
- ...
Na engenharia de software (Visões):
- Casos de uso
- Lógica
- Processos
- ...

#### Finalidade principal:
Antecipar a existência de uma realidade de forma a avaliar sua estrutura e comportamento.
**Modelo:** representação abstrata e simplificada da realidade. A realidade demanda diferentes modelos, conforme a perspectiva da observação.
- Ocorre gradação da complexidade no processo de construção.
- Instrumento de gerenciamento da complexidade.
- Sistemas grandes e complexos precisam ser modelados - compreensão da totalidade.
###### Benefícios:
- **Comunicação entre as pessoas envolvidas:** O modelo serve como elemento de comunicação ou difusão de informações entre as pessoas envolvidas em sua construção.
- **Redução nos custos do desenvolvimento:** A construção de modelos é bem mais barata que a construção do sistema em si. A descoberta de erros e falhas em modelos é bem menos onerosa e contribui para a redução dos custos finais do sistema computacional. Isso também vale para as eventuais necessidades de ajustes e melhorias no sistema.
- **Facilidade para alterações do sistema:** A análise de melhorias, seja na fase de construção ou de manutenção, tende a ser mais efetiva quando elaborada sobre os modelos construídos, aumentando a assertividade e diminuindo seus custos. Daí a relevância e a necessidade de manter os modelos sempre atualizados.
- **Documentação do sistema:** Os modelos servem de consulta e orientação a toda a equipe na construção e na manutenção do sistema, incluindo pessoas que sejam integradas após o início do desenvolvimento do sistema. Servem ainda para documentar as decisões tomadas.
- **Delimitar o escopo do sistema:** A modelagem ajuda na delimitação do escopo, ou seja, abrangência do sistema, definindo o que será ou não tratado pelo sistema.

O que é denominado **modelagem de sistema**:
- Os modelos são abstratos, deixando de lado os detalhes e concentrando-se nos aspectos de interesse que são relevantes. A esse processo chamamos de **abstração**.
- Cada modelo apresenta o sistema sob uma diferente visão ou perspectiva da realidade.
- Os modelos são descritos em notações gráficas, que denominamos diagramas.

#### Diagramas de sistemas computacionais
Representação visual clara e intuitiva dos componentes e suas interações dentro do sistema.
	Facilita a compreensão e a comunicação entre todos os membros da equipe de desenvolvimento e outras partes interessadas.
Análise mais eficiente da arquitetura e do comportamento do sistema.
	Identificar e resolver problemas de design de forma precoce
Documentação valiosa que pode ser referenciada ao longo de todo o ciclo de vida do software.

Perspectivas que os modelos devem representar:
- Os dados
- As funcionalidades
- Os controles
- Outra perspectiva seria a visão externa, a de um usuário, que enxerga as funcionalidades necessárias, mas desconhece o que ocorre internamente. Essa seria mais uma perspectiva e mais um modelo que ajudaria nessa compreensão.

Formas de abordar os sistemas computacionais por meio de visões:
 - **Externa:** Modela-se o ambiente em que o sistema está inserido, mostrando sua relação com os usuários e demais sistemas com que interage.
 - **Comportamental:** Modela-se o comportamento dinâmico do sistema e como ele reage aos eventos que o afetam.
 - **Estrutural:** Modela-se sua estrutura organizacional ou os dados que o sistema processa.
 - **Interacional:** Modela-se as informações de seus componentes ou ainda do sistema e seu ambiente externo.

Bezerra, 2015
```
"Modelagem de sistema de software consiste na utilização de notações gráficas e textuais com o objetivo de construir modelos que apresentem as partes essenciais de um sistema, considerando-se várias perspectivas diferentes e complementares."
```

---
# Atividade 01 - Módulo 01
Sobre os conceitos de modelos e modelagem, analise as assertivas a seguir.

1. Os modelos são representações da realidade.
2. Os modelos são construídos depois que os produtos são desenvolvidos.
3. A maquete de um empreendimento imobiliário mostra uma visão macro, do ponto de vista externo, de como será o empreendimento.
4. Podemos ter apenas um modelo para cada produto.
5. Um protótipo de um novo avião pode ser considerado um modelo.

Com base em sua análise das assertivas, assinale a alternativa correta:
- [ ] Estão corretas apenas as assertivas I, II, III e V.
- [x] Estão corretas apenas as assertivas I, III e V.
- [ ] Estão corretas apenas as assertivas I e V.
- [ ] Está correta apenas a assertiva III.
- [ ] Está correta apenas a assertiva V.

### Resolução:
São verdadeiras as opções: I, pois os modelos representam a realidade, antes de sua existência; III, já que uma maquete mostra o exterior do empreendimento e não esclarece nada sobre o interior das unidades; V, porque um protótipo é uma representação da realidade.

Estão incorretas as opções: II, já que os modelos são construídos antes dos produtos (realidade) para que possamos compreender melhor a sua complexidade e seu comportamento futuro; IV, pois podemos ter mais de um modelo para cada produto.

---
# Desenvolvimento de sistemas computacionais

#### Assuntos
Fases comuns e mais relevantes do processo de desenvolvimento de sistemas computacionais

#### Realidade nebulosa
- Existe um enorme hiato entre a realidade e o sistema pronto.
- Esse hiato é denominado "diferença semântica".
- Para evitar essa diferença semântica é utilizado uma série de processos para o desenvolvimento do projeto

#### Análise de requisitos
- **Levantamento de requisitos:** Nesta fase, os requisitos do sistema são coletados e documentados, objetivando a compreensão das necessidades e expectativas dos usuários finais e stakeholders. Envolve a identificação das necessidades dos usuários, restrições do sistema e qualquer outra informação relevante.
- **Análise:** Os requisitos levantados durante a etapa inicial são minuciosamente examinados e refinados. Busca-se a compreensão completa dos requisitos funcionais e não funcionais, identificando possíveis ambiguidades, inconsistências ou lacunas. Também envolve a elaboração de modelos conceituais e diagramas que descrevem a estrutura e o comportamento do sistema, ajudando a guiar as etapas subsequentes de design e implementação.
- **Projeto:** A visão conceitual do sistema ganha forma concreta. Os requisitos analisados são transformados em uma arquitetura detalhada, que define a estrutura do software, incluindo componentes, módulos, interfaces e algoritmos necessários para sua implementação. Também envolve a definição de padrões de design, escolha de tecnologias adequadas e a elaboração de diagramas que representam visualmente a organização e o funcionamento do sistema.
- **Implementação:** Momento em que o projeto teórico se transforma em código executável. Os desenvolvedores traduzem o design elaborado anteriormente em linguagem de programação, escrevendo o integrando as funcionalidades do software. Envolve a codificação de algoritmos e a implementação de estruturas de dados, além da integração de bibliotecas e frameworks externos, bem como a otimização de desempenho.
- **Testes:** Busca a garantia da qualidade e no funcionamento confiável do produto final. Diferentes tipos de testes são realizados: testes de unidade para validar unidades individuais de código, testes de integração para garantir a harmonia entre diferentes módulos, teste de sistemas para avaliar o comportamento do software como um todo e testes de aceitação para verificar se o software cumpre as expectativas dos usuários finais.
- **Implantação:** O produto finalizado é preparado e disponibilizado para uso pelos usuários finais. O software é instalado nos ambientes de produção, configurado conforme as necessidades específicas da organização e integrado com sistemas existentes, se aplicável. Também envolve a realização de testes finais para garantir que todas as funcionalidades estejam operando corretamente e que o software seja estável e seguro para uso em produção, além de treinamentos para os usuários.
- **Evolução/Manutenção:** Após a implementação, o software entra em sua fase de manutenção. Isso inclui atividades como correção de bugs, implementação de melhorias e atualizações de segurança. A manutenção pode ser planejada ou reativa, dependendo das necessidades do sistema e dos usuários. Também inclui a otimização do código existente, a aplicação de patches para resolver vulnerabilidades e a implementação de novas funcionalidades conforme solicitado pelos usuários ou necessidade do mercado. Além disso, são realizados testes regulares para verificar se as modificações introduzidas não causam impactos indesejados no sistema.

---
# Atividade 02 - Módulo 01
A modelagem de sistemas computacionais envolve a representação visual e conceitual de elementos, estrutura e processos de um sistema de software. Por que é tão importante traduzir a realidade em modelos durante as fases comuns e mais relevantes do processo de desenvolvimento de sistemas computacionais?
**Alternativas:**
- [ ] Para dificultar o nível de abstração da realidade.
- [ ] Para facilitar a interpretação inadequada.
- [ ] Para aumentar a complexidade do sistema.
- [ ] Para confirmar a compreensão das necessidades dos usuários.
- [x] Para representar a adequadamente a realidade e entender o contexto do sistema a ser construído.

### Resolução:
Traduzir a realidade em modelos no desenvolvimento de sistemas é essencial para assegurar que os requisitos e necessidades dos usuários sejam compreendidos e atendidos de maneira eficaz. Essa prática permite uma visualização clara do funcionamento do sistema, facilitando a identificação de potenciais problemas e a implementação de soluções adequadas.

---
# Modelos como elementos de comunicação
**Assunto:** Utilização de modelos como elementos de comunicação no processo de desenvolvimento de sistemas computacionais.

### Modelos - Comunicação bidirecional
- Entendimento e validação dos modelos junto aos usuários.
- Entendimento do sistema por membros da equipe de desenvolvimento.

### Momento 01 - Levantamento de dados
A equipe de desenvolvimento se reúne com os usuários e, usando técnicas de levantamento de dados, compreende a realidade e as necessidades dos usuários, visando implementá-las no sistema. Os dados levantados são registrados e usados na construção dos modelos. Esse momento acontece com maior intensidade na fase de requisitos, mas também está presente nas fases de análise e de projeto.
**Envolvidos:** equipe de desenvolvimento e usuários.
Compreensão da realidade e das necessidades pela equipe de desenvolvimento junto aos usuários.
- **Principalmente na Análise de requisitos**
- Também na Análise
- Um pouco menos no projeto

### Momento 02 - Construção de modelos
A equipe de desenvolvimento constrói os modelos que julga pertinentes para que se possa compreender e destacar os aspectos relevantes da realidade. Esse momento acontece nas fases de requisitos, análise e projeto.
**Envolvidos:** equipe de desenvolvimento.
Construção de modelos pela equipe de desenvolvimento.
- Um pouco na Análise de requisitos
- **Principalmente na Análise**
- Também no Projeto

### Momento 03 - Verificação
A equipe de desenvolvimento se reúne com os usuários, apresentando e discutindo os modelos construídos, visando validá-los e responder à pergunta base: os modelos que construímos representam de fato a realidade dos usuários? Em caso positivo, prossegue-se no desenvolvimento; caso contrário, os modelos são ajustados e confirmados novamente com os usuários, até que estejam adequados. Esse momento acontece nas fases de requisitos, análise e projeto.
**Envolvidos:** equipe de desenvolvimento e usuários
Validação dos modelos pela equipe de desenvolvimento junto aos usuários. Modelos representam a realidade?
- Um pouco na Análise de requisitos
- **Principalmente na Análise**
- Um pouco no Projeto

### Responsabilidade por modelo, fase e profissional
- Os Modelos são consultados por todos os membros da equipe de desenvolvimento.
- Em cada fase do processo de desenvolvimento, os profissionais consultam determinados modelos.

| Profissional                           | Fase                 | Modelo                                |
| -------------------------------------- | -------------------- | ------------------------------------- |
| Analista                               | Análise e requisitos | Modelos conceituais                   |
| Projetistas                            | Projeto              | Modelos lógicos e estruturais         |
| Programadores                          | Codificação          | Modelos de implementação, estruturais |
| Analistas, projetistas e programadores | Testes               | Todos os modelos                      |

---
# Atividade 03 - Módulo 01
