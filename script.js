const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola voce se depara com uma nova tecnologia, um chat inteligencia artificial que consegue responder todas as duvidas que uma pessoa pode ter. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso e assustador!",
                afirmacao: "No inicio ficou com medo do que essa tecnologia pode fazer."
            },
            {
                texto: "Isso e maravilhoso!",
                afirmacao: "Quis saber como usar a inteligencia artificial no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligencia Artificial, uma professora de tecnologia da escola resolveu fazer uma sequencia de aulas sobre essa tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA na sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informacoes relevantes para o trabalho e explique numa linguagem que você entenda.",
                afirmacao: "Conseguiu utilizar a IA para buscar informacoes uteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos proprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus proprios conhecimentos para escrever o trabalho."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();