function AtualizarContador() {
  const nascimento = new Date(2001, 1, 26);
  const hoje = new Date();

  // console.log(nascimento, hoje);

  const diferencams = hoje - nascimento;

  const segundosTotais = Math.floor(diferencams / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  // const diasTotais = Math.floor(horasTotais / 24);
  // const anosTotais = Math.floor(diasTotais / 365.25);

  let anos = hoje.getFullYear() - nascimento.getFullYear();
  let meses = hoje.getMonth() - nascimento.getMonth();
  let dias = hoje.getDate() - nascimento.getDate();

  console.log("teste", horasTotais, horasTotais % 24);

  const segundos = segundosTotais % 60;
  const minutos = minutosTotais % 60;
  const horas = horasTotais % 24;
  // const dias = diasTotais % 365;
  // const anos = anosTotais;

  if (meses < 0 || (meses === 0 && dias < 0)) {
    anos--;
    meses += 12;
  }

  if (dias < 0) {
    const ultimoDiaDoMesAnterior = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      0
    ).getDate();
    dias += ultimoDiaDoMesAnterior;
  }

  console.log(segundosTotais);

  document.getElementById(
    "elemento"
  ).innerHTML = `${anos} anos, ${meses} meses,${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(AtualizarContador, 1000);

AtualizarContador();
