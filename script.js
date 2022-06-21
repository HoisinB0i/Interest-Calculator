function compute() {
  var principal = document.getElementById("principal").value;
  //Alert the user if no number/positive number has been entered
  if (principal == "" || principal <= 0) {
    alert("Enter a positive number.");
    document.getElementById("prinicipal").focus();
    return;
  }

  //Grab the value from the users for calculator
  p = document.getElementById("principal").value;
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  
  //Compute the interest
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  //Highight the display numbers after computing
  var resultDisplay = document.getElementById("result");
  resultDisplay.innerHTML =
    "If you deposit " +
    "<span class='highlight'>" +
    principal +
    "</span>" +
    ", <br> at an interest rate of " +
    "<span class='highlight'>" +
    rate +
    "</span>%." +
    "<br> You will receive an amount of " +
    "<span class='highlight'>" +
    interest +
    "</span>" +
    ", <br> in the year " +
    "<span class='highlight'>" +
    year +
    "</span>";
}

//Change the rate when sliding the bar 
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
