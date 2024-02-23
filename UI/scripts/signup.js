function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000); // Adjust the range as needed
  return `${timestamp}${random}`;
}

const uniqueId = generateUniqueId();

// Function to get the contacts from local storage
function getUsers() {
  const usersString = localStorage.getItem("users");
  return usersString ? JSON.parse(usersString) : [];
}

// Function to add a new user to local storage
function addUsers(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users)); // Corrected variable name
}

// Function to delete a user from local storage
function deleteUser(userId) {
  const users = getUsers();
  const updatedUsers = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
}

// Email validation function
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function resetSignUp() {
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("cpass").value = "";
}

function signup() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("cpass").value;
  var male = document.getElementById("male").checked ? "M" : "";
  var female = document.getElementById("female").checked ? "F" : "";
  var role = "user";

  if (email.trim() === "") {
    document.getElementById("sms-e").innerHTML = "Please enter your email";
    return;
    }

  if (!validateEmail(email)) {
    document.getElementById("sms-e").innerHTML = "Invalid email address";
    return;
    }
  else {
      document.getElementById("sms-e").innerHTML = "";
    }

  if (name.length < 1) {
    document.getElementById("sms-n").innerHTML = "Username is required";
    return;
    }
  else {
      document.getElementById("sms-n").innerHTML = "";
    }

  if (pass.length < 4) {
    document.getElementById("sms-p").innerHTML =
      "Please enter Password and must be at least 4 characters";
    return;
  }

  if (!/[A-Z]/.test(pass)) {
    document.getElementById("sms-p").innerHTML =
      "Password must contain at least one capital letter";
    return;
  }

  if (cpass === "") {
    document.getElementById("sms-p").innerHTML = "Please repeat password";
    }
  else {
      document.getElementById("sms-p").innerHTML = "";
    }

  if (pass !== cpass) {
    document.getElementById("sms-conf-p").innerHTML = "Passwords do not match";
    return;
    }
  else {
      document.getElementById("sms-conf-p").innerHTML ="";
    }

  if (!male && !female) {
    document.getElementById("sms-gender").innerHTML ="Please select your gender";
    return;
    }
  else {
      document.getElementById("sms-gender").innerHTML = "";
    }

  addUsers({
    id: uniqueId,
    email: email,
    name: name,
    pass: pass,
    male: male,
    gender: male || female,
    role: role,
  });

  document.getElementById("reg-success").textContent = "Signup successful!";

  setTimeout(function () {
    window.location.href = "../pages/login.html";
  }, 2000);

  resetSignUp();
}
