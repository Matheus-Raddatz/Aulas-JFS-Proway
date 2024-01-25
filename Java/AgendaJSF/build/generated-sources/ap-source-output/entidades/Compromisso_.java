package entidades;

import entidades.Contato;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.7.9.v20210604-rNA", date="2022-12-04T14:46:42")
@StaticMetamodel(Compromisso.class)
public class Compromisso_ { 

    public static volatile SingularAttribute<Compromisso, String> data;
    public static volatile SingularAttribute<Compromisso, String> hora;
    public static volatile SingularAttribute<Compromisso, Long> id;
    public static volatile SingularAttribute<Compromisso, Contato> contato;
    public static volatile SingularAttribute<Compromisso, String> local;
    public static volatile SingularAttribute<Compromisso, Boolean> status;

}