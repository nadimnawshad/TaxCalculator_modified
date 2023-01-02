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
                        <li><button type="button" class="btn button default_button login_default_button" id="login_button">LogIn</button></li>
                        <li><button type="button" class="btn button" id="signUp_button">SignUp</button></li>
                    </ul> 
                </div>
                <form action="../control/LoginValidation.php" method="POST" class="form_style loginForm" id="login_Form">
                    <label>* Email : </label><br>
                    <input type='text' name='user_email' id='user_email' placeholder='Email Address'>
                    <p id='user_emailValidation' class='errorMsg'></p>
                    
                    <label>* Password : </label><br>
                    <input type="password" name="user_password" id='user_password' placeholder="Enter a new password" >
                    <p id="user_passwordValidation" class="errorMsg"></p>

                    <p id="mitchMatchMsg" class="errorMsg loginError"><?php echo $error; ?></p>
                    
                    <input type="submit" class="button submitButton" name="LogIn" value="LogIn" onclick ="return loginValidation()"><br>
                    <a href="FogotPass.php">Forgot your password?</a>
                </form>
                                       
                <form action='../control/LoginValidation.php' method='POST' class='form_style signUpForm' id="signUp_Form">
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
                    <input type="password" name="password" id="password" placeholder="Enter a new password" >
                    <p id="passwordValidation" class="errorMsg"></p>

                    <label>* Re-type Password : </label><br>
                    <input type='password' name='repassword' id='repassword' placeholder='Retype Password' >
                    <p id='rePasswordValidation' class='errorMsg'></p>

                    <label>*Present Address</label><br>
                    <textarea id='address' name='address' placeholder='Present address' style='height:auto;'></textarea>
                    <p id='addressValidation' class='errorMsg'></p>
                    <div class="signUpFooter">                
                        <br><p>By clicking SignUp, you agree to our <a href='#'>terms and policies</a> and <a href='#'> cookies policies</a>.</p> <br>
                        <input type="submit" class="button submitButton" name="SignUp" value="SignUp" onclick ="return signUpValidation()">
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