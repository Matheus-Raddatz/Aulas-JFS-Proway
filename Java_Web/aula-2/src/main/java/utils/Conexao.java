package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {
	public static String conectar() {
		try {
			Class.forName("org.postgresql.Driver");
			Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/bdcarros","postgres","admin");
			return "Conectado";
		} catch (ClassNotFoundException | SQLException e) {
			return e.getMessage();
		}
	}
	
	public static Connection getConexao() {
		Connection con = null;
		try {
			Class.forName("org.postgresql.Driver");
			con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/bdcarros","postgres","admin");
		} catch (ClassNotFoundException | SQLException e) {
			e.getMessage();
		}
		return con;
	}
}
