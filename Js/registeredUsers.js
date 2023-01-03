var registeredUsers = JSON.parse(localStorage.getItem('users'))

const userFirstName = document.getElementById('firstName')
const userLastName = document.getElementById('lastName')
const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('password')

for(i=0 ; i<=registeredUsers.length ; i++){
    userFirstName.innerHTML =  registeredUsers[i].firstName;
    userLastName.innerHTML = registeredUsers[i].lastName;
    userEmail.innerHTML= registeredUsers[i].userEmail;
    userPassword.innerHTML = registeredUsers[i].userPassword

}