
$(document).ready(function(){
	$("#login_button").click(function(){
		$("#signUp_button").css("background", "#003b3b");
		$("#signUp_button").css("border", "1px solid #ffffff");
		$("#login_button").css("background-color", "#000");
		$("#login_button").css("border", "1px solid #c55a11");
 		$("#login_Form").show();
 		$("#signUp_Form").hide();
	});
});

$(document).ready(function(){
	$("#signUp_button").click(function(){
		$("#login_button").css("background", "#003b3b");
		$("#login_button").css("border", "1px solid #ffffff");
		$("#signUp_button").css("background-color", "#000");
		$("#signUp_button").css("border", "1px solid #c55a11");
 		$("#signUp_Form").show();
 		$("#login_Form").hide();
	});
});

$(document).ready(function () {  
	$(document).on('keyup','#password',function( e ){
    	var value = $(this).val();  
        $('#passwordValidation').html(checkStrength(value));  
    })  
    function checkStrength(password) {  
        var strength = 0;  
        if (password.length < 8) {  
            $('#passwordValidation').removeClass();  
            $('#passwordValidation').addClass('ShortPass');  
            return 'Too short';  
        }  
        if (password.length > 7) strength += 1;  
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;  
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1; 
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1  
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;  

        if (strength < 2) {  
            $('#passwordValidation').removeClass()  
            $('#passwordValidation').addClass('WeakPass')  
            return 'Weak'  
        } else if (strength < 4) {  
            $('#passwordValidation').removeClass()  
            $('#passwordValidation').addClass('GoodPass')  
            return 'Good'  
        } else {  
            $('#passwordValidation').removeClass()  
            $('#passwordValidation').addClass('StrongPass')  
            return 'Strong'  
        }  
    }  
}); 


$(document).ready(function(){
	$("#guide_box").click(function(){
		$("#notification_section").show();
	});
});



//********************************************************
//Date,Time Checking 
let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];

// For todays date;

Date.prototype.get_today_date = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate();
}

var datetime = new Date().get_today_date()+ " "+monthsList[new Date().getMonth()]+", "+new Date().getFullYear()+" ( "+daysList[new Date().getDay()]+" ) ";
document.getElementById('today_date_time').innerHTML= "<b>Today</b> : "+datetime;

$(document).ready(function(){
	$("#changePlantButton").click(function(){
 		$(".new_cultivation").show();
	});
});


//********************************************************************************
function signUpValidation(){    
    var firstName = document.getElementById("firstName").value;
    var sureName = document.getElementById("sureName").value;
    var name = firstName.toLowerCase()+"_"+sureName.toLowerCase();
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var address = document.getElementById("address").value; 

    let  json = {
                  "user_name": name,
                  "pass": userPass, 
                  "phone": phone,
                  "email": email,
                  "address": address
                };
    alert(json);
    let data = JSON.stringify(json);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/spring_webmvc_war_exploded/admin/user/api/create/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);

}


function UpdateUser(){   
    var firstName = document.getElementById("firstName").value;
    var sureName = document.getElementById("sureName").value;
    var name = firstName.toLowerCase()+"_"+sureName.toLowerCase();
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    alert("Name : "+name+" | Phone : "+phone+" | Email : "+email+" | Password : "+userPass+" | Address : "+address);
    var json =  {
                    "user_name": name,
                    "pass": userPass,
                    "phone": phone,
                    "email": email,
                    "address": address
                };
    let data = JSON.stringify(json);

    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "http://localhost:8080/spring_webmvc_war_exploded/admin/user/api/user/"+name+"/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
}


function userDetailsFunc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            text = "<table border='1'><thead><tr>"
            text+= "<th>User ID></th><th>User Name></th><th>Password</th><th>Phone</th><th>Email</th><th>Address</th>"
            text+= "</tr></thead>"
            for (x in myObj) {
                text += "<tr class='mr-1'>"
                text +="<td>" + myObj[x].user_id + "</td>"
                text +="<td>" + myObj[x].user_name + "</td>"
                text +="<td>" + myObj[x].pass + "</td>"
                text +="<td>" + myObj[x].phone + "</td>"
                text +="<td>" + myObj[x].email + "</td>"
                text +="<td>" + myObj[x].address + "</td>"
                text += "</tr>";
            }
            text += "</table>"   
            document.getElementById("userDetails").innerHTML = text;
        }
    };
    xhttp.open("GET", "http://localhost:8080/spring_webmvc_war_exploded/admin/user/api/allUser", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

}


