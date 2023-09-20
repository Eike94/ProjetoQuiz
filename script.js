const questions = [
    {
        question: "O Brasil enfrenta diversos problemas ambientais que prejudicam as diferentes espécies que aqui vivem. De acordo com o IBGE, três problemas ambientais são os mais relatados no Brasil. Marque a alternativa que indica esses problemas:",
        options: [
            "Poluição do solo, poluição atmosférica e contaminação por metais pesados.",
            "Contaminação por metais pesados, desmatamento e caça.",
            "Poluição atmosférica, queimadas e caça.",
            "Assoreamento, desmatamento e queimadas.",
            "Queimadas, poluição do solo e contaminação por metais pesados."
        ],
        answer: 3
    },
    {
        question: "(UNINOEST) Entre os impactos ambientais causados nos ecossistemas pelo homem, podemos citar:\nI. Destruição da biodiversidade.\nII. Erosão e empobrecimento dos solos.\nIII. Enchentes e assoreamento dos rios.\nIV. Desertificação.\nV. Proliferação de pragas e doenças.\nAssinale a alternativa que melhor representa os impactos consequentes do desmatamento:",
        options: [
            "Apenas I",
            "Apenas V",
            "Apenas III, IV e V",
            "Apenas I, II, III e V",
            "I, II, III, IV e V"
        ],
        answer: 4
    },
    {
        question: "Assinale a alternativa que apresenta a melhor conceituação do termo meio ambiente:",
        options: [
            "É a junção somente dos aspectos naturais do espaço geográfico.",
            "É constituído apenas por elementos que fazem parte da natureza.",
            "É a relação entre os aspectos de origem antrópica do espaço social.",
            "É a inter-relação entre os diversos componentes físicos e humanos.",
            "É formado pelos elementos que foram construídos pela sociedade."
        ],
        answer: 3
    },
    {
        question: "O conceito de conservação ambiental implica no uso racional dos recursos naturais. Desse modo, ele está diretamente ligado ao conceito de",
        options: [
            "preservação.",
            "sustentabilidade.",
            "meio natural.",
            "espaço geográfico.",
            "comunidade."
        ],
        answer: 1
    },
    {
        question: "Das opções abaixo, a que não representa um impacto ambiental é:",
        options: [
            "chuva ácida",
            "assoreamento dos rios",
            "desertificação",
            "poluição sonora",
            "mobilidade urbana"
        ],
        answer: 4
    },
    {
        question: "Muitos impactos ambientais trazem consequências graves e algumas vezes irreversíveis para o meio ambiente. Alguns deles são causados pelo homem e surgem, sobretudo, pela falta de consciência ambiental, como o uso indiscriminado dos recursos naturais. Todas as alternativas abaixo trazem exemplos de ações positivas relacionadas com a consciência ambiental, exceto:",
        options: [
            "a economia de água e de energia",
            "o uso de automóveis",
            "o descarte correto do lixo",
            "a redução do consumo",
            "o uso de sacolas biodegradáveis"
        ],
        answer: 1
    },
    {
        question: "O termo impacto ambiental negativo refere-se à",
        options: [
            "ação do homem no espaço geográfico.",
            "utilização de recursos da natureza.",
            "formação de paisagens naturais.",
            "manutenção dos aspectos do espaço.",
            "transformação danosa do espaço natural."
        ],
        answer: 4
    },
    {
        question: "No ano de 2020, uma grande quantidade de queimadas foi registrada no Pantanal. Mesmo antes do final do ano, 2020 já foi considerado histórico no número de focos de incêndio. Analise as alternativas a seguir e indique qual fator não favorece o aumento de queimadas:",
        options: [
            "Baixa umidade",
            "Temperaturas elevadas",
            "Endurecimento de regras ambientais",
            "Redução da fiscalização",
            "Uso do fogo para a abertura de novas áreas agropecuárias"
        ],
        answer: 2
    },
    {
        question: "Os conceitos abaixo estão relacionados ao meio ambiente. Apenas um está incorreto. Marque a alternativa que não relaciona o conceito correto:",
        options: [
            "Ecologia: ciência responsável pelo estudo das relações entre os seres vivos e o meio ambiente.",
            "Ecossistema: conjunto formado pelos seres vivos e elementos físicos com os quais interagem, compondo um sistema funcional.",
            "Habitat: ambiente em que uma espécie de organismo vivo se desenvolve, uma vez que esse local oferece as condições ideais para tal.",
            "Desenvolvimento sustentável: modelo de desenvolvimento socioeconômico a ser implantado nos países para garantir a conservação do meio ambiente junto do seu crescimento econômico e avanço nas pautas sociais.",
            "Sustentabilidade: garantia de preservação ambiental em locais protegidos por lei."
        ],
        answer: 4
    },
    {
        question: "A falta de tratamento de esgoto é das principais causas da poluição das águas, uma vez que grande parte do esgoto doméstico é lançado nos rios e mares. A poluição do solo resulta da utilização de agrotóxicos, além da produção de lixo e do descarte incorreto de produtos químicos. A principal causa da poluição do ar é a liberação de dióxido de carbono no meio ambiente. Sobre os problemas ambientais citados acima, estão corretas as sentenças:",
        options: [
            "I",
            "I e II",
            "I e III",
            "II e III",
            "I, II e III"
        ],
        answer: 4
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const scoreElement = document.querySelector('.score');
const resultElement = document.querySelector('.result');
const clickSound = document.getElementById('clickSound');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
    
}

function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    
    const percentage = (score / questions.length) * 100;
    
    if (percentage < 50) {
        resultElement.innerHTML = `Poxa, não foi desta vez. Tente novamente. <br> Sua pontuação foi: ${score}`;
    } else if (percentage <= 90) {
        resultElement.innerHTML  = `Muito bom!! <br> Sua pontuação foi: ${score}`;
    } else {
        resultElement.innerHTML  = `Excelente! Você acertou todas! <br> Sua pontuação foi: ${score}`;
    }
    
    resultElement.style.display = 'block';
    document.querySelector('.restart-button').style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    questionElement.style.display = 'block';
    optionsElement.style.display = 'block';
    resultElement.style.display = 'none';
    document.querySelector('.restart-button').style.display = 'none';
    loadQuestion();
}

loadQuestion();