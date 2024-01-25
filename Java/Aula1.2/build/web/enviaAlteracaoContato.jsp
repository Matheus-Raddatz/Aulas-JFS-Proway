<%@page import="entidades.Contato"%>
<%
    if (request.getParameter("nome") != null) {
        boolean camposNaoInformados = request.getParameter("nome").isEmpty() || request.getParameter("email").isEmpty() || request.getParameter("fone").isEmpty();
        if (camposNaoInformados) {
            out.write("<p>Todos os campos devem ser informados</p>");
        } else {
            Contato ct = new Contato();
            ct.setId(Integer.parseInt(request.getParameter("idcontato")));
            ct.setNome(request.getParameter("nome"));
            ct.setEmail(request.getParameter("email"));
            ct.setFone(request.getParameter("fone"));
            if (dao.DaoContato.alterar(ct)) {
                response.sendRedirect("consultacontato.jsp");
            }
        }
    }
%>