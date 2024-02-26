

function getLoggedUser() {
  const usersString = localStorage.getItem("loggedUser");
  return usersString ? JSON.parse(usersString) : [];
}


if (!localStorage.getItem("loggedUser")) {
  alert("Login first");
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("loggedUser");
}


const user = getLoggedUser();

if (user.role == "user") {
  alert("You are normal user");
  window.location.href = "../index.html";
}








