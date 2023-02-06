

const postsContainer = document.getElementById("postsContainer")
const postLike = document.getElementById('postLike')
var posts = ''
const URL = "http://localhost:5000/api/getAllBlogs"
fetch(URL)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    // posts = data;
    // console.log(posts);
//     var allPosts;
// allPosts = posts
// console.log(allPosts)
// console.log()
for(let i=0; i< data.data.length; i++){
    postsArray = data.data[i]
    console.log(postsArray)
    const title = postsArray.title;
    const picture = postsArray.image;
    const description = postsArray.description;
    const body = postsArray.blogBody;
    const date = postsArray.createdAt;
    const authorNames = postsArray.authorFirstName +" "+postsArray.authorLastName;
    const authorImageTemplate = `<div class="profilePicture">
   
  </div>`

    postsContainer.innerHTML += `
        <fieldset class="managePost">
            
        <p class="title">${title}</p>
        <p>${date}</p>
        <p>4 <i class="fa fa-eye"></i></p>
        <p >5 Likes</p>
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

  })
//    console.log(posts);
  .catch(error => console.log(error.message));

