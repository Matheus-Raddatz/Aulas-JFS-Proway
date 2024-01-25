<%-- 
    Document   : cadcontatos
    Created on : 2 de out. de 2022, 16:29:56
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
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <h1>Cadastro de contatos</h1>
            <hr />
            <form action="cadcontatos.jsp" method="POST">
                <label class="form-label" for="nome">Nome:</label>
                <input class="form-control mb-2" id="nome" type="text" placeholder="informe o nome" name="nome" />
                <label class="form-label" for="email">Email:</label>
                <input class="form-control mb-2" id="email" type="email" placeholder="informe o email" name="email" />
                <label class="form-label" for="fone">Fone:</label>
                <input class="form-control mb-2" id="fone" type="text" placeholder="informe o fone" name="fone" />
                <button class="btn btn-outline-primary">Gravar</button>
            </form>
        </div>
        <%
            if (request.getParameter("nome") != null) {
                boolean camposNaoInformados = request.getParameter("nome").isEmpty() || request.getParameter("email").isEmpty() || request.getParameter("fone").isEmpty();
                if (camposNaoInformados) {
                    out.write("<p>Todos os campos devem ser informados</p>");
                } else {
                    Contato ct = new Contato();
                    ct.setNome(request.getParameter("nome"));
                    ct.setEmail(request.getParameter("email"));
                    ct.setFone(request.getParameter("fone"));
                    if (DaoContato.salvar(ct)) {
                        out.write("<p>Contato salvo com sucesso!</p>");
                    }
                }
            }
        %>
    </body>
</html>
