import {ILivro} from './index'

export function adicionarLista(list: ILivro[]) {
    localStorage.setItem("livraria", JSON.stringify(list))
}

export function retornarLista(): ILivro[] {
    const lista: ILivro[] = JSON.parse(localStorage.getItem("livraria")!)
    return lista
}