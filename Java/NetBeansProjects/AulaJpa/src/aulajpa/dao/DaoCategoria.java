/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulajpa.dao;

import aulajpa.entidades.Categoria;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class DaoCategoria {

    public static boolean salvar(Categoria categoria) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AulaJpaPU");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        try {
            em.persist(categoria);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
            return false;
        } finally {
            em.close();
        }
        return true;
    }
    public static Categoria pesquisar(Long id){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AulaJpaPU");
        EntityManager em = emf.createEntityManager();
        
        return em.find(Categoria.class, id);
    }
    public static void excluir(Long id){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AulaJpaPU");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        try{
        Categoria cat = em.find(Categoria.class, id);
        if(cat != null){
            em.remove(cat);
        }else{
            System.out.println("A categoria informada não existe!");
        }
        em.getTransaction().commit();

        }catch(Exception e){
            System.out.println("Erro: " + e.getMessage());
            em.getTransaction().rollback();
        }
    }
    public static List<Categoria> pesquisar(){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AulaJpaPU");
        EntityManager em = emf.createEntityManager();
        
        TypedQuery query = em.createQuery("select c from Categoria c", Categoria.class);
        return query.getResultList();
    }
    
    public static boolean alterar(Categoria cat){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("AulaJpaPU");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        try {
            Categoria categoria = em.find(Categoria.class, cat.getId());
            if(categoria != null){
                categoria.setNome(cat.getNome());
                em.merge(categoria);
            }else{
                System.out.println("A categoria não existe!");
            }
            em.persist(categoria);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
            return false;
        } finally {
            em.close();
        }
        return true;
  
    }
}
