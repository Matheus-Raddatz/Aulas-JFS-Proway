package beans;

import javax.faces.bean.ManagedBean;

@ManagedBean
public class BeanContato {
    private String nome = "Ana";
    private String sobreNome = "Da Silva";
    private String nomeCompleto;
    
    public void formar(){
        nomeCompleto= nome + " " + sobreNome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobreNome() {
        return sobreNome;
    }

    public void setSobreNome(String sobreNome) {
        this.sobreNome = sobreNome;
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }
}
