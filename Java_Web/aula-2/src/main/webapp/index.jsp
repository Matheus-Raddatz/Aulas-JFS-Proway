<%@page import="utils.Conexao"%>
<%@page import="classes.Carro"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Aula P.O.O.</title>
<link rel="stylesheet" type="text/css" href="./estilos.css" />
</head>
<body>
	<div>
		<h1>Aula 2 - Programação Orientada a Objeto</h1>
		<nav>
			<%@include file="./menu.jsp"%>
		</nav>
		<%
			out.write("<p>Status da conexão com o banco de dados: " + Conexao.conectar() + "</p>");
		%>
	</div>
</body>
</html>