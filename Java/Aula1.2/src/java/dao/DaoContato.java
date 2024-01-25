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

public class DaoContato {

    public static boolean salvar(Contato ct) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Aula1PU");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        try {
            em.persist(ct);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
            return false;
        } finally {
            em.close();
        }
        return true;
    }

    public static List<Contato> consultar() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Aula1PU");
        EntityManager em = emf.createEntityManager();
        TypedQuery query = em.createQuery("select c from Contato c", Contato.class);
        return query.getResultList();
    }

    public static Contato consultarPeloId(int id) {
        Contato ct = new Contato();
        try {
            String sql = "select * from contato where id = ?";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            stm.setInt(1, id);
            ResultSet rs = stm.executeQuery();
            if (rs.next()) {
                ct.setId(rs.getInt("id"));
                ct.setNome(rs.getString("nome"));
                ct.setEmail(rs.getString("email"));
                ct.setFone(rs.getString("fone"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(DaoContato.class.getName()).log(Level.SEVERE, null, ex);
        }
        return ct;
    }

    public static boolean alterar(Contato ct) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Aula1PU");
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            Contato contato = em.find(Contato.class, ct.getId());
            if (contato != null) {
                contato.setNome(ct.getNome());
                contato.setEmail(ct.getEmail());
                contato.setFone(ct.getFone());
                em.merge(contato);
            } else {
                return false;
            }
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return true;
    }
}
