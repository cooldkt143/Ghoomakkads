'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// linking home page 
function openHome(){
  window.location.href="index.html";
}

// linking about us page 
function openAbout(){
  window.location.href="AboutUs.html";
}

// linking contact us page 
function openContact(){
  window.location.href="ContactUs.html";
}

//linking log in page 
function openLogIn(){
  window.location.href="SignIn.html";
}

//linking Sign Up page 
function openSignUp(){
  window.location.href="SignUp.html";
}

//linking tour page 
function openTour(){
  window.location.href="tourpage.html";
}

//linking destination page 
function openDestination(){
  window.location.href= "destination.html";
}

//linking Register page 
function openRegister(){
  window.location.href="Register.html";
}

//linking profile page 
function openProfile(){
  window.location.href="Profile.html";
}


//linking Chat with Ai page 
function openChatwithAI(){
  window.location.href="chatAi.html";
}

//linking Adventure Hub page 
function openAdventure(){
  window.location.href="adventurehub.html";
}

//set signup and sign in button
let profile = document.querySelector(".profile_logo");

profile.classList.remove("hide")

let login = document.querySelector(".btn");

login.classList.add("hide");

let signup = document.querySelector(".btn1");

signup.classList.add("hide");
