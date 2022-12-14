const allBlogs = JSON.parse(localStorage.getItem("posts"))
const storedTitle = localStorage.getItem("blogTitle")

var targetedPost = allBlogs.find(function(e) {
    return e.title == storedTitle;
  });

const titleHeading = document.getElementById("titleHeading")
titleHeading.innerHTML = targetedPost.title;

const singleBlogPicture = document.getElementById("singleBlogPicture")
singleBlogPicture.src = targetedPost.picture;

const singleBlogBody = document.getElementById("singleBlogBody")
singleBlogBody.innerHTML = targetedPost.body;



const allPosts = JSON.parse(localStorage.getItem("posts"))
const otherRelatedPosts = document.getElementById("otherRelatedPosts")

for(let i=0; i<allPosts.length; i++){
    const postsArray = allPosts[i]
    const title = postsArray.title;
    const picture = postsArray.picture;
    const authorNames = postsArray.authorFirstName +" "+postsArray.authorLastName;

    otherRelatedPosts.innerHTML += `
        <div class="card">
          <img src='${picture}' alt=''>
          <div>
            <p class="heading title">${title}</p>
            <p class="author">${authorNames}</p>
          </div>
        </div>
    `
}


function storeBlogTitle(title){
   localStorage.setItem("blogTitle", title)
}
