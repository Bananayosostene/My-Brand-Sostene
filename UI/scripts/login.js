

function login() {
  let names = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;

  if (names.trim() === "") {
    document.getElementById("nam").innerHTML = "Enter UserName";
    return false;
  }
  if (pass.trim() === "") {
    document.getElementById("secret").innerHTML = "Enter Your Password";
    return false;
  } else {
      document.getElementById("success").innerHTML = "Welcome!";
    return true;
  }
}
