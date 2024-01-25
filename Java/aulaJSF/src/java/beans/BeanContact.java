package beans;

import javax.faces.bean.ManagedBean;

@ManagedBean
public class BeanContact {

    private String name = "Matheus";
    private String surname = "Raddatz";
    private String fullName;
    
    public void form(){
        fullName = name + " " + surname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getFullName() {
        return fullName;
    }
}
