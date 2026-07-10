const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", function () {

    if(password.type === "password"){
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
    else{
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }

});


toggleConfirmPassword.addEventListener("click", function () {

    if(confirmPassword.type === "password"){
        confirmPassword.type = "text";
        toggleConfirmPassword.classList.remove("fa-eye");
        toggleConfirmPassword.classList.add("fa-eye-slash");
    }
    else{
        confirmPassword.type = "password";
        toggleConfirmPassword.classList.remove("fa-eye-slash");
        toggleConfirmPassword.classList.add("fa-eye");
    }

});


const form = document.querySelector(".form");

form.addEventListener("submit", function(e){

    if(password.value !== confirmPassword.value){

        e.preventDefault();

        alert("Confirm Password is incorrect!");

        confirmPassword.focus();

        return;
    }

    alert("Account Created Successfully!");

    window.location.href = "login.html";

});
