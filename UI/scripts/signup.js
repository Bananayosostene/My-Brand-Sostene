function signup() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    document.getElementById("sms-e").innerHTML = "";
    document.getElementById("sms-n").innerHTML = "";
    document.getElementById("sms-p").innerHTML = "";
    document.getElementById("sms-conf-p").innerHTML = "";
    document.getElementById("sms-gender").innerHTML ="";
    

    if (email.trim() === "") {
      document.getElementById("sms-e").innerHTML = "Please enter your email";
      return;
    }
    
    if (!validateEmail(email)) {
      document.getElementById("sms-e").innerHTML = "Invalid email address";
      return;
    }

    if (name.length < 1) {
        document.getElementById("sms-n").innerHTML = "Username is required";
        return;
    }
    
    if (pass.length < 4) {
        document.getElementById("sms-p").innerHTML = "Please enter Password and must be at least 4 characters";
        return;
    }
    
    if (!/[A-Z]/.test(pass)) {
        document.getElementById("sms-p").innerHTML = "Password must contain at least one capital letter";
        return;
    }
    
    if (cpass === "") {
      document.getElementById("sms-p").innerHTML = "Please repeat password";
    }

    if (pass !== cpass) {
        document.getElementById("sms-conf-p").innerHTML = "Passwords do not match";
        return;
    }

    if (!male && !female) {
        document.getElementById("sms-gender").innerHTML = "Please select your gender";
        return;
    }




    // If all validations pass, you can proceed with form submission or further actions
    // For example, you can submit the form using AJAX or redirect to another page
    // For simplicity, we'll just display a success message here
    localStorage.setItem("Users", JSON.stringify({ email, name, pass,male, female }));

    document.getElementById("reg-success").textContent = "Signup successful!";
      

    setTimeout(function () {
         window.location.href = "../pages/login.html";
       }, 2000);


    resetSignUp();
}

// Email validation function
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


function resetSignUp() {
    document.getElementById("email").value ="";
    document.getElementById("name").value ="";
    document.getElementById("pass").value ="";
    document.getElementById("cpass").value ="";
}
