// selecionar os links
const links = document.querySelectorAll(".header-menu a")

// Função para ativar links de navegação
//  Esta função adiciona a classe "ativo" a um link, se a URL atual da página
//  incluir o href do link fornecido. Isto é útil para destacar o link
//  correspondente à página atual na navegação do site.

function ativarLinks(link) {
  // Obtém a URL atual da página
  const url = location.href
  // Obtém o href do link fornecido
  const href = link.href

  // Verifica se a URL atual inclui o href do link
  if (url.includes(href)) {
    // Adiciona a classe "ativo" ao link para destacá-lo
    link.classList.add("ativo")
  }
}
// Aplica a função ativarLinks a cada link
links.forEach(ativarLinks)

// ativar itens do orçamento
const parametros = new URLSearchParams(location.search)

//
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro)
  if (elemento) {
    elemento.checked = true
  }
}
parametros.forEach(ativarProduto)

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute("aria-controls")
  const resposta = document.getElementById(controls)

  resposta.classList.toggle("ativa")
  const ativa = resposta.classList.contains("ativa")
  console.log(ativa)
  pergunta.setAttribute("aria-expanded", ativa)
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPerguntas)
