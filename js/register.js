var str = "Mật khẩu và mật khẩu xác nhận phải giống nhau";

function tbKhacPsw(){
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
    },5)
}

function Sub(){
    var psw =  document.getElementById('psw').value;
    var psw_xn =  document.getElementById('psw_xn').value;
    if (psw != '' && psw_xn != '' && psw != psw_xn){
        tbKhacPsw();
        return;
    }
}

