const passwordInput = document.getElementById("password");
const eyeOpenIcon = document.getElementById("eyeopen");
const eyeCloseIcon = document.getElementById("eyeclose");

// Initially hide the eye-slash icon
eyeCloseIcon.style.display = "none";

function eyeOpen() {
    // Show password
    passwordInput.type = "text";
    eyeOpenIcon.style.display = "none";
    eyeCloseIcon.style.display = "inline";
}

function eyeClose() {
    // Hide password
    passwordInput.type = "password";
    eyeOpenIcon.style.display = "inline";
    eyeCloseIcon.style.display = "none";
}
