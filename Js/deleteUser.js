let userIdDeletion;
const popupBox = document.getElementById('popupBox')

function openPopup(post_id){
    popupBox.classList.add("open-popup")
    localStorage.setItem("userIdDeletion", post_id)
    userIdDeletion = localStorage.getItem("userIdDeletion")
}
function closePopup(){
    popupBox.classList.remove("open-popup")
}


 
async function deleteUser(){
    const getData = {
        method: "DELETE",
        headers: {"auth_token": JSON.parse(localStorage.getItem("token"))}
    }
    
    let response = await fetch("http://localhost:5000/api/deleteUser/"+userIdDeletion, getData)
    const fetchedData = await response.json()
    console.log(fetchedData)

    if (fetchedData.successMessage){
      location.reload()  
    }

}