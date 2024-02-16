function sendMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "") {
    document.getElementById("name-p").innerHTML = "Please enter your name";
    return false;
  } else {
    document.getElementById("name-p").innerHTML = " ";
  }

  if (email.trim() === "") {
    document.getElementById("email-p").innerHTML = "Please enter your Email";
    return false;
  } else {
    document.getElementById("email-p").innerHTML = " ";
  }

  if (!validateEmail(email)) {
    document.getElementById("email-val-p").innerHTML = "Invalid email format";
    return false;
  } else {
    document.getElementById("email-val-p").innerHTML = " ";
  }

  if (message.trim() === "") {
    document.getElementById("message-p").innerHTML = "Write comment";
    return false;
  } else {
    document.getElementById("message-p").innerHTML = " ";
  }

  var currentDate = new Date();
  var formattedDate = currentDate.toISOString().split("T")[0]; // Get date in "YYYY-MM-DD" format
  var formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit",}); // Get time in "HH:mm AM/PM" format

  // Save to local storage
  localStorage.setItem("contactData", JSON.stringify({ name, email, message, formattedDate, formattedTime }));

  // Other logic for sending the message (e.g., to the server)
  // ...

  // Optional: Display a confirmation message
  document.getElementById("sms-sent").textContent = "Message sent!";
  resetForm();
}

function validateEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
