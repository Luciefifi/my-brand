


const traffics = document.getElementById('traffics')
traffics.style.paddingTop = "25px"
let  availableUsers = ''
async function allusers(){

   
    const registeredUsers = document.getElementById('registeredUsers')
     registeredUsers.style.paddingTop= "25px"
    let response = await fetch("https://portifolio-yanjye.onrender.com/api/getAllUsers")
    const fetchedData = await response.json()
     availableUsers = fetchedData.allUsers.length
    console.log(availableUsers)
    if(availableUsers.length<=1){
        registeredUsers.innerHTML=availableUsers +  " Registered User "
    }
    else{
        registeredUsers.innerHTML = availableUsers+ " Registered Users"
    }

}
console.log(availableUsers)


let allAvailablePosts = ''

const URL = "https://portifolio-yanjye.onrender.com/api/getAllBlogs"
fetch(URL)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    const postsNumber = document.getElementById('postsNumber')
    postsNumber.style.paddingTop = "25px"
    allAvailablePosts = data.data.length
if(allAvailablePosts.length<=1){
    postsNumber.innerHTML=allAvailablePosts +  " Post "
}
else{
    postsNumber.innerHTML=allAvailablePosts+ " Posts"
}

    console.log(allAvailablePosts)
   
  })
  .catch(error => {
    console.error(error);
  });

let allAvailableMessages = ''
  
  fetch("https://portifolio-yanjye.onrender.com/api/getAllMessages")
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
        const messages = document.getElementById('messages')
        messages.style.paddingTop = "25px"
      allAvailableMessages = data.data.length
      console.log(allAvailableMessages)
      if(allAvailableMessages.length<=1){
        messages.innerHTML=allAvailableMessages +  " message "
    }
    else{
        messages.innerHTML=allAvailableMessages+ " messages"
    }
 
    })
    .catch(error => console.log(error.message));

    traffics.innerHTML= `23 vistors , ${allAvailablePosts} Post  , ${availableUsers} Registered User ,  ${allAvailableMessages} Message , 70 subscribers`


// traffics.innerHTML= " 23 vistors ," + allAvailablePosts.length +  " Post  , " + allUsers.length +  " Registered User , " + allMessages.length +  " Message , " + " 70 subscribers"

allusers();







