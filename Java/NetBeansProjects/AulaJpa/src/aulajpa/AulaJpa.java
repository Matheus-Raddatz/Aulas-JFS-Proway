
package aulajpa;

import aulajpa.dao.DaoCategoria;
import aulajpa.dao.DaoProduto;
import aulajpa.entidades.Categoria;
import aulajpa.entidades.Produto;
import java.util.List;

public class AulaJpa {

    public static void main(String[] args) {

        /*Categoria cat = new Categoria();
        cat.setNome("Material de limpeza");
        if(DaoCategoria.salvar(cat))
            System.out.println("Categoria salva com sucesso!");*/
        
        /*Produto p1 = new Produto();
        p1.setDescricao("Trigo");
        p1.setPreco(2.50f);
        p1.setEstoque(10f);
        p1.setCategoria(cat);
        
        if(DaoProduto.salvar(p1)){
            System.out.println("Produto cdastrado com sucesso!");
        }*/
       //Categoria cat = DaoCategoria.pesquisar(1L);/* o 1L vai de 50 em 50, eh uma cofiguração padrão do sistema, temm com mudar.*/
       // System.out.println(cat.getNome());
       //DaoCategoria.excluir(201L);
       
        Categoria cat = DaoCategoria.pesquisar(101L);
        cat.setNome("CEREAIS");
        DaoCategoria.alterar(cat);
        
        List<Categoria> lista = DaoCategoria.pesquisar();
        for(Categoria c : lista){
            System.out.println(c.getId() + " - " + c.getNome());
       }
    }
    
}
