
var allMessages = JSON.parse(localStorage.getItem('messages'))
const clientContainer = document.getElementById('clientContainer')

for (let i=0 ; i<allMessages.length; i++){
     console.log(allMessages[i])

    const clientName = document.getElementById('clientName')
    clientName.innerHTML = allMessages[i].Name
    const clientEmail = document.getElementById('clientEmail')
    clientEmail.innerHTML = allMessages[i].Email

    const clientPhone = document.getElementById('clientPhone')
    clientPhone.innerHTML = allMessages[i].Tel

    const clientMessage = document.getElementById('clientMessage')
    clientMessage.innerHTML = allMessages[i].Message
}



function deleteMessage(visitorTel){
    var client = allMessages.find(function(e)
    {
        return e.clientPhone = allMessages.visitorTel;
    });
    for (var j=0 ; j<allMessages.length; j++){
        var clients = allMessages[j];
        if(clients.phone == clients.clientPhone){
            allMessages.splice(j,1);
        }
    }
    allMessages = JSON.stringify(allMessages);
    localStorage.setItem("messages" , allMessages);
    history.go(0);

}












