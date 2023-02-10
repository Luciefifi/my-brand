const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const repeatPassword = document.getElementById('repeatPassword');
const signUpButton = document.getElementById('signUp');
const signupForm = document.getElementById('signupForm');
const signupContainer = document.getElementById('signupContainer');
const signUpMessage = document.getElementById('signUpMessage'); 
signUpMessage.style.display = "none"


signUpButton.addEventListener("click", (event)=>{
   event.preventDefault();
   signUpMessage.style.display = "block"
   signUpMessage.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`
   signUp();
})

function signUp(){

  const data = {
      firstName: firstName.value, 
      lastName: lastName.value,
      email: userEmail.value,
      password: userPassword.value,
      repeatPassword: repeatPassword.value
  }

  const sendData = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
  }

fetch("http://localhost:5000/api/createUser", sendData)
.then(response => response.json())
.then((fetchedData)=>{
  console.log(fetchedData)

  if (fetchedData.message){
      signUpMessage.style.color = "red"
      signUpMessage.innerHTML = fetchedData.message
  }

  else if (fetchedData.successMessage){
      signUpMessage.style.color = "green"
      signUpMessage.innerHTML = fetchedData.successMessage
      signupForm.reset()
      setTimeout(()=>{location = "login.html"}, 3000)
  }

  else if (fetchedData.validationError){
      signUpMessage.style.color = "red"
      signUpMessage.innerHTML = fetchedData.validationError
  }

  else {
      signUpMessage.style.color = "red"
      signUpMessage.innerHTML = "Something went wrong, we were unable to register this account!"
  }
}) 
    
  }
