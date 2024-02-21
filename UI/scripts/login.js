function getUsers() {
  const usersString = localStorage.getItem("users");
  return usersString ? JSON.parse(usersString) : [];
}

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
  }




  const users = getUsers();
  let isRegistered = false;

  isRegistered = users.find((user) => {
    return user.pass == pass && user.name == names;
  });

  if (isRegistered) {
    // alert("Login success");
    localStorage.setItem("loggedUser", JSON.stringify(isRegistered));
    // console.log(isRegistered);
    window.location.href = "dashboard.html";
    
  } else {
    alert("User not found, signup first");
  }
}
