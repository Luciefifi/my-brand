var allPosts;
allPosts = JSON.parse(localStorage.getItem("posts"))
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
        <fieldset class="managePost">
            
        <p class="title">${title}</p>
        <p>${date}</p>
        <p>4 <i class="fa fa-eye"></i></p>
        <p>5 Likes</p>
        <p>5 Comments</p>
        <div class="editPost">
            <p onclick = "storePostTitle('${title}')"><i class="fas fa-edit"></i></p>
            <p onclick="deletePost('${title}')"><i class="fa fa-trash"></i></p>
        </div>
        
    </fieldset> 
    `

}


function deletePost(postTitle){
    var postResult = allPosts.find(function(e) {
        return e.title == postTitle;
      });
    for (var j =0; j< allPosts.length; j++) {
        var blogs = allPosts[j];
        if (blogs.title == postResult.title) {
            allPosts.splice(j, 1);
        }
    }

    allPosts = JSON.stringify(allPosts);
    localStorage.setItem("posts", allPosts);
    history.go(0);
}

function storePostTitle(title){
    localStorage.setItem("postTitle", title)
    location = "updatePost.html"
 }