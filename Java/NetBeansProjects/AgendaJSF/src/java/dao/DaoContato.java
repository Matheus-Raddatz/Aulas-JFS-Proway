package dao;

import entidades.Contato;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class DaoContato {

    public static boolean salvar(Contato ct){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistence.xml");
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(ct);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return true;
        
    }
    
        
    public static List<Contato> pesquisar(){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistence.xml");
        EntityManager em = emf.createEntityManager();
        TypedQuery query = em.createQuery("select c from Contato c", Contato.class);
        return query.getResultList();

    }

}
