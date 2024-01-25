package dao;

import entidades.Compromisso;
import utils.Conexao;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DaoCompromisso {

    public static boolean salvar(Compromisso cp) {
        try {
            String sql = "insert into compromissos(descricao, local, data, hora, idcontato)values(?, ?, ?, ?, ?)";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);

            stm.setString(1, cp.getDescricao());
            stm.setString(2, cp.getLocal());
            stm.setDate(3, cp.getData());
            stm.setTime(4, cp.getHora());
            stm.setInt(5, cp.getIdcontato());

            stm.execute();

        } catch (SQLException ex) {
            Logger.getLogger(DaoCompromisso.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }

    public static List<Compromisso> consultar() {
        List<Compromisso> lista = new ArrayList<>();
        try {
            String sql = "select * from compromissos where ativo = true";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            ResultSet rs = stm.executeQuery();
            while (rs.next()) {
                Compromisso cp = new Compromisso();

                cp.setId(rs.getInt("id"));
                cp.setDescricao(rs.getString("descricao"));
                cp.setLocal(rs.getString("local"));
                cp.setData(rs.getDate("data"));
                cp.setHora(rs.getTime("hora"));
                cp.setIdcontato(Integer.parseInt(rs.getString("idcontato")));

                lista.add(cp);
            }

        } catch (SQLException ex) {
            Logger.getLogger(DaoCompromisso.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lista;
    }

    public static Compromisso consultarPeloId(int id) {
        Compromisso cp = new Compromisso();
        try {
            String sql = "select * from compromissos where id = ?";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            stm.setInt(1, id);
            ResultSet rs = stm.executeQuery();
            if (rs.next()) {
                cp.setId(rs.getInt("id"));
                cp.setDescricao(rs.getString("descricao"));
                cp.setLocal(rs.getString("local"));
                cp.setData(rs.getDate("data"));
                cp.setHora(rs.getTime("hora"));
                cp.setIdcontato(rs.getInt("idcontato"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(DaoCompromisso.class.getName()).log(Level.SEVERE, null, ex);
        }
        return cp;
    }

    public static boolean alterar(Compromisso cp) {
        try {
            String sql = "update compromissos set descricao = ?, local = ?, data = ?, hora = ?, idcontato = ? where id = ?";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);

            stm.setString(1, cp.getDescricao());
            stm.setString(2, cp.getLocal());
            stm.setDate(3, cp.getData());
            stm.setTime(4, cp.getHora());
            stm.setInt(5, cp.getIdcontato());
            stm.setInt(6, cp.getId());

            stm.execute();

        } catch (SQLException ex) {
            Logger.getLogger(DaoCompromisso.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }

    public static void finalizar(int id) {
        try {
            String sql = "update compromissos set ativo = ? where id = ?";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);

            stm.setBoolean(1, false);
            stm.setInt(2, id);
            stm.execute();

        } catch (SQLException ex) {
            Logger.getLogger(DaoCompromisso.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
