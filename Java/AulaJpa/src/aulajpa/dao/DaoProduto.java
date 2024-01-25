package aulajpa.dao;

import aulajpa.entidades.Categoria;
import aulajpa.entidades.Produto;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DaoProduto {

    public static boolean salvar(Produto prod) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AulaJpaPU");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        try {
            em.persist(prod);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
            return false;
        } finally {
            em.close();
        }
        return true;
    }
    public static Produto pesquisar(long id) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AulaJpaPU");
        EntityManager em = emf.createEntityManager();
        return em.find(Produto.class, id);
    }

    public static void excluir(long id) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AulaJpaPU");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        try {
            Produto prod = em.find(Produto.class, id);
            if (prod != null) {
                em.remove(prod);
                em.getTransaction().commit();
            } else {
                System.out.println("O produto informado não existe");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            em.getTransaction().rollback();
        }
    }
}
