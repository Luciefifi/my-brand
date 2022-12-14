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
const nameErrorMesssage = document.getElementById('nameErrorMessage')
nameErrorMesssage.style.display="none"
const emailErrorMesssage = document.getElementById('emailErrorMessage')
emailErrorMesssage.style.display="none"

function validateContactForm() {
  if (document.myForm.Name.value == "") {
    nameErrorMesssage.style.display="block"
    nameErrorMesssage.style.color = "red"
    nameErrorMesssage.style.fontWeight = "bold"
    nameErrorMesssage.innerHTML = "username can not be empty"
    document.myForm.Name.focus();
    return false;
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


  //end of login form validation

//end of validation of signup form

