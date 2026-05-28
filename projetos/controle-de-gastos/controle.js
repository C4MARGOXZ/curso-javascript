let nome = document.querySelector('#txtnome');
let valor = document.querySelector('#txtnum');
let total = document.querySelector('#total');
let lista = document.querySelector('#lista');
let gastos = [];

function adicionar() {
  let val = Number(valor.value);
  if (nome.value.length === 0 || val <= 0) {
    window.alert('Digite um nome ou valor válido');
  } else {
    let gasto = {
      nome: nome.value,
      valor: val,
    };
    gastos.push(gasto);
    let item = document.createElement('li');
    let botao = document.createElement('button');
    botao.innerText = 'X';
    item.innerText = `Item: ${nome.value} Valor: ${val}`;
    lista.appendChild(item);
    item.appendChild(botao);
    botao.onclick = function () {
      let indice = gastos.indexOf(gasto);
      gastos.splice(indice, 1);
      item.remove();
      atualizarTotal();
    };
    atualizarTotal();
  }
}
function atualizarTotal() {
  let soma = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  total.innerHTML = `Total: R$ ${soma}`;
}
