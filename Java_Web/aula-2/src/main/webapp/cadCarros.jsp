<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de Carros</title>
<link rel="stylesheet" type="text/css" href="./estilos.css" />
</head>
<body>
	<div>
		<h1>Cadastrar Carro</h1>
		<nav>
			<%@include file="./menu.jsp"%>
		</nav>
		<form action="./salvarCarro.jsp">
			<p>
				<label for="modelo">Modelo:</label>
				<input type="text" id="modelo" name="Modelo" placeholder="Modelo do carro">
			</p>
			<p>
				<label for="placa">Placa:</label>
				<input type="text" id="placa" name="Placa" placeholder="Placa do carro">
			</p>
			<p>
				<button>Cadastrar</button>
			</p>
		</form>
		
	</div>
</body>
</html>