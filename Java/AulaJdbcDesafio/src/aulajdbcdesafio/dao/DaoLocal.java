package aulajdbcdesafio.dao;

import aulajdbcdesafio.entidades.Local;
import aulajdbcdesafio.utils.Conexao;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DaoLocal {

    public static boolean salvar(Local lc) {
        try {
            String sql = "insert into locais(nome, rua, bairro, cidade, cep, nomeContato, foneContato)values(?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);

            stm.setString(1, lc.getNome());
            stm.setString(2, lc.getRua());
            stm.setString(3, lc.getBairro());
            stm.setString(4, lc.getCidade());
            stm.setString(5, lc.getCep());
            stm.setString(6, lc.getNomeContato());
            stm.setString(7, lc.getFoneContato());

            stm.execute();

        } catch (SQLException ex) {
            Logger.getLogger(DaoLocal.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }

    public static List<Local> consultar() {
        List<Local> lista = new ArrayList<>();
        try {
            String sql = "select * from locais";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            ResultSet rs = stm.executeQuery();
            while (rs.next()) {
                Local lc = new Local();

                lc.setId(rs.getInt("id"));
                lc.setNome(rs.getString("nome"));
                lc.setRua(rs.getString("rua"));
                lc.setBairro(rs.getString("bairro"));
                lc.setCidade(rs.getString("cidade"));
                lc.setCep(rs.getString("cep"));
                lc.setNomeContato(rs.getString("nomeContato"));
                lc.setFoneContato(rs.getString("foneContato"));

                lista.add(lc);
            }

        } catch (SQLException ex) {
            Logger.getLogger(DaoLocal.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lista;
    }

    public static Local consultarPeloId(int id) throws SQLException {
        Local lc = new Local();
        try {
            String sql = "select * from locais where id = ?";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            stm.setInt(1, id);
            ResultSet rs = stm.executeQuery();
            if (rs.next()) {
                lc.setId(rs.getInt("id"));
                lc.setNome(rs.getString("nome"));
                lc.setRua(rs.getString("rua"));
                lc.setBairro(rs.getString("bairro"));
                lc.setCidade(rs.getString("cidade"));
                lc.setCep(rs.getString("cep"));
                lc.setNomeContato(rs.getString("nomeContato"));
                lc.setFoneContato(rs.getString("foneContato"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(DaoLocal.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lc;
    }

    public static void excluir(int id) {
        try {
            String sql = "delete from locais where id = ?";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            stm.setInt(1, id);
            stm.execute();
        } catch (SQLException ex) {
            Logger.getLogger(DaoLocal.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public static boolean alterar(Local lc){
        try{
            String sql = "update locais set nome = ?, rua = ?, bairro = ?, cidade = ?, cep = ?, nomeContato = ?, foneContato = ?";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            
            stm.setString(1, lc.getNome());
            stm.setString(2, lc.getRua());
            stm.setString(3, lc.getBairro());
            stm.setString(4, lc.getCidade());
            stm.setString(5, lc.getCep());
            stm.setString(6, lc.getNomeContato());
            stm.setString(7, lc.getFoneContato());
            
            stm.execute();
            
        } catch (SQLException ex) {
            Logger.getLogger(DaoLocal.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }
}
