

const postsContainer = document.getElementById("postsContainer")
const postLike = document.getElementById('postLike')

var posts = ''
const URL = "https://nice-ruby-squid-slip.cyclic.app/api/getAllBlogs"
fetch(URL)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
 
for(let i=0; i< data.data.length; i++){
    postsArray = data.data[i]
    console.log(postsArray)
    const title = postsArray.title;
    const postId= postsArray._id;
    const date = postsArray.createdAt;

    postsContainer.innerHTML += `
        <fieldset class="managePost">
            
        <p class="title">${title}</p>
        <p>${date}</p>
        <p>4 <i class="fa fa-eye"></i></p>
        <p >5 Likes</p>
        <p>5 Comments</p>
        <div class="editPost">
            <a href="updatePost.html?postId=${postId}"><i class="fas fa-edit"></i></a>
            <p onclick="openPopup('${postId}')"><i class="fa fa-trash"></i></p>
        </div>
        
    </fieldset> 
    `

}




  })
//    console.log(posts);
  .catch(error => console.log(error.message));




