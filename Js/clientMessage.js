
var allMessages = JSON.parse(localStorage.getItem('messages'))
const clientContainer = document.getElementById('clientContainer')

for (let i=0 ; i<allMessages.length; i++){
     console.log(allMessages[i])

    const clientName = document.getElementById('clientName')
    const clientNames = allMessages[i].Name
    const clientEmail = document.getElementById('clientEmail')
    const clientEmails = allMessages[i].Email

    const clientPhone = document.getElementById('clientPhone')
    const clientPhones = allMessages[i].Tel

    const clientMessage = document.getElementById('clientMessage')
    const clientMessages = allMessages[i].Message

    

    clientContainer.innerHTML += `
        <fieldset class="manageMessage">
            
        <p class="userInfoBox">
            <span>${clientNames}</span>
            <span>${clientEmails}</span>
            <span>${clientPhones}</span>
        </p>
       
        <p class="userMessageBox">${clientMessages}</p>

       
        <div class="editPost">
            <p onclick = "storePostTitle('${clientName}')" style="color:green">Reply</p>
            <p onclick="deleteMessage('${clientPhones}')" style="color:red"> <i class="fa fa-trash"></i> </p>
        </div>
        
    </fieldset> 
    `
}



function deleteMessage(visitorTel){
    var client = allMessages.find(function(e)
    {
        return e.clientPhones = allMessages.visitorTel;
    });
    for (var j=0 ; j<allMessages.length; j++){
        var clients = allMessages[j];
        if(clients.phone == clients.clientPhones){
            allMessages.splice(j,1);
        }
    }
    allMessages = JSON.stringify(allMessages);
    localStorage.setItem("messages" , allMessages);
    history.go(0);

}












