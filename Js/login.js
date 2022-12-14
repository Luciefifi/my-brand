const registeredUsers = JSON.parse(localStorage.getItem("users"))
const registeredEmail = document.getElementById("registeredEmail")
const registeredPassword = document.getElementById("registeredPassword")
const signInButton = document.getElementById("signInButton")
const loginMessage = document.getElementById("loginMessage")
loginMessage.style.display = "none"
const registeredEmailMessage = document.getElementById("registeredEmailMessage")
registeredEmailMessage.style.display = "none"
const registeredPasswordMessage = document.getElementById("registeredPasswordMessage")
registeredPasswordMessage.style.display = "none"

signInButton.addEventListener("click", (event)=>{
    event.preventDefault();
    login();
})

function login(){
    var userEmail = document.loginForm.email.value;
    atpos = userEmail.indexOf("@");
    dotpos = userEmail.lastIndexOf(".");
  
    if ((atpos < 1 || dotpos - atpos < 2) && userEmail == "") {
        registeredEmailMessage.style.display = "block"
        registeredEmailMessage.style.color = "red"
        registeredEmailMessage.style.fontWeight = "bold"
        registeredEmailMessage.innerHTML = "Invalid email!"
      document.myForm.email.focus();
    }

    else if (document.loginForm.pwd.value == "" ) {
        registeredPasswordMessage.style.display = "block"
        registeredPasswordMessage.style.color = "red"
        registeredPasswordMessage.style.fontWeight = "bold"
        registeredPasswordMessage.innerHTML = "Password field is required!"
      document.loginForm.pwd.focus();
      return false;
    }

    else{
        loginMessage.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`
        registeredEmailMessage.style.display = "none"
        registeredPasswordMessage.style.display = "none"
        for(let i=0; i<registeredUsers.length; i++){
            const usersArray = registeredUsers[i]
            
            if(registeredEmail.value != usersArray.userEmail){
                loginMessage.style.display = "block"
                loginMessage.innerHTML = "Invalid credentials!"
            }

            else if(registeredPassword.value != usersArray.userPassword){
                loginMessage.style.display = "block" 
                loginMessage.innerHTML = "Invalid credentials!"
            }

            else{
                loginMessage.style.display = "block" 
                loginMessage.innerHTML = "Success!"
                loginMessage.style.color = "green"
                localStorage.setItem("token", "asyfgjahjghvjkhjgaurgfivhjhfjwhufhsytdufghjtdxycfuvgibhtxdycfuvgdfgvhgvjhdgdsgfdsdf")
                var result = registeredUsers.find(function(e) {
                    return e.userEmail == usersArray.userEmail;
                  });
                const loggedInUser = {
                    "firstName": result.firstName,
                    "lastName": result.lastName,
                    "userEmail": result.userEmail,
                    "userPassword": result.userPassword,
                }
                localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser))
                location = "adminPanel.html"
            }
        }

  }

}


//Prevent access to the login page when logged in

const userToken = localStorage.getItem("token")
if(userToken){
    location = "index.html"
}