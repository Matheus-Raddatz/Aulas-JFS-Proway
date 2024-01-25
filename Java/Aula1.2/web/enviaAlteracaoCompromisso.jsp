<%@page import="java.sql.Time"%>
<%@page import="java.sql.Date"%>
<%@page import="entidades.Compromisso"%>
<%
    if (request.getParameter("descricao") != null) {
        boolean camposNaoInformados = request.getParameter("descricao").isEmpty() || request.getParameter("local").isEmpty() || request.getParameter("data").isEmpty() || request.getParameter("hora").isEmpty() || request.getParameter("idcontato").isEmpty();
        if (camposNaoInformados) {
            out.write("<p>Todos os campos devem ser informados</p>");
        } else {
            Compromisso cp = new Compromisso();
            cp.setDescricao(request.getParameter("descricao"));
            cp.setLocal(request.getParameter("local"));
            cp.setData(Date.valueOf(request.getParameter("data")));
            cp.setHora(Time.valueOf(request.getParameter("hora")));
            cp.setIdcontato(Integer.parseInt(request.getParameter("idcontato")));
            if (dao.DaoCompromisso.alterar(cp)) {
                out.write("<p>Compromisso alterado com sucesso!</p>");
            }
        }
    }
%>