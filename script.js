


function isAmount(val) {
  return (isNaN(val) || (parseInt(val) <= 0) || val === undefined || val == null || val.length <= 0) ? false : true;
}


function updateRate() {
  var rateval = document.getElementById("rate").value;
  rateval = parseFloat(rateval).toFixed(2) + "%";
  document.getElementById("rate_val").innerText = rateval;


}



function compute() {
  if (isAmount(principal.value) == true) {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById('result');
    var interest = principal.value * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    tagop = "<span class='hlyel'>"
    tagclo = "</span>"

    document.getElementById("result").innerHTML = "<br>" + " If you deposit " + tagop + +principal.value + tagclo + ",\<br\>at an interest rate of " + tagop + rate + "%" + tagclo + "\<br\>You will receive an amount of " + tagop + interest + tagclo + ",\<br\>in the year " + tagop + year + tagclo + "\<br\>"
  }
  else {
    alert("Enter a positive number")
  }
}

