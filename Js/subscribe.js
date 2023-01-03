const subscriberEmail = document.getElementById('subscriberEmail')



subscriptionButton.addEventListener("click" ,(event)=>{
    event.preventDefault();
    subscribe();
})

function subscribe(){


    var emailID = document.subscribeForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
  
   if ((atpos < 1 || dotpos - atpos < 2) && emailID == "") {
     alert("enter valid email id")
      
  
      document.myForm.email.focus();
    }
    else{
        var subscriber
        if(!localStorage.subscriber)
        {
            subscriber = []
        }
        
    
    else{
        subscriber = JSON.parse(localStorage.subscriber)
    
    }
    
    
    const subscribe = {}
    subscribe.email = subscriberEmail.value
    subscriber.push(subscribe)
    localStorage.subscriber = JSON.stringify(subscriber)
    
    setTimeout(()=>{location="#home"},1000)
    subscribeForm.reset();
    
    }

    }
  
