var inputs = document.getElementsByTagName("input");
//var inputs = document.querySelectorAll("input[type='password']");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].required = function() {
    return false;
  };
  if (inputs[i].type == "password") {
    inputs[i].onpaste = function() {
      return false;
    };
    inputs[i].maxLength = 25;
  }
}

var Namestr = "Mèo Trắng";
var i = 9;
var rs;

setInterval(function (){
  if (i > 8){
    document.getElementById('Name').innerHTML = " ";
    i=0;
  }
  document.getElementById('Name').innerHTML += Namestr[i];
  i++;
}, 300)

function reset(){
  rs = setInterval(function () {
      document.getElementById("tb").innerHTML = "";
  }, 5000)
}