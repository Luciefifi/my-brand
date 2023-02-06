// Creating a post

const submitPosts = document.getElementById("blogSubmitData");
const postMessages = document.getElementById("postMessage");

postMessages.style.display = "none"

submitPosts.addEventListener("click", (event) =>{
    event.preventDefault();
    postMessages.style.display = "block"

    postMessages.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`

    createPost();
});


async function createPost(){
    const postImage = document.getElementById("postImage");
    const postTitle = document.getElementById("postTitle");
    const postDescription = document.getElementById("postDescription");
    const postBody = document.getElementById("postBody");

    if (!postImage.files[0]) {
        postMessages.style.color = "red"
        postMessages.innerHTML = "Please add a post image!"
        return;
      }
    
    const reader =  new FileReader();
     reader.readAsDataURL(postImage.files[0])
     reader.addEventListener("load",()=>{
    const finalPostImage = reader.result

    const data = {
        title: postTitle.value, 
        description: postDescription.value, 
        blogBody: postBody.value,
        image: finalPostImage,
    }
        

    const sendData = {  
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({"auth_token": JSON.parse(localStorage.getItem("token")), 'Content-Type': 'application/json; charset=UTF-8'})
    }

fetch("http://localhost:5000/api/create", sendData)
.then(response => response.json())
.then((fetchedData)=>{
    console.log(fetchedData)

    if (fetchedData.successMessage){
        postMessages.style.color = "green"
        postMessages.innerHTML = fetchedData.successMessage
    }

    else if (fetchedData.validationError){
        postMessages.style.color = "red"
        postMessages.innerHTML = fetchedData.validationError
    }

    else{
        postMessages.style.color = "red"
        postMessages.innerHTML = "Something went wrong, we were unable to create this post!"
    }
})

    })
}