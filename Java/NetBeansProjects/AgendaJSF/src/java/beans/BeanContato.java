/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package beans;

import entidades.Contato;
import java.util.List;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

@ManagedBean
public class BeanContato {

    private String nome;
    private String email;
    private String fone;
    private String rua;
    private String cidade;
    private List<Contato> contatos;
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFone() {
        return fone;
    }

    public void setFone(String fone) {
        this.fone = fone;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
    
    public List<Contato> getContatos() {
        return contatos;
    }

    public void setContatos(List<Contato> contatos) {
        this.contatos = contatos;
    }


    public void salvar() {
        boolean tudoCerto = true;

        FacesContext context = FacesContext.getCurrentInstance();
        FacesMessage msg = null;
        if (this.nome.equals("")) {
            msg = new FacesMessage("Informe nome");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if(this.email.equals("")){
            msg = new FacesMessage("Informe email");
            context.addMessage(null, msg);
            tudoCerto = false;
        }else if(this.fone.equals("")){
            msg = new FacesMessage("Informe Telefone");
            context.addMessage(null, msg);
            tudoCerto = false;
        }else if(this.rua.equals("")){
            msg = new FacesMessage("Informe rua");
            context.addMessage(null, msg);
            tudoCerto = false;
        }else if(this.cidade.equals("")){
            msg = new FacesMessage("Informe cidade");
            context.addMessage(null, msg);
            tudoCerto = false;
        }

        if (tudoCerto) {
            Contato contato = new Contato();
            contato.setNome(this.nome);
            contato.setEmail(this.email);
            contato.setFone(this.fone);
            contato.setRua(this.rua);
            contato.setCidade(this.cidade);
            dao.DaoContato.salvar(contato);

            msg = new FacesMessage("Registrado com sucesso");
            context.addMessage(null, msg);
            limpar();
        }
    }

    public void limpar() {
        nome = "";
        email = "";
        fone = "";
        rua = "";
        cidade = "";

    }
    
    public void pesquisar(){
        contatos = dao.DaoContato.pesquisar();
        
    }


}
