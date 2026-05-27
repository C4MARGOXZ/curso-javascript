function contar() {
  let inicio = document.querySelector('#txtinicio');
  let fim = document.querySelector('#txtfim');
  let passo = document.querySelector('#txtpasso');
  let resultado = document.querySelector('#res');
  let i = Number(inicio.value);
  let f = Number(fim.value);
  let p = Number(passo.value);

  if (
    inicio.value.length === 0 ||
    fim.value.length === 0 ||
    passo.value.length === 0
  ) {
    resultado.innerHTML = 'impossível contar';
    return;
  }

  if (p <= 0) {
    resultado.innerHTML = 'Passo invalido, o passo será considerado 1';
    p = 1;
  }
  resultado.innerHTML = '';
  if (i > f) {
    for (i; i >= f; i -= p) {
      resultado.innerHTML += ` ${i} \u{27A1}`;
    }
  } else {
    for (i; i <= f; i += p) {
      resultado.innerHTML += ` ${i} \u{27A1}`;
    }
  }
  resultado.innerHTML += `\u{1F3C1}`;
}
