let prompt = require ('prompt-sync')();
let livros = ['o pequeno principe ','branca de neve','rapulsel','frozen'];

let titulo = prompt('digite o titulo do livro que voce procura');

if (livros.includes(titulo)){
console.log('O livro está na lista.');
} else {
    console.log('O livro não foi encontrado na lista.');
}