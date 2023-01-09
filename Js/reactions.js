const Likes = document.getElementById('likeButton')

const likeLoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
const tokens = localStorage.getItem('token')



if(!tokens)
{
// Likes.style.display="block"
likeButton.addEventListener("click", (event)=>{
    event.preventDefault();
    alert('login first to like the blog')
})
}
else{
   
    // Likes.style.display="block"

    likeButton.addEventListener("click", (event)=>{
        event.preventDefault();
                likeBlog();
    })
}

    function likeBlog(){
        Likes.style.color = "red"

        let like;
        if(!localStorage.like){
            like = [] ;
        }
        else{
            like = JSON.parse(localStorage.like)
        }

        let likeCount;
        if(!localStorage.likeCount){
            likeCount = "" ;
        }
        else{
            likeCount = JSON.parse(localStorage.likeCount)
        }
        
        
        for(let i=0; i<like.length; i++){
            const likingEmail = like[i]
            if(likingEmail.likeLoggedInUser == likeLoggedInUser.userEmail){
                console.log(likingEmail.likeLoggedInUser)
                console.log(likeLoggedInUser.userEmail)
                like.splice(i, 1);
                likeCount = JSON.stringify(like.length);
                like = JSON.stringify(like);
                localStorage.like = like;
                
                localStorage.likeCount = likeCount;

                likeButton.innerHTML = likeCount + ` <i class="fa fa-thumbs-o-up"> </i>`
                // history.go(0)
            }
        }

        const UserToLikeEmail = {}
        UserToLikeEmail.likeLoggedInUser = likeLoggedInUser.userEmail
       
        like.push(UserToLikeEmail)
        
        localStorage.like=JSON.stringify(like)
        console.log(like.length)
        likeCount = JSON.stringify(like.length);
        localStorage.likeCount=likeCount
        likeButton.innerHTML = likeCount + ` <i class="fa fa-heart" ></i>
    `
    // let likes = JSON.parse(localStorage.like)


    }

    //getting number of likes

    const likes = JSON.parse(localStorage.getItem("like"))
    Likes.innerHTML = likes.length + " " +  `<i class="fa fa-thumbs-o-up"> </i>`

    
    



