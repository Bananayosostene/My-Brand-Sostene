if (!localStorage.getItem("loggedUser")) {
  alert("Login first");
  window.location.href = "login.html"
}

function logout() {
  localStorage.removeItem("loggedUser");
}
