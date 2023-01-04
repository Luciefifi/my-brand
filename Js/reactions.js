const Likes = document.getElementById('likeButton')
const userToLike = localStorage.getItem('messages')


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

console.log(userToLike)
    function likeBlog(){
        

        var like ;
        if(!localStorage.like)
        {
            like = []
        }
        else{
            like = JSON.parse(localStorage.like)
        }

        const UserToLikeEmail = {}
        UserToLikeEmail.userToLike = userToLike.value
       
        like.push(UserToLikeEmail)
        localStorage.like=JSON.stringify(like)

        




    }

const liked = localStorage.getItem('like')
console.log(liked)
//      Likes.innerHTML =liked.length 


