var str = "Ngu thì chết @ Khóc lóc cái l*n";

reset();

function QuenPass(){
    clearInterval(rs);
    document.getElementById("tb").innerHTML = "";
    var i = 0;
    var instr = setInterval(function () {
        if (str[i] != "@")
        document.getElementById("tb").innerHTML += str[i];
        else
        document.getElementById("tb").innerHTML += "<br>";
        if (i < str.length - 1)
        i++;
        else{
            clearInterval(instr);
            reset();
        }
    },50)
}

psw.onmouseover = function(){
    document.getElementById('psw').type = "text";
};

psw.onmouseout = function(){
    document.getElementById('psw').type = "password";
};