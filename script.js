function compute()
{

//calculate year
var sel = document.getElementById('yearsSel');
var opt = sel.options[sel.selectedIndex]; 
var optValue = opt.value;
var d = new Date();
var n = d.getFullYear()	;
var intheyear = Number(n) + Number(optValue);	
 

//calculate amount 
var principal = document.getElementById('principal').value;

 if (principal < 1) {
     alert("Enter a positive number");
	 document.getElementById('principal').innerHTML = "NA";
  } else {	  
var rate = document.getElementById('rate').value;
var ammount = Number(principal) * Number(optValue) * Number(rate) / 100;	
//var ammount = Number(interestrate1) + Number(principal);


//result

document.getElementById('deposit').innerHTML= 'If you deposit:  ' + principal;
document.getElementById('interestrate').innerHTML = 'At an interest rate of: ' +rate;
document.getElementById('recieveammount').innerHTML = 'You will receive an amount of: ' +ammount;
document.getElementById('targetyear').innerHTML = 'In the year: ' +intheyear;
  }
};



function show_value(val){
	document.getElementById('rate2').innerHTML=val;	
};



window.onload = function dropdown() {
            var ddl = document.getElementById('years').getElementsByTagName('select')[0];
            for (var i = 1; i <= 10; i++) {
                var theOption = new Option;
                theOption.text = i;
                theOption.value = i;
                ddl.options[i] = theOption;
				
            }

};



