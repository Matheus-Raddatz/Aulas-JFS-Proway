package dao;

import entidades.Compromisso;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class DaoCompromisso {

    public static boolean salvar(Compromisso cp) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AgendaJSFPU");
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(cp);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return true;

    }

    public static List<Compromisso> pesquisar() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AgendaJSFPU");
        EntityManager em = emf.createEntityManager();
        TypedQuery query = em.createQuery("select c from Compromisso c", Compromisso.class);
        return query.getResultList();

    }

    public static Compromisso pesquisaPorId(long id) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AgendaJSFPU");
        EntityManager em = emf.createEntityManager();
        return em.find(Compromisso.class, id);
    }

}
