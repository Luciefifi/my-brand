const tokens= localStorage.getItem("token")
const profilePicture = document.getElementById("profilePicture")
const loginSignUpButtons = document.getElementById("loginSignUpButton")


if(!tokens){
  profilePicture.style.display = "none"
}

else{
    loginSignUpButtons.style.display = "none"
}

async function loggedInUser(){

    const getData = {
        method: "GET",
        headers: {"auth_token": JSON.parse(localStorage.getItem("tokens"))}
    }
    
    let response = await fetch("https://nice-ruby-squid-slip.cyclic.app/api/loggedInUser", getData)
    const fetchedData = await response.json()
    console.log(fetchedData)

    const ourLoggedInUser = fetchedData.loggedInUser


    loginSignUpButtons.style.display = "none"
    profilePicture.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <title>Document</title>
        <style>
            
          div.profilePicture img{
              width: 50px; 
              border-radius: 50%; 
              cursor: pointer; 
          }
          
          div.profilePictureIn img{
              width: 100px; 
              border-radius: 50%; 
              cursor: pointer; 
          }
          
          div.userProfile{
              position: fixed;
              background-color: #181826;
              box-shadow: 0px 0px 20px #474766;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              border-radius: 10px;
              z-index: 3;
              top: 100px;
              right: 60px;
              width: 300px;
              text-align: center;
              text-align: center;
              padding-top: 20px;
              color: white;
              Height: 350px;
          }
          
          a.ManageAccountLink{
              text-decoration: none;
              padding: 7px 15px;
              border-radius: 5px;
              color: black;
              background: white;
          }
          a.ManageAccountLink:hover{
              background: white;
              color: black;
              border: 2px solid black;
          }
          div.profilePicture{
              background: #eb279d;
              color: white;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              line-height: 50px;
              font-weight: bold;
              font-size: 18px;
              cursor: pointer;
              text-align: center;
          }
          img.topProfileImage{
              background: none;
              width: 55px;
              height: 55px;
              border-radius: 50%;
              cursor: pointer;
              text-align: center; 
          }
          div.profilePictureIn{
              background: #eb279d;
              color: white;
              width: 80px;
              height: 80px;
              border-radius: 50%;
              margin-left: 115px;
              margin-bottom: 20px;
              line-height: 80px;
              font-weight: bold;
              font-size: 30px;
              cursor: pointer;
          }
          img.inProfileImage{
              background: none;
              width: 110px;
              height: 110px;
              border-radius: 50%;
              margin-left: 99px;
              margin-bottom: 10px;
              cursor: pointer;
          }
          h3.names{
              font-size: 20px;
              padding-top: 15px;
              font-weight: bold;
              color: white;
              text-transform: unset;
          }
          div.profilePictureIn:hover{
              background: white;
              color: #eb279d;
          }
          p.userFetchedEmail{
              margin-top: -10px;
              margin-bottom: 50px;
              color: white;
              font-weight: bold;
              font-size: 16px;
              text-align: center;
          }
          div.switchAccount{
              border-top: 1px solid white;
              padding-top: 20px;
              margin-bottom: -30px;
          }
          p.switchAccountLink{
              border: 1px solid white; 
              padding: 5px; 
              border-radius: 5px; 
              cursor: pointer; 
              background: white;
              color: black;
          }
          p.switchAccountLink:hover{
              background: white;
              color: black;
          }
          a.switchAccountLink{
              border: 1px solid white; 
              padding: 7px 40px 7px 40px; 
              border-radius: 5px; 
              cursor: pointer; 
              background: white;
              color: black;
          }
          a.switchAccountLink:hover{
              background: white;
              color: black;
          }
          div.preNavLogin {
             padding-top: 20px;
            
          }
          div.preNavLogin:hover{
            cursor: pointer;
          }
          div.preNavLogin h5 a{
              text-decoration: none;
              padding: 7px 15px;
              border-radius: 5px;
              background: #eb279d;
              color: white;
          }
          
          div.preNavLogin h5 a:hover{
              border: 2px solid white;
          }
        </style>
    </head>
    <body>
        <div class="profilePicture" id="profilePicture">
          ${ourLoggedInUser.firstName.charAt(0)}${ourLoggedInUser.lastName.charAt(0)}
        </div>
            
        <div class="userProfile" id="userProfile">
            <div class="profilePictureIn" id="profilePictureIn">
            ${ourLoggedInUser.firstName.charAt(0)}${ourLoggedInUser.lastName.charAt(0)}
            </div>
            <h3 class="names" id="names">${ourLoggedInUser.firstName} ${ourLoggedInUser.lastName}</h3>
            <p class="userFetchedEmail" style="font-weight: 500;">${ourLoggedInUser.userEmail}</p>
            <div class="preNavLogin" style="border-top: 1px solid white;">
                <h5><a onClick="preNavLogoutUser()">Logout</a></h5>
            </div>
        </div>
        
    </body>
    </html>
    `

    const topProfileImage = document.getElementById("profilePicture");
    const UserProfile = document.getElementById("userProfile");
    UserProfile.style.display = "none"
    topProfileImage.addEventListener("click", ()=>{
        if(UserProfile.style.display !== "none"){
            UserProfile.style.display = "none"
        }
  
        else {
            UserProfile.style.display = "block"
        }
        })

    function preNavLogoutUser(){
        localStorage.removeItem("token")
        location = "index.html"
    }
}