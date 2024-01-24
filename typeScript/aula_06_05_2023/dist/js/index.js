"use strict";
// Exemplo 1
console.log("Hello World!!");
let x = 12;
let y = true;
let z = "teste";
// Exemplo 2
const nomes = ["Regis", "Antônio", "Francisco"];
let pessoa;
pessoa = ["Regis", 12];
let animal;
animal = {
    nome: "Cachorro",
    cor: "Marrom",
    idade: 15
};
console.log("Nome do animal: " + animal.nome + " | Cor do animal: " + animal.cor + " | Idade do animal: " + animal.idade);
console.log("Nome da pessoa: " + pessoa[0] + " | Idade da pessoa: ");
// Exercício 1
let a = "Hello World!";
let b = 123;
let c = true;
let d = ["Hello", "World", "!"];
console.log("String: " + a + " | Number: " + b + " | Boolean: " + c + " | Array: " + d[0] + " " + d[1] + d[2]);
// Exercício 2
let idade = 25;
console.log("Idade: " + idade);
// Exercício 3
let nome = "Matheus";
console.log("Nome: " + nome);
// Exercício 4
let calculo = "(";
let notas = ["5", "7", "6", "9", "8"];
for (let i = 0; i < notas.length; i++) {
    calculo = calculo + " + " + notas[i];
}
calculo = calculo + ") / " + notas.length;
console.log("Notas: " + notas);
console.log("Média: " + eval(calculo));
// Exercício 5
let carro;
carro = {
    marca: "Toyota",
    modelo: "ほほにみに",
    ano: 2017,
    cor: "Preto Fosco"
};
console.log("Marca do carro: " + carro.marca + " | Modelo do carro: " + carro.modelo + " | Ano do carro: " + carro.ano + " | Cor do carro: " + carro.cor);
// Exemplo 3
let nomes2 = ["Regis", "Antônio", "Francisco"];
nomes2 = "a";
const pessoa1 = {
    nome: "Regis",
    idade: 10
};
console.log("Nome da pessoa: " + pessoa1.nome + " | Idade da pessoa: " + pessoa1.idade);
// Exercício 6
let variavel = "a";
console.log("Variável any como string: " + variavel);
variavel = 1;
console.log("Variável any como number: " + variavel);
variavel = true;
console.log("Variável any como boolean: " + variavel);
// Exercício 7
let valor = "texto";
console.log("Variável valor como string: " + valor);
valor = 1;
console.log("Variável valor como number: " + valor);
let TextoOuNumero = {
    texto: "texto",
    numero: 1
};
console.log("String da variável valor: " + TextoOuNumero.texto + " | Number da variável valor: " + TextoOuNumero.numero);
// Exercício 9
let array = [1, "a", 2, "b", 3, "c"];
console.log("Array de tipo number e string: " + array);
// Exemplo 5
var Cores;
(function (Cores) {
    Cores["V"] = "Vermelho";
    Cores["Ve"] = "Verde";
    Cores["Az"] = "Azul";
    Cores["Am"] = "Amarelo";
})(Cores || (Cores = {}));
const celular = {
    marca: "Nokia",
    cor: Cores.V
};
console.log("Marca do celular: " + celular.marca + " | Cor do celular: " + celular.cor);
// Exemplo 6
function somar(numero1, numero2) {
    return numero1 + numero2;
}
function apresentarErro(erro) {
    console.log(erro);
}
console.log(somar(1, 2));
apresentarErro("Bungas");
