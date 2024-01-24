export namespace Aula2 {
    export interface IPessoa {
        nome: string
        idade: number
        falar(): void
    }
}
export namespace Geometria {
    export class Circulo {
        raio: number
        constructor(raio: number) {
            this.raio = raio
        }
        area(raio: number): number {
            return Math.PI * (raio ** 2)
        }
    }
    export class Retangulo {
        altura: number
        largura: number
        constructor(altura: number, largura: number) {
            this.altura = altura
            this.largura = largura
        }
        area(altura: number, largura: number): number {
            return altura * largura
        }
    }
}