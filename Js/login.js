const loginForm = document.getElementById("loginForm");
const registeredEmail = document.getElementById("registeredEmail");
const registeredPassword = document.getElementById("registeredPassword");
const signInButton = document.getElementById("signInButton");
const loginMessage = document.getElementById("loginMessage");

loginMessage.style.display = "none"


signInButton.addEventListener("click", (event)=>{
    event.preventDefault();
    loginMessage.style.display = "block"
    loginMessage.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`

    login();
});

function login(){
    const data = {
        email: registeredEmail.value,
        password: registeredPassword.value
    }

    const sendData = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }

    fetch("https://nice-ruby-squid-slip.cyclic.app/api/login", sendData)
    .then(response => response.json())
    .then((fetchedData)=>{
        console.log(fetchedData)
    
        if (fetchedData.InvalidCredentials){
            loginMessage.style.color = "red"
            loginMessage.innerHTML = fetchedData.InvalidCredentials
        }

        else if (fetchedData.successMessage){
            localStorage.setItem("token", JSON.stringify(fetchedData.token))
            location = "index.html";
        }

        else{
            loginMessage.style.color = "red"
            loginMessage.innerHTML = "Something went wrong, we were unable to login this account!"
        }

    })

}