function userHistory(){
    var name = "nana";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            text = "<table border='1'><thead><tr>"
            text+= "<th>ID</th><th>User Name></th><th>Category</th><th>Zone</th><th>Salary</th>"
            text+= "<th>House Rent</th><th>Medical</th><th>Conveyance</th><th>Commission</th>"
            text+= "<th>Bonus</th><th>Tax</th><th>allowable_investment</th><th>Net Tax</th>"
            text+= "</tr></thead>"
            for (x in myObj) {
                text += "<tr class='mr-1'>"
                text +="<td>" + myObj[x].id + "</td>"
                text +="<td>" + myObj[x].user_name + "</td>"
                text +="<td>" + myObj[x].tax_payer_category + "</td>"
                text +="<td>" + myObj[x].tax_payer_zone + "</td>"
                text +="<td>" + myObj[x].basic_salary + "</td>"
                text +="<td>" + myObj[x].house_rent + "</td>"
                text +="<td>" + myObj[x].medical + "</td>"
                text +="<td>" + myObj[x].conveyance + "</td>"
                text +="<td>" + myObj[x].commission + "</td>"
                text +="<td>" + myObj[x].bonus + "</td>"
                text +="<td>" + myObj[x].tax + "</td>"
                text +="<td>" + myObj[x].allowable_investment + "</td>"
                text +="<td>" + myObj[x].netTax + "</td>"
                text += "</tr>";
            }
            text += "</table>"   
            document.getElementById("userHistory").innerHTML = text;
        }
    };
    xhttp.open("GET", "http://localhost:8080/spring_webmvc_war_exploded/User/api/tax_history/"+name, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

}

