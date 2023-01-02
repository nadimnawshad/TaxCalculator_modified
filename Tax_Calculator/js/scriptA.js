function getCategories(){ 
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            text = "";
            
            for (x in myObj) {
               text+= "<option value='" + myObj[x].category + "'>"+myObj[x].category+"</option>"
            }
            document.getElementById("tax_payer_category").innerHTML = text;
      }
};
xhttp.open("GET", "http://localhost:8080/spring_webmvc_war_exploded/admin/calculation/api/allUser", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send();
}

function createCategoryFunction(){
    var category = document.getElementById("tax_payer_category").value;
    var slab_one,slab_two,slab_three,slab_four,slab_five;
    if(category=="General"){
      slab_one    = 300000;
      slab_two    = 400000;
      slab_three  = 700000;
      slab_four   = 1100000;
      slab_five   = 1600000;
    }
    else if (category == "Female_or_Senior_Citizen"){
      slab_one    = 350000;
      slab_two    = 450000;
      slab_three  = 750000;
      slab_four   = 1150000;
      slab_five   = 1650000;
    }
    else if (category == "Disabled"){
      slab_one    = 450000;
      slab_two    = 550000;
      slab_three  = 850000;
      slab_four   = 1250000;
      slab_five   = 1750000;

    }
    else{
      slab_one    = 475000;
      slab_two    = 575000;
      slab_three  = 875000;
      slab_four   = 1275000;
      slab_five   = 1775000;      
    }
    let  json = {
                    "category": category,
                    "slab_one": slab_one,
                    "slab_two": slab_two,
                    "slab_three": slab_three,
                    "slab_four": slab_four,
                    "slab_five": slab_five
                };
    alert(json);
    let data = JSON.stringify(json);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/spring_webmvc_war_exploded/admin/calculation/api/create/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
}


function deleteCategory(){
    var categoryname = document.getElementById("categoryName").value;
    alert(categoryname);
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:8080/spring_webmvc_war_exploded/admin/calculation/api/delete/"+categoryname, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function CategoryDetailsFunc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            text = "<table border='1'><thead><tr>"
            text+= "<th>Category></th><th>Slab_one</th><th>Slab_two</th><th>Slab_three</th><th>Slab_four</th><th>Slab_five</th>"
            text+= "</tr></thead>"
            for (x in myObj) {
                text += "<tr class='mr-1'>"
                text +="<td>" + myObj[x].category + "</td>"
                text +="<td>" + myObj[x].slab_one + "</td>"
                text +="<td>" + myObj[x].slab_two + "</td>"
                text +="<td>" + myObj[x].slab_three + "</td>"
                text +="<td>" + myObj[x].slab_four + "</td>"
                text +="<td>" + myObj[x].slab_five + "</td>"
                text += "</tr>";
            }
            text += "</table>"   
            document.getElementById("categoryDetails").innerHTML = text;
        }
    };
    xhttp.open("GET", "http://localhost:8080/spring_webmvc_war_exploded/admin/calculation/api/allUser", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

}