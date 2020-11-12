# React Native Code Challenge
Olá,

Bem-vinda(o) à Popcode!

Esse teste servirá para que a gente conheça um pouco mais sobre suas habilidades técnicas no desenvolvimento de aplicativos com **React Native**. Alguns dias após você finalizar o desafio (no máximo, uma semana), enviaremos um feedback com nossas impressões e um possível convite para uma conversa mais detalhada sobre as decisões que você tomou durante o desenvolvimento.

Vale lembrar que aqui na Popcode nós prezamos pela qualidade da experiência dos nossos usuários e pela qualidade do código que nós produzimos. Aplicar boas práticas de programação é uma regra pra gente ;)

## O Problema
Nossa rotina é pautada por diversas atividades: trânsito, família, compras, estudos, exercícios físicos, reuniões, viagens… Dá pra ficar cansado só de pensar em todas as tarefas que temos que realizar todos os dias.

Para aumentar a produtividade e não acabar esquecendo coisas muito importantes (como pagar a fatura do cartão de crédito 🙈), muitas pessoas têm recorrido a aplicativos que organizam suas listas de tarefas, os famosos To-Do Apps. Eles são uma mão na roda e seu uso é cada vez mais frequente no mundo *mobile*.

Como não queremos ficar para trás, neste desafio nosso objetivo será construir nosso próprio aplicativo de tarefas, o uGO To-Do!

## O Desafio
O seu desafio consiste em melhorar nosso aplicativo, tanto pela correção de pequenos bugs do atual código, quanto pela adição de novas funcionalidades (listadas abaixo). Algumas destas tarefas envolvem integração com uma API que foi especialmente desenvolvida para este desafio, é bem simples e também está inclusa neste repositório.

Toda estrutura já está pré-configurada, incluindo a interface gráfica e os estilos que devem ser utilizados. Entretanto, você é livre para componentizar e/ou refatorar qualquer parte (incluindo a arquitetura) do app.

Lembre-se, quanto mais claro seu código e suas decisões estiverem para o nosso time de recrutamento, melhor será o seu desempenho na avaliação. Se precisar justificar o uso de alguma dependência ou alguma decisão de arquitetura, basta comentar no corpo do e-mail de submissão (instruções abaixo).

*Obs.: nosso time de design estava inspirado nesse dia, aproveite para fazer um aplicativo massa!*

