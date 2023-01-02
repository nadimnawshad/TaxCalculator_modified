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
<h1 style="text-align:center; background-color:#343a40; color:white; padding:8px">Income Tax Calculator Bangladesh (Salary)</h1>
<div class="container-fluid ">
    <div class="card" style="background: #000">
        <div class="card-body">
                <h6 style="padding: 0.25%;">Tax Result<sup>*</sup></h6>
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
                                <td><label style="padding: 0.25%;" for="AllowableInvestment" >Allowable Investment</label></td>
                                <td><input id="AllowableInvestment" type="number" name="AllowableInvestment"/></td>
                            </tr>
                            <tr>
                                <td><label style="padding: 0.25%;" for="netTax" >netTax</label></td>
                                <td><input id="netTax" type="number" name="netTax"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="justify-content-center" style="margin-left: 45%;">
                    <input type="button" value="Back" class="btn button"
                           style="padding: 1% 2%; margin: 2%;" onclick ="location='Tax_calculator.php'" />

                </div>
            </form>
        </div>
    </div>
</div>
  <script type="text/javascript" src="../js/script.js"> </script>
</body>
</html>