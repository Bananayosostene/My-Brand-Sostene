function validation() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
    let textarea = document.getElementById("textarea").value;
    
  if (name.trim() === "") {
    document.getElementById("name-p").innerHTML = "Please enter your name";
    return false;
  }

  if (email.trim() === "") {
    document.getElementById("email-p").innerHTML = "Please enter your Email";
    return false;
    }
  else {
      document.getElementById("email-p").innerHTML = " ";
    }

  if (!validateEmail(email)) {
    document.getElementById("email-val-p").innerHTML = "Invalid email format";
    return false;
  }

  if (textarea.trim() === "") {
    document.getElementById("textarea-p").innerHTML = "Write comment";
    return false;
  }

  document.getElementById("success").innerHTML = "Message sent successfully!";
  return true;
}

 
function validateEmail(email) {
  let emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
