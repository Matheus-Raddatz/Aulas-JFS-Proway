package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import classes.Carro;
import utils.Conexao;

public class DaoCarro {	
	public static boolean salvar(Carro carro) {
		Connection con = Conexao.getConexao();
		String sql = "insert into tb_carros(placa, modelo) values(?, ?)";
		try {
			PreparedStatement stm = con.prepareStatement(sql);
			stm.setString(1, carro.getPlaca());
			stm.setString(2, carro.getModelo());
			stm.execute();
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return false;
		}
		
	}
	
	public static List<Carro> consultar() {
		List<Carro> carros = new ArrayList<>();
		Connection con = Conexao.getConexao();
		try {
			PreparedStatement stm = con.prepareStatement("select * from tb_carros");
			ResultSet rs = stm.executeQuery();
			while (rs.next()) {
				Carro c1 = new Carro(rs.getString("id"), rs.getString("placa"), rs.getString("modelo"));
				carros.add(c1);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return carros;
	}
}
