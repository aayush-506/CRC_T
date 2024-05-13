function otp() {
  ans = Math.floor(Math.random() * (99999 - 10000)) + 10000;
  document.getElementById("p1").innerHTML = ans;
}

//rock paper scissor
function rps(userinput) {
  let compInput = Math.floor(Math.random() * 3) + 1;
  if (compInput == userinput) {
    document.getElementById("p2").innerHTML = "Tie";
  } else if (
    (userinput == 1 && compInput == 3) ||
    (userinput == 2 && compInput == 1) ||
    (userinput == 3 && compInput == 2)
  ) {
    document.getElementById("p2").innerHTML = "User Win";
  } else document.getElementById("p2").innerHTML = "computer Win";
}

// dice throwing
function dice() {
  let inp = Math.floor(Math.random() * 6) + 1;
  document.getElementById("p3").innerHTML = inp;
}

// ATM pin generator

function pin() {
  let pin = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  document.getElementById("p4").innerHTML = pin;
}

//Password Generator
function pass() {
  const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const lower = "qwertyuiopasdfghjklzxcvbnm";
  const num = "1234567890";
  const special = "!@#$%^&*";

  password = "";

  password += upper[Math.floor(Math.random()) * upper.length];
  password += lower[Math.floor(Math.random()) * lower.length];
  password += num[Math.floor(Math.random()) * num.length];
  password += special[Math.floor(Math.random()) * special.length];

  for (i = 4; i < 12; i++) {
    const allChars = upper + lower + num + special;
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  document.getElementById("p6").innerHTML=password;
}


//secret code

function secret() {
  const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const lower = "qwertyuiopasdfghjklzxcvbnm";
  const num = "1234567890";
  const special = "!@#$%^&*";
 let numb=Number(document.getElementById("input").value)

  sc = "";

  sc += upper[Math.floor(Math.random()) * upper.length];
  sc += lower[Math.floor(Math.random()) * lower.length];
  sc += num[Math.floor(Math.random()) * num.length];
  sc += special[Math.floor(Math.random()) * special.length];

  for (i = 4; i < numb; i++) {
    const allChars = upper + lower + num + special;
    sc += allChars[Math.floor(Math.random() * allChars.length)];
  }
  document.getElementById("p5").innerHTML=sc;
}
