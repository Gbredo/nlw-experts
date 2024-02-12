const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um framework",
      ],
      correta: 1 // A resposta B é correta (linguagem de programação)
    },
    {
      pergunta: "Qual o símbolo utilizado para comentários de uma única linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "--",
      ],
      correta: 0 // A resposta A é correta (//)
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de alerta na tela",
        "Imprimir valores no console do navegador",
        "Executar uma função assíncrona",
      ],
      correta: 1 // A resposta B é correta (imprimir valores no console do navegador)
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 10;",
        "var myVar = 10;",
      ],
      correta: 2 // A resposta C é correta (var myVar = 10;)
    },
    {
      pergunta: "Qual o operador lógico utilizado para 'ou' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 1 // A resposta B é correta (||)
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um objeto",
        "Um bloco de código reutilizável",
      ],
      correta: 2 // A resposta C é correta (um bloco de código reutilizável)
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Criar um novo elemento HTML",
        "Adicionar um evento a um elemento HTML",
        "Remover um elemento HTML",
      ],
      correta: 1 // A resposta B é correta (adicionar um evento a um elemento HTML)
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (i <= 5; i++) {}",
        "for (i = 0; i <= 5; i++) {}",
        "for (i = 0; i < 5; i++) {}",
      ],
      correta: 1 // A resposta B é correta (for (i = 0; i <= 5; i++) {})
    },
    {
      pergunta: "Como se verifica o tipo de dado de uma variável em JavaScript?",
      respostas: [
        "typeOf",
        "typeof",
        "TypeOf",
      ],
      correta: 1 // A resposta B é correta (typeof)
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de múltiplas linhas em JavaScript?",
      respostas: [
        "// Este é um comentário de múltiplas linhas //",
        "/* Este é um comentário de múltiplas linhas */",
        "<!-- Este é um comentário de múltiplas linhas -->",
      ],
      correta: 1 // A resposta B é correta (/* Este é um comentário de múltiplas linhas */)
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
  