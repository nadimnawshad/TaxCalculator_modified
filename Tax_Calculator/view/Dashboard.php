<?php
	include('../control/dashboardManagement.php');
	// if(!isset($_SESSION['userId'])){
 //        header("location: Login.php");
 //    }
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
	<title>Dashboard</title>
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
		      				<li class="nav-item admin-logout">
		      						<a class="nav-link" href="../control/Logout.php" title="Logout" role="button"><span><i class="fa-solid fa-right-from-bracket"></i></span></a>
		      				</li>
      		</ul>			
				</div>
			</nav>
		</div>
	</div>
	<span class="line"></span>
</header>

<section>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-12 col-sm-12 text-center time_date">
  				<h6><p id="today_date_time" class="time_date"></p></h6>
  			</div>
  		</div>
  	</div>
  	<span class="line"></span>
</section>
<section class="header_information">
	<div class="container">
		<div class="row justify-content-center pb-5">
				<div class="col-lg-3 col-md-4 col-sm-6 col-6 text-center feature admin-dashboard-content">
  				<div class="details dashboardMenu" onclick="location='Tax_calculator.php'">
  					<h2><i class="fa-solid fa-calculator"></i></i></i></h2>
  					<h6><b>Calculate Tax</b></h6>
					</div>
	  			</div>
				<div class="col-lg-3 col-md-4 col-sm-6 col-6 text-center feature admin-dashboard-content">
	  				<div class="details dashboardMenu" onclick="location='Tax_History.php'">
	  					<h2><i class="fa-solid fa-table-list"></i></h2>
	  					<h6><b>See history</b></h6>
				    </div>
	  			</div>
		</div>
	</div>
	<span class="line"></span>	
</section>
   	 <script src="../js/all.min.js"> </script>
    <script src="../js/jquery-3.4.1.slim.min.js"> </script>
   <script src="../js/bootstrap.min.js"> </script>
  <script type="text/javascript" src="../js/script.js"> </script>
</body>
</html>