## Alfabeto

Um alfabeto é um conjunto de símbolos. Seja **Σ** um alfabeto que é possível escrever equações diofantinas.

**Σ = { x , y , z ,…, + , * , - , ^ ,…, 0 , 1 , 2 , 3 ,…, ( , ) }**

**Σ** Seria o conjunto de todas as palavras possíveis sobre o alfabeto **Σ.** Seja W uma dessas palavras o seu comprimento é dado por |W| e vai representar o número de símbolos que ocorrem em W.

A cadeia vazia ε se analisada |ε| = 0.

Dessa forma imaginemos outro alfabeto **Σ** para escrever números binários: **Σ** = {0,1}.

**Σ*** seria uma UNIÃO de todas as possíveis palavras de tamanho 0 a n: 

**Σ* = Σ⁰ ∪ Σ¹ ∪ Σ² ∪ Σ³ ∪ …**

**onde** 

**Σ⁰ =** ε

**Σ¹ = {0 , 1}**

**Σ² = {00, 01, 10, 11}**

**Σ³ = {000, 001, 010, 011, 100, 101, 110, 111}**

Sobre seu tamanho, podemos definir que ***Σ*** é infinito e numerável.*

Já seu conjunto das partes *℘(**Σ***) é infinito e não numerável.*

## Definições

### Concatenação

Seja um alfabeto Σ, sejam w1 e w2 palavras onde w1 ^ w2 ∈ Σ*, então w1+ w2 resulta numa cadeia w3 formada pelos símbolos de w1 e w2 onde w3 ∈ Σ*.

### Exponenciação

Seja um alfabeto Σ, seja w uma palavra onde w ∈ Σ*, então n-ésimo expoente de w é uma cadeia que resulta da concatenação de w consigo mesmo n vezes.

**w⁰ =** ε (elemento neutro da concatenação)

**w**  ⁿ+¹ = w + wⁿ OU wⁿ + w

### Concatenação de alfabetos

Seja Σ₁ e Σ₂ alfabetos, a concatenação de Σ₁ e Σ₂ (nesta ordem) é a operação que produz um novo alfabeto cujo os símbolos são resultados da concatenação de Σ₁ e Σ₂.

Ex:

Σ₁ = {0,1}

Σ₂ = {a,b,c}

Σ₁ ⦁ Σ₂ = {0a,0b,0c,1a,1b,1c}

### Exponenciação de alfabetos

Seja Σ um alfabeto, a n-potência de Σ é a operação que faz a concatenação de Σ com sí próprio n vezes.

Ex:

Σⁿ = Σ ⦁ Σ ⦁ Σ ⦁…⦁ Σ

Seja Σ**⁰ = {**ε}

Σ¹ = Σ

Σ **** ⁿ+¹ = Σ + Σⁿ OU Σⁿ + Σ

Portanto podemos concluir também com o que já sabemos de concatenação de alfabetos e exponenciação que 

Σ ʲ é um alfabeto onde os símbolos são todas as cadeias de comprimento j sobre Σ.

### Estrela de alfabeto

Seja Σ um alfabeto, então a estrela de Σ (Σ*) é o alfabeto que resulta da união de todas potências finitas de Σ ou seja:

 **Σ* = Σ⁰ ∪ Σ¹ ∪ Σ² ∪ …** 

**Ou seja** 

 **U      Σ**ⁱ ****

ⁱ∈ⁿ

### Linguagem

Seja Σ um alfabeto e seja L uma linguagem sobre Σ, L será um conjunto de cadeias sobre Σ, ou seja, L é um elemento do conjunto das partes de Σ*.

L ⊆ Σ*

L ∈ ℘(Σ*) 

Ex:

Se Σ = {0,1}

L    = {0,01,110}

L’   = {ε}

L’’  = {} (É diferente do de cima)

L’’’ = {w ∈ {0,1}*, onde w contém nº ímpar de 0} 

### Concatenação de linguagens

Seja Σ um alfabeto e L₁ e L₂ linguagens sobre Σ. A concatenação de L₁ ⦁ L₂ = {xy ∣ x ∈ L₁ ^ y ∈ L₂} produzindo uma nova linguagem que contém as cadeias resultates da concatenação de todas as cadeias de L₁ e L₂.

Ex:

L₁ ⦁ L₂ ou L₁L₂

Sejam os exemplos passados usados aqui

L    = {0,01,110}

L’   = {ε}

L’’  = {} (É diferente do de cima)

L’’’ = {w ∈ {0,1}*, onde w contém nº ímpar de 0} 

L ⦁ L’   = L

L ⦁ L’’  = {}

Dado que 𝐿’’=∅ (o conjunto vazio), não há cadeias em 𝐿’’. Isso significa que não há nenhuma cadeia 𝑦 ∈ 𝐿’’  que possa ser concatenada com qualquer cadeia 𝑥 ∈ 𝐿’.

{00, 101} ⦁ {1100, 1110} = {001100, 001110, 1011100, 1011110}

### Exponenciação de linguagens

Seja Σ um alfabeto e seja L uma linguagem sobre Σ.

Lⁿ = L ⦁ L ⦁ … ⦁ L

L⁰ = {ε}

Lⁿ+¹ = L + Lⁿ OU Lⁿ + L

### Estrela de linguagem

Seja Σ um alfabeto e seja L uma linguagem sobre Σ, L* é uma linguagem que vem da concatenação de todas as n-ésimas potências de L onde n N.

L* = L¹ ∪ L² ∪ L³…

### Operações conjuntistas sobre linguagens

Seja Σ um alfabeto, L, L₁ e L₂ linguagens sobre Σ, então:

L₁ ∪ L₂ = { w ∈ Σ* | w ∈ L₁ ou w ∈ L₂ }

L₁ ∩ L₂ = { w ∈ Σ* | w ∈ L₁ e w ∈ L₂ }

L‾ = { w ∈ Σ* | w ∉ L } (complemento)