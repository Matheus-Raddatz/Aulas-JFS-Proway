package aulajdbc.dao;

import aulajdbc.entidades.Contato;
import aulajdbc.utils.Conexao;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DaoContato {

    public static boolean salvar(Contato ct) {
        try {
            String sql = "insert into contatos(nome, email, fone)values(?, ?, ?)";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);

            stm.setString(1, ct.getNome());
            stm.setString(2, ct.getEmail());
            stm.setString(3, ct.getFone());

            stm.execute();

        } catch (SQLException ex) {
            Logger.getLogger(DaoContato.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }

    public static List<Contato> consultar() {
        List<Contato> lista = new ArrayList<>();
        try {
            String sql = "select * from contatos";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            ResultSet rs = stm.executeQuery();
            while (rs.next()) {
                Contato ct = new Contato();

                ct.setId(rs.getInt("id"));
                ct.setNome(rs.getString("nome"));
                ct.setEmail(rs.getString("email"));
                ct.setFone(rs.getString("fone"));

                lista.add(ct);
            }

        } catch (SQLException ex) {
            Logger.getLogger(DaoContato.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lista;
    }
}
