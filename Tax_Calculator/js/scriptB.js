function Button() {
  document.getElementById("Calculate-button").innerHTML = "Calculate";
  document.getElementById("eligible_investment1").innerHTML = "Waiting for input";
}

function taxableIncomeCalculation() {
  //var aone = document.getElementById("basic_salary").valueAsNumber;
  //document.getElementById("basic_salary_taxable").innerHTML = Math.round(aone);

  var aone = document.getElementById("basic_salary").valueAsNumber;
  //var atwo = 30000;
  //var athree = 30000;
  // var afour = Math.min(etwo, ethree);
  //var afive = aone - afour;
  document.getElementById("basic_salary_show").innerHTML = aone;
  document.getElementById("basic_salary_exemption").innerHTML = 0;
  document.getElementById("basic_salary_taxable").innerHTML = Math.round(aone);

  var bone = document.getElementById("house_rent").valueAsNumber;
  var btwo = aone * 0.5;
  var bthree = 25000 * 12;
  var bfour = Math.min(btwo, bthree);
  //var bfive = bone - bfour;
  if (bone - bfour < 0) {
    var bfive = Math.round(0);
  } else {
    var bfive = Math.round(bone - bfour);
  }
  document.getElementById("houserent_show").innerHTML = bone;
  document.getElementById("houserent_exemption").innerHTML = Math.round(bfour);
  document.getElementById("houserent_taxable").innerHTML = Math.round(bfive);

  var cone = document.getElementById("medical").valueAsNumber;
  var ctwo = aone * 0.1;
  var cthree = 120000;
  var cfour = Math.min(ctwo, cthree);
  //var cfive = cone - cfour;
  if (cone - cfour < 0) {
    var cfive = Math.round(0);
  } else {
    var cfive = Math.round(cone - cfour);
  }
  document.getElementById("medical_show").innerHTML = cone;
  document.getElementById("medical_exemption").innerHTML = Math.round(cfour);
  document.getElementById("medical_taxable").innerHTML = Math.round(cfive);

  var done = document.getElementById("conveyance").valueAsNumber;
  var dtwo = 30000;
  var dthree = 30000;
  var dfour = Math.min(dtwo, dthree);
  //var dfive = done - dfour;
  if (done - dfour < 0) {
    var dfive = Math.round(0);
  } else {
    var dfive = Math.round(done - dfour);
  }
  document.getElementById("conveyance_show").innerHTML = done;
  document.getElementById("conveyance_exemption").innerHTML = Math.round(dfour);
  document.getElementById("conveyance_taxable").innerHTML = Math.round(dfive);

  var eone = document.getElementById("commision").valueAsNumber;
  //var etwo = 30000;
  //var ethree = 30000;
  // var efour = Math.min(etwo, ethree);
  //var efive = eone - efour;
  document.getElementById("commision_show").innerHTML = eone;
  document.getElementById("commision_exemption").innerHTML = 0;
  document.getElementById("commision_taxable").innerHTML = Math.round(eone);

  var fone = document.getElementById("bonus").valueAsNumber;
  //var etwo = 30000;
  //var ethree = 30000;
  // var efour = Math.min(etwo, ethree);
  //var efive = eone - efour;
  document.getElementById("bonus_show").innerHTML = fone;
  document.getElementById("bonus_exemption").innerHTML = 0;
  document.getElementById("bonus_taxable").innerHTML = Math.round(fone);

  var TotalIncome = aone + bone + cone + done + eone + fone;
  document.getElementById("total_income").innerHTML = Math.round(TotalIncome);
  document.getElementById("total_income2").innerHTML = Math.round(TotalIncome);

  var TotalTaxableIncome = Math.round(
    aone + bfive + cfive + dfive + eone + fone
  );
  document.getElementById("total_taxable").innerHTML = Math.round(
    TotalTaxableIncome
  );



   //Tax calculation for different Category of people with dropdown
   var ele = document.getElementById("category_select");
   var selectedValue = ele.options[ele.selectedIndex].value;
 
   if (selectedValue == "1") {
       //Slab 1
 if (Math.round(TotalTaxableIncome) > 300000) {
   var tax1 = 300000;
 } else {
   var tax1 = Math.round(TotalTaxableIncome);
 }
 document.getElementById("1st_slab").innerHTML = "Upto 300,000 Taka";
 document.getElementById("slab_1").innerHTML = tax1;
 document.getElementById("slab_1_tax").innerHTML = Math.round(tax1 * 0);

//Slab 2
 if (Math.round(TotalTaxableIncome) > 400000) {
   var tax2 = 100000;
 } else {
   if (TotalTaxableIncome - 300000 < 0) {
     var tax2 = Math.round(0);
   } else {
     var tax2 = Math.round(TotalTaxableIncome - 300000);
   }
 }
 document.getElementById("2nd_slab").innerHTML = "On the Next 100,000 Taka";
 document.getElementById("slab_2").innerHTML = tax2;
 document.getElementById("slab_2_tax").innerHTML = Math.round(tax2 * 0.05);

 //Slab 3
 if (Math.round(TotalTaxableIncome) > 700000) {
   var tax3 = 300000;
 } else {
   if (TotalTaxableIncome - 400000 < 0) {
     var tax3 = Math.round(0);
   } else {
     var tax3 = Math.round(TotalTaxableIncome - 400000);
   }
 }
 document.getElementById("3rd_slab").innerHTML = "On the Next 300,000 Taka";
 document.getElementById("slab_3").innerHTML = tax3;
 document.getElementById("slab_3_tax").innerHTML = Math.round(tax3 * 0.1);

//Slab 4
 if (Math.round(TotalTaxableIncome) > 1100000) {
   var tax4 = 400000;
 } else {
   if (TotalTaxableIncome - 700000 < 0) {
     var tax4 = Math.round(0);
   } else {
     var tax4 = Math.round(TotalTaxableIncome - 700000);
   }
 }
 document.getElementById("4th_slab").innerHTML = "On the Next 400,000 Taka";
 document.getElementById("slab_4").innerHTML = tax4;
 document.getElementById("slab_4_tax").innerHTML = Math.round(tax4 * 0.15);

//Slab 5
 if (Math.round(TotalTaxableIncome) > 1600000) {
   var tax5 = 500000;
 } else {
   if (TotalTaxableIncome - 1100000 < 0) {
     var tax5 = Math.round(0);
   } else {
     var tax5 = Math.round(TotalTaxableIncome - 1100000);
   }
 }
 document.getElementById("5th_slab").innerHTML = "On the Next 500,000 Taka";
 document.getElementById("slab_5").innerHTML = tax5;
 document.getElementById("slab_5_tax").innerHTML = Math.round(tax5 * 0.2);

//Slab 6
 if (Math.round(TotalTaxableIncome) > 1600000) {
   var tax6 = Math.round(TotalTaxableIncome - 1600000);
 } else {
   var tax6 = Math.round(0);
 }
 document.getElementById("6th_slab").innerHTML = "Above";
 document.getElementById("slab_6").innerHTML = tax6;
 document.getElementById("slab_6_tax").innerHTML = Math.round(tax6 * 0.25);
   } else if (selectedValue == "2") {

//Slab 1
 if (Math.round(TotalTaxableIncome) > 350000) {
   var tax1 = 350000;
 } else {
   var tax1 = Math.round(TotalTaxableIncome);
 }
 document.getElementById("1st_slab").innerHTML = "Upto 350,000 Taka";
 document.getElementById("slab_1").innerHTML = tax1;
 document.getElementById("slab_1_tax").innerHTML = Math.round(tax1 * 0);

//Slab 2
 if (Math.round(TotalTaxableIncome) > 450000) {
   var tax2 = 100000;
 } else {
   if (TotalTaxableIncome - 350000 < 0) {
     var tax2 = Math.round(0);
   } else {
     var tax2 = Math.round(TotalTaxableIncome - 350000);
   }
 }
 document.getElementById("2nd_slab").innerHTML = "On the Next 100,000 Taka";
 document.getElementById("slab_2").innerHTML = tax2;
 document.getElementById("slab_2_tax").innerHTML = Math.round(tax2 * 0.05);

 //Slab 3
 if (Math.round(TotalTaxableIncome) > 750000) {
   var tax3 = 300000;
 } else {
   if (TotalTaxableIncome - 450000 < 0) {
     var tax3 = Math.round(0);
   } else {
     var tax3 = Math.round(TotalTaxableIncome - 450000);
   }
 }
 document.getElementById("3rd_slab").innerHTML = "On the Next 300,000 Taka";
 document.getElementById("slab_3").innerHTML = tax3;
 document.getElementById("slab_3_tax").innerHTML = Math.round(tax3 * 0.1);

//Slab 4
 if (Math.round(TotalTaxableIncome) > 1150000) {
   var tax4 = 400000;
 } else {
   if (TotalTaxableIncome - 750000 < 0) {
     var tax4 = Math.round(0);
   } else {
     var tax4 = Math.round(TotalTaxableIncome - 750000);
   }
 }
 document.getElementById("4th_slab").innerHTML = "On the Next 400,000 Taka";
 document.getElementById("slab_4").innerHTML = tax4;
 document.getElementById("slab_4_tax").innerHTML = Math.round(tax4 * 0.15);

//Slab 5
 if (Math.round(TotalTaxableIncome) > 1650000) {
   var tax5 = 500000;
 } else {
   if (TotalTaxableIncome - 1150000 < 0) {
     var tax5 = Math.round(0);
   } else {
     var tax5 = Math.round(TotalTaxableIncome - 1150000);
   }
 }
 document.getElementById("5th_slab").innerHTML = "On the Next 500,000 Taka";
 document.getElementById("slab_5").innerHTML = tax5;
 document.getElementById("slab_5_tax").innerHTML = Math.round(tax5 * 0.2);

//Slab 6
 if (Math.round(TotalTaxableIncome) > 1650000) {
   var tax6 = Math.round(TotalTaxableIncome - 1650000);
 } else {
   var tax6 = Math.round(0);
 }
 document.getElementById("6th_slab").innerHTML = "Above";
 document.getElementById("slab_6").innerHTML = tax6;
 document.getElementById("slab_6_tax").innerHTML = Math.round(tax6 * 0.25);
   } else if (selectedValue == "3") {
       //Slab 1
 if (Math.round(TotalTaxableIncome) > 450000) {
   var tax1 = 450000;
 } else {
   var tax1 = Math.round(TotalTaxableIncome);
 }
 document.getElementById("1st_slab").innerHTML = "Upto 450,000 Taka";
 document.getElementById("slab_1").innerHTML = tax1;
 document.getElementById("slab_1_tax").innerHTML = Math.round(tax1 * 0);

//Slab 2
 if (Math.round(TotalTaxableIncome) > 550000) {
   var tax2 = 100000;
 } else {
   if (TotalTaxableIncome - 450000 < 0) {
     var tax2 = Math.round(0);
   } else {
     var tax2 = Math.round(TotalTaxableIncome - 450000);
   }
 }
 document.getElementById("2nd_slab").innerHTML = "On the Next 100,000 Taka";
 document.getElementById("slab_2").innerHTML = tax2;
 document.getElementById("slab_2_tax").innerHTML = Math.round(tax2 * 0.05);

 //Slab 3
 if (Math.round(TotalTaxableIncome) > 850000) {
   var tax3 = 300000;
 } else {
   if (TotalTaxableIncome - 550000 < 0) {
     var tax3 = Math.round(0);
   } else {
     var tax3 = Math.round(TotalTaxableIncome - 550000);
   }
 }
 document.getElementById("3rd_slab").innerHTML = "On the Next 300,000 Taka";
 document.getElementById("slab_3").innerHTML = tax3;
 document.getElementById("slab_3_tax").innerHTML = Math.round(tax3 * 0.1);

//Slab 4
 if (Math.round(TotalTaxableIncome) > 1250000) {
   var tax4 = 400000;
 } else {
   if (TotalTaxableIncome - 850000 < 0) {
     var tax4 = Math.round(0);
   } else {
     var tax4 = Math.round(TotalTaxableIncome - 850000);
   }
 }
 document.getElementById("4th_slab").innerHTML = "On the Next 400,000 Taka";
 document.getElementById("slab_4").innerHTML = tax4;
 document.getElementById("slab_4_tax").innerHTML = Math.round(tax4 * 0.15);

//Slab 5
 if (Math.round(TotalTaxableIncome) > 1750000) {
   var tax5 = 500000;
 } else {
   if (TotalTaxableIncome - 1250000 < 0) {
     var tax5 = Math.round(0);
   } else {
     var tax5 = Math.round(TotalTaxableIncome - 1250000);
   }
 }
 document.getElementById("5th_slab").innerHTML = "On the Next 500,000 Taka";
 document.getElementById("slab_5").innerHTML = tax5;
 document.getElementById("slab_5_tax").innerHTML = Math.round(tax5 * 0.2);

//Slab 6
 if (Math.round(TotalTaxableIncome) > 1750000) {
   var tax6 = Math.round(TotalTaxableIncome - 1750000);
 } else {
   var tax6 = Math.round(0);
 }
 document.getElementById("6th_slab").innerHTML = "Above";
 document.getElementById("slab_6").innerHTML = tax6;
 document.getElementById("slab_6_tax").innerHTML = Math.round(tax6 * 0.25);
   } else {
       //Slab 1
 if (Math.round(TotalTaxableIncome) > 475000) {
   var tax1 = 475000;
 } else {
   var tax1 = Math.round(TotalTaxableIncome);
 }
 document.getElementById("1st_slab").innerHTML = "Upto 475,000 Taka";
 document.getElementById("slab_1").innerHTML = tax1;
 document.getElementById("slab_1_tax").innerHTML = Math.round(tax1 * 0);

//Slab 2
 if (Math.round(TotalTaxableIncome) > 575000) {
   var tax2 = 100000;
 } else {
   if (TotalTaxableIncome - 475000 < 0) {
     var tax2 = Math.round(0);
   } else {
     var tax2 = Math.round(TotalTaxableIncome - 475000);
   }
 }
 document.getElementById("2nd_slab").innerHTML = "On the Next 100,000 Taka";
 document.getElementById("slab_2").innerHTML = tax2;
 document.getElementById("slab_2_tax").innerHTML = Math.round(tax2 * 0.05);

 //Slab 3
 if (Math.round(TotalTaxableIncome) > 875000) {
   var tax3 = 300000;
 } else {
   if (TotalTaxableIncome - 575000 < 0) {
     var tax3 = Math.round(0);
   } else {
     var tax3 = Math.round(TotalTaxableIncome - 575000);
   }
 }
 document.getElementById("3rd_slab").innerHTML = "On the Next 300,000 Taka";
 document.getElementById("slab_3").innerHTML = tax3;
 document.getElementById("slab_3_tax").innerHTML = Math.round(tax3 * 0.1);

//Slab 4
 if (Math.round(TotalTaxableIncome) > 1275000) {
   var tax4 = 400000;
 } else {
   if (TotalTaxableIncome - 875000 < 0) {
     var tax4 = Math.round(0);
   } else {
     var tax4 = Math.round(TotalTaxableIncome - 875000);
   }
 }
 document.getElementById("4th_slab").innerHTML = "On the Next 400,000 Taka";
 document.getElementById("slab_4").innerHTML = tax4;
 document.getElementById("slab_4_tax").innerHTML = Math.round(tax4 * 0.15);

//Slab 5
 if (Math.round(TotalTaxableIncome) > 1775000) {
   var tax5 = 500000;
 } else {
   if (TotalTaxableIncome - 1275000 < 0) {
     var tax5 = Math.round(0);
   } else {
     var tax5 = Math.round(TotalTaxableIncome - 1275000);
   }
 }
 document.getElementById("5th_slab").innerHTML = "On the Next 500,000 Taka";
 document.getElementById("slab_5").innerHTML = tax5;
 document.getElementById("slab_5_tax").innerHTML = Math.round(tax5 * 0.2);

//Slab 6
 if (Math.round(TotalTaxableIncome) > 1775000) {
   var tax6 = Math.round(TotalTaxableIncome - 1775000);
 } else {
   var tax6 = Math.round(0);
 }
 document.getElementById("6th_slab").innerHTML = "Above";
 document.getElementById("slab_6").innerHTML = tax6;
 document.getElementById("slab_6_tax").innerHTML = Math.round(tax6 * 0.25);
   }
   var Tax = Math.round(tax1 * 0 + tax2 * 0.05 + tax3 * 0.1 + tax4 * 0.15 + tax5 * 0.2 + tax6 * 0.25);
   document.getElementById("Gross_Tax_1").innerHTML = Math.round(Tax);
   document.getElementById("Gross_Tax_2").innerHTML = Math.round(Tax);



   //Investment and Rebate Calculation
  var AllowableInvestment = TotalTaxableIncome * 0.25;
  document.getElementById("eligible_investment1").innerHTML = Math.round(AllowableInvestment);
  document.getElementById("eligible_investment2").innerHTML = Math.round(AllowableInvestment);

  var Investment = document.getElementById("investment").valueAsNumber;
  if (Investment > AllowableInvestment) {
    Investment = AllowableInvestment;
  }
  document.getElementById("investment_show").innerHTML = Investment;
  
  if (TotalIncome > 15000000) {
    var Rebate = Math.round(Investment * 0.15);
  } else {
    var Rebate = Math.round(Investment * 0.15);
  }

  document.getElementById("rebate").innerHTML = Rebate;
  document.getElementById("tax_after_rebate").innerHTML = Math.round(Tax - Rebate);
  

    //Net Tax Tax calculation with Minimum for different zone with dropdown
    var ele = document.getElementById("zone_select");
    var selectedValue = ele.options[ele.selectedIndex].value;
  
    if (selectedValue == "1") {
      if (Tax - Rebate < 5001) {
        if (TotalTaxableIncome < 300000) {
          document.getElementById("net_tax").innerHTML = 0;
        } else {
          document.getElementById("net_tax").innerHTML = 5000;
        }
      } else {
        document.getElementById("net_tax").innerHTML = Math.round(Tax - Rebate);
      }
    } else if (selectedValue == "2") {
      if (Tax - Rebate < 4001) {
        if (TotalTaxableIncome < 300000) {
          document.getElementById("net_tax").innerHTML = 0;
        } else {
          document.getElementById("net_tax").innerHTML = 4000;
        }
      } else {
        document.getElementById("net_tax").innerHTML = Math.round(Tax - Rebate);
      }
    } else if (selectedValue == "3") {
      if (Tax - Rebate < 3001) {
        if (TotalTaxableIncome < 300000) {
          document.getElementById("net_tax").innerHTML = 0;
        } else {
          document.getElementById("net_tax").innerHTML = 3000;
        }
      } else {
        document.getElementById("net_tax").innerHTML = Math.round(Tax - Rebate);
      }
    }
    document.getElementById("Calculate-button").innerHTML = "Re-calculate";
}