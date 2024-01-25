/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package beans;

import entidades.Compromisso;
import entidades.Contato;
import java.util.List;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

/**
 *
 * @author 72253
 */
@ManagedBean
public class BeanCompromisso {

    private String local;
    private String data;
    private String hora;
    private String contato;
    private boolean status;
    private List<Compromisso> compromissos;

    public void salvar() {
        boolean tudoCerto = true;

        FacesContext context = FacesContext.getCurrentInstance();
        FacesMessage msg = null;
        if (this.local.equals("")) {
            msg = new FacesMessage("Informe local");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if (this.data.equals("")) {
            msg = new FacesMessage("Informe data");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if (this.hora.equals("")) {
            msg = new FacesMessage("Informe hora");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if (this.contato.equals("")) {
            msg = new FacesMessage("Informe contato");
            context.addMessage(null, msg);
            tudoCerto = false;
        }
        if (tudoCerto) {
            Compromisso compromisso = new Compromisso();
            compromisso.setLocal(this.local);
            compromisso.setData(this.data);
            compromisso.setHora(this.hora);
            compromisso.setContato(this.contato);
            dao.DaoCompromisso.salvar(compromisso);

            msg = new FacesMessage("Registrado com sucesso");
            context.addMessage(null, msg);
            limpar();
        
    }
}

public void limpar() {
        local = "";
        data = "";
        hora = "";
        contato = "";
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
