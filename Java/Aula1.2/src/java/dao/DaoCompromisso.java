package dao;

import entidades.Compromisso;
import entidades.Contato;
import utils.Conexao;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class DaoCompromisso {

    public static boolean salvar(Compromisso cp) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Aula1PU");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        try {
            em.persist(cp);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
            return false;
        } finally {
            em.close();
        }
        return true;
    }

    public static List<Compromisso> consultar() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Aula1PU");
        EntityManager em = emf.createEntityManager();
        TypedQuery query = em.createQuery("select c from Compromisso c", Compromisso.class);
        return query.getResultList();
    }

    public static Compromisso consultarPeloId(int id) {
        Compromisso cp = new Compromisso();
        try {
            String sql = "select * from compromisso where id = ?";
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
            String sql = "update compromisso set descricao = ?, local = ?, data = ?, hora = ?, idcontato = ? where id = ?";
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
            String sql = "update compromisso set ativo = ? where id = ?";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);

            stm.setBoolean(1, false);
            stm.setInt(2, id);
            stm.execute();

        } catch (SQLException ex) {
            Logger.getLogger(DaoCompromisso.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
