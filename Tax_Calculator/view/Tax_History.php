<?php 
	include('../control/historyValidation.php');
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
	<title>History</title>
</head>
<body>
<header>
	<nav class="navbar navbar-expand navbar-light logo">
		<div class="container">
				<a class="navbar-brand" href="#"><img src="../images/logo.png"  class="logo-img img-fluid  py-0"></a>
				<button class="navbar-toggler dashboard_menu_toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    				<span><i class="fa-solid fa-bars"></i></span>
  				</button>
  				
				<div class="collapse navbar-collapse justify-content-right" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto dashboard_header_menu">
						<li class="nav-item">
      					</li>
      					<li class="nav-item">
      						<a class="nav-link" href="Dashboard.php" title="Back" role="button"><span><i class="fa-solid fa-arrow-right"></i></span></a>
      					</li>
      				</ul>			
				</div>
			</nav>
		</div>
	</div>
	<span class="line"></span>
</header>
<section class="text-center">
	<input type="button" value="See History" class="btn button col-lg-1"
       style="padding: 1% 1%; margin: 2%;" onclick ="userHistory()" />
	<div class="container">
		<h5>History List</h5><br>
    	<p id="userHistory"></p>
	</div>
	<span class="line"></span>
</section>
   	 <script src="../js/all.min.js"> </script>
    <script src="../js/jquery-3.4.1.slim.min.js"> </script>
   <script src="../js/bootstrap.min.js"> </script>
  <script type="text/javascript" src="../js/script.js"> </script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
</body>
</html>