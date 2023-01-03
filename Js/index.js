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


//end of contact form validation



//signup validation form

//login form validation


  //end of login form validation

//end of validation of signup form

