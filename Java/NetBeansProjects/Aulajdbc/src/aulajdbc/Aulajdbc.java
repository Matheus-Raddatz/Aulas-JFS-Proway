/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulajdbc;

import aulajdbc.dao.DaoContato;
import aulajdbc.entidades.Contato;
import aulajdbc.utils.Conexao;
import java.sql.SQLException;
import java.util.List;


 
public class Aulajdbc {

    
    public static void main(String[] args) throws SQLException {
       // if(Conexao.conectar() != null){
       //     System.out.println("Conectado!");
       /* Contato contato = new Contato();
        contato.setNome("joao");
        contato.setEmail("joao@gmail.com");
        contato.setFone("(47)99920-5837");
        
        if(DaoContato.salvar(contato)){
            System.out.println("Contato cadastrado com sucesso!");
        }
        }*/
     /*  List<Contato> lista = DaoContato.consultar();
       for(Contato ct : lista){
           System.out.println(ct.getNome());
       }*/
     Contato ct = DaoContato.consultarPeloId(2);
        System.out.println(ct.getNome());
    }
    
}
