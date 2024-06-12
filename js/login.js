// في login.js

document.addEventListener("DOMContentLoaded", function() {
    var loginBtn = document.querySelector(".login-btn");
    var inputWarning = document.querySelector(".input-warning");
    var emailExist = document.querySelector(".email-exist");
    var successfulSignup = document.querySelector(".successful-signup");
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");

    loginBtn.addEventListener("click", function() {
        if (loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
            inputWarning.classList.remove("d-none");
            emailExist.classList.add("d-none");
            successfulSignup.classList.add("d-none");
        } else {
            // تحديد موقع صفحة الترحيب
            var helloPage = "./index.html";

            // تحويل المستخدم إلى صفحة الترحيب
            window.location.href = helloPage;
        }
    });
});