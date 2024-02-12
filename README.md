# nlw-experts

## Tecnologias Utilizadas

- HTML
- CSS
- JavaSCRIPT
- Github

Este HTML é a estrutura básica de uma página web que contém um quiz. Abaixo estão os comentários explicando cada parte do código:

DOCTYPE html: Define o tipo de documento HTML.
<html lang="pt-br">: Define o idioma da página como português do Brasil.
<head>: Contém metadados e links para arquivos externos.
<meta charset="UTF-8">: Define a codificação de caracteres como UTF-8 para suportar caracteres especiais.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Configura a escala inicial e a largura da página para dispositivos móveis.
<title>: Define o título da página exibido na aba do navegador.
<link rel="stylesheet" href="./style.css">: Importa o arquivo de estilos CSS externo.
<body>: Contém o conteúdo principal da página.
<main>: Define o conteúdo principal da página.
<header>: Contém o cabeçalho da página, incluindo o logotipo e o título principal.
<div id="quiz">:</div>: Container onde serão inseridas as perguntas do quiz.
<template>: Define um modelo de item para as perguntas do quiz.
<div id="acertos">:</div>: Container para exibir o número de acertos do usuário.
<script src="./index.js">:</script>: Importa o arquivo de script JavaScript externo.

Este arquivo CSS contém estilos para a página HTML do quiz. Abaixo estão os comentários explicando cada parte do código:

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');: Importa a fonte 'Inter' do Google Fonts.
Reset de estilos: Define valores padrão para margens, preenchimentos e caixa de modelo para todos os elementos, além de definir a fonte padrão como 'Inter'.
Estilos gerais: Define a cor de fundo do corpo da página e limita a largura máxima do conteúdo principal.
Estilos do cabeçalho: Adiciona espaçamento, borda inferior e estilos de texto para o cabeçalho da página.
Estilos do quiz: Define estilos para cada item do quiz, incluindo margens, bordas e cores de fundo.
Estilos das perguntas: Define estilos para o título de cada pergunta, incluindo espaçamento, cor de texto e contador.
Estilos das opções de resposta: Define estilos para as opções de resposta, incluindo espaçamento, alinhamento e estilos de texto.
Estilos das caixas de seleção: Define estilos para as caixas de seleção das opções de resposta, incluindo tamanho, borda e cor.
Estilos dos marcadores de caixa de seleção: Define estilos para os marcadores das caixas de seleção quando estão marcadas, incluindo cor e tamanho.
Estilos do contêiner de acertos: Define estilos para o contêiner que exibe o número de acertos do usuário, incluindo alinhamento de texto e cor de fundo.

Este script JavaScript controla a lógica do quiz. Abaixo estão os comentários explicando cada parte do código:

Inicialização das variáveis: Obtém referências para os elementos HTML relevantes.
Criação do conjunto de respostas corretas: Utiliza um conjunto para armazenar as respostas corretas, garantindo que não haja duplicatas.
Loop sobre as perguntas: Itera sobre cada pergunta do array perguntas.
Clonagem do template: Clona o conteúdo do template para criar um novo item de quiz para cada pergunta.
Loop sobre as respostas: Itera sobre cada resposta da pergunta atual.
Criação das opções de resposta: Clona o elemento dt do template para criar uma nova opção de resposta para cada resposta da pergunta.
Definição do evento de mudança: Define um evento de mudança para cada input de resposta para verificar se a resposta está correta quando o usuário seleciona uma opção.
Atualização do número de acertos: Atualiza o número de acertos e exibe-o no elemento de acertos após cada seleção de resposta.
Remoção do primeiro item dt: Remove o primeiro item dt do elemento dl para limpar o template e prepará-lo para a próxima pergunta.
Adição do item de quiz: Adiciona o item de quiz, contendo a pergunta e as opções de resposta, ao elemento quiz para ser exibido na página.