const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você sai da escola, se depara com um novo jogo eletrônico que tem gráficos hiper-realistas e uma inteligência artificial que adapta a dificuldade conforme seu desempenho. Qual o seu primeiro pensamento?",
        alternativas: [
            "Isso é incrível!",
            "Isso é muito impressionante!"
        ]
    },
    {
        enunciado: "Com o lançamento desse novo jogo, o professor de educação física decide fazer uma série de aulas sobre a influência dos jogos digitais e a tecnologia nos esportes. No final de uma aula, ele pede que você escreva um trabalho sobre o impacto da IA nos jogos e esportes. Qual atitude você toma?",
        alternativas: [
            "Utiliza uma ferramenta de busca na internet que utiliza IA para ajudar a encontrar informações relevantes para o trabalho e apresenta numa linguagem clara e compreensível.",
            "Escreve o trabalho com base em discussões com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, o professor realiza um debate entre a turma para discutir como a tecnologia e a IA impactam os jogos e esportes. Durante a discussão, como você se posiciona?",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades e melhorar as estratégias e treinamentos em esportes.",
            "Preocupa-se com o fato de que a tecnologia pode levar a uma dependência excessiva e à diminuição das habilidades pessoais."
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar uma imagem no computador que represente o impacto da IA nos jogos e esportes. E agora?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            "Criar uma imagem utilizando um gerador de imagens de IA."
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo sobre a evolução dos jogos eletrônicos para entregar na semana seguinte. O andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar uma IA para gerar o conteúdo. O problema é que o trabalho ficou muito parecido com o resultado do chat. O que você faz?",
        alternativas: [
           "Utilizar o texto gerado pela IA é uma forma válida de contribuição, então não vejo problema em entregar o trabalho assim.",
            "Embora a IA seja uma ferramenta poderosa, é importante revisar o trabalho e adicionar perspectivas e contribuições pessoais para garantir a originalidade e qualidade do trabalho."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
