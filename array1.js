let nomeAlunos = ['Ana', 'Carlos',  'Mariana', 'Pedro'];
nomeAlunos.push('sofia');
console.log(nomeAlunos);

nomeAlunos.shift('Ana');
console.log(nomeAlunos);

let nomes = ['Ana', 'Carlos',  'Mariana', 'Pedro'];
let indice = nomes.indexOf('Mariana');
console.log(indice);

let nomesComM = nomeAlunos.filter(function(nome)
{
return nome.charAt(0) === 'M';

});

console.log('Os nomes com M são: ', nomesComM);