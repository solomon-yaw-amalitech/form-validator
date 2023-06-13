"use strict";

const form = document.querySelector("#form");
const message = document.querySelector("#message");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");


let isValid = false;
let passwordMatch = false;

function validateForm(){
  isValid = form.checkValidity();
  console.log(isValid);

  if(!isValid){
    message.textContent = "Please fill all fields";
    message.style.color = "red";
  }
  else{
    if(password1.value===password2.value){
        passwordMatch = true;
        password1.style.borderColor ="green";
        password2.style.borderColor ="green";
    }
    else{
        passwordMatch = false;
        message.textContent="Make sure password match";

        password1.style.borderColor ="red";
        password2.style.borderColor ="red";
        return;
    }
    if(isValid && passwordMatch)
  {
    message.textContent = "Register successfully";
    message.style.color ="green"
  }

  }

}

form.addEventListener("submit", function(event){

    event.preventDefault();

    validateForm();
})


