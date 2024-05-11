function  otp(){
    ans=Math.floor(Math.random()*(99999-10000))+10000;
    document.getElementById("p1").innerHTML=ans
}

function rps(userinput){
    let compInput = Math.floor(Math.random()*(3))+1;
    if(compInput==userinput){
      document.getElementById("p2").innerHTML = "Tie"
    }
    else if((userinput==1 && compInput==3) || (userinput==2 && compInput==1)|| (userinput==3 && compInput==2)){
      document.getElementById("p2").innerHTML = "User Win"
    }
    else
    document.getElementById("p2").innerHTML = "computer Win"
  }

function dice(){
    let inp=Math.floor(Math.random()*(6))+1
    document.getElementById("p3").innerHTML=inp;
}