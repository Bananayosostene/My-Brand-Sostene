

function getLoggedUser() {
  const usersString = localStorage.getItem("token");
  return usersString ? JSON.parse(usersString) : [];
}


if (!localStorage.getItem("token")) {
  alert("Login first");
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("token");
}


const user = getLoggedUser();

if (user.role == "user") {
  alert("You are normal user");
  window.location.href = "../index.html";
}








