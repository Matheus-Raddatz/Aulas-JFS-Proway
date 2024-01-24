import { adicionarLista, retornarLista } from "./storage";
var id = 0;
let livro;
class Biblioteca {
    addLivro(nome, autor, genero, quantidade) {
        livro = { id: id, nome: nome, autor: autor, genero: genero, quantidade: quantidade };
        id += 1;
        if (nome !== "" && autor !== "" && genero !== "" && "" + quantidade !== "") {
            const lista = retornarLista();
            lista.push(livro);
            adicionarLista(lista);
            alert("Livro adicionado à biblioteca");
        }
        else {
            alert("Favor preencher todos os campos");
        }
    }
    deleteLivro(id) {
        const lista = retornarLista();
        const index = lista.findIndex(livro => livro.id === id);
        if (index === -1) { //ERRO
        }
        lista.splice(index, 1);
        adicionarLista(lista);
    }
    updateLivro(id, nome, autor, genero, quantidade) {
        const lista = retornarLista();
        const index = lista.findIndex(livro => livro.id === id);
        if (index === -1) { //ERRO
        }
        lista[id] = { id: id, nome: nome, autor: autor, genero: genero, quantidade: quantidade };
    }
    listaLivro() {
        const lista = retornarLista();
        for (let index in lista) {
            console.log(lista[index]);
        }
    }
    procuraLivro(valor, campo) {
        const lista = retornarLista();
        for (let index in lista) {
            if (lista[index][campo === "nome" ? 'nome' : 'autor'] === valor) {
                console.log(lista[index]);
            }
        }
    }
}
let biblioteca = new Biblioteca;
biblioteca.addLivro("Bungas", "Eu", "Terror", 1);
biblioteca.listaLivro();
biblioteca.updateLivro(0, "Zungas", "Eu", "Terror", 2);
biblioteca.procuraLivro("Eu", "autor");
