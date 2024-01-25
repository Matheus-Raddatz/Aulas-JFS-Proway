package atividade2;

import atividade2.interfaces.ICrud;
import java.util.ArrayList;
import java.util.List;

public class Contato implements ICrud {

    private String nome;
    private String email;
    private String fone;

    private List<Contato> lista = new ArrayList<>();
//Overrides
    @Override
    public boolean salvar() {
        lista.add(this);
        return true;
    }

    @Override
    public boolean alterar(int id) {
        return true;
    }

    @Override
    public void excluir(int id) {
    }

    @Override
    public Contato consultar(int id) {
        return null;
    }

    @Override
    public List<Contato> consultar() {
        return lista;
    }
//Getters / Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if (nome.equals("")) {
            System.out.println("Nome invalido");
        } else {
            this.nome = nome;
        }
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (email.contains("@gmail.com")) {
            this.email = email;
        } else {
            System.out.println("Email invalido");
        }
    }

    public String getFone() {
        return fone;
    }

    public void setFone(String fone) {
        if (fone.length() != 14) {
            System.out.println("Telefone invalido");
        } else {
            this.fone = fone;
        }
    }
//Constructors
    public Contato(String nome, String email, String fone) {
        this.setNome(nome);
        this.setEmail(email);
        this.setFone(fone);
    }

    public Contato() {
    }
//toString
    @Override
    public String toString() {
        return "Contato{" + "nome=" + nome + ", email=" + email + ", fone=" + fone + '}';
    }
}
