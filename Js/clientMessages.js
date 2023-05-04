let clientContainer = document.getElementById('clientContainer')
// const tokens = localStorage.getItem("token")



const getData = {
    method: "GET",
    // headers: {"auth_token": JSON.parse(localStorage.getItem("tokens"))}
}



const URL = "https://nice-ruby-squid-slip.cyclic.app/api/getAllMessages"
fetch(URL)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    console.log(data)
 
for(let i=0; i< data.data.length; i++){
    messagesArray = data.data[i]
    console.log(messagesArray)
    const firstName = messagesArray.fname;
    const lastName = messagesArray.lname;
    const email = messagesArray.email;
    const message = messagesArray.message;
    const messageId = messagesArray._id

    clientContainer.innerHTML += `
    <fieldset class="manageMessage">
        
    <p class="userInfoBox">
        <span>${firstName}</span>
        <span>${lastName}</span>
        <span>${email}</span>
    </p>
   
    <p class="userMessageBox">${message}</p>
   
    <div class="editPost">
        <p onclick = "storeMessageId('${messageId}')" style="color:green">Reply</p>
        <p onclick="deleteMessage('${messageId}')" style="color:red"> <i class="fa fa-trash"></i> </p>
    </div>
    
</fieldset> 
`


}

  })
//    console.log(posts);
  .catch(error => console.log(error.message));

