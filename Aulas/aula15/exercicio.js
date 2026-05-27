let frutas = ['banana', 'maçã', 'uva'];
frutas.push('manga');
frutas.pop('manga');
frutas.unshift('melância');
console.log(`total te frutas: ${frutas.length}`);

if (frutas.includes('uva')) {
  console.log('tem uva');
} else {
  console.log('não tem uva');
}

for (let n of frutas) {
  console.log(n);
}
