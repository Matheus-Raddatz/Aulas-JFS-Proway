package beans;

import entidades.Conta;
import entidades.Contato;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

@ManagedBean
public class BeanConta {

    private long id;
    private String email;
    private String nome;
    private String fone;
    private String rua;
    private String cidade;
    private boolean status = true;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void salvar() {
        boolean tudoCerto = true;
        boolean existe = pesquisaPeloEmail();
        FacesContext context = FacesContext.getCurrentInstance();
        FacesMessage msg = null;
        if (this.email.equals("")) {
            msg = new FacesMessage("Informe o Email");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if (existe) {
            msg = new FacesMessage("Já existe uma conta com esse email");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if (this.nome.equals("")) {
            msg = new FacesMessage("Informe o Nome");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if (this.fone.equals("")) {
            msg = new FacesMessage("Informe o Telefone");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if (this.rua.equals("")) {
            msg = new FacesMessage("Informe a Rua");
            context.addMessage(null, msg);
            tudoCerto = false;
        } else if (this.cidade.equals("")) {
            msg = new FacesMessage("Informe a Cidade");
            context.addMessage(null, msg);
            tudoCerto = false;
        }

        if (tudoCerto) {
            Conta conta = new Conta();
            conta.setEmail(this.email);
            conta.setNome(this.nome);
            conta.setFone(this.fone);
            conta.setRua(this.rua);
            conta.setCidade(this.cidade);
            if (dao.DaoConta.salvar(conta)) {
                msg = new FacesMessage("Registrado com sucesso");
            }
            context.addMessage(null, msg);
            limpar();
        }
    }

    public void limpar() {
        email = "";
        nome = "";
        fone = "";
        rua = "";
        cidade = "";
    }

    public boolean pesquisaPeloEmail() {
        Conta ca = dao.DaoConta.pesquisarPeloEmail(email);
        if (ca != null) {
            this.id = ca.getId();
            this.email = ca.getEmail();
            this.nome = ca.getNome();
            this.fone = ca.getFone();
            this.rua = ca.getRua();
            this.cidade = ca.getCidade();
            return true;
        }
        return false;
    }
}
