function getUsers() {
  const usersString = localStorage.getItem("users");
  return usersString ? JSON.parse(usersString) : [];
}

async function login() {
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

console.log(names, pass);

   try {
      const apiUrl = "https://brand-backend-v2xk.onrender.com/brand/user/login";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          useremail: names,
          password: pass,
        }),
      });
     
     
     const userData = await response.json();
     console.log("token: ", userData);
     localStorage.setItem("token", userData.tokenisthe);
     

     if (userData.data.role == "admin") {
          window.location.href = "dashboard.html";
     }
     else {
       
     }
     

      
      // document.getElementById("reg-success").textContent =
        "Signup successful! Redirecting to login page...";
        
      
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle the error if needed
    }

  document.getElementById("reg-success").textContent = "Signup successful!";
  
}
