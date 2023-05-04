let messageIdDeletion;
const popupBox = document.getElementById('popupBox')

function openPopup(message_id){
    popupBox.classList.add("open-popup")
    localStorage.setItem("messageIdDeletion", post_id)
    messageIdDeletion = localStorage.getItem("messageIdDeletion")
}
function closePopup(){
    popupBox.classList.remove("open-popup")
}


 
async function deleteMessage(){
    const getData = {
        method: "DELETE",
        headers: {"auth_token": JSON.parse(localStorage.getItem("token"))}
    }
    
    let response = await fetch("https://nice-ruby-squid-slip.cyclic.app/api/deleteMessage/"+messageIdDeletion, getData)
    const fetchedData = await response.json()
    console.log(fetchedData)

    if (fetchedData.successMessage){
      location.reload()  
    }

}