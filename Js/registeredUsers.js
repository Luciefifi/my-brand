
let registeredUsersContainer = document.getElementById('registeredUsersContainer');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let userEmail = document.getElementById('userEmail');
let role = document.getElementById('role');
let usersContainer = document.getElementById('usersContainer')

const getData = {
    method: "GET",
    headers: {"auth_token": JSON.parse(localStorage.getItem("tokens"))}
};

const URL = "https://nice-ruby-squid-slip.cyclic.app/api/getAllUsers";

fetch(URL, getData)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    for(let i = 0; i < data.allUsers.length; i++) {
        const userArray = data.allUsers[i];
console.log(userArray)
        const firstNameValue = userArray.firstName;
        const lastNameValue = userArray.lastName;
        const emailValue = userArray.email;
        const roleValue = userArray.role;
        const userId = userArray._id

        let userTemplate = `
    
        <tr id="${userId}">
            <td>${firstNameValue} </td>
            <td>${lastNameValue}</td>
            <td>${emailValue}</td>
            <td>${roleValue}</td>

        </tr>
    
    `
    
   
    
    
    usersContainer.innerHTML += userTemplate;


    }
  })
  .catch(error => console.log(error.message));

