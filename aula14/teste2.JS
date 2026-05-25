let numerosPares = 0;

for (let contador = 1; contador <= 30; contador++) {
  if (contador % 2 === 0) {
    console.log(contador); // ← Aqui imprime o número par
    numerosPares++;
  }
}

console.log(`Foram impressos ${numerosPares} números pares`);
