let soma = 0;
let numerospares = 0;
for (let c = 1; c <= 100; c++) {
  if (c % 2 === 0) {
    console.log(c);
    soma += c;
  }
}
console.log(`A soma dos numerospares de 1 até 100 é ${soma}`);
