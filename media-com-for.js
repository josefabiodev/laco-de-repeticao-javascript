const notas = [10, 6.5, 8, 7.5];

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
const media = soma / notas.length;
console.log(`A média da notas é ${media}`);

// Método com for of
for (let nota of notas) {
    soma += nota;
}
const media1 = soma / notas.length;
console.log(`A média da notas é ${media}`);