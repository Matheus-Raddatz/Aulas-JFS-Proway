<%-- 
    Document   : consultacompromisso
    Created on : 9 de out. de 2022, 17:23:34
    Author     : 72226
--%>

<%@page import="java.util.List"%>
<%@page import="entidades.Compromisso"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <h1>Lista de compromissos</h1>
            <hr />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descricao</th>
                        <th>Local</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>IDcontato</th>
                        <th>Nome</th>
                        <th>Editar</th>
                        <th>Finalizar</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                        List<Compromisso> Lista = dao.DaoCompromisso.consultar();
                        for (Compromisso cp : Lista) {
                            out.write("<tr>");
                            out.write("<td>" + cp.getId() + "</td>");
                            out.write("<td>" + cp.getDescricao() + "</td>");
                            out.write("<td>" + cp.getLocal() + "</td>");
                            out.write("<td>" + cp.getData() + "</td>");
                            out.write("<td>" + cp.getHora() + "</td>");
                            out.write("<td>" + cp.getIdcontato() + "</td>");
                            out.write("<td>" + dao.DaoContato.consultarPeloId(cp.getIdcontato()).getNome() + "</td>");
                            out.write("<td><a href='editacompromisso.jsp?id="+cp.getId()+"'>editar</a></td>");
                            out.write("<td><a href='finalizacompromisso.jsp?id="+cp.getId()+"'>finalizar</a></td>");
                            out.write("</tr>");
                        }
                    %>
                </tbody>
            <table>
        </div>
    </body>
</html>
