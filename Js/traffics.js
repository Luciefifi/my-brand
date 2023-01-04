const postsNumber = document.getElementById('postsNumber')
postsNumber.style.paddingTop = "25px"
const registeredUsers = document.getElementById('registeredUsers')
registeredUsers.style.paddingTop= "25px"
const messages = document.getElementById('messages')
messages.style.paddingTop = "25px"
const traffics = document.getElementById('traffics')
traffics.style.paddingTop = "25px"

const allAvailablePosts = JSON.parse(localStorage.getItem("posts"))
const allUsers = JSON.parse(localStorage.getItem("users"))
const allMessages = JSON.parse(localStorage.getItem('messages'))
if(allAvailablePosts.length<=1){
    postsNumber.innerHTML=allAvailablePosts.length +  " Post "
}
else{
    postsNumber.innerHTML=allAvailablePosts.length + " Posts"
}

if(allUsers.length<=1){
    registeredUsers.innerHTML=allUsers.length +  " Registered User "
}
else{
    registeredUsers.innerHTML = allUsers.length + " Registered Users"
}
if(allMessages.length<=1){
    messages.innerHTML=allMessages.length +  " Message "
}
else{
    messages.innerHTML=allMessages.length + " Messages"
}
traffics.innerHTML= " 23 vistors ," + allAvailablePosts.length +  " Post  , " + allUsers.length +  " Registered User , " + allMessages.length +  " Message , " + " 70 subscribers"

