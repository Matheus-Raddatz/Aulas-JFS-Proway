<%@page import="java.util.List"%>
<%@page import="classes.Carro"%>
<%@page import="dao.DaoCarro"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Consulta de Carros</title>
<link rel="stylesheet" type="text/css" href="./estilos.css" />
</head>
<body>
	<div>
		<h1>Consultar Carros</h1>
		<nav>
			<%@include file="./menu.jsp"%>
		</nav>
		<p>
			<table>
				<thead>
					<tr>
						<th>Placa</th>
						<th>Modelo</th>
						<th>Opções</th>
					</tr>
				</thead>
				<tbody>
					<%
						List<Carro> carros = DaoCarro.consultar();
						for (int i = 0; i < carros.size(); i++) {
							Carro carro = carros.get(i);
							out.write("<tr><td><span>" + carro.getPlaca() + "</span></td><td><span>" + carro.getModelo() + "</span></td><td><span><button onClick=" + carro.getId() + "</td></span>");
						}
					%>
				</tbody>
			</table>
		</p>
	</div>
</body>
</html>