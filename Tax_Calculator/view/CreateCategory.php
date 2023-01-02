<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
    <title>Income Tax Calculator Bangladesh (Salary)</title>
</head>
<body>
    <div class="row" style="text-align:center; background-color:#343a40; color:white;">
        <h1 style="padding:20px;" class="col-lg-9">Income Tax Calculator Bangladesh (Salary)</h1>
        <input type="button" value="Back" class="btn button col-lg-1"
       style="padding: 1% 2%; margin: 2%;" onclick ="location='Dashboard_Admin.php'" />
    </div>
<div class="container-fluid ">
    <div class="card" style="background: #000">
        <div class="card-body">
            <form action="" method="POST" enctype="multipart/form-data" modelAttribute="taxForm">
                <label style="padding: 0.25%;" for="tax_payer_category" >Choose Tax Payer Category</label>
                <select id='tax_payer_category' name='tax_payer_category' class='btn btn-dark dropdown-toggle' type='button'>
                    <option value="General">General</option>
                    <option value="Female_or_Senior_Citizen">Female_Senior_Citizen</option>
                    <option value="Disabled">Disabled</option>
                    <option value="Freedom_Fighter">Gazetted Freedom Fighters</option>                   
                </select>
                <br><br>
                <div class="justify-content-center" style="margin-left: 45%;">
                    <input type="submit" value="Submit" class="btn button"
                           style="padding: 1% 2%; margin: 2%;" data-toggle="modal" onclick ="return createCategoryFunction()" />
                    <input type="reset"  value="Reset" class="btn button"
                           style="padding: 1% 2%; margin: 2%;"/>
                </div>
            </form>
        </div>
    </div>
</div>
  <script type="text/javascript" src="../js/script.js"> </script>
  <script type="text/javascript" src="../js/scriptA.js"> </script>
</body>
</html>