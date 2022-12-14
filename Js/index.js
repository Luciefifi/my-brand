//Phone Navigation Bar

const toggleButton = document.getElementById("toggleButton");
const closeButton = document.getElementById("closeButton");
const nav = document.getElementById("menu");
nav.classList.remove("menu-btn");

toggleButton.addEventListener("click", function () {
  nav.classList.add("menu-btn");
});

nav.addEventListener("click", function () {
  nav.classList.remove("menu-btn");
});

// contactform validation

function validateContactForm() {
  if (document.myForm.Name.value == "") {
    alert("Please provide your name!");
    document.myForm.Name.focus();
    return false;
  }

  var emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if ((atpos < 1 || dotpos - atpos < 2) && emailID == "") {
    alert("Please enter correct email ID");
    document.myForm.email.focus();
  }

  if (document.myForm.telephone.value == "") {
    alert("please provide your phone number!");
    document.myForm.telephone.focus();
    return false;
  }
  if (document.myForm.message.value == "") {
    alert("please provide your message!");
    document.myForm.message.focus();
    return false;
  }
  return true;
}
//end of contact form validation



//signup validation form

//login form validation

function validateLoginForm() {
    var userEmail = document.loginForm.email.value;
    atpos = userEmail.indexOf("@");
    dotpos = userEmail.lastIndexOf(".");
  
    if ((atpos < 1 || dotpos - atpos < 2) && userEmail == "") {
      alert("Please enter correct email ID");
      document.myForm.email.focus();
    }
    if (document.loginForm.pwd.value == "" ) {
      alert("please password is required!");
      document.loginForm.pwd.focus();
      return false;
    }

    return true;
  }
  //end of login form validation
 
function validateSignUpForm(){
  
   

}
//end of validation of signup form

