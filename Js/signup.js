const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const repeatPassword = document.getElementById('repeatPassword');
const signUpButton = document.getElementById('signUp');
const signupForm = document.getElementById('signupForm');
const signupContainer = document.getElementById('signupContainer');
const spinnerContainer = document.getElementById('spinnerContainer');
spinnerContainer.style.display = "none"
const firstNameMessage = document.getElementById("firstNameMessage")
firstNameMessage.style.display = "none"
const lastNameMessage = document.getElementById("lastNameMessage")
lastNameMessage.style.display = "none"
const emailMessage = document.getElementById("emailMessage")
emailMessage.style.display = "none"
const passwordMessage = document.getElementById("passwordMessage")
passwordMessage.style.display = "none"
const repeatPasswordMessage = document.getElementById("repeatPasswordMessage")
repeatPasswordMessage.style.display = "none"

signUpButton.addEventListener("click", (event)=>{
   event.preventDefault();
   signUp();
})

function signUp(){
spinnerContainer.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`
var emailAddress = document.signUpForm.emaddress.value;
atpos = emailAddress.indexOf("@");
dotpos = emailAddress.lastIndexOf(".");
var pwd = document.signUpForm.pwd.value;
var repwd = document.signUpForm.repwd.value;

if(document.signUpForm.fname.value==""){
    firstNameMessage.style.display = "block"
    firstNameMessage.style.color = "red"
    firstNameMessage.style.fontWeight = "bold"
    firstNameMessage.innerHTML = "Your first name can not be empty!"
    document.signUpForm.fname.focus();
}

else if(document.signUpForm.lname.value==""){
    lastNameMessage.style.display = "block"
    lastNameMessage.style.color = "red"
    lastNameMessage.style.fontWeight = "bold"
    lastNameMessage.innerHTML = "Your last name can not be empty!"
        document.signUpForm.lname.focus();
    }

else if ((atpos < 1 || dotpos - atpos < 2) && emailAddress == "") {
    emailMessage.style.display = "block"
    emailMessage.style.color = "red"
    emailMessage.style.fontWeight = "bold"
    emailMessage.innerHTML = "Invalid email!"
    document.signUpForm.emaddress.focus();
  }

else if(pwd=="") {
    passwordMessage.style.display = "block"
    passwordMessage.style.color = "red"
    passwordMessage.style.fontWeight = "bold"
    passwordMessage.innerHTML = "Password field is required!"
    document.signUpForm.pwd.focus();
  }

else if(pwd.length < 8) {
    passwordMessage.style.display = "block"
    passwordMessage.style.color = "red"
    passwordMessage.style.fontWeight = "bold"
    passwordMessage.innerHTML = "Your password must have at least 8 characters!"
    document.signUpForm.pwd.focus();
  }

else if(repwd != pwd){
    repeatPasswordMessage.style.display = "block"
    repeatPasswordMessage.style.color = "red"
    repeatPasswordMessage.style.fontWeight = "bold"
    repeatPasswordMessage.innerHTML = "Passwords should be the same!"
    document.signUpForm.repwd.focus();
  }


else{
  
  firstNameMessage.style.display = "none"
  lastNameMessage.style.display = "none"
  emailMessage.style.display = "none"
  passwordMessage.style.display = "none"
  repeatPasswordMessage.style.display = "none"
    
  // var users;

  //   if(!localStorage.users){
  //       users = []
  //   }
  //   else{
  //       users = JSON.parse(localStorage.users)
  //   }
    
  //   const individualUser = {}
  //   individualUser.firstName = firstName.value;
  //   individualUser.lastName = lastName.value;
  //   individualUser.userEmail = userEmail.value;
  //   individualUser.userPassword = userPassword.value;
  //   individualUser.repeatPassword = repeatPassword.value;
    
  //   users.push(individualUser)
  //   localStorage.users = JSON.stringify(users)

    // spinnerContainer.style.display = "block"
    // spinnerContainer.innerHTML = "User registered successfully!"
    // setTimeout(()=>{location="login.html"}, 2000)

    // signupForm.reset();     
    // localStorage.setItem("users", users.push(individualUser))
const URL = "http://localhost:5000/api/createUser"
fetch(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    firstName : firstName.value,
    lastName:lastName.value,
    email :userEmail.value,
    password:userPassword.value,
    repeatPassword:repeatPassword.value
  })
})
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    if (res.headers.get("content-type").indexOf("application/json") !== -1) {
      return res.json();
    } else {
      throw new Error("Unexpected content type: " + res.headers.get("content-type"));
    }
  })
  .then(data => {
    const dataArray = []
    dataArray.push(data)
    spinnerContainer.style.display = "block"
    spinnerContainer.innerHTML = "User registered successfully!"
    setTimeout(()=>{location="login.html"}, 2000)

    signupForm.reset(); 
    console.log("User registered successfully!");
    console.log(data);
  })
  .catch(error => console.error(error));

    
    
  }
}