


// في hello.js

document.addEventListener("DOMContentLoaded", function() {
    var logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function() {
        // تحديد موقع صفحة تسجيل الخروج
        var loginPage = "./login.html";

        // تحويل المستخدم إلى صفحة تسجيل الخروج
        window.location.href = loginPage;

    });
    
});
