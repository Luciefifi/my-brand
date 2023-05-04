const allBlogs = JSON.parse(localStorage.getItem("posts"))
const storedTitle = localStorage.getItem("blogTitle")

var targetedPost = allBlogs.find(function(e) {
    return e.title == storedTitle;
  });

  const url = new URL(window.location.href);
  const postId = url.searchParams.get('postId');

    const getData = {
        method: "GET",
        headers: {"auth_token": JSON.parse(localStorage.getItem("token"))}
    }

    fetch(`https://nice-ruby-squid-slip.cyclic.app/api/getSingleBlog/${postId}`, getData)
    .then(response => response.json())
    .then((fetchedData)=>{
        console.log(fetchedData)

        const singleBlog = fetchedData.data
    
        const titleHeading = document.getElementById("titleHeading")
        titleHeading.innerHTML = singleBlog.title;

        const singleBlogPicture = document.getElementById("singleBlogPicture")
        singleBlogPicture.src = singleBlog.image

        const singleBlogBody = document.getElementById("singleBlogBody")
        singleBlogBody.innerHTML = singleBlog.blogBody;

        const authorNames = document.getElementById("authorNames")
        authorNames.innerHTML = singleBlog.createdBy.firstName +' '+ singleBlog.createdBy.lastName;

        let profilePicture = document.getElementById("profilePicture")
        profilePicture  = singleBlog.createdBy.firstName.charAt(0) + singleBlog.createdBy.lastName.charAt(0)
        profilePicture.innerHTML = profilePicture

    })







    fetch(`http://localhost:5000/api/getAllBlogs`, getData)
    .then(response => response.json())
    .then((fetchedData)=>{

      const otherRelatedPosts = document.getElementById("otherRelatedPosts")
      const Posts = fetchedData.data;
      let allPosts = Posts.filter(post => post._id !== postId);
      for(let i=0; i<allPosts.length; i++){
          const postsArray = allPosts[i]
          const title = postsArray.title;
          const postId = postsArray._id;
          const picture = postsArray.image;
          const authorNames = postsArray.createdBy.firstName +" "+postsArray.createdBy.lastName;

      otherRelatedPosts.innerHTML += `
          <div class="card">
            <img src='${picture}' alt=''>
            <div>
              <p class="heading title"><a style="text-decoration: none; color: #eb279d;" href="singleBlog.html?postId=${postId}">${title}</a></p>
              <p class="author">${authorNames}</p>
            </div>
          </div>
      `
}

    })



function storeBlogTitle(title){
   localStorage.setItem("blogTitle", title)
}
