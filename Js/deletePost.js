let postIdDeletion;
const popupBox = document.getElementById('popupBox')

function openPopup(post_id){
    popupBox.classList.add("open-popup")
    localStorage.setItem("postIdDeletion", post_id)
    postIdDeletion = localStorage.getItem("postIdDeletion")
}
function closePopup(){
    popupBox.classList.remove("open-popup")
}


 
async function deletePost(){
    const getData = {
        method: "DELETE",
        headers: {"auth_token": JSON.parse(localStorage.getItem("token"))}
    }
    
    let response = await fetch("https://nice-ruby-squid-slip.cyclic.app/api/deleteBlog/"+postIdDeletion, getData)
    const fetchedData = await response.json()
    console.log(fetchedData)

    if (fetchedData.successMessage){
      location.reload()  
    }

}