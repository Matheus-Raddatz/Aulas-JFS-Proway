export var Geometria;
(function (Geometria) {
    class Circulo {
        constructor(raio) {
            this.raio = raio;
        }
        area(raio) {
            return Math.PI * (Math.pow(raio, 2));
        }
    }
    Geometria.Circulo = Circulo;
    class Retangulo {
        constructor(altura, largura) {
            this.altura = altura;
            this.largura = largura;
        }
        area(altura, largura) {
            return altura * largura;
        }
    }
    Geometria.Retangulo = Retangulo;
})(Geometria || (Geometria = {}));
