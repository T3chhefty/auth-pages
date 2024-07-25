
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const passwordEye = document.getElementById("password-eye");
    const showIcon = "assets/img/show.png";
    const hideIcon = "assets/img/hide.png";

    // Initially set the eye icon to show
    let isPasswordVisible = false;

    // Toggle password visibility on click
    passwordEye.addEventListener("click", function() {
        isPasswordVisible = !isPasswordVisible;
        passwordEye.src = isPasswordVisible ? hideIcon : showIcon;
        passwordInput.type = isPasswordVisible ? "text" : "password";
    });
});