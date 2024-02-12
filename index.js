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

  
  //serve para pegar elementos
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  //new = serve para criiar coisas novas 
  //Set = pode adicionar ou tirar, mas não pode repetir informação
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    // serve para fazer um clone
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
   // comando que espera por uma função
    dt.querySelector('input').onchange = (event) => {
      // não use ===, senão todos seriam falsos, pois números não são strings
      const estaCorreta = event.target.value == item.correta // true
      
      corretas.delete(item)
      if(estaCorreta) {
      corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
   
   // serve para adicionar um "filho"
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //serve para deletar um elemento
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  