## Design
O design completo do app está disponível em duas plataformas: [InVision](https://invis.io/52U0WK0TNF8) e [Figma](https://www.figma.com/proto/F95kJDtNqV2b2ioeS3YqTp/Pop-To-Do_Android).

Para acessar o modo de _inspect_ nessas plataformas, você precisará estar logado. O modo inspect permite que você tenha acesso às medidas, margens e códigos de cores das telas do app. Para isto, basta utilizar os dados abaixo:

[InVision](https://projects.invisionapp.com/d/login)
* E-mail: `queroser@popcode.com.br`
* Senha: `pq^iX9wGJsvs*z2DhhwTsynd`

**OBS.:** Se após o login, aparecer uma tela para selecionar um time, selecione a opção *Personal*

[Figma](https://www.figma.com)
* E-mail: `queroser@popcode.com.br`
* Senha: `nBMS$PU9mZ*kxoCVn2e20e8P`

## Desenvolvimento
### Pré-requisitos

* [Git](https://git-scm.com/): para clonar o repositório
* [NodeJS](https://nodejs.org) (v10+): para rodar a aplicação
* [Yarn](https://classic.yarnpkg.com/): para gerenciar pacotes
* [Ambiente Android](https://reactnative.dev/docs/getting-started) (com React Native CLI): para executar o app

### Executando o projeto
Clone (ou faça um fork) o repositório do desafio
```
$ git clone https://github.com/PopcodeMobile/desafio-react-native.git
```

Entre no diretório do projeto e instale as dependências
```
$ cd desafio-react-native
$ yarn setup
```

Inicie o servidor para ter acesso a API, que ficará disponível no endereço `http://localhost:3000`
```
$ yarn server
```

Vale lembrar que algumas requisições serão bem sucedidas e outras não. O app deve estar preparado para ambos os cenários. A documentação completa estará disponível em `http://localhost:3000/explorer`.

Em outra instância do terminal, execute o app
```
$ cd app
$ yarn android
```

Agora, basta definir seu fluxo de trabalho para a implementação (ou refatoração) das tarefas abaixo.

### Tasks
Abaixo listamos todas as tarefas/funcionalidades para a construção do nosso app.

As tarefas marcadas com um ✅ já estão prontas, mas podem ser reestruturadas pensando na escalabilidade do aplicativo. As demais tarefas estão listadas por ordem de prioridade e avaliam diferentes habilidades.

Vale lembrar que **não é obrigatório finalizar todas as tarefas listadas** aqui. Nós não exigiremos, por exemplo, que uma pessoa candidata a uma vaga de estágio complete todos os itens do desafio. Nesta etapa do processo, o mais importante é entregar o melhor trabalho possível dentro do prazo que a gente combinou em nossa última conversa. A lista é apenas um guia para que todos os envolvidos no processo (recrutadores e candidatos) possam conhecer os critérios utilizados para avaliação de maneira clara e transparente (mais detalhes na próxima seção).

<!-- Trecho retirado até que tenhamos o link da central de talentos funcionando no novo site da Popcode
*Nunca conversou com a gente? Acesse nossa [central de talentos](https://popcode.com.br/carreira) :)*
-->

1. Início
	1. [Cenário de carregamento](https://invis.io/52U0WK0TNF8#/384998463) ✅
	2. Cenário de [erro/falha](https://invis.io/52U0WK0TNF8#/384998464) (de requisição à API, por exemplo)
	3. Cenário para [lista vazia](https://invis.io/52U0WK0TNF8#/384998465) ✅
	4. Exibir [lista de tarefas](https://invis.io/52U0WK0TNF8#/384998452) ✅
2. Filtros
	1. Todos ✅
	2. Hoje ✅
	3. Esta semana ✅
	4. Atrasado ✅
3. Finalizar Tarefa
	1. [Marcar tarefa como finalizada](https://www.figma.com/proto/F95kJDtNqV2b2ioeS3YqTp/Pop-To-Do_Android?scaling=min-zoom&node-id=1%3A228) ✅
	2. [Desmarcar tarefa como finalizada](https://www.figma.com/proto/F95kJDtNqV2b2ioeS3YqTp/Pop-To-Do_Android?scaling=min-zoom&node-id=20%3A0) ✅
4. Nova Tarefa
	1. [Título](https://invis.io/52U0WK0TNF8#/384998453)
	2. [Calendário](https://invis.io/52U0WK0TNF8#/384998455)
	3. [Prioridade](https://invis.io/52U0WK0TNF8#/384998458)
5. Editar Tarefa
	1. [Título](https://invis.io/52U0WK0TNF8#/384998462)
	2. [Calendário](https://invis.io/52U0WK0TNF8#/384998455)
	3. [Prioridade](https://invis.io/52U0WK0TNF8#/384998458)
	4. [Apagar](https://invis.io/52U0WK0TNF8#/384998460)
	5. [Confirmar apagar](https://invis.io/52U0WK0TNF8#/384998461)
6. Busca
	1. [Resultado](https://invis.io/52U0WK0TNF8#/384998467)
	2. [Nenhum resultado](https://invis.io/52U0WK0TNF8#/384998469)
	3. [Destacar trecho do texto que está sendo buscado](https://invis.io/52U0WK0TNF8#/384998468)
7. Configurações de Tema
	1. [Cores](https://invis.io/52U0WK0TNF8#/385001564) ✅
	2. [Tipografia](https://invis.io/52U0WK0TNF8#/385001526)
8. Adicionar [splash screen](https://invis.io/52U0WK0TNF8#/384998451) ao app
9. Adicionar ícones ao app
10. [Animações e Desempenho](https://www.figma.com/proto/F95kJDtNqV2b2ioeS3YqTp/Pop-To-Do_Android)
	1. Transição inicial
	2. Transição de scroll do cabeçalho
	3. Transição entre os filtros
	4. Transição para “tela” de busca

### Avaliação
Como estamos buscando criar o processo mais transparente e mais agradável possível, nada mais justo do que listar os critérios de avaliação e a motivação para cada uma das tarefas escolhidas para este desafio. 

A primeira tarefa avaliará sua familiaridade com o [redux](https://redux.js.org/), com a utilização de seletores, com a criação de vários tipos de interface e com o processo de componentização de um app. Além disso, você precisará tratar/implementar a renderização de múltiplos estados numa única tela.

As tarefas 2 e 6 avaliarão sua capacidade de manipular estruturas e dados em memória, em tempo de execução.

As tarefas 3, 4 e 5 avaliarão sua familiaridade com a utilização de APIs e tudo que isto envolve: [redux](https://redux.js.org/), [redux-saga](https://redux-saga.js.org/), seletores, tratamento de erros e feedbacks para o usuário. Além disso, temos também a manipulação de formulários, de componentes nativos e todos os outros itens listados para o ponto 1.

A tarefa 7 avaliará a reutilização de configurações em todo o app.

As tarefas 8 e 9 avaliarão a manipulação de *assets* nativos.

Por fim, a última tarefa (10) avaliará sua familiaridade com animações e com as questões relativas ao desempenho do app.

## Submissão
Quando estiver satisfeito com seu trabalho, basta enviar um e-mail para `queroser@popcode.com.br` com o seguinte conteúdo:

* Assunto: Quero ser Popcoder!
* Corpo:
	* [explicar qualquer ponto que você acredite ser relevante];
	* Link para seu *fork* deste projeto, da PR com sua solução ou para download do seu repositório zipado;

Nós iremos baixar, executar, avaliar e retornar seu e-mail com um *feedback* em até uma semana.

Enquanto isso, conte-nos o que você achou do seu processo de recrutamento até aqui, em especial sobre este desafio. Saber o que você aprendeu durante esse tempo (e como poderíamos melhorá-lo para futuras pessoas candidatas) é muito importante e nos ajudará na construção de um processo mais justo e transparente :)

Muito obrigado pelo seu tempo e pelo seu interesse em fazer parte do nosso time!

Agradecemos de coração ❤️

---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>

Este projeto foi feito com carinho pelas pessoas que fazem parte da Popcode. Você é livre para publicá-lo, desde que atribua os devidos créditos. Porém, seu uso comercial não é permitido. Você também poderá criar derivações em cima dele, contanto que ofereça uma licença igual ou compatível :)
