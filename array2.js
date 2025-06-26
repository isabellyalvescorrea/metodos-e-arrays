let numeros = [5, 12, 8, 3, 9];
numeros.sort((a, b) => a - b); 
console.log(numeros);

let quadrados = numeros.map(numero => numero + numero);
console.log(quadrados);

let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Soma: " + soma);