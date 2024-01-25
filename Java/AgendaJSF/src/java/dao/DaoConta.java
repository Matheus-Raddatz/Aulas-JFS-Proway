package dao;

import entidades.Conta;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class DaoConta {

    public static boolean salvar(Conta ca) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AgendaJSFPU");
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(ca);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return true;
    }
    
    public static Conta pesquisarPeloEmail(String email){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AgendaJSFPU");
        EntityManager em = emf.createEntityManager();
        Query q = em.createQuery("SELECT C FROM Conta c where c.email = :pemail");
        q.setParameter("pemail", email);
        return (Conta) q.getSingleResult();
    }
}
