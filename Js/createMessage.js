
const visitorName = document.getElementById('visitorName');
const visitorLastName = document.getElementById('visitorLastName');
const visitorEmail = document.getElementById('visitorEmail');
const visitorMessage = document.getElementById('visitorMessage');
const messageSubmitButton = document.getElementById('messageSubmitButton');
const contactForm = document.getElementById('contactForm')
const clientMessages = document.getElementById('clientMessages');

clientMessages.style.display = "none";

messageSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  clientMessages.style.display = "block";
  clientMessages.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`;
  contactMessage();
});

function contactMessage() {
  const data = {
    fname: visitorName.value,
    lname: visitorLastName.value,
    email: visitorEmail.value,
    message: visitorMessage.value
  };

  const sendData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
  };

  fetch("https://nice-ruby-squid-slip.cyclic.app/api/createMessage", sendData)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      if (data.message) {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = data.message;
      } if (data.successMessage && data.message) {
        clientMessages.style.color = "green";
        clientMessages.innerHTML = data.successMessage;
       


        contactForm.reset()
      setTimeout(()=>{location = "index.html"}, 2000)

      } else if (data.validationError) {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = data.validationError;
      } else {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = "Something went wrong, we were unable to register this account!";
      }
    });
}










