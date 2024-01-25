/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dao;

import entidades.Compromisso;
import entidades.Contato;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * @author 72253
 */
public class DaoCompromisso {

    public static boolean salvar(Compromisso cp) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistence.xml");
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
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistence.xml");
        EntityManager em = emf.createEntityManager();
        TypedQuery query = em.createQuery("select c from compromisso c", Compromisso.class);
        return query.getResultList();

    }

}
