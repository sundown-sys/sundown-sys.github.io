//User Informantion Biatch

var userInfo = [
  {
    username: "Sami",
    password: "kronos",
  },
  {
    username: "Chebes",
    password: "bercha",
  },
  {
    username: "Million",
    password: "urap",
  },
  {
    username: "Sundowner",
    password: "mira",
  },
];

function sdr() {
  window.location.href = "https://thesundowner.github.io/"
}

//Sign in code ( uses the object array above )

function signIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (i = 0; i < userInfo.length; i++) {
    if (username == userInfo[i].username && password == userInfo[i].password) {
      alert("welcome," + " "  + username);
      setTimeout(sdr , 1000);
    }
    return;
  }
  alert("incorrect username or password");
}



//made by the sundowner. 1.03.23.
//biatch
// and find a way to store the user info!
