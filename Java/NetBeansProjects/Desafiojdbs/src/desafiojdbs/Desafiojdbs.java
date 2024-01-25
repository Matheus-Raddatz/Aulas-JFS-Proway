
package desafiojdbs;

import desafiojdbs.dao.DaoContato;
import desafiojdbs.entidades.Local;
import java.sql.SQLException;
import java.util.List;


public class Desafiojdbs {


    public static void main(String[] args) throws SQLException {
        List<Local> lista = DaoContato.consultar();
        for(Local lc : lista){
            System.out.println(lc.getNome());
        }
    }
    
}
