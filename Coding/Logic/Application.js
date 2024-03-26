class Gif {
    constructor(gifId, quote1, quote2, gifPath, alterDescription, infoTitle, infoContent){
        this.gifId = gifId;
        this.quote1 = quote1;
        this.quote2 = quote2;
        this.gifPath = gifPath;
        this.alterDescription = alterDescription;
        this.infoTitle = infoTitle;
        this.infoContent = infoContent;
    }
}

var GifsDatabase = [
    new Gif(
        0,
        'Você vai perder pessoas na estrada pelo sucesso , por isso a Ferrari tem 2 lugares e o ônibus 50...',
        'Mas em um trem bala da China comunista cabem centenas de pessoas e é mais rápido que ambos.',
        "Assets/GIFs/China Comunista.gif",
        "O gif mostra dois carros numa estrada, um vermelho e outro ver, es distintas posições. Um trem em alta velocidade cruza a imagem, ultrapassando ambos",
        'Primeiramente: Não sou comunista 😅',
        'Não feche a guia, não vamos discutir modelos econômicos aqui ¬¬ Na verdade, eu gostaria de abordar um ponto que, apesar de implícito, deveria ser óbivo. Você já reparou que toda frase motivacional desse cunho acaba segregando as pessoas entre perdedores e vencedores? Sempre com o uso de metáforas. \nPor exemplo, nesse caso, quem está no ônibus é um suposto perdedor, já quem está na Ferrari venceu. Essa e outras frases desse tipo tentam sempre estabelecer essa relação com o leitor, a de que ele está se sobressaindo sobre os demais. O intuito é criar a ideia de destaque individual como forma de motivação, mas existe um problema muito sério nisso. Eu poderia dizer que é muito desumano e malicioso você sempre estabelecer que haverão perdedores, aliás, para alguém ser chamado de vencedor, ou para dizer que alguém venceu alguma coisa, é necessário a existência de perdedores.\nPorém eu sei que para muitos, essa não é uma preocupação, ser humano com os deamis, por isso vamos tentar uma abordagem diferente. Para tal usarei também de muitas metáforas e espero que você seja inteligente o suficiente para entendê-las.\nEssa abordagem neoliberal surgiu há muito tempo: a de criar a impressão de que você é ou pode ser alguém melhor do que os demais, não que isso não seja verdade, mas não é exatamente relevante. Porque veja bem, da mesma maneira, outras pessoas também podem ser ou são melhores do que você, o problema de verdade é que estabelecer essa relação entre indivíduos que em teoria fazem parte de um mesmo grupo, cria uma competitividade agressiva e que afasta essas pessoas, tanto para o trabalho em conjunto quanto no ambiente social.\nA pessoa que adota esse tipo de perspectiva passa acreditar que ela é socialmente superior aos demais, ou porque acha que trabalha mais, ou porque acha que tem mais responsabilidades, ou porque comprou uma Ferrari.\nEntão, quando a união de classe se faz necessária, ela não acontece, justamente porque você acredita que não pertence mais ao grupo de pessoas que andam de ônibus só porque você comprou uma ferrari. E acredite, se você já foi uma pessoa que anda de ônibus, para alguns fins (para os fins que importam) você sempre vai ser uma pessoa que anda de ônibus, mesmo sentado no banco de uma Ferrari, acompanhado ou não.'
    ),
    new Gif(
        1,
        'Duas coisas para nunca se esquecer: Primeiro, Foguete não da ré.',
        'Segundo, infelizmente, você ainda não é um foguete O.o',
        "Assets/GIFs/Foguete.gif",
        'O Gif mostra um foguete em ascenção, após ultrapassar a atmosfera, suas turbinas falham e ele começa a cair.',
        'Olhe para as suas pernas: Se você não vê uma turbina, parabéns! Você não é um foguete!',
        '     Olha, não têm muito o que dizer sobre essa frase em questão. Acho ela tão bobinha, tão medíocre. Além disso, graças a uma certa pessoa, agora os foguetes podem dar ré, ou seja; ela meio que está desatualizada. \nNo mais, se você precisa ouvir esse tipo de coisa, ou ficar repetindo isso para si mesmo para se sentir motivado: eu sinto muito, sinto muitíssimo.',
    ),
    new Gif(
        2,
        'Para te inspirar: O escritório do Google já foi uma garagem!',
        'Mas antes de mudar a sede da sua Startup para a porta da sua casa, é bom que ela já tenha recebido 1 milhão de dólares de investimento, já que esse era o investimento do Google na garagem <3',
        "Assets/GIFs/Google.gif",
        'O Gif mostra a porta de uma garagem que se levanta, revelando em seu interior a letra G em tamanho grande, depois da letra brilhar o gif se reinicia',
        'Mas vamos combinar né, nos dias de hoje, mais difícil que ter uma empresa é ter uma garagem O.o',
        '     Você já ouviu falar no mito da garagem, ou então no mito da origem humilde? Bom basicamente se resume em acreditar que determinada pessoa influente teve uma origem muito humilde. Existe um interesse grande nisso, as pessoas que acreditam ficam muito inspiradas, além é claro, a pessoa/empresa em questão ganha muita admiração ou comoção popular. O problema é que, quer você queira ou não, essas histórias em sua maioria são omissas, para não dizer mentirosas.\n A google foi apenas um exemplo, mas praticamente toda empresa bilionária surgiu porque um grupo de gente com dinheiro caindo pelos bolsos resolveu ganhar mais dinheiro.\n Eu gostaria de citar muitos e muitos exemplos, mas como não me vejo na credibilidade para tal, vou apenas indicar uma fonte: o vídeo “O mito da garagem” do canal “O Algoritmo da Imagem” no YouTube. Vale a pena conferir.\nAlém disso, o intuito aqui (como dito na aba Sobre desse site) não é te desmotivar, não é porque todas as empresas tiveram uma origem nada humilde que a sua empresa não pode dar certo. O importante é saber onde se inspirar e porquê. Você não precisa se basear em meias verdades para se sentir motivado, tente se inspirar em pessoas como você, e garanto que muita gente com a mesma origem que a sua tem empresas funcionando e dando certo, com muito para ensinar e, claro, aprender também.',    
    ),
    new Gif(
        3,
        'O Sol é para todos',
        'Mas, se você conhece o verão brasileiro, eu tenho uma pergunta honesta: Quem é que precisa de mais SOL?',
        "Assets/GIFs/Sol.gif",
        'No Gif, um sol é mostrado brilhando. Ele possui um rosto bonito, mas que se transforma em uma careta',
        'Essa frase também da título a um livro, que por sinal é muito ruim...',
        '     Se você ainda acredita na ideia de que partimos todos do mesmo lugar, eu invejo a sua ingenuidade.\nEu já desenhei, mas vou desenhar de novo com um exemplo bem didático.\nVamos supor que uma mulher chamada Ana sonha em ser comissária de bordo. Ela faz o curso, consome conteúdo sobre e se dedica muito. Na turma dela há outra mulher, chamada Christina, que assim como Ana tem o mesmo sonho, a diferença é que a mãe de Christina namora com o piloto de uma companhia aérea. Pergunta honesta: qual das duas vai conseguir realizar o seu sonho primeiro?\nEspero que a resposta tenha sido bastante óbvia para você. O exemplo apesar de não ser muito bom representa o que acontece o tempo inteiro no mercado de trabalho. As pessoas ocupando os melhores cargos na maioria das vezes não são as mais capacitadas para tal, mas possuem melhores relações. Antes que você julgue, é bom salientar: se você gastasse anos da sua vida criando uma empresa que vingou, seria natural que você desejasse encontrar nela emprego para as pessoas que você gosta, como seu filho, sobrinho, genro etc... Então sempre que você se indignar quando alguém conseguir uma vaga por causa das suas relações, pense se você não faria o mesmo, ou no caso de ser a pessoa contemplada, se você não ficaria muito bem agradecido pela oportunidade.\nAlém disso, o exemplo proposto não contempla problemas sociais que são mais graves, como machismo, racismo, transfobia e etc. Problemas que inibem constantemente as oportunidades.\nPor falar em oportunidade, a questão tem sempre que ser vista dessa perspectiva, e não pela perspectiva do mérito. Outro exemplo, é sabido que Yasmin Brunet, modelo brasileira, desfila desde os seus 13 anos. Trabalhar desde cedo é algo visto como admirável por algumas pessoas. Mas pensa um pouco: querendo, quem no lugar dela não faria o mesmo? Se ela não fosse filha da então já consolidada modelo Luiza Brunet, seria mais fácil ou mais difícil? Se você quisesse ser modelo tão novo(a), mas sem os acessos que Yasmin teve, seria diferente?\nO que quero dizer é que ela pode ter trabalho duro e se esforçado, mas o que fez a diferença foi a oportunidade, foi a condição em que ela estava. Mais uma vez também repito, se você fosse a Luiza Brunet, e sua filha quisesse seguir sua carreira, é natural que você fizesse o possível por ela.\nO problema é enxergar mérito de trabalho quando tudo não passou de uma boa oportunidade. Yasmin não está errado, eu faria o mesmo e sei que você também.'
    ),
    new Gif(
        4,
        'Se a vida te der limões...\nFaça uma liminada.',
        'E se for vender, não esqueça de colocar um preço bem baixo. Já tem gente demais vendendo limonada...',
        "Assets/GIFs/Zitrone.gif",
        'Na imagem, um limão viaja o espaço até se colidir com a terra.',
        'Aliás, eu também estou vendendo limonada, os interessados favor entrar em contato na aba contato 😊',
        '      Vamos fazer três análises sobre a frase em questão, uma mais pessimista que a outra 😊\nA primeira seria dizer que ela passa uma falsa impressão de que sempre temos o controle das coisas, sendo que muitas vezes fazer uma limonada vai ser impossível, mesmo com tantos limões. Além disso, gostaria de salientar uma frase muito importante, não é porque é possível que significa que seja justo. Então mesmo que você consiga se desdobrar para sair do ponto A e ir ao ponto B, pense se é justo com você. Acreditar na ideia desse controle constante é perigoso e alimenta frustrações, além do mais, faz com que você não ache tão estranho assim quando alguém te cobra por algo que não tem nada a ver com você ou que foge do seu limite.\nMas, apesar disso, existem sim coisas que você controla, e são elas que precisam vir sempre em primeiro lugar no seu plano de ação. Eu gosto muito da ideia de ser adaptativo, saber lidar com situações adversas, você sempre aprende algo novo e melhora as suas capacidades. O importante é equilibrar isso, saber sempre qual o seu limite, e nunca o exceder.\nPor fim, e mais importante do que tudo, é sempre bom lembrar: Você vive no mundo capitalista, tudo que você quer ter precisa ser comprado ou tomado, e se você ganha de alguém, essa pessoa comprou ou tomou de outra pessoa. Ou seja, não, a vida nunca vai te dar coisa alguma, nem mesmo limões 😊.',
    )

];

var gifController = {
    possibleGifs: [],
    currentGif: new Gif(),

    gifInit: function(){
        this.possibleGifs = GifsDatabase.concat();
        this.changeGif();
    },
    
    changeGif: function(){
        console.log(this.possibleGifs.length);
        if (this.possibleGifs.length !== 0){
            this.currentGif = this.possibleGifs[Math.floor(Math.random() * this.possibleGifs.length)];
            var indexToRemove = this.possibleGifs.indexOf(this.currentGif);
            if (indexToRemove !== -1){
                this.possibleGifs.splice(indexToRemove, 1);
            };
            var placeImage = document.getElementById('gifImage');
            placeImage.src = this.currentGif.gifPath;
            placeImage.alt = this.currentGif.alterDescription;
            var placeQuote1 = document.getElementById('quote1');
            placeQuote1.textContent = this.currentGif.quote1;
            var placeQuote2 = document.getElementById('quote2');
            placeQuote2.textContent = this.currentGif.quote2;
            localStorage.setItem('gifImage', this.currentGif.gifPath);
            localStorage.setItem('gifImageAlt', this.currentGif.alterDescription);
            localStorage.setItem('infoTitle', this.currentGif.infoTitle);
            localStorage.setItem('infoContent', this.currentGif.infoContent);
        } else {
            alert("Banco de dados esgotado! Reinicie a página!");
        };
    },
    settingInfoPage: function(){
        var placeImage = document.getElementById('gifImage');
        placeImage.src = localStorage.getItem('gifImage');
        placeImage.alt = localStorage.getItem('gifImageAlt');
        var settingTitle = document.getElementById('infoTitle');
        settingTitle.textContent = localStorage.getItem('infoTitle');
        var settingContent = document.getElementById('infoContent');
        settingContent.textContent = localStorage.getItem('infoContent');
    },
};