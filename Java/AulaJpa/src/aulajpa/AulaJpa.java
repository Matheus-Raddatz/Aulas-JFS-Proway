package aulajpa;

import aulajpa.dao.DaoCategoria;
import aulajpa.dao.DaoProduto;
import aulajpa.entidades.Categoria;
import aulajpa.entidades.Produto;
import java.util.List;

public class AulaJpa {

    public static void main(String[] args) {
        /*Categoria cat = new Categoria();
        cat.setNome("Material de Limpeza");
        if (DaoCategoria.salvar(cat)) {
            System.out.println("Categoria salva com sucesso");
        }*/

 /*Produto p1 = new Produto();
        p1.setDescricao("Queijo");
        p1.setPreco(2.50f);
        p1.setEstoque(10);
        p1.setCategoria(cat);
        
        if (DaoProduto.salvar(p1)){
            System.out.println("Produto cadastrado com sucesso");
        }*/
 /*Categoria cat = DaoCategoria.pesquisar(1L);
        System.out.println(cat.getNome());*/
        //DaoCategoria.excluir(1L);
        //DaoProduto.excluir(151L);
        Categoria cat = DaoCategoria.pesquisar(1L);
        cat.setNome("FRIOS");
        DaoCategoria.alterar(cat);

        List<Categoria> lista = DaoCategoria.pesquisar();
        for (Categoria c : lista) {
            System.out.println(c.getId() + " - " + c.getNome());
        }
    }
}
