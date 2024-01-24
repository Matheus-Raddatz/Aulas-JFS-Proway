let texto = 'Olá programador javascript, estamos em 2022 e você está aprendnedo como usar rejex na vida de programador'

// let busca = texto.match(/a/gi)
// console.log(busca)

// console.log(texto.match(/[a-c]/gi))

// console.log(texto.match());

let cpf = '05879854102'
let formato = cpf.replace(/(\d(3))(\d(3))(\d(3))(\d(2))/, function(regex, part1, part2, part3, part4){return `${part1}.${part2}.${part3}.${part4}`})
console.log(formato);

console.log(texto.match(/\*o./gi))