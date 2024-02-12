const perguntas = document.querySelectorAll("dt");
const respostas = document.querySelectorAll("dd");
const icones = document.querySelectorAll(".dtHeader img");

function initFAQ() {
  icones[0].src = "assets/images/icon-minus.svg";

  function ativarPergunta(event) {
    perguntas.forEach((item) => {
      item.classList.remove("ativo");
    });

    respostas.forEach((item) => {
      item.classList.remove("ativo");
    });

    icones.forEach((item) => {
      item.src = "assets/images/icon-plus.svg";
    });

    const indexPergunta = Array.from(perguntas).indexOf(event.target);

    event.target.classList.toggle("ativo");
    respostas[indexPergunta].classList.toggle("ativo");
    icones[indexPergunta].src = "assets/images/icon-minus.svg";
  }

  perguntas.forEach((item) => {
    item.addEventListener("click", ativarPergunta);
  });

  function ativarIcone(event) {
    perguntas.forEach((item) => {
      item.classList.remove("ativo");
    });

    respostas.forEach((item) => {
      item.classList.remove("ativo");
    });

    icones.forEach((item) => {
      item.src = "assets/images/icon-plus.svg";
    });

    const indexIcone = Array.from(icones).indexOf(event.target);
    perguntas[indexIcone].classList.toggle("ativo");
    respostas[indexIcone].classList.toggle("ativo");
    event.target.src = "assets/images/icon-minus.svg";
  }

  icones.forEach((item) => {
    item.addEventListener("click", ativarIcone);
  });
}
initFAQ();
