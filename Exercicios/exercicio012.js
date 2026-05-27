let notas = [];

function addnota(nota) {
  notas.push(nota);
  let soma = 0;
  for (let c = 0; c < notas.length; c++) {
    soma += notas[c];
  }
  let media = soma / notas.length;
  console.log(`soma foi igual a ${soma}`);
  console.log(`media foi igual a ${media}`);
}
addnota(10);
addnota(8);
addnota(6);
