const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundos = document.getElementById("segundos");

const diaB = document.getElementById("diaB");
const horaB = document.getElementById("horaB");
const minutoB = document.getElementById("minutoB");
const segundosB = document.getElementById("segundosB");

function atualizandoTempo() {
  // Data final desejada
  let dataFinal = new Date("2024-05-26");

  // Data atual
  let dataAtual = new Date();

  // Zera os milissegundos para facilitar os cálculos
  dataAtual.setMilliseconds(0);

  // Calcula a diferença entre as datas em milissegundos
  let diferencaEmMilissegundos = dataFinal - dataAtual;

  // Calcula as horas restantes até o final do dia
  let horasRestantes = 24 - dataAtual.getHours() - 1;

  // Se a hora atual for maior do que a hora final do dia, ajusta as horas restantes
  if (horasRestantes < 0) {
    horasRestantes += 24;
  }

  // Converte a diferença de milissegundos para dias, horas, minutos e segundos
  let segundosAtual = Math.floor(diferencaEmMilissegundos / 1000) % 60;
  let minutosAtual = Math.floor(diferencaEmMilissegundos / (1000 * 60)) % 60;
  let horasAtual = horasRestantes;
  let diasAtual = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  // Colocando na tela
  dia.textContent = `${diasAtual} Dia`;
  hora.textContent = `${horasAtual} Hora`;
  minuto.textContent = `${minutosAtual} Min`;
  segundos.textContent = `${segundosAtual} Seg`;
}

atualizandoTempo();

setInterval(atualizandoTempo, 1000);

function atualizandoTempoB() {
  // Data final desejada
  let dataFinal = new Date("2024-04-28");

  // Data atual
  let dataAtual = new Date();

  // Zera os milissegundos para facilitar os cálculos
  dataAtual.setMilliseconds(0);

  // Calcula a diferença entre as datas em milissegundos
  let diferencaEmMilissegundos = dataFinal - dataAtual;

  // Calcula as horas restantes até o final do dia
  let horasRestantes = 24 - dataAtual.getHours() - 1;

  // Se a hora atual for maior do que a hora final do dia, ajusta as horas restantes
  if (horasRestantes < 0) {
    horasRestantes += 24;
  }

  // Converte a diferença de milissegundos para dias, horas, minutos e segundos
  let segundosAtual = Math.floor(diferencaEmMilissegundos / 1000) % 60;
  let minutosAtual = Math.floor(diferencaEmMilissegundos / (1000 * 60)) % 60;
  let horasAtual = horasRestantes;
  let diasAtual = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  // Colocando na tela
  diaB.textContent = `${diasAtual} Dia`;
  horaB.textContent = `${horasAtual} Hora`;
  minutoB.textContent = `${minutosAtual} Min`;
  segundosB.textContent = `${segundosAtual} Seg`;
}

atualizandoTempoB();

setInterval(atualizandoTempoB, 1000);
