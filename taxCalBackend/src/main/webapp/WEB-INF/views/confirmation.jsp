<%--
  Created by IntelliJ IDEA.
  User: kawsu
  Date: 10/25/2022
  Time: 8:56 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored="false" %>
<html>
<head>
    <title>Confirmation</title>
</head>
<body>

<h1>Confirmation</h1>

<c:out value="${student.firstname}" />
<br><br>
<c:out value="${student.lastname}" />

<hr>

<p>Welcome, ${user.email} ${user.password}</p>

</body>
</html>
