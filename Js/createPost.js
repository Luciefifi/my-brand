const blogTitle = document.getElementById("blogTitle")
const blogPicture = document.getElementById("blogPicture")
const blogDescription = document.getElementById("blogDescription")
const blogBody = document.getElementById("blogBody")
const blogSubmitData = document.getElementById("blogSubmitData")
const blogForm = document.getElementById("blogForm")
const blogTitleErrorMessage = document.getElementById("blogTitleErrorMessage")
const blogPictureErrorMessage = document.getElementById("blogPictureErrorMessage")
const blogDescriptionErrorMessage = document.getElementById("blogDescriptionErrorMessage")
const blogBodyErrorMessage = document.getElementById("blogBodyErrorMessage")
const postSuccessMessage = document.getElementById("postSuccessMessage")

blogSubmitData.addEventListener("click", (event)=>{
    event.preventDefault();
    blogPost();
 })

function blogPost(){

if(document.blogForm.title.value==""){
    blogTitleErrorMessage.style.display = "block"
    blogTitleErrorMessage.style.color = "red"
    blogTitleErrorMessage.style.fontWeight = "bold"
    blogTitleErrorMessage.innerHTML = "The title can not be empty!"
    document.signUpForm.title.focus();
}

else if(document.blogForm.picture.value==""){
    blogPictureErrorMessage.style.display = "block"
    blogPictureErrorMessage.style.color = "red"
    blogPictureErrorMessage.style.fontWeight = "bold"
    blogPictureErrorMessage.innerHTML = "A blog picture is required!"
        document.signUpForm.picture.focus();
    }
else if(document.blogForm.description.value==0){
    blogDescriptionErrorMessage.style.display = "block"
    blogDescriptionErrorMessage.style.color = "red"
    blogDescriptionErrorMessage.style.fontWeight = "bold"
    blogDescriptionErrorMessage.innerHTML = "Blog description can not be empty!"
        document.signUpForm.description.focus();
    }
else if(document.blogForm.body.value==0){
    blogBodyErrorMessage.style.display = "block"
    blogBodyErrorMessage.style.color = "red"
    blogBodyErrorMessage.style.fontWeight = "bold"
    blogBodyErrorMessage.innerHTML = "Blog body is required!"
        document.signUpForm.body.focus();
    }



else{
  
  blogTitleErrorMessage.style.display = "none"
  blogPictureErrorMessage.style.display = "none"
  blogDescriptionErrorMessage.style.display = "none"
  blogBodyErrorMessage.style.display = "none"
    
  var posts;

    if(!localStorage.posts){
        posts = []
    }
    else{
        posts = JSON.parse(localStorage.posts)
    }

    // Convert image to a data URL
    const imageLink =  blogPicture.files
     const reader =  new FileReader();
     reader.readAsDataURL(imageLink[0])
     reader.addEventListener("load",()=>{
        finalImage = reader.result

    // Get the current date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var yyyy = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[today.getMonth()]
    today = month + ' ' + dd + ', ' + yyyy;

    //Get blog author
    const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
 
    const singlePost = {}
    singlePost.title = blogTitle.value;
    singlePost.picture = finalImage;
    singlePost.description = blogDescription.value;
    singlePost.body = blogBody.value;
    singlePost.date = today;
    singlePost.authorFirstName = LoggedInUser.firstName;
    singlePost.authorLastName = LoggedInUser.lastName;

    
    posts.push(singlePost)
    localStorage.posts = JSON.stringify(posts)

    postSuccessMessage.innerHTML = "Post created successfully!"
    setTimeout(()=>{location="managePost.html"}, 2000)

    blogForm.reset();     
  }

     )}
}