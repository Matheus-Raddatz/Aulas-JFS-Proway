<%-- 
    Document   : editacontato
    Created on : 9 de out. de 2022, 15:21:06
    Author     : 72226
--%>

<%@page import="dao.DaoContato"%>
<%@page import="entidades.Contato"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>
    <body>
        <%
            String idcontato = request.getParameter("id");
            Contato ct = DaoContato.consultarPeloId(Integer.parseInt(idcontato));
        %>
        <div class="container">
            <h1 class="text-center">Editar contatos</h1>
            <hr />
            <form action="enviaAlteracaoContato.jsp" method="POST">
                <label class="form-label">Idcontato:</label>
                <input class="form-control mb-2" id="nome" type="text" name="idcontato"
                       value=<% out.write("" + ct.getId()); %> readonly />

                <label class="form-label" for="nome">Nome:</label>
                <input class="form-control mb-2" id="nome" type="text" placeholder="informe o nome" name="nome"
                       value=<% out.write("" + ct.getNome()); %> />

                <label class="form-label" for="email">Email:</label>
                <input class="form-control mb-2" id="email" type="email" placeholder="informe o email" name="email"
                       value=<% out.write("" + ct.getEmail()); %> />

                <label class="form-label" for="fone">Fone:</label>
                <input class="form-control mb-2" id="fone" type="text" placeholder="informe o fone" name="fone"
                       value=<% out.write("" + ct.getFone());%> />

                <button class="btn btn-outline-primary">Gravar</button>
            </form>
        </div>
    </body>
</html>
