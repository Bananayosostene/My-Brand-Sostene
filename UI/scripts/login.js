function getUsers() {
  const usersString = localStorage.getItem("users");
  return usersString ? JSON.parse(usersString) : [];
}

async function login() {
  let email = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;

  if (email.trim() === "") {
    document.getElementById("nam").innerHTML = "Enter UserName";
    return false;
  }

  if (pass.trim() === "") {
    document.getElementById("secret").innerHTML = "Enter Your Password";
    return false;
  }

console.log(email, pass);

   try {
      const apiUrl = "https://brand-backend-v2xk.onrender.com/brand/user/login";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          useremail: email,
          password: pass,
        }),
      });
     
     
     const userData = await response.json();
     console.log("token: ", userData);
     localStorage.setItem("userId", userData.data._id);
     localStorage.setItem("role", userData.data.role);
     localStorage.setItem("token", userData.tokenisthe);
     
     if (userData.data.role == "admin") {
       window.location.href = "dashboard.html";
     } else {
      console.log("you are user");
      window.location.href = "../index.html";
     }
        
      
    } catch (error) {
      console.error("Error during signup:", error);
    }
}
