"use strict";
// Desafio 1
var CategoriaComida;
(function (CategoriaComida) {
    CategoriaComida["P"] = "PratoPrincipal";
    CategoriaComida["S"] = "Sobremesa";
    CategoriaComida["B"] = "Bebida";
})(CategoriaComida || (CategoriaComida = {}));
let Pedido;
let cardapio;
function adicionarPedido(nomeInserido) {
    for (var index in cardapio) {
        if (nomeInserido === cardapio[index].nome) {
            Pedido = [{ nome: cardapio[index].nome, preço: cardapio[index].preço, categoria: cardapio[index].categoria }];
            console.log("Item " + nomeInserido + " adicionado ao Pedido.\nValor do item inserido: R$" + cardapio[index].preço);
        }
    }
}
cardapio = [{
        nome: "Pudim",
        preço: 7.99,
        categoria: CategoriaComida.S
    }];
adicionarPedido("Pudim");
let pessoa1 = {
    nome: "Nome",
    idade: 0,
    falar: () => { }
};
// Exemplo 2
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
let pessoa2 = new Pessoa("Matheus", 17);
console.log(pessoa2);
pessoa2.falar();
// Exemplo 3
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    mover(distanciaEmMetros = 0) {
        console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
    }
}
class Cachorro extends Animal {
    latir() {
        console.log("Au Au!");
    }
}
const dog = new Cachorro("Rex");
dog.latir();
dog.mover(10);
// Exemplo 4
class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getIdade() {
        return this.idade;
    }
}
let pessoa = new Pessoa2("Matheus", 17);
pessoa.falar();
pessoa.setNome("Luciano");
pessoa.setIdade(18);
pessoa.falar();
let produto = {
    nome: "Macarrão",
    preco: 5.99,
    estoque: 70
};
console.log("Nome: " + produto.nome + " | Preço: " + produto.preco + " | Estoque: " + produto.estoque);
class Pessoa3 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
let pessoa3 = new Pessoa3("Matheus", 17);
pessoa3.apresentar();
// Exercício 2
class Animal1 {
    constructor(nome) {
        this.nome = nome;
    }
    mover(distanciaEmMetros = 0) {
        console.log(`DIstância percorrida por ${this.nome}: ${distanciaEmMetros}m.`);
    }
}
class Cachorro1 extends Animal1 {
    latir() {
        console.log("Au Au!");
    }
}
let Animal2 = new Cachorro1("John");
Animal2.latir();
Animal2.mover(10);
class ContaBancaria {
    constructor(saldo, cliente) {
        this.saldo = saldo;
        this.cliente = cliente;
    }
    depositarDinheiro(valorInserir = 0) {
        this.saldo += valorInserir;
        console.log(`O valor de R$${valorInserir} foi depositado. Saldo atual: R$${this.saldo}. (Saldo anterior: R$${this.saldo - valorInserir})`);
    }
    retirarDinheiro(valorRetirar = 0) {
        if (this.saldo - valorRetirar >= 0) {
            this.saldo -= valorRetirar;
            console.log(`O valor de R$${valorRetirar} foi retirado. Saldo atual: R$${this.saldo}. (Saldo anterior: R$${this.saldo + valorRetirar})`);
        }
        else {
            console.log(`Saldo insuficiente. O valor de R$${valorRetirar} não pôde ser retirado.`);
        }
    }
    mostrarSaldo() {
        console.log(`Saldo da conta: R$${this.saldo}`);
    }
}
let contaBancaria = new ContaBancaria(0, "Swellen");
contaBancaria.depositarDinheiro(1000);
contaBancaria.retirarDinheiro(500);
contaBancaria.retirarDinheiro(501);
