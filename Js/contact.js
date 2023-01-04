
const vistorName = document.getElementById("visitorName")
const vistorEmail = document.getElementById('visitorEmail')
const vistorTel = document.getElementById('visitorTel')
const vistorMessage = document.getElementById('visitorMessage')
const nameErrorMesssage = document.getElementById('nameErrorMessage')
nameErrorMesssage.style.display="none"
const emailErrorMesssage = document.getElementById('emailErrorMessage')
emailErrorMesssage.style.display="none"
const phoneErrorMessage = document.getElementById('phoneErrorMessage')
phoneErrorMessage.style.display = "none"
const errorMessage = document.getElementById("errorMessage")
errorMessage.style.display = "none"
const messageSentMessage = document.getElementById('messageSentMessage')
messageSentMessage.style.display="none"
const hireMeButton =  document.getElementById('messageSubmitButton')



hireMeButton.addEventListener("click" , (event)=>{
    event.preventDefault();
    hireMe();
})
function hireMe() {
  if (document.myForm.Name.value == "") {
    nameErrorMesssage.style.display="block"
    nameErrorMesssage.style.color = "red"
    nameErrorMesssage.style.fontWeight = "bold"
    nameErrorMesssage.innerHTML = "username can not be empty"
    document.myForm.Name.focus();
   
  }

  var emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

 if ((atpos < 1 || dotpos - atpos < 2) && emailID == "") {
    emailErrorMesssage.style.display="block"
    emailErrorMesssage.style.color = "red"
    emailErrorMesssage.style.fontWeight = "bold"
    emailErrorMesssage.innerHTML = "enter valid email address!"
    

    document.myForm.email.focus();
  }

  else if (document.myForm.telephone.value == "") {
    alert("please provide your phone number!");
    document.myForm.telephone.focus();
    
  }
  else if (document.myForm.message.value == 0) {
    alert("please provide your message!");
    document.myForm.message.focus();
    
  }
  
 
 
 else{
    
    var messages;
    if(!localStorage.messages){
        messages = []
    }
    else{
        messages = JSON.parse(localStorage.messages)
    }

    const message = {}
    message.Name = visitorName.value;
    message.Email = visitorEmail.value;
    message.Tel = visitorTel.value;
    message.Message = visitorMessage.value;
    console.log(vistorName);

    messages.push(message)
    localStorage.messages = JSON.stringify(messages)
    messageSentMessage.style.display = "block"
    messageSentMessage.style.color = "green"
    messageSentMessage.style.fontWeight = "bold"
    messageSentMessage.innerHTML = "message sent !!!!"
    
      setTimeout(()=>{location="#home"},1000)
      myForm.reset();
      nameErrorMesssage.style.display="none"
      emailErrorMesssage.style.display="none"
      phoneErrorMessage.style.display = "none"
      errorMessage.style.display = "none"
      
     

    

   


 }

}