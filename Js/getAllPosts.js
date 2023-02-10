
const postsContainer = document.getElementById("postsContainer")
const postLike = document.getElementById('postLike')
var posts = ''
const URL = "https://portifolio-yanjye.onrender.com/api/getAllBlogs"
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
//     posts = data;
//     console.log(posts);
//     var allPosts;
// allPosts = posts
// console.log(allPosts)
// console.log()
for(let i=0; i< data.data.length; i++){
    postsArray = data.data[i]
    console.log(postsArray)
    const title = postsArray.title;
    const picture = postsArray.image;
    const postId = postsArray._id;
    const description = postsArray.description;
    const body = postsArray.blogBody;
    const date = postsArray.createdAt;
    const authorNames = postsArray.createdBy.firstName +" "+postsArray.createdBy.lastName;
    const authorImageTemplate = postsArray.createdBy.firstName.charAt(0) + postsArray.createdBy.lastName.charAt(0)

       postsContainer.innerHTML += `
        <div href="#" class="card-box">
        <img src="${picture}" class="card-img">
        <div class="card-text">
        <div class="card-data">
            <div class="card-author">
            <div class="profilePicture">
              ${authorImageTemplate}
            </div>
            <div class="author-info blogAuthorInfo">
                <p class="author-name">${authorNames}</p>
                <p class="post-timestamp">Admin</p>
            </div>
            </div>
            <p class="blogSlash">/</p>
            <p class="data-text">${date}</p>
        </div>

        <a href="singleBlog.html?postId=${postId}" class="card-title">${title}</a>
        <p class="card-description">${description}</p>
        </div>
    </div>
    `

}

  })
//    console.log(posts);
  .catch(error => console.log(error.message));

