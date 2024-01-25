
package desafiojdbs.dao;

    import desafiojdbs.entidades.Local;
    import desafiojdbs.utils.Conexao;
    import java.sql.PreparedStatement;
    import java.sql.SQLException;
    import java.util.ArrayList;
    import java.util.List;
    import java.util.logging.Level;
    import java.util.logging.Logger;
    import java.sql.ResultSet;

public class DaoContato {
    public static boolean alterar(Local lc){
        try{
            String sql = "insert into locais(nome, rua, bairro, cidade, cep, nomecontato, fonecontato)value(?,?,?,?,?,?,?)";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            stm.setString(1, lc.getNome());
            stm.setString(2, lc.getRua());
            stm.setString(3, lc.getBairro());
            stm.setString(4, lc.getCidade());
            stm.setString(5, lc.getCep());
            stm.setString(6, lc.getNomeContato());
            stm.setString(7, lc.getFoneContato());
        }
        catch (SQLException ex){
            Logger.getLogger(DaoContato.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }
    public static boolean salvar(Local lc){
        try{
            String sql = "insert into locais(nome, rua, bairro, cidade, cep, nomecontato, fonecontato)value(?,?,?,?,?,?,?)";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            stm.setString(1, lc.getNome());
            stm.setString(2, lc.getRua());
            stm.setString(3, lc.getBairro());
            stm.setString(4, lc.getCidade());
            stm.setString(5, lc.getCep());
            stm.setString(6, lc.getNomeContato());
            stm.setString(7, lc.getFoneContato());
        }
        catch (SQLException ex){
            Logger.getLogger(DaoContato.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }
    public static List<Local> consultar() throws SQLException{
        List<Local> lista = new ArrayList<>();
        
        try {
            String sql = "select * from Local";
            PreparedStatement stm = Conexao.conectar().prepareStatement(sql);
            ResultSet rs = stm.executeQuery();
            while(rs.next()){
                Local lc = new Local();
                lc.setId(rs.getInt("id"));
                lc.setNome(rs.getString("nome"));
                lc.setRua(rs.getString("Rua"));
                lc.setBairro(rs.getString("Bairro"));
                lc.setCidade(rs.getString("Cidade"));
                lc.setCep(rs.getString("Cep"));
                lc.setNomeContato(rs.getString("NomeContato"));
                lc.setFoneContato(rs.getString("FoneContato"));
                
                lista.add(lc);
            }
        }
        catch (SQLException ex) {
            Logger.getLogger(DaoContato.class.getName()).log(Level.SEVERE,null, ex);
            }
            return lista;
    }
}