function deleteUser(){
    var username = document.getElementById("userName").value;
    alert(username);
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:8080/spring_webmvc_war_exploded/admin/user/api/delete/"+username, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function taxableIncomeCalculation(){    
    var category = document.getElementById("tax_payer_category").value;
	var zone = document.getElementById("tax_payer_zone").value;
	var basic_salary = document.getElementById("basic_salary").valueAsNumber;
  	var house_rent = document.getElementById("house_rent").valueAsNumber;
  	var medical = document.getElementById("medical").valueAsNumber;
  	var conveyance = document.getElementById("conveyance").valueAsNumber;
  	var commission = document.getElementById("commission").valueAsNumber;
  	var bonus = document.getElementById("bonus").valueAsNumber;
  	var investment = document.getElementById("investment").valueAsNumber;

    var house_rent_sal = (basic_salary * 0.5);
    var house_rent_act = 25000 * 12;
    var house_rent_cal = Math.min(house_rent_sal, house_rent_act);
    var house_rent_taxable;
    if (house_rent - house_rent_cal < 0) {
        house_rent_taxable = Math.round(0);
    } else {
        house_rent_taxable = Math.round(house_rent - house_rent_cal);
    }

    var medical_sal = (basic_salary * 0.1);
    var medical_act = 120000;
    var medical_cal = Math.min(medical_sal, medical_act);
    var medical_taxable;
    if (medical - medical_cal < 0) {
        medical_taxable = Math.round(0);
    } else {
        medical_taxable = Math.round(medical - medical_cal);
    }

    var conveyance_sal = 30000;
    var conveyance_act = 30000;
    var conveyance_cal = Math.min(conveyance_sal, conveyance_act);
    var conveyance_taxable;
    if (conveyance - conveyance_cal < 0) {
        conveyance_taxable = Math.round(0);
    } else {
        conveyance_taxable = Math.round(conveyance - conveyance_cal);
    }

    var TotalIncome = basic_salary + house_rent + medical + conveyance + commission + bonus;
    var TotalTaxableIncome = basic_salary + house_rent_taxable + medical_taxable + conveyance_taxable + commission + bonus;


    var tax1, tax2, tax3, tax4, tax5, tax6;

    if (category == "General") {
        if (Math.round(TotalTaxableIncome) > 300000) {
            tax1 = 300000;
        } else {
            tax1 = Math.round(TotalTaxableIncome);
        }

        if (Math.round(TotalTaxableIncome) > 400000) {
            tax2 = 100000;
        } else {
            if (TotalTaxableIncome - 300000 < 0) {
                tax2 = Math.round(0);
            } else {
                tax2 = Math.round(TotalTaxableIncome - 300000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 700000) {
            tax3 = 300000;
        } else {
            if (TotalTaxableIncome - 400000 < 0) {
                tax3 = Math.round(0);
            } else {
                tax3 = Math.round(TotalTaxableIncome - 400000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 1100000) {
            tax4 = 400000;
        } else {
            if (TotalTaxableIncome - 700000 < 0) {
                tax4 = Math.round(0);
            } else {
                tax4 = Math.round(TotalTaxableIncome - 700000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 1600000) {
            tax5 = 500000;
        } else {
            if (TotalTaxableIncome - 1100000 < 0) {
                tax5 = Math.round(0);
            } else {
                tax5 = Math.round(TotalTaxableIncome - 1100000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 1600000) {
            tax6 = Math.round(TotalTaxableIncome - 1600000);
        } else {
            tax6 = Math.round(0);
        }
    } else if (category == "Female_or_Senior_Citizen") {
        if (Math.round(TotalTaxableIncome) > 350000) {
            tax1 = 350000;
        } else {
            tax1 = Math.round(TotalTaxableIncome);
        }
        if (Math.round(TotalTaxableIncome) > 450000) {
            tax2 = 100000;
        } else {
            if (TotalTaxableIncome - 350000 < 0) {
                tax2 = Math.round(0);
            } else {
                tax2 = Math.round(TotalTaxableIncome - 350000);
            }
        }
        if (Math.round(TotalTaxableIncome) > 750000) {
            tax3 = 300000;
        } else {
            if (TotalTaxableIncome - 450000 < 0) {
                tax3 = Math.round(0);
            } else {
                tax3 = Math.round(TotalTaxableIncome - 450000);
            }
        }
        if (Math.round(TotalTaxableIncome) > 1150000) {
            tax4 = 400000;
        } else {
            if (TotalTaxableIncome - 750000 < 0) {
                tax4 = Math.round(0);
            } else {
                tax4 = Math.round(TotalTaxableIncome - 750000);
            }
        }
        if (Math.round(TotalTaxableIncome) > 1650000) {
            tax5 = 500000;
        } else {
            if (TotalTaxableIncome - 1150000 < 0) {
                tax5 = Math.round(0);
            } else {
                tax5 = Math.round(TotalTaxableIncome - 1150000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 1650000) {
            tax6 = Math.round(TotalTaxableIncome - 1650000);
        } else {
            tax6 = Math.round(0);
        }
    } else if (category == "Disabled") {

        if (Math.round(TotalTaxableIncome) > 450000) {
            tax1 = 450000;
        } else {
            tax1 = Math.round(TotalTaxableIncome);
        }

        if (Math.round(TotalTaxableIncome) > 550000) {
            tax2 = 100000;
        } else {
            if (TotalTaxableIncome - 450000 < 0) {
                tax2 = Math.round(0);
            } else {
                tax2 = Math.round(TotalTaxableIncome - 450000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 850000) {
            tax3 = 300000;
        } else {
            if (TotalTaxableIncome - 550000 < 0) {
                tax3 = Math.round(0);
            } else {
                tax3 = Math.round(TotalTaxableIncome - 550000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 1250000) {
            tax4 = 400000;
        } else {
            if (TotalTaxableIncome - 850000 < 0) {
                tax4 = Math.round(0);
            } else {
                tax4 = Math.round(TotalTaxableIncome - 850000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 1750000) {
            tax5 = 500000;
        } else {
            if (TotalTaxableIncome - 1250000 < 0) {
                tax5 = Math.round(0);
            } else {
                tax5 = Math.round(TotalTaxableIncome - 1250000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 1750000) {
            tax6 = Math.round(TotalTaxableIncome - 1750000);
        } else {
            tax6 = Math.round(0);
        }
    } else {
        if (Math.round(TotalTaxableIncome) > 475000) {
            tax1 = 475000;
        } else {
            tax1 = Math.round(TotalTaxableIncome);
        }

        if (Math.round(TotalTaxableIncome) > 575000) {
            tax2 = 100000;
        } else {
            if (TotalTaxableIncome - 475000 < 0) {
                tax2 = Math.round(0);
            } else {
                tax2 = Math.round(TotalTaxableIncome - 475000);
            }
        }
        if (Math.round(TotalTaxableIncome) > 875000) {
            tax3 = 300000;
        } else {
            if (TotalTaxableIncome - 575000 < 0) {
                tax3 = Math.round(0);
            } else {
                tax3 = Math.round(TotalTaxableIncome - 575000);
            }
        }

        if (Math.round(TotalTaxableIncome) > 1275000) {
            tax4 = 400000;
        } else {
            if (TotalTaxableIncome - 875000 < 0) {
                tax4 = Math.round(0);
            } else {
                tax4 = Math.round(TotalTaxableIncome - 875000);
            }
        }
        if (Math.round(TotalTaxableIncome) > 1775000) {
            tax5 = 500000;
        } else {
            if (TotalTaxableIncome - 1275000 < 0) {
                tax5 = Math.round(0);
            } else {
                tax5 = Math.round(TotalTaxableIncome - 1275000);
            }
        }
        if (Math.round(TotalTaxableIncome) > 1775000) {
            tax6 = Math.round(TotalTaxableIncome - 1775000);
        } else {
            tax6 = Math.round(0);
        }
    }
    var Tax =   Math.round(tax1 * 0 + tax2 * 0.05 + tax3 * 0.1 + tax4 * 0.15 + tax5 * 0.2 + tax6 * 0.25);

    var AllowableInvestment =   (TotalTaxableIncome * 0.25);
    var Rebate, Investment, netTax;
    if (investment > AllowableInvestment) {
        Investment = AllowableInvestment;
    } else {
        Investment = investment;
    }

    if (TotalIncome > 15000000) {
        Rebate =   Math.round(Investment * 0.15);
    } else {
        Rebate = Math.round(Investment * 0.10);
    }

    if (zone == "Dhaka_or_Chattagram") {
        if (Tax - Rebate < 5001) {
            if (TotalTaxableIncome < 300000) {
                netTax = 0;
            } else {
                netTax = 5000;
            }
        } else {
            netTax = Math.round(Tax - Rebate);
        }
    } else if (zone == "Other") {
        if (Tax - Rebate < 4001) {
            if (TotalTaxableIncome < 300000) {
                netTax = 0;
            } else {
                netTax = 4000;
            }
        } else {
            netTax = Math.round(Tax - Rebate);
        }
    } else if (zone == "Rest") {
        if (Tax - Rebate < 3001) {
            if (TotalTaxableIncome < 300000) {
                netTax = 0;
            } else {
                netTax = 3000;
            }
        } else {
            netTax = Math.round(Tax - Rebate);
        }
    } else {
        netTax = Tax;
    }
    alert("Tax : "+Tax+" | allowable_investment : "+AllowableInvestment+" | netTax : "+netTax);
    let  json = {
                  "user_name": "nana",
                  "tax_payer_category": category, 
                  "tax_payer_zone": zone,
                  "basic_salary": basic_salary,
                  "house_rent": house_rent,
                  "medical": medical,
                  "conveyance": conveyance,
                  "commission":commission,
                  "bonus": bonus,
                  "investment": investment,
                  "tax": Tax,
                  "allowable_investment": AllowableInvestment,
                  "netTax": netTax
                };

    let data = JSON.stringify(json);
  	var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/spring_webmvc_war_exploded/User/api/tax_calculation/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);

}