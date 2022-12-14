const allPosts = JSON.parse(localStorage.getItem("posts"))
const postsContainer = document.getElementById("postsContainer")

for(let i=0; i<allPosts.length; i++){
    const postsArray = allPosts[i]
    const title = postsArray.title;
    const picture = postsArray.picture;
    const description = postsArray.description;
    const body = postsArray.body;
    const date = postsArray.date;
    const authorNames = postsArray.authorFirstName +" "+postsArray.authorLastName;
    const authorImageTemplate = `<div class="profilePicture">
    ${postsArray.authorFirstName.charAt(0)}${postsArray.authorLastName.charAt(0)}
  </div>`
    
   
    postsContainer.innerHTML += `
        <div href="#" class="card-box">
        <img src="${picture}" class="card-img">
        <div class="card-text">
        <div class="card-data">
            <div class="card-author">
            ${authorImageTemplate}
            <div class="author-info blogAuthorInfo">
                <p class="author-name">${authorNames}</p>
                <p class="post-timestamp">Admin</p>
            </div>
            </div>
            <p class="blogSlash">/</p>
            <p class="data-text">${date}</p>
        </div>

        <a href="singleBlog.html" class="card-title" onclick = "storeBlogTitle('${title}')">${title}</a>
        <p class="card-description">${description}</p>
        </div>
    </div>
    `

}


function storeBlogTitle(title){
   localStorage.setItem("blogTitle", title)
}