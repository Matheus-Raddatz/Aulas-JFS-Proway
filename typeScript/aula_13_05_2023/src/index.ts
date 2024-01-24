// Desafio 1
enum catComida {
    P = "PratoPrincipal",
    S = "Sobremesa",
    B = "Bebida"
}

let i: number = 0

type tipoGeral = { nome: string, preço: number, categoria: catComida }[]
let Pedido: tipoGeral
let cardapio: tipoGeral

function adicionarPedido(nomeInserido: string) {
    for (var index in cardapio) {
        if (nomeInserido === cardapio[index].nome) {
            Pedido = [{ nome: cardapio[index].nome, preço: cardapio[index].preço, categoria: cardapio[index].categoria }]
            console.log("Item " + nomeInserido + " adicionado ao Pedido.\nValor do item inserido: R$" + cardapio[index].preço)
        } else {
            i += 1
        }
    }
    if (i == cardapio.length) {
        console.log("Item não encontrado no cardápio, verifique e tente novamente.")
    }
}

cardapio = [{
    nome: "Pudim",
    preço: 7.99,
    categoria: catComida.S
},
{
    nome: "Fígado acebolado",
    preço: 17.59,
    categoria: catComida.P
}]

adicionarPedido("Pudim")



// Exemplo 1
interface IPessoa {
    nome: string
    idade: number
    falar(): void
}

let pessoa1: IPessoa = {
    nome: "Nome",
    idade: 0,
    falar: () => { }
}



// Exemplo 2
class Pessoa implements IPessoa {
    nome: string
    idade: number
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    falar(): void {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

let pessoa2 = new Pessoa("Matheus", 17)

console.log(pessoa2)
pessoa2.falar()



// Exemplo 3
class Animal {
    nome: string
    constructor(nome: string) {
        this.nome = nome
    }

    mover(distanciaEmMetros: number = 0) {
        console.log(`${this.nome} moveu ${distanciaEmMetros}m.`)
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au Au!")
    }
}

const dog = new Cachorro("Rex")

dog.latir()
dog.mover(10)



// Exemplo 4
class Pessoa2 {
    private nome: string
    private idade: number
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    public falar(): void {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }

    public setNome(nome: string): void {
        this.nome = nome
    }

    public getNome(): string {
        return this.nome
    }

    public setIdade(idade: number): void {
        this.idade = idade
    }

    public getIdade(): number {
        return this.idade
    }
}

let pessoa = new Pessoa2("Matheus", 17)

pessoa.falar()
pessoa.setNome("Luciano")
pessoa.setIdade(18)
pessoa.falar()



// Desafio 1
interface IProduto {
    nome: string
    preco: number
    estoque: number
}

let produto: IProduto = {
    nome: "Macarrão",
    preco: 5.99,
    estoque: 70
}

console.log("Nome: " + produto.nome + " | Preço: " + produto.preco + " | Estoque: " + produto.estoque)

class Pessoa3 {
    private nome: string
    private idade: number
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
    public apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

let pessoa3 = new Pessoa3("Matheus", 17)

pessoa3.apresentar()



// Exercício 2
class Animal1 {
    private nome: string
    constructor(nome: string) {
        this.nome = nome
    }
    public mover(distanciaEmMetros: number = 0) {
        console.log(`DIstância percorrida por ${this.nome}: ${distanciaEmMetros}m.`)
    }
}

class Cachorro1 extends Animal1 {
    public latir() {
        console.log("Au Au!")
    }
}

let Animal2 = new Cachorro1("John")

Animal2.latir()
Animal2.mover(10)

class ContaBancaria {
    private saldo: number
    private cliente: string
    constructor(saldo: number, cliente: string) {
        this.saldo = saldo
        this.cliente = cliente
    }
    public depositarDinheiro(valorInserir: number = 0) {
        this.saldo += valorInserir
        console.log(`O valor de R$${valorInserir} foi depositado. Saldo atual: R$${this.saldo}. (Saldo anterior: R$${this.saldo - valorInserir})`)
    }
    public retirarDinheiro(valorRetirar: number = 0) {
        if (this.saldo - valorRetirar >= 0) {
            this.saldo -= valorRetirar
            console.log(`O valor de R$${valorRetirar} foi retirado. Saldo atual: R$${this.saldo}. (Saldo anterior: R$${this.saldo + valorRetirar})`)
        } else {
            console.log(`Saldo insuficiente. O valor de R$${valorRetirar} não pôde ser retirado.`)
        }
    }
    public mostrarSaldo() {
        console.log(`Saldo da conta: R$${this.saldo}`)
    }
}

let contaBancaria = new ContaBancaria(0, "Swellen")

contaBancaria.depositarDinheiro(1000)
contaBancaria.retirarDinheiro(500)
contaBancaria.retirarDinheiro(501)