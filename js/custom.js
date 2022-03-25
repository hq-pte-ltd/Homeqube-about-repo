function validation(){


    var password = document.getElementById("PasswordInput").value;
    const errormsg = document.getElementById("text-error");
   
        if(password=="345"){

            return window.location.href="index.html";
        }else{
            errormsg.innerHTML = "Incorrect Password!";
            return false;
        }
    }
    