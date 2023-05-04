const token = localStorage.getItem("token")
const addProfile = document.getElementById("addProfile")
const loginSignUpButton = document.getElementById("loginSignUpButton")


if(!token){
  addProfile.style.display = "none"
}

else{
    loginSignUpButton.style.display = "none"
}

async function loggedInUser(){

    const getData = {
        method: "GET",
        headers: {"auth_token": JSON.parse(localStorage.getItem("token"))}
    }
    
    let response = await fetch("https://nice-ruby-squid-slip.cyclic.app/api/loggedInUser", getData)
    const fetchedData = await response.json()
    console.log(fetchedData)

    const ourLoggedInUser = fetchedData.loggedInUser
    
    addProfile.innerHTML = `
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
              background-image: url(../Assets/main3.jpeg);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              border-radius: 10px;
              z-index: 3;
              top: 85px;
              right: 60px;
              width: 350px;
              text-align: center;
              text-align: center;
              padding-top: 20px;
              color: white;
              height: auto;
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
              margin-left: 135px;
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

              padding: 7px 40px 7px 40px; 
              border-radius: 5px; 
              cursor: pointer; 
              background: #181826;
              font-weight: bold;
          }
          a.switchAccountLink:hover{
            border: 1px solid white; 
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
            <p class="userFetchedEmail" style="font-weight: 500;">${ourLoggedInUser.email}</p>
            
            <div class="switchAccount" style=" padding: 30px 50px 58px 50px; ">
            <a href="adminPanel.html" class="switchAccountLink" id="adminPanel"> 
            Admin Panel
            </a>
            <a href="index.html#contact" class="switchAccountLink" id="contactMe"> 
            Contact Me
            </a>
            </div>
            <div class="preNavLogin" style="border-top: 1px solid white;">
                <h5><a onClick="preNavLogoutUser()">Logout</a></h5>
            </div>
        </div>
        
    </body>
    </html>
    `

    const topProfileImage = document.getElementById("profilePicture");
    const UserProfile = document.getElementById("userProfile");
    const adminPanel = document.getElementById("adminPanel");
    const contactMe = document.getElementById("contactMe");
    UserProfile.style.display = "none"
    topProfileImage.addEventListener("click", ()=>{
        if(UserProfile.style.display !== "none"){
            UserProfile.style.display = "none"
        }
  
        else {
            UserProfile.style.display = "block"
        }
        })

    //Hide and show admin panel button
    if(ourLoggedInUser.role == "admin"){
        contactMe.style.display = "none"
    }
    else{
        adminPanel.style.display = "none"
    }

    
}

loggedInUser()

function preNavLogoutUser(){
    localStorage.removeItem("token")
    location = "index.html"
}

