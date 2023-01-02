<html>
<!-- <script src="./exchangeRate.js"></script> -->

<head>
  <h3>Conversion</h3>
  <hr>
</head>

<body>
  <form action="" method="get" enctype="multipart/form-data" onsubmit="return false">
    <label for="from">From:</label>
    <select id="from" name="from">
      <option value="usd">USD</option>
      <option value="bdt">BDT</option>
    </select>
    <label for="to">To:</label>
    <select id="to" name="to">
      <option value="bdt">BDT</option>
      <option value="usd">USD</option>
    </select>
    <input type="text" id='amount' name="amount" autofocus>

    <button name="convert" id='convert'>Convert</button>
  </form>
  <br>
  <p id="result"></p>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
  $(document).ready(function() {
    $('#convert').click(function() {
      var fromCurrency = document.getElementById('from').value;
      var toCurrency = document.getElementById('to').value;
 
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
          var json =JSON.parse(xhttp.responseText)   
          var amount=json.rate;
          alert("Converted Amount: " +(amount*amnt));
        }

        };
        xhttp.open("POST", "http://localhost:8080/spring_webmvc_war_exploded/hello/currency/rate/from/"+fromCurrency+"/to/"+toCurrency, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();

          var amount = document.getElementById('amount').value;
          var converted = amount * rate;
          document.getElementById('result').innerHTML = converted;
        }
      })
</script>

</html>