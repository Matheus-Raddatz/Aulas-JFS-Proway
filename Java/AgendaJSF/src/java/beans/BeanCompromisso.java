package beans;

import entidades.Compromisso;
import entidades.Contato;
import java.util.List;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

@ManagedBean
public class BeanCompromisso {
    private long id;
    private String local;
    private String data;
    private String hora;
    private Contato contato;
    private Long idcontato;
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
            
            this.contato = dao.DaoContato.pesquisaPorId(idcontato);
            
            compromisso.setContato(this.contato);
            compromisso.setStatus(true);
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
        contato = null;
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

    public Contato getContato() {
        return contato;
    }

    public void setContato(Contato contato) {
        this.contato = contato;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void pesquisar() {
        compromissos = dao.DaoCompromisso.pesquisar();

    }

    public List<Compromisso> getCompromissos() {
        return compromissos;
    }

    public void setCompromissos(List<Compromisso> compromissos) {
        this.compromissos = compromissos;
    }

    public void pesquisaPorId(long id) {
        Compromisso cp = dao.DaoCompromisso.pesquisaPorId(id);
        if (cp != null) {
            this.id = cp.getId();
            this.local = cp.getLocal();
            this.data = cp.getData();
            this.hora = cp.getHora();
            this.contato = cp.getContato();
            this.status = cp.getStatus();
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Long getIdcontato() {
        return idcontato;
    }

    public void setIdcontato(Long idcontato) {
        this.idcontato = idcontato;
    }
    
}
