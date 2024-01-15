const btnSubmit = document.querySelector("button");
const usernameInputField = document.querySelector("#username")
const userageInputField = document.querySelector("#age");
const loginMessage = document.querySelector(".login-message");

btnSubmit.addEventListener("click", () => {
    const usernameInput = usernameInputField.value.toLowerCase();
    const userageInput = userageInputField.value;
    
    if(usernameInput === "niko" && userageInput === "10") {
      console.log("Welcome back, Niko"); 
      loginMessage.textContent = "Welcome back, Niko.";
      loginMessage.style.color = "orange";
    } else {
        loginMessage.textContent = "Leave, this isn't your place.";
        loginMessage.style.color = "black";
    }
    
    // if(usernameInput !== "niko" || userageInput !== "10"){
    //     loginMessage.textContent = "Leave, this isn't your place.";
    //     loginMessage.style.color = "black";
    // } else {
    //     console.log("Welcome back, Niko");
    //     loginMessage.textContent = "Welcome back, Niko.";
    //     loginMessage.style.color = "orange";
    // }
});