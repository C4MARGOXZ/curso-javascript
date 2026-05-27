function calcular() {
  let tab = document.querySelector('#txttab');
  let numero = document.querySelector('#txtnum');
  let res = document.querySelector('#res');
  let n = Number(numero.value);
  let t = Number(tab.value);

  for (let c = 1; c <= t; c++) {
    res.innerHTML += `${n} x ${c} = ${n * c}<br>`;
  }
}
