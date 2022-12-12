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

function validateSignUpForm()
{
    if(document.signUpForm.fname.value=="")
    {
alert("your first name plaease");
document.signUpForm.fname.focus();
return false;
    }

    if(document.signUpForm.lname.value=="")
    {
        alert('your last name please');
        document.signUpForm.lname.focus();
        return false;
    }

    var emailAddress = document.signUpForm.emaddress.value;
  atpos = emailAddress.indexOf("@");
  dotpos = emailAddress.lastIndexOf(".");

  if ((atpos < 1 || dotpos - atpos < 2) && emailAddress == "") {
    alert("Please enter correct email ID");
    document.signUpForm.emaddress.focus();
    return false;
  }

  var pwd = document.signUpForm.pwd.value;
  if(pwd=="")
  {
    alert("password must be filled");
    document.signUpForm.pwd.focus();
    return false;
  }
  if(pwd.length < 8)
  {
    alert("password should have atleast 8 characters");
    alert("password must be filled");
    document.signUpForm.pwd.focus();
    return false;

  }

  var repwd = document.signUpForm.repwd.value;
  if(repwd != pwd){
    alert('passwords should be the same!');
    document.signUpForm.repwd.focus();
    return false
  }
  return true;

}
//end of validation of signup form

