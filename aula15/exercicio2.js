let nota = [7, 3, 9, 5, 2, 8, 4, 6, 10, 1];
let reprovados = 0;
nota.sort((a, b) => a - b); // ✅ ordena como número: 1, 2, 3... 10

if (nota.includes(10)) {
  console.log('tivemos aluno com nota máxima');
}

for (n1 of nota) {
  console.log(n1);
  if (n1 < 5) {
    reprovados++;
  }
}
console.log(`Reprovados: ${reprovados}`);
