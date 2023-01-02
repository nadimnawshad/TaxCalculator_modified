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
       style="padding: 1% 2%; margin: 2%;" onclick ="location='Dashboard.php'" />

    </div>
<div class="container-fluid ">
    <div class="card" style="background: #000">
        <div class="card-body">
            <form action="" method="POST" enctype="multipart/form-data" modelAttribute="taxForm">
                <label style="padding: 0.25%;" for="tax_payer_category" >Choose Tax Payer Category</label>
                <select id='tax_payer_category' name='tax_payer_category' class='btn btn-dark dropdown-toggle' type='button' onclick="getCategories()">                    
                </select>
                <br><br>

                <label style="padding: 0.25%;" for="tax_payer_zone" >Choose Zone</label>
                <select id="tax_payer_zone" name="tax_payer_zone" class="btn btn-dark dropdown-toggle" type="button">
                    <option value="Dhaka_or_Chattagram">Dhaka/Chattagram City</option>
                    <option value="Other">Other City</option>
                    <option value="Rest">Rest of the Country</option>
                </select>
                <br><br>
                <h6 style="padding: 0.25%;">Salary Breakdown<sup>*</sup></h6>
                <div class="table-responsive">
                    <table class="table table-sm table-dark">
                        <thead>
                        <tr>
                            <th>Area</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><label style="padding: 0.25%;" for="basic_salary" >*Basic Salary</label></td>
                                <td><input id="basic_salary" type="number" name="basic_salary" value ="0"/></td>
                            </tr>
                            <tr>
                                <td><label style="padding: 0.25%;" for="house_rent" >House Rent</label></td>
                                <td><input id="house_rent" type="number" name="house_rent" value="0"/></td>
                            </tr>
                            <tr>
                                <td><label style="padding: 0.25%;" for="medical" >*Medical Allowance</label></td>
                                <td><input id="medical" type="number" name="medical" value="0" /></td>
                            </tr>
                            <tr>
                                <td><label style="padding: 0.25%;" for="conveyance" >Conveyance</label></td>
                                <td><input id="conveyance" type="number" name="conveyance" value="0" /></td>
                            </tr>
                            <tr>
                                <td><label style="padding: 0.25%;" for="commission" >Incentive/OT</label></td>
                                <td><input id="commission" name="commission" type="number" value="0" /></td>
                            </tr>
                            <tr>
                                <td><label style="padding: 0.25%;" for="bonus" >Festival Bonus</label></td>
                                <td><input id="bonus" name="bonus" type="number" value="0" /></td>
                            </tr>
                            <tr>
                                <td><label style="padding: 0.25%;" for="investment" >Investment Amount</label></td>
                                <td><input id="investment" name="investment" type="number" value="0" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="justify-content-center" style="margin-left: 45%;">
                    <input type="submit" value="Submit" class="btn button"
                           style="padding: 1% 2%; margin: 2%;" data-toggle="modal" onclick ="return taxableIncomeCalculation()" />
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