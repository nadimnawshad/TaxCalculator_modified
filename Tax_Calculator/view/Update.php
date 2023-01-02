<?php
    include('../control/LoginValidation.php');
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no">

    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="icon" type="text/css" href="../images/logo.png">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <title>Login Page</title>
</head>
<body>
<section class="banner">
    <div id="popUp" class="popUp">
        <div class="container "> 
            <div class="popUp-content">
                <div class='top-logo justify-content-center text-center'>
                    <a href='#'><h4>Tax Calculator</h4></a>
                    <br>
                </div>
                <div class="nav justify-content-center">
                    <ul class="row signUp_logIn_Button">
                        <li><button type="button" class="btn button " id="signUp_button">Update User</button></li>                                            
                        <li class="nav-item">
                            <a class="nav-link" href="Dashboard_Admin.php" title="Back" role="button"><span><i class="fa-solid fa-arrow-right"></i></span></a>
                        </li>
                    </ul>
                    </ul> 
                </div>                                       
                <form action='Update.php' method='PUT' class='form_style signUpForm signUpForm_new' id="signUp_Form">
                    <label>* First Name : </label><br>
                    <input type='text' name='firstName' id='firstName'  placeholder='First name' >
                    <p id='firstNameValidation' class='errorMsg'></p>
         
                    <label>* Sure Name : </label><br>
                    <input type='text' name='sureName' id='sureName' placeholder='Sure name' >
                    <p id='sureNameValidation' class='errorMsg'></p>

                    <label>* Phone Number : </label><br>
                    <input type='text' name='phone' id='phone' placeholder='Phone Number' >
                    <p id='phoneValidation' class='errorMsg'></p>

                    <label>* Email : </label><br>
                    <input type='text' name='email' id='email' placeholder='Email Address'>
                    <p id='emailValidation' class='errorMsg'></p>

                    <label>* Password : </label><br>
                    <input type="text" name="password" id="password" placeholder="Enter a new password" >
                    <p id="passwordValidation" class="errorMsg"></p>

                    <label>*Present Address</label><br>
                    <textarea id='address' name='address' placeholder='Present address' style='height:auto;'></textarea>
                    <p id='addressValidation' class='errorMsg'></p>
                    <div class="signUpFooter">                
                        <br><p>By clicking SignUp, you agree to our <a href='#'>terms and policies</a> and <a href='#'> cookies policies</a>.</p> <br>
                        <input type="submit" class="button submitButton" name="SignUp" value="Update" onclick ="UpdateUser()">
                    </div> 
                </form>
            </div>
        </div>
    </div>
</section>
     <script src="../js/all.min.js"> </script>
    <script src="../js/jquery-3.4.1.slim.min.js"> </script>
   <script src="../js/bootstrap.min.js"> </script>
  <script type="text/javascript" src="../js/script.js"> </script>
</body>
</html>