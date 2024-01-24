"use strict";
let textoCategoria = document.getElementById("textoCategoria");
let categoriaTexto = document.getElementById("categoriaTexto");
let palavraTexto = document.getElementById("palavraTexto");
let botao = document.getElementById("iniciar");
let digito = document.getElementById("digito");
let tentar = document.getElementById("tentar");
let inserido = document.getElementById("input");
let categoria = "";
let palavra = "";
let palavraOculta;
let quantidade_ = "";
let i = 0;
let palavraSplit = [];
let indice;
let tentativas = 3;
let letraDigitada = "";
let arrayPalavra;
let ganhou = false;
let palavras = [{ categorias: "Sobremesa", palavras: "Pudim" },
    { categorias: "Animal", palavras: "Arara" },
    { categorias: "Veículo", palavras: "Bicicleta" },
    { categorias: "Cor", palavras: "Vermelho" },
    { categorias: "País", palavras: "Argentina" }];
if (textoCategoria !== null && categoriaTexto !== null && palavraTexto !== null && digito !== null && tentar !== null) {
    textoCategoria.style.display = "none";
    categoriaTexto.style.display = "none";
    palavraTexto.style.display = "none";
    digito.style.display = "none";
    tentar.style.display = "none";
}
function palavraRandom() {
    indice = Math.floor(Math.random() * palavras.length);
    categoria = palavras[indice].categorias;
    palavra = palavras[indice].palavras;
    arrayPalavra = palavra.split("");
    i = palavras[indice].palavras.length;
    for (let j = 0; j < i; j++) {
        quantidade_ = quantidade_ + "_";
    }
    palavraOculta = quantidade_.split("");
}
function atualizaPalavra() {
    if (palavraTexto != null) {
        palavraTexto.innerHTML = palavraOculta.join("");
    }
}
function começar() {
    palavraRandom();
    if (textoCategoria !== null && botao !== null && categoriaTexto !== null && palavraTexto !== null && digito !== null && tentar !== null) {
        textoCategoria.style.display = "block";
        categoriaTexto.style.display = "block";
        categoriaTexto.innerHTML = categoria;
        botao.style.display = "none";
        palavraTexto.style.display = "block";
        atualizaPalavra();
        tentar.style.display = "block";
        tentar.style.alignSelf = "center";
        digito.style.display = "flex";
        digito.style.justifyContent = "center";
        digito.style.alignItems = "center";
    }
}
if (tentativas <= 0) {
    alert("Você perdeu :(");
    alert("Recarregue a página para tentar novamente.");
}
