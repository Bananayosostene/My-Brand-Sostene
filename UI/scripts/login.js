

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

   // Perform server-side authentication here
   if (authenticate(names, pass)) {
     // Redirect to the admin dashboard
     window.location.href = "./dashboard.html";
   } else {
     document.getElementById("invalid").innerHTML = "Invalid credentials";
   }
 }

 function authenticate(username, password) {
   // Replace this with actual server-side authentication logic
   // For demonstration, checking against hardcoded values
   return username === "Sostene" && password === "sostene123";
 }