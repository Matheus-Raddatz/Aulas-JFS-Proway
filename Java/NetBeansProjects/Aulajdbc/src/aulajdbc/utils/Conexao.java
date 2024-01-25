/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulajdbc.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class Conexao {

    public static Connection conectar() throws SQLException {
        String url = "jdbc:postgresql://localhost:5432/postgres";
            String user = "postgres";
            String senha = "admin";
            return  DriverManager.getConnection(url, user, senha);
    }
}
