let resultado = document.getElementById("resultado");
const botao = document.querySelectorAll(".operadores");

botao.forEach(teste);

function teste(add) {
  add.addEventListener("click", descobreBotao);
}

function descobreBotao(event) {
  let textoBotao = event.target.textContent;
  console.log(textoBotao);
}

// function teste(teste) {
//   teste.addEventListener("click", clique);
// }

// function clique(event) {
//   console.log("teste", resultado);
// }
