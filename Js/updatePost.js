// Get the contents of a post
const allBlogs = JSON.parse(localStorage.getItem("posts"))
const storedTitle = localStorage.getItem("postTitle")

var targetedPost = allBlogs.find(function(e) {
    return e.title == storedTitle;
  });


const url = new URL(window.location.href);
const postId = url.searchParams.get('postId');

  const getData = {
      method: "GET",
      headers: {"auth_token": JSON.parse(localStorage.getItem("token"))}
  }

  fetch(`https://portifolio-yanjye.onrender.com/api/getSingleBlog/${postId}`, getData)
  .then(response => response.json())
  .then((fetchedData)=>{
      console.log(fetchedData)

      const singleBlog = fetchedData.data
  
      const titleHeading = document.getElementById("blogTitle")
      titleHeading.value = singleBlog.title;

      const singleBlogDescription = document.getElementById("blogDescription")
      singleBlogDescription.innerHTML = singleBlog.description

      const singleBlogPicture = document.getElementById("singleBlogPicture")
      singleBlogPicture.src = singleBlog.image;

      const singleBlogBody = document.getElementById("blogBody")
      singleBlogBody.innerHTML = singleBlog.blogBody;

  })



//Edit a post
const blogForm = document.getElementById("blogForm")
const blogTitle = document.getElementById("blogTitle")
const blogPicture = document.getElementById("blogPicture")
const blogDescription = document.getElementById("blogDescription")
const blogBody = document.getElementById("blogBody")
const blogSubmitData = document.getElementById("blogSubmitData")
const updatePostMessage = document.getElementById("updatePostMessage")
updatePostMessage.style.display = "none"

blogSubmitData.addEventListener("click", (event)=>{
    event.preventDefault();
    updatePostMessage.style.display = "block"
    updatePostMessage.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="40px">`
    editPost();
 })

function editPost(){

    if (!blogPicture.files[0]) {
        updatePostMessage.style.color = "red"
        updatePostMessage.innerHTML = "Please add a post image or confirm the previous one to edit a post!"
        return;
      }

    // Convert image to a data URL
    const imageLink =  blogPicture.files
     const reader =  new FileReader();
     reader.readAsDataURL(imageLink[0])
     reader.addEventListener("load",()=>{
        finalImage = reader.result

    const data = {
        title: blogTitle.value, 
        description: blogDescription.value, 
        blogBody: blogBody.value,
        image: finalImage ,
    }
 
    const sendData = {  
        method: "PUT",
        body: JSON.stringify(data),
        headers: new Headers({"auth_token": JSON.parse(localStorage.getItem("token")), 'Content-Type': 'application/json; charset=UTF-8'})
    }

    fetch(`https://portifolio-yanjye.onrender.com/api/updatePost/${postId}`, sendData)
    .then(response => response.json())
    .then((fetchedData)=>{
        console.log(fetchedData)

        if (fetchedData.successMessage){
            updatePostMessage.style.color = "green"
            updatePostMessage.innerHTML = fetchedData.successMessage
            setTimeout(()=>{location="managePost.html"},2000)
        }

        else if (fetchedData.validationError){
            updatePostMessage.style.color = "red"
            updatePostMessage.innerHTML = fetchedData.validationError
        }

        else{
            updatePostMessage.style.color = "red"
            updatePostMessage.innerHTML = "Something went wrong, we were unable to create this post!"
        }
    })

        })
    }