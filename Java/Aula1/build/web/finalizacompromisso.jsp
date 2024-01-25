<%
    if (request.getParameter("id") != null) {
        dao.DaoCompromisso.finalizar(Integer.parseInt(request.getParameter("id")));
        response.sendRedirect("consultacompromisso.jsp");
    }
%>