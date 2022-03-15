# SCHOOL RPG :scroll: :game_die:

Um sistema voltado para aplicação em sala de aula, onde o aluno possa se sentir confortável para demonstrar seu ponto forte e para cooperar com seus colegas.

[DEMO](https://school-rpg.vercel.app)

O jogo será apresentado abaixo, o que terá na aplicação é uma ficha de personagem que é mantida apenas com os Cookies do navegador. Por enquanto só existe uma versão web, devido a limitação do programador.

## TECNOLOGIAS

 - *Next.JS*
 - *Nookies* **(*setCookie*, *parseCookie*)**
 - *StyledComponents*

## PASSO-A-PASSO DOS ELEMENTOS DE JOGO

O sistema não é nem um pouco complexo, para que possa ser aplicado em turmas de níveis diferentes e com temáticas diferentes. Eu sou um professor de inglês, então estou usando termos nesse idioma por simples conveniência, a adaptação é totalmente válida.

### CLASS

Existem três classes que podem ser escolhidas pelos alunos, mais duas classes opcionais, que você pode acrescentar se fizer sentido na sala e você estiver confortável. As classes padrões são Knight, Bard e Mage. As classes opcionais são Rogue e Explorer. O aluno deve escolher apenas uma das classes, mas pode trocar se ele não se sentir confortável, no final da aula.

As classes servem para gerar XP **(*Pontos de Experiência*)** para o personagem, que tem uma função que será elucidada no momento mais adequado. Abaixo estão uma descrição de como as classes ganham XP.

 - *Knight*: When helps another student. **(*Para alunos que gostam de ajudar.* / *O ponto é dado se a ajuda estiver correta*)**
 - *Bard*: When volunteers to talk. **(*Para alunos mais comunicativos* / *Só precisa comunicar quando o professor abrir pra participação da classe.*)**
 - *Mage*: When answers right. **(*Para alunos mais introvertidos.* / *Unica classe que ganha ponto fora da sala de aula, se fizer as atividades de casa corretamente.*)**
 - ***Rogue***: When corrects what the teacher says. **(*Para os alunos que gostam de desafiar o professor* / *Uma classe opcional para alunos que aprenderam aquele conteúdo de outra forma. Se ele também estiver certo, ou só ele estiver certo está valendo.*)**
 - ***Explorer***: When searches and gives a correct answer from the internet **(*Para alunos que não conseguem manter a atenção por muito tempo* / *Uma classe opcional onde o aluno acha a resposta na internet e fala pra sala. Só funciona se for uma sala onde é possível os alunos terem o celular na mão.*)**

Deixando claro que toda vez que o aluno fizer o objetivo da *Classe* ele ganha 1 XP. Mesmo o Mage, tendo acertado várias respostas dentro de uma atividade, para que o XP seja dado todas as respostas precisam ser corretas. É a dificuldade da *Classe* para que não tenha uma participação direta e/ou espontânea do aluno em sala.

Para que haja um senso de grupo de RPG, como nas mesas, os alunos terão que se ajudar para ganharem seus XP's. Tem de estar claro para todos os envolvidos que sempre que um aluno performar o objetivo da sua classe, ele não irá receber os pontos diretamente. Algum outro aluno da sala deve perceber que ele cumpriu o objetivo e então apelar para você, que então concederá o ponto. No começo isso não será tão automático, então não tem problema relembrar os alunos de que eles tem de colaborar um com os outros para ganhar seus XP's, mas algo que deve ser desencorajado desde o princípio é um aluno pedir para que o outro avise o professor de que ele tem que receber seu ponto. Tem de ser algo genuíno.

### RANKING

Existem cinco níveis de *Ranking* **(*Bronze / Silver / Gold / Ruby / Diamond*)** e todos os alunos começaram com seu personagem no *Ranking* *Bronze*. Toda vez que os alunos completaram os objetivos de suas classes até alcançarem 10 XP eles sobem de *Ranking* **(*De Bronze para Silver; De Silver para Gold...*)**.

Quando o aluno alcançar o nível Diamond algo da prova pode ser facilitado em algum mecanismo de avaliação importante **(*Eu estou usando a Prova Oral como ponto, já que o normal é ela ser desvendada no dia e os alunos terem que preparar o que dizer no momento. Com o Ranking Diamond eles podem ter uma semana de preparo para irem mais preparados.*)**.

Sempre que um aluno subir de nível ele ganha 1 FP **(*Ponto de Fortuna*)**, que é usado para comprar *Benefícios* durante as aulas posteriores.

Existem formas do Ranking diminuir também, como uma *Penalidade*, a do tipo mais forte. As *Penalidades* que causam a descida de um Ranking são decididas por você, mas existe um modelo a ser seguido, se for o caso, na seção específica. Quando isso acontece, o aluno perde todos os seus FP's que ele acumulou até então. 

### PONTOS

Existem os dois tipos de pontuação. O XP **(*Pontos de Experiência*)** e o FP **(*Ponto de Fortuna*)** e cada é usado em uma situação. Para ser mais simples de explicar, dá pra imaginar que os esforços individuais serão recompensados com XP, como fazer o objetivo da *Classe*. Os esforços coletivos serão recompensados com FP, como fazer as *Quests*. **(*A explicação virá mais a baixo*)**.

O único dever do XP, ao menos por hora, é acumular até 10 e então voltar a zero quando o aluno subir o *Ranking*. Ainda não existem outras formas declaradas de ganhar XP a não ser cumprir com os objetivos da *Classe*, porém, como em qualquer outro RPG mais moderno, você pode premiar o aluno com XP quando ele tem alguma ideia inventiva em *Classe*, quando ele for honesto ou em qualquer outro momento de realização pessoal dele que você achar que caiba. O máximode de XP diário que uma classe pode receber é 5, se não vira uma guerra, principalmente entre os Bards. Os Explorers só podem receber no máximo 3 XP por aula, pois é o preço de mexer no celular.

O FP por outro lado pode ser encarado como um tipo de moeda. O uso dele é para comprar os *Benefícios* que serão descritos em sua própria seção. E como dito na seção sobre o *Ranking*, toda vez que subir em um o aluno adiquire 1 FP. Mas existe outra maneira, já que ele será usado como moeda, que é completando as *Quests*. Da mesma maneira que se o aluno fizer uma contribuição pessoal ele pode ser recompensado com um XP, se houve uma contribuição coletiva da sala para a aula ou para algum dos colegas, todos os presentes podem receber 1 FP.

### PENALIDADES E BENEFÍCIOS

O que está sendo apresentado em ambos os casos são sugestões, porque em cada turma vai haver uma necessidade e um contexto diferente. As apresentações de *Penalidade* e *Benefício* dessa seção são até gerais, mas se alguma não fizer sentido na sua situação ou se outras demandas, tanto pra um quanto pra outro, surgir durante o período em que estiver utilizando essa prática, então não tenha receio de fazer adaptações.

#### *PENALIDADES*

As *Penalidades* são sempre individuais. Se houver algum tipo de bagunça durante a aula em que couber algo como isso, então cada aluno deverá ser responsabilizado individualmente.

 - Falar no meio da explicação do professor (-1 XP)
 - Não entregar a lição de casa no prazo determinado (-5 xp)
 - Causar confusão na sala / Faltar (Cai um *Ranking*)

Lembrando que se essas opções não estiverem de acordo, você pode alterá-las como for mais conveniente.

#### *BENEFÍCIOS*

Os alunos só podem comprar *Benefícios* para eles mesmo, o FP não pode ser transferido, então fica ao seu critério o volume com o qual eles irão receber *Quests* para acumularem os FP's.

 - Um ponto a mais na lição de casa (1 FP)
 - Não cair um *Ranking* (5 FP)

O ideal é que haja ao menos duas recompensas em cada nível. Uma sugestão, ao invés de você pensar em quais seriam essas recompensas, talvez funcione perguntar para os alunos o que eles gostariam de obter. A recompensa de 1 FP tem de ser algo bem tranquilo de você conseguir entregar, que não demande muito. A de 5 FP pode ser algo mais bem trabalhado, mas pode ser apenas algo mais impactante, como não perder todos os FP's gastando apenas 5. E pode ser algo que vai sendo definido conforme as necessidades deles, e além disso pode ser cumulativo para as turmas seguintes que forem surgindo.

### QUESTS

De uma maneira geral, as *Quests* são uma forma de envolver a sala, como um verdadeiro grupo de RPG. Enquanto se eles performarem o objetivo da *Classe* eles vão obter recompensas individuais, toda vez que a turma fizer uma *Quest* eles recebem 1 FP de maneira coletiva. Para que isso ocorra da maneira mais justa, todos da turma devem performar a *Quest* para receber o ponto. É um esforço coletivo.

Como não há limite de *Quest*, não precisa se preocupar em passar várias em uma aula, ou ficar dias sem passar nenhuma, sendo que recomendo que seja dada uma por aula, para que eles tenham FP's para obter os *Benefícios*.

 - Criar um grupo de Whatsapp com todos os alunos e o professor, para que *Quests* sejam armazenadas e que possa haver uma comunicação mais direta quando for necessário.
 - Alguma atividade prevista que ficou faltando passar em aula e o tempo não irá deixar ser feita no dia.
 - Trabalhos escolares.

Os exemplos acima são apenas possibilidades de *Quest*. Mas pode ser algo emergente, que aconteceu durante a sala. Não perca as oportunidades que aparecerem.

### DICAS

#### TURMAS GRANDES

É dificil organizar o RPG se a turma tiver um certo número de alunos e estiver tudo solto. Se parecer melhor, dá pra dividir em grupos de três ou quatro alunos e ai cada um dos grupos tomam conta dos seus. Quando algum deles performar o objetivo da classe, então alguém do grupo deve dizer que isso aconteceu, para que ele ganhe o ponto.

Quando a sala estiver dividida dessa maneira é possível fazer uma competição entre os grupos e dar algum tipo de premiação no final. Para que seja justo, o primeiro critério para decidir o vencedor é o número de alunos no *Ranking Diamond*. Nesse caso, se tiver grupos com números diferentes de alunos **(*Por exemplo, grupos com três e quatro alunos*)**, então o primeiro critério é que todos os membros do grupo estejam no *Ranking Diamond*, independente da quantidade de membros. Isso irá favorecer quem tem três membros no começo, mas eles não vão poder bagunçar e perder pontos, porque eles ganham no máximo 15 xp por aula e os grupos com quatro alunos ganham 20. Eles terão de se comportar pra perder o menor número de pontos possível. Quando empatar, o segundo valor de desempate é o número de XP. Quem tiver mais XP entre os grupos em que todos conseguiram o *Ranking Diamond* vence. Se empatar novamente, então é possível decidir como o grupo já estiver acostumado. Uma solução é fazer um game show com perguntas ministradas durante o período em que o RPG estiver sendo jogado, e quem irá fazer as perguntas são os outros alunos que não estiverem participando. Sendo que você terá que revisar essas perguntas, filtrar e apresentar as melhores quando o gameshow for acontecer.

Seria interessante se em cada um dos grupos tivesse pelo menos um membro performando uma das classes básicas **(*Então, pelo menos um Knight, um Bard e um Mage*)** e se for usar quatro, a recomendação é que para que a quarta classe, se só as básicas estiverem disponíveis, é paraque seja um Bard. Junte os grupos e então faça eles decidirem quem pegará qual classe da configuração que você escolheu.