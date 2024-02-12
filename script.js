const perguntas = document.querySelectorAll("dt");
const respostas = document.querySelectorAll("dd");/* 
const icone = document.querySelectorAll('dl img'); */

function ativarPergunta(event) {

  respostas.forEach((item) => {
    item.classList.remove("ativo");
  });
  perguntas.forEach((item) => {
    item.classList.remove("ativo");
  });

  event.target.classList.toggle("ativo");
  event.target.nextElementSibling.classList.toggle("ativo");
}

perguntas.forEach((item) => {
  item.addEventListener("click", ativarPergunta);
/*   item.addEventListener('click', ativarResposta) */
});
