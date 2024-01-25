package aulajdbc;

import aulajdbc.dao.DaoContato;
import aulajdbc.entidades.Contato;
import aulajdbc.utils.Conexao;
import java.sql.SQLException;
import java.util.List;

public class AulaJdbc {

    public static void main(String[] args) throws SQLException {
        /*if(Conexao.conectar() != null){
            System.out.println("Conectado");
        }*/
 /*Contato contato = new Contato();
        contato.setNome("Joao");
        contato.setEmail("joao@gmail.com");
        contato.setFone("(47)9999-0000");
        
        if(DaoContato.salvar(contato)){
            System.out.println("Contato cadastrado com sucesso");
        }*/
        List<Contato> lista = DaoContato.consultar();
        for (Contato ct : lista) {
            System.out.println(ct.getNome());
        }
    }

}
