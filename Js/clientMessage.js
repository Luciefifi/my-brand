
// var allMessages = JSON.parse(localStorage.getItem('messages'))
// const clientContainer = document.getElementById('clientContainer')

// for (let i=0 ; i<allMessages.length; i++){
//      console.log(allMessages[i])

//     const clientName = document.getElementById('clientName')
//     const clientNames = allMessages[i].Name
//     const clientEmail = document.getElementById('clientEmail')
//     const clientEmails = allMessages[i].Email

//     const clientPhone = document.getElementById('clientPhone')
//     const clientPhones = allMessages[i].Tel

//     const clientMessage = document.getElementById('clientMessage')
//     const clientMessages = allMessages[i].Message

    

//     clientContainer.innerHTML += `
//         <fieldset class="manageMessage">
            
//         <p class="userInfoBox">
//             <span>${clientNames}</span>
//             <span>${clientEmails}</span>
//             <span>${clientPhones}</span>
//         </p>
       
//         <p class="userMessageBox">${clientMessages}</p>

       
//         <div class="editPost">
//             <p onclick = "storePostTitle('${clientName}')" style="color:green">Reply</p>
//             <p onclick="deleteMessage('${clientPhones}')" style="color:red"> <i class="fa fa-trash"></i> </p>
//         </div>
        
//     </fieldset> 
//     `
// }



// function deleteMessage(visitorTel){
//     var client = allMessages.find(function(e)
//     {
//         return e.clientPhones = allMessages.visitorTel;
//     });
//     for (var j=0 ; j<allMessages.length; j++){
//         var clients = allMessages[j];
//         if(clients.phone == clients.clientPhones){
//             allMessages.splice(j,1);
//         }
//     }
//     allMessages = JSON.stringify(allMessages);
//     localStorage.setItem("messages" , allMessages);
//     history.go(0);

// }



const visitorName = document.getElementById('visitorName');
const visitorLastName = document.getElementById('visitorLastName');
const visitorEmail = document.getElementById('visitorEmail');
const visitorMessage = document.getElementById('visitorMessage');
const messageSubmitButton = document.getElementById('messageSubmitButton');
const contactForm = document.getElementById('contactForm')
const clientMessages = document.getElementById('clientMessages');

clientMessages.style.display = "none";

messageSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  clientMessages.style.display = "block";
  clientMessages.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`;
  contactMessage();
});

function contactMessage() {
  const data = {
    fname: visitorName.value,
    lname: visitorLastName.value,
    email: visitorEmail.value,
    message: visitorMessage.value
  };

  const sendData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
  };

  fetch("http://localhost:5000/api/createMessage", sendData)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      if (data.message) {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = data.message;
      } if (data.successMessage && data.message) {
        clientMessages.style.color = "green";
        clientMessages.innerHTML = data.successMessage;
       


        contactForm.reset()
      setTimeout(()=>{location = "index.html"}, 2000)

      } else if (data.validationError) {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = data.validationError;
      } else {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = "Something went wrong, we were unable to register this account!";
      }
    });
}










