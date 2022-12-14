// Get the contents of a post
const allBlogs = JSON.parse(localStorage.getItem("posts"))
const storedTitle = localStorage.getItem("postTitle")

var targetedPost = allBlogs.find(function(e) {
    return e.title == storedTitle;
  });

const titleHeading = document.getElementById("blogTitle")
titleHeading.value = targetedPost.title;

const singleBlogDescription = document.getElementById("blogDescription")
singleBlogDescription.innerHTML = targetedPost.description

const singleBlogBody = document.getElementById("blogBody")
singleBlogBody.innerHTML = targetedPost.body;

const singleBlogPicture = document.getElementById("singleBlogPicture")
singleBlogPicture.src = targetedPost.picture;



//Edit a post
const blogForm = document.getElementById("blogForm")
const blogTitle = document.getElementById("blogTitle")
const blogPicture = document.getElementById("blogPicture")
const blogDescription = document.getElementById("blogDescription")
const blogBody = document.getElementById("blogBody")
const blogSubmitData = document.getElementById("blogSubmitData")

blogSubmitData.addEventListener("click", (event)=>{
    event.preventDefault();
    editPost();
 })

function editPost(){

    // Convert image to a data URL
    const imageLink =  blogPicture.files
     const reader =  new FileReader();
     reader.readAsDataURL(imageLink[0])
     reader.addEventListener("load",()=>{
        finalImage = reader.result
 
    const singlePost = {}
    singlePost.title = blogTitle.value || targetedPost.title;
    singlePost.picture = finalImage || targetedPost.picture;
    singlePost.description = blogDescription.value || targetedPost.description;
    singlePost.body = blogBody.value || targetedPost.body;
    singlePost.date = targetedPost.date;
    singlePost.authorFirstName = targetedPost.authorFirstName;
    singlePost.authorLastName = targetedPost.authorLastName;

    
    allBlogs[allBlogs.indexOf(targetedPost)] = singlePost
    localStorage.posts = JSON.stringify(allBlogs)
    postSuccessMessage.innerHTML = "Post updated successfully!"
    setTimeout(()=>{location="managePost.html"}, 2000)

    blogForm.reset();
})
}