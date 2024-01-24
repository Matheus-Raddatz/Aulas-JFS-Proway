export function adicionarLista(list) {
    localStorage.setItem("livraria", JSON.stringify(list));
}
export function retornarLista() {
    const lista = JSON.parse(localStorage.getItem("livraria"));
    return lista;
}
