<%-- 
    Document   : cadcompromissos
    Created on : 9 de out. de 2022, 17:23:18
    Author     : 72226
--%>

<%@page import="java.sql.Time"%>
<%@page import="java.sql.Date"%>
<%@page import="entidades.Contato"%>
<%@page import="java.util.List"%>
<%@page import="dao.DaoCompromisso"%>
<%@page import="entidades.Compromisso"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <style>
            .datahora{
                display: flex;
                margin-top: 10px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Cadastro de compromissos</h1>
            <hr />
            <form action="cadcompromissos.jsp" method="POST">
                <label class="form-label">Local:</label>
                <input name="local" class="form-control" type="text" placeholder="informe o local" />

                <label class="form-label">Descrição:</label>
                <textarea name="descricao" class="form-control">
                </textarea>
                
                <label class="form-label">Contato:</label>
                <select class="form-select" name="idcontato">
                    <%
                        List<Contato> contatos = dao.DaoContato.consultar();
                        for (Contato ct : contatos) {
                            out.write("<option value=" + ct.getId() + ">" + ct.getNome() + "</option>");
                        }
                    %>
                </select>
                
                <div class="datahora">
                    <label class="form-label me-1">Data:</label>
                    <input name="data" class="form-control" type="date" />

                    <label class="form-label ms-2 me-1">Hora:</label>
                    <input name="hora" class="form-control" type="time" />
                    
                    <button class="btn btn-outline-primary ms-2 me-0">Gravar</button>
                </div>
            </form>
        </div>
        <%
            if (request.getParameter("descricao") != null) {
                boolean camposNaoInformados = request.getParameter("descricao").isEmpty() || request.getParameter("local").isEmpty() || request.getParameter("data").isEmpty() || request.getParameter("hora").isEmpty() || request.getParameter("idcontato").isEmpty();
                if (camposNaoInformados) {
                    out.write("<p>Todos os campos devem ser informados</p>");
                } else {
                    Compromisso cp = new Compromisso();
                    cp.setLocal(request.getParameter("local"));
                    cp.setDescricao(request.getParameter("descricao"));
                    cp.setData(Date.valueOf(request.getParameter("data")));
                    cp.setHora(Time.valueOf(request.getParameter("hora")+":00"));
                    cp.setIdcontato(Integer.parseInt(request.getParameter("idcontato")));
                    if (DaoCompromisso.salvar(cp)) {
                        out.write("<p>Compromisso salvo com sucesso!</p>");
                    }
                }
            }
        %>
    </body>
</html>
