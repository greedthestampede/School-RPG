# SCHOOL RPG :scroll: :game_die:

Um sistema voltado para aplicação em sala de aula, onde o aluno possa se sentir confortável para demonstrar seu ponto forte e para cooperar com seus colegas.

DEMO

O jogo será apresentado abaixo, o que terá na aplicação é uma ficha de personagem que é mantida apenas com os Cookies do navegador. Por enquanto só existe uma versão web, devido a limitação do programador.

## TECNOLOGIAS

 - *Next.JS*
 - *Nookies* **(*parseCookie*)**
 - *StyledComponents*

## PASSO-A-PASSO DOS ELEMENTOS DE JOGO

O sistema não é nem um pouco complexo, para que possa ser aplicado em turmas de níveis diferentes e com temáticas diferentes. Eu sou um professor de inglês, então estou usando termos nesse idioma por simples conveniência, a adaptação é totalmente válida.

### CLASS

Existem três classes que podem ser escolhidas pelos alunos, nesse primeiro momento. São elas Knight, Bard ou Mage. O aluno deve escolher apenas uma das classes, mas pode trocar se ele não se sentir confortável, no final da aula.

As classes servem para gerar XP **(*Pontos de Experiência*)** para o personagem, que tem uma função que será elucidada no momento mais adequado. Abaixo estão uma descrição de como as classes ganham XP.

 - *Knight*: When helps another student. **(*Para alunos que gostam de ajudar.* / *O ponto é dado se a ajuda estiver correta*)**
 - *Bard*: When volunteers to talk. **(*Para alunos mais comunicativos* / *Só precisa comunicar quando o professor abrir pra participação da classe.*)**
 - *Mage*: When provides a right answer. **(*Para alunos mais introvertidos.* / *Unica classe que ganha ponto fora da sala de aula, se fizer as atividades de casa corretamente.*)**

Deixando claro que toda vez que o aluno fizer o objetivo da classe ele ganha 1 XP. Mesmo o Mage, tendo acertado várias respostas dentro de uma atividade, para que o XP seja dado todas as respostas precisam ser corretas. É a dificuldade da classe para que não tenha uma participação direta e/ou espontânea do aluno em sala.

### RANKING

Existem cinco níveis de Ranking **(*Bronze / Silver / Gold / Ruby / Diamond*)** e todos os alunos começaram com seu personagem no Ranking *Bronze*. Toda vez que os alunos completaram os objetivos de suas classes até alcançarem 10 XP eles sobem de Ranking **(*De Bronze para Silver; De Silver para Gold...*)**.

Quando o aluno alcançar o nível Diamond algo da prova pode ser facilitado em algum mecanismo de avaliação importante **(*Eu estou usando a Prova Oral como ponto, já que o normal é ela ser desvendada no dia e os alunos terem que preparar o que dizer no momento. Com o Ranking Diamond eles podem ter uma semana de preparo para irem mais preparados.*)**.

Sempre que um aluno subir de nível ele ganha 1 FP **(*Ponto de Fortuna*)**, que é usado para comprar *Benefícios* durante as aulas posteriores.