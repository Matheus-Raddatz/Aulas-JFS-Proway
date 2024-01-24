import { divide, multiplica, soma, subtrai } from "./calculadora.js";
console.log(soma(6, 3));
console.log(subtrai(6, 3));
console.log(multiplica(6, 3));
console.log(divide(6, 3));
const pessoa = {
    nome: "Matheus",
    idade: 17,
    falar() { console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`); }
};
pessoa.falar();
import { Geometria } from "./ex.js";
let retangulo = new Geometria.Retangulo(10, 20);
let circulo = new Geometria.Circulo(5);
console.log(`Área do retângulo de altura ${retangulo.altura}cm e largura ${retangulo.largura}cm: ${retangulo.area(retangulo.largura, retangulo.altura)}cm²`);
console.log(`Área do círculo de raio ${circulo.raio}cm: ${Math.round(circulo.area(circulo.raio))}cm²`);
