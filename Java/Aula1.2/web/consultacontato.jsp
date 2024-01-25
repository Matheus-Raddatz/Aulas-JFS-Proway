<%-- 
    Document   : consultacontato
    Created on : 2 de out. de 2022, 18:00:47
    Author     : 72226
--%>

<%@page import="java.util.List"%>
<%@page import="entidades.Contato"%>
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
            <h1>Lista de contatos</h1>
            <hr />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>email</th>
                        <th>fone</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                        List<Contato> Lista = dao.DaoContato.consultar();
                        for (Contato ct : Lista) {
                            out.write("<tr>");
                            out.write("<td>" + ct.getId() + "</td>");
                            out.write("<td>" + ct.getNome() + "</td>");
                            out.write("<td>" + ct.getEmail() + "</td>");
                            out.write("<td>" + ct.getFone() + "</td>");
                            out.write("<td><a href='editacontato.jsp?id="+ct.getId()+"'>editar</a></td>");
                            out.write("</tr>");
                        }
                    %>
                </tbody>
            <table>
        </div>
    </body>
</html>
