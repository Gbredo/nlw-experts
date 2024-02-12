const perguntas = [
  {
    pergunta: "Quem é o criador original de Dungeons & Dragons?",
    respostas: [
      "Richard Garfield",
      "Gary Gygax",
      "Steve Jackson",
    ],
    correta: 1 // A resposta B é correta (Gary Gygax)
  },
  {
    pergunta: "Qual é o nome do principal sistema de regras utilizado em Dungeons & Dragons?",
    respostas: [
      "D20 System",
      "Pathfinder",
      "GURPS",
    ],
    correta: 0 // A resposta A é correta (D20 System)
  },
  {
    pergunta: "Quantos jogadores participam de uma típica sessão de Dungeons & Dragons?",
    respostas: [
      "Até 4 jogadores",
      "Até 6 jogadores",
      "Depende do Mestre",
    ],
    correta: 2 // A resposta C é correta (Depende do Mestre)
  },
  {
    pergunta: "Qual é o objetivo principal dos jogadores em Dungeons & Dragons?",
    respostas: [
      "Construir impérios e expandir territórios",
      "Derrotar monstros e coletar tesouros",
      "Explorar masmorras e completar missões",
    ],
    correta: 2 // A resposta C é correta (Explorar masmorras e completar missões)
  },
  {
    pergunta: "Qual é o nome do editor responsável pela quinta edição de Dungeons & Dragons?",
    respostas: [
      "Wizards of the Coast",
      "Paizo Publishing",
      "Chaosium",
    ],
    correta: 0 // A resposta A é correta (Wizards of the Coast)
  },
  {
    pergunta: "Qual é o título do primeiro livro de regras de Dungeons & Dragons lançado em 1974?",
    respostas: [
      "Dungeon Master's Guide",
      "Player's Handbook",
      "Original Dungeons & Dragons",
    ],
    correta: 2 // A resposta C é correta (Original Dungeons & Dragons)
  },
  {
    pergunta: "Qual é o nome do sistema utilizado para criar personagens em Dungeons & Dragons?",
    respostas: [
      "Character Builder",
      "Hero Lab",
      "Player's Handbook",
    ],
    correta: 2 // A resposta C é correta (Player's Handbook)
  },
  {
    pergunta: "Qual é o termo usado para descrever o narrador e árbitro do jogo em Dungeons & Dragons?",
    respostas: [
      "Dungeon Master",
      "Game Master",
      "Storyteller",
    ],
    correta: 0 // A resposta A é correta (Dungeon Master)
  },
  {
    pergunta: "Qual é o nome do mundo fictício mais famoso em Dungeons & Dragons?",
    respostas: [
      "Middle-earth",
      "Forgotten Realms",
      "Westeros",
    ],
    correta: 1 // A resposta B é correta (Forgotten Realms)
  },
  {
    pergunta: "Qual é o nível máximo que um personagem pode atingir em Dungeons & Dragons?",
    respostas: [
      "20",
      "30",
      "50",
    ],
    correta: 0 // A resposta A é correta (20)
  },
];

  
  // Inicialização das variáveis do quiz
const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

// Criação de um conjunto para armazenar as respostas corretas
const corretas = new Set();
// Obtém o número total de perguntas
const totalDePerguntas = perguntas.length;
// Elemento HTML que mostra o número de acertos
const mostrarTotal = document.querySelector('#acertos span');
// Define o texto inicial do elemento de acertos
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

// Loop sobre cada pergunta do array de perguntas
for (const item of perguntas) {
  // Clona o conteúdo do template para criar um novo item de quiz
  const quizItem = template.content.cloneNode(true);
  // Define o texto da pergunta no elemento h3
  quizItem.querySelector('h3').textContent = item.pergunta;

  // Loop sobre cada resposta da pergunta atual
  for (let resposta of item.respostas) {
    // Clona o elemento dt do template para criar uma nova opção de resposta
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    // Define o texto da resposta no elemento span
    dt.querySelector('span').textContent = resposta;
    // Define o nome e o valor do input para identificar a resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta);

    // Define um evento de mudança para o input
    dt.querySelector('input').onchange = (event) => {
      // Verifica se a resposta está correta comparando os valores dos inputs
      const estaCorreta = event.target.value == item.correta;

      // Remove a pergunta do conjunto de respostas corretas
      corretas.delete(item);
      // Adiciona a pergunta ao conjunto de respostas corretas se estiver correta
      if (estaCorreta) {
        corretas.add(item);
      }
      // Atualiza o texto do elemento de acertos
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    };

    // Adiciona a opção de resposta ao elemento dl
    quizItem.querySelector('dl').appendChild(dt);
  }

  // Remove o primeiro item dt do elemento dl
  quizItem.querySelector('dl dt').remove();
  // Adiciona o item de quiz ao elemento quiz
  quiz.appendChild(quizItem);
}
