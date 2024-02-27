const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundos = document.getElementById("segundos");

function atualizandoTempo() {
  // Data final desejada
  let dataFinal = new Date("2024-05-26");

  // Data atual
  let dataAtual = new Date();

  // Zera os milissegundos para facilitar os cálculos
  dataAtual.setMilliseconds(0);

  // Calcula a diferença entre as datas em milissegundos
  let diferencaEmMilissegundos = dataFinal - dataAtual;

  // Converte a diferença de milissegundos para dias, horas, minutos e segundos
  let segundosAtual = Math.floor(diferencaEmMilissegundos / 1000) % 60;
  let minutosAtual = Math.floor(diferencaEmMilissegundos / (1000 * 60)) % 60;
  let horasAtual = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60)) % 24;
  let diasAtual = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  // Colocando na tela
  dia.textContent = `${diasAtual} Dia`;
  hora.textContent = `${horasAtual} Hora`;
  minuto.textContent = `${minutosAtual} Min`;
  segundos.textContent = `${segundosAtual} Seg`;
}

atualizandoTempo();

setInterval(atualizandoTempo, 1000);
