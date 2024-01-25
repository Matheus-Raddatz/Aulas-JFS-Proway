<%@page import="dao.DaoCarro"%>
<%@page import="classes.Carro"%>

<%
	String placa = request.getParameter("Placa");
	String modelo = request.getParameter("Modelo");

	Carro c1 = new Carro(placa, modelo);
	//DaoCarro.carros.add(c1);
	//response.sendRedirect("./conCarros.jsp");
	if (DaoCarro.salvar(c1)) {
		response.sendRedirect("./conCarros.jsp");
	}
%>