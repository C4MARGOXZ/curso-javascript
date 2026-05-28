let tarefa = document.querySelector('#tarefa');
let lista = document.querySelector('#lista');
let tarefas = [];

function nalista() {
  return tarefas.indexOf(tarefa.value) !== -1;
}

function adicionar() {
  if (tarefa.value.length === 0 || nalista()) {
    window.alert('Campo vazio, ou tarefa já adicionada');
  } else {
    tarefas.push(tarefa.value);
    let item = document.createElement('li');
    let botao = document.createElement('button');
    botao.innerText = 'X';
    item.innerText = tarefa.value;
    lista.appendChild(item);
    item.appendChild(botao);
    botao.onclick = function () {
      let indice = tarefas.indexOf(item.innerText);
      tarefas.splice(indice, 1);
      item.remove();
    };
    tarefa.value = '';
  }
}
