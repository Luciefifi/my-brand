const Likes = document.getElementById('likeButton')

const likeLoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))

const tokens = localStorage.getItem('token')

if(!tokens)
{
Likes.style.display="block"
likeButton.addEventListener("click", (event)=>{
    event.preventDefault();
    alert('login first to like the blog')
})
}
else{
   
    Likes.style.display="block"

    likeButton.addEventListener("click", (event)=>{
        event.preventDefault();
                likeBlog();
    })
}

    function likeBlog(){
        Likes.style.color = "red"
        
        var like ;
        if(!localStorage.like)
        {
            like = []
        }
        else{
            like = JSON.parse(localStorage.like)
        }

        const UserToLikeEmail = {}
        UserToLikeEmail.likeLoggedInUser = likeLoggedInUser.userEmail
       
        like.push(UserToLikeEmail)
        
        localStorage.like=JSON.stringify(like)
        // console.log(like.length)
        likeButton.innerHTML = like.length + ` <i class="fa fa-heart" ></i>
    `

      

    //     const likeArray = JSON.parse(localStorage.like)
    //    for(let i=0; i<likeArray.length; i++){
    //     const likeEmail = likeArray[i].likeLoggedInUser

    //     if(likeEmail === likeLoggedInUser.userEmail){
    //         likeArray.pull(likeLoggedInUser)
    //         localStorage.removeItem("like.likeLoggedInUser")
    //     }

    //     else{
            
    //     }
    // }

    }

    //getting number of likes

    const likes = JSON.parse(localStorage.getItem("like"))
    Likes.innerHTML = likes.length + " " +  `<i class="fa fa-thumbs-o-up"> </i>`

    
    



