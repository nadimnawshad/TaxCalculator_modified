<%--
  Created by IntelliJ IDEA.
  User: MIRMDKAWSUR
  Date: 7/24/2022
  Time: 8:43 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Registration</title>
</head>
<body>

<h1>Registration Form</h1>

<form:form action="submit" modelAttribute="student">
    <label for="firstname">First Name:</label>
    <form:input path="firstname" id="firstname"/>
    <form:errors path="firstname"/>

    <br><br>

    <label for="lastname">Last Name:</label>
    <form:input path="lastname" id="lastname"/>
    <form:errors path="lastname"/>

    <br><br>

    <input type="submit">

</form:form>

<%--
<% String msg = request.getParameter("message");
    if (msg != null) out.println(msg);
%>
--%>

<%--<c:out value="${message}" />--%>

</body>
</html>