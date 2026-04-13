# Teste de Software

Teste de software é comparar  o que o sistema É com o que ele DEVERIA SER.

A gente testa software porque software falha… e sua consequência acaba por se espalhar num espectro grande e irritativo, mas não só paciência, 

falhas podem custar tempo (falha com perda de dados), 

e além de tempo, obviamente que falhas custam dinheiro, 

no entanto não podemos esquecer que falhas também custam vidas.

### Conceitos básicos

### Teste de software

Quer encontrar bugs o mais rápido possível, pois dessa economiza dinheiro, mas além disso tem que ter certeza de que o problema foi resolvido. Tem como perspectivas 

testes para passar (usado para verificar se a especificação foi implementada corretamente)

testes para errar (usado para quebrar o sistema, testa todas as possibilidades de possíveis contradições)

### Erro, Falta, Falha

Trata-se do vocabulário para resolução de problemas segundo a I3E.

- Erro: Confusão, mal-entendido na mente do programador. Erro humano causa falta.
- Falta: Contretização do erro, por exemplo um “>” ao inves de um “<”. Provoca falha.
- Falha: Propagação de uma falta, que é a incapacidade do software de poder realizar sua função.

### O ciclo de vida de um defeito

Para se infectar o sistema, é necessário que um bug esteja acessível e seja executado (ele não estar em zona de código morto). Com isso ocorre uma propagação da infecção para outras partes do sistema. A partir disso a infecção é detectada. O time tenta identificar a partir de um debbug a origem de uma falha.

### Oráculo de testes

É um mecanismo que determina se um teste paassou ou falhou, ou seja, ele atende a função desenvolvida. 

Ex: Se entre X, Y, Z eu quiser saber do maior dos três, se eu espero Y e o programa me retorna Z, eu sei que existe uma falha, pois segundo o oráculo da matemática o correto seria o Y.

No código o oráculo pode ser uma função que compara o resultado gerado com o esperado e pode retornar um bool sobre isso.

### Esforço x Bug

Quando parar de testar? Quando essa ação se torna muito mais custosa em relação ao valor do produto. 

![Foto 1](/articles/article2/img1.png)

No início com poucos testes podemos descobrir muitos bug grosseiros. Além disso podemos chegar num ponto perfeito onde os testes usuais do software podem ser resolvidos de forma mais rápida. No entanto continuar testando para encontrar poucos bugs é difícil pois os custos aumentam demasiadamente.

### Axiomas do teste

● É impossível testar tudo
● Bugs andam em bando
● Teste não atesta a inexistência de bugs
● Paradoxo do pesticida
● Nem todo bug será corrigido
● Requisitos mudam
● Teste é uma atividade baseada em risco
● Testadores não são os mais populares

### Caracterização do teste de software

- Baseado em visualização de código
    - (Black-box para quem não tem acesso, White-box se tem acesso ao código)
- Baseado no objeto testado
    - Testa todo o sistema, integração e/ou união
- Baseado no objetivo do requisito
    - Testa a função (teste funcional), o carregamento, a performance, segurança, usabilidade…

Teste unitário é usado para validar que aquilo que você desenvolveu está alcançando o objetivo.

● Big Bang
Espera todos os componentes ficarem prontos para testar a integração de todos

● Incremental
Assim que um componente ficar pronto, teste a integração com os outros. Se nem todos os “outros” estão prontos, faça stubs (da respostas pré definidas) ou drivers.

Teste de sistema

- Teste baseado no comportamento observacional do sistema
• Independente de detalhes de projeto e implementação
    
    • Para evitar tais detalhes, deve ser projetado tão cedo quanto possível
    
- Em geral usa abordagem funcional, executado por um testador de sistemas (idealmente membro de um grupo independente de testes)
- Usado para averiguar propriedades globais:
– Performance: delay entre evento e resposta do sistema
– Confiabilidade: tempo médio entre falhas
• Assim, precisa de ambiente similar ao de produção (hardware, software, pessoas e outros sistemas)