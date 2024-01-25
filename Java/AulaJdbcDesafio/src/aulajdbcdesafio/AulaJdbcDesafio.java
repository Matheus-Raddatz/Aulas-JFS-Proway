package aulajdbcdesafio;

import aulajdbcdesafio.dao.DaoLocal;
import aulajdbcdesafio.entidades.Local;
import aulajdbcdesafio.utils.Conexao;
import java.sql.SQLException;
import java.util.List;

public class AulaJdbcDesafio {

    public static void main(String[] args) throws SQLException {
        /*if(Conexao.conectar() != null){
            System.out.println("Conectado");
        }*/
        /*Local local = new Local();
        local.setNome("Padaria");
        local.setRua("Gov. Jorge Lacerda");
        local.setBairro("Velha");
        local.setCidade("Blumenau");
        local.setCep("98765-432");
        local.setNomeContato("Joao");
        local.setFoneContato("(47)98765-4321");

        if (DaoLocal.salvar(local)) {
            System.out.println("Local cadastrado com sucesso");
        }
          */
        /*List < Local > lista = DaoLocal.consultar();
        for (Local lc : lista) {
            System.out.println(lc.getNome());
        }*/
        Local lc = DaoLocal.consultarPeloId(2);
        lc.setNome("Joao da Silva Sauro");
        if(DaoLocal.alterar(lc)){
            System.out.println("Local alterado com sucesso");
        }
    }

}
