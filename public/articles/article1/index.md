# Por que estudar?

Quando queremos pedir algo por delivery e fazemos mandamos apenas um “Quero uma pizza”, a mensagem vai ser seguida por diversas outras:

* Que sabor?
* Que tamanho?
* Com borda recheada? […]

Ou seja, quando fazemos um pedido ruim, obtemos respostas confusas e mais demora… Dessa forma, a engenharia de prompt vem para aprimorar as pesquisas que fazemos às Inteligências Artificiais. Elas estão no nosso cotidiano e não vão sair. Dessa forma, obter a melhor resposta delas é o melhor caminho para termos maior eficiência e coesão nas respostas que queremos.

# Visão Geral

Os LLM’s são majoritariamente fundamentados na arquitetura Transform, que processa palavras em sequência considerando o contexto de cada palavra em relação a todas as outras, e não de forma linear (como outras arquiteturas).

Ex.: Seja um analisador de texto recebendo a frase “Ana pegou o livro porque achou interessante.”, para compreender completamente é importante saber quem é Ana e por que o livro é interessante. Os modelos convertem seu prompt em tokens, que são unidades básicas (palavras, caracteres…). Essa sequência vai ser processada pelas camadas até gerar a resposta. Os tokens viram embeddings, que são representações vetoriais que representam seu significado. Posteriormente, são passadas por redes neurais com transformadores, e o modelo aplica operações para entender o contexto e gera uma distribuição de probabilidade para prever qual é o próximo token para a resposta.

# A Memória da Conversa

Um modelo não consegue lembrar do que foi conversado em outra conversa, mas consegue guardar o contexto de uma conversa, podendo remontar alguma resposta anterior dada ou informação recebida. A isso damos o nome de “Janela de Contexto”, que é um limite de tokens que o modelo guarda. Ao atingir o limite, os tokens mais antigos são excluídos para dar lugar aos novos.

# Elementos de um Bom Prompt

* Instrução clara (sem ambiguidade)
* Contexto adequado (pontapé inicial)
* Exemplos
* Dados de entrada (pergunta, situação…)
* Formato de saída (formato, quantidade de linhas, tamanho…)

# Cuidado com Prompts

Para evitar **enviesamento** do treinamento, tente pedir vantagens, desvantagens e comparações com outras coisas.

A **alucinação** (preencher a resposta com coisas que não existem) é algo que pode ser perigoso. Dessa forma, fique atento e, se desconfiar da informação, preze por pedir a fonte ao modelo.

# Componentes de um Prompt

![Foto 1](/articles/article1/img1.png)

São as partes/elementos que compõem o prompt:

* **Instruções**

  * Podem ser simples ou complexas. Vai ser, em si, a pergunta/tarefa que queremos passar para o modelo.
* **Exemplos**

  * Zero-Shot: Não há exemplos de prompts específicos para essa tarefa. Em vez disso, o modelo generaliza a partir de exemplos de outras tarefas relacionadas.
  * One-Shot: O modelo é capaz de realizar melhor uma tarefa com base em um exemplo fornecido. No caso do one-shot, devemos fornecer somente 1 exemplo.
  * Few-Shot: O modelo fica melhor ainda com um número maior de exemplos, fazendo com que ele retorne outputs mais de acordo com o desejado.
* **Contexto / Configuração**

  * Estamos falando sobre o papel do modelo e/ou o cenário de aplicação.
  * “Você é um grande pesquisador na área de IA aplicada na saúde…”
  * “Você se encontra numa cidade extremamente quente e, diante disso…”
* **Restrições / Limitações**

  * Adiciona barreiras para tamanho de texto, quantidade de palavras, escopo de assunto, abrangência de pesquisa…
* Conteúdo principal

  * Pode ser visto como um conjunto de instruções. Pode ser parágrafos, tabelas, documentos… tudo que será analisado pelo modelo para realizar a tarefa.
* Formato de saída

  * Vai guiar o modelo sobre como se deseja a resposta (uma lista, um parágrafo apenas, tabela, JSON…), assim como o tom dela (didático, mais técnico, para leigos…).
* Conteúdo de suporte

  * São dados extras que ajudam o modelo a melhorar sua pesquisa, logo, a resposta… colocar preferências, momento temporal, informações que não são óbvias…

# Técnicas de Engenharia de Prompt
![Foto 2](/articles/article1/img2.png)

* Instruções claras

  * A formatação do texto deve separar as instruções por tópicos. Isso diminui ambiguidade e ajuda o modelo a fazer a tarefa mais diretamente, assim como colocar espaços, identações, separadores…
* Preparar a saída

  * Ao final do prompt, pedir para que ele siga uma formatação específica, dando uma estrutura formatada.
* Solicitação de cadeia de pensamento

  * Para aprender algo, é uma ótima solução. Basicamente, é pedir que o modelo explique o raciocínio/passo a passo até chegar, enfim, à resposta desejada.
* Especificar estrutura de saída

  * Deve indicar ao modelo em qual formato deve ser a saída (um JSON, uma lista, uma tabela, markdown…).
* Repetir instruções no final

  * Você pode repetir, por meio de um resumo, a ideia do início no fim do seu prompt para reforçar ao modelo que ele siga o que foi exigido. Isso é importante, pois, se o prompt for muito grande e complexo, reforçar vai ajudar o modelo a interligar tudo.
* Dividir a tarefa

  * “Dividir para conquistar”. Pegar algo complexo e quebrar em pedaços menores, diminuindo a complexidade. Ajuda o modelo a ser mais coeso e não se perder numa resposta muito longa. Utilize a janela de contexto ao seu favor.
* Adicionar sintaxe clara

  * Formatar o prompt em listas/tabelas/tópicos… ajuda o modelo a entender melhor a tarefa. Lembre que, quanto mais desorganizado o prompt, pior a resposta.
* Guardrails

  * Tem como objetivo limitar informações, evitando conteúdo não usável e reduzir a poluição da resposta, tentando deixar o mais sucinto e direto possível.
  * “Evite mecânicas complexas ou irreais”
  * “Não adicione à imagem personagens que contenham roupa laranja”


## Espero que tenhas gostado dessas dicas :)
