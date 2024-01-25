<%-- 
    Document   : editacompromisso
    Created on : 9 de out. de 2022, 17:23:48
    Author     : 72226
--%>

<%@page import="dao.DaoCompromisso"%>
<%@page import="entidades.Compromisso"%>
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
            String idcompromisso = request.getParameter("id");
            Compromisso cp = DaoCompromisso.consultarPeloId(Integer.parseInt(idcompromisso));
        %>
        <div class="container">
            <h1 class="text-center">Editar compromissos</h1>
            <hr />
            <form action="enviaAlteracaoCompromisso.jsp" method="POST">
                <label class="form-label">Idcompromisso:</label>
                <input class="form-control mb-2" id="nome" type="text" name="idcontato"
                       value=<% out.write("" + cp.getId()); %> readonly />

                <label class="form-label" for="descricao">Descrição:</label>
                <input class="form-control mb-2" id="descricao" type="text" placeholder="informe a descrição" name="descricao"
                       value=<% out.write("" + cp.getDescricao()); %> />

                <label class="form-label" for="local">Local:</label>
                <input class="form-control mb-2" id="local" type="text" placeholder="informe o local" name="local"
                       value=<% out.write("" + cp.getLocal()); %> />

                <label class="form-label" for="fone">Data:</label>
                <input class="form-control mb-2" id="data" type="Date" placeholder="informe a data" name="data"
                       value=<% out.write("" + cp.getData());%> />

                <label class="form-label" for="hora">Hora:</label>
                <input class="form-control mb-2" id="hora" type="Time" placeholder="informe a hora" name="hora"
                       value=<% out.write("" + cp.getHora());%> />

                <label class="form-label" for="idcontato">ID contato:</label>
                <input class="form-control mb-2" id="idcontato" type="text" placeholder="informe o ID do contato" name="idcontato"
                       value=<% out.write("" + cp.getIdcontato());%> />

                <button class="btn btn-outline-primary">Gravar</button>
            </form>
        </div>
    </body>
</html>
