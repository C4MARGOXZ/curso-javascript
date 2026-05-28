let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let res = document.querySelector('#res');
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) return true;
  else {
    return false;
  }
}
function inlista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function adicionar() {
  if (isNumero(num.value) && !inlista(num.value, valores)) {
    valores.push(Number(num.value));
    let opcao = document.createElement('option');
    lista.appendChild(opcao);
    opcao.innerHTML += `Valor ${num.value} adicionado`;

    num.value = '';
  } else {
    window.alert('Valor inválido, ou já inserido na lista.');
  }
}

function finalizar() {
  res.innerHTML += `<p>Ao todo foram cadastrados <strong>${valores.length}</strong> números.</p>`;

  const maior = Math.max(...valores);
  res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`;

  const menor = Math.min(...valores);
  res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`;

  const soma = valores.reduce((acc, val) => acc + val, 0);
  res.innerHTML += `<p>A soma de todos os valores é <strong>${soma}</strong>.</p>`;

  const media = (soma / valores.length).toFixed(2);
  res.innerHTML += `<p>A média dos valores é <strong>${media}</strong>.</p>`;
}
