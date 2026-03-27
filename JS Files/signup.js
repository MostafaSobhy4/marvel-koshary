let signup_form = document.getElementById("signup-form");

let Fname = document.getElementById("firstname");
let Uname = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("signup-pass");
let Confpassword = document.getElementById("confirm-pass");

let Fname_error = document.getElementById("FnameError");
let Uname_error = document.getElementById("UnameError");
let email_error = document.getElementById("emailError");
let password_error = document.getElementById("passError");
let Confpassword_error = document.getElementById("confpassError");

const toggle_password = document.getElementById("toggle-password");
const toggle_Confpasswordword = document.getElementById("toggle-confirm-password");

toggle_password.addEventListener("click", () => {
    toggle_password.classList.toggle("fa-eye-slash");
    toggle_password.classList.toggle("fa-eye");
    password.type = password.type === "password" ? "text" : "password";
});

toggle_Confpasswordword.addEventListener("click", () => {
    toggle_Confpasswordword.classList.toggle("fa-eye-slash");
    toggle_Confpasswordword.classList.toggle("fa-eye");
    Confpassword.type = Confpassword.type === "password" ? "text" : "password";
});

let usernamePattern = /^[a-zA-Z0-9_]{3,}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

// Password Verification And Store Data

signup_form.addEventListener('submit', function(e) {
    e.preventDefault();
    createAccount();
});

function createAccount() {
    sessionStorage.removeItem("loggedInUser");

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    let usernameExists = accounts.some(acc => acc.username === Uname.value);

    Fname_error.textContent = "";
    Uname_error.textContent = "";
    email_error.textContent = "";
    password_error.textContent = "";
    Confpassword_error.textContent = "";

    let hasError = false;

    if (Fname.value.length < 3) {
        Fname_error.textContent = "First name must be longer than 2 characters";
        hasError = true;
    }

    else if (!usernamePattern.test(Uname.value)) {
        Uname_error.textContent = "Username must be valid";
        hasError = true;
    }

    else if (usernameExists) {
        Uname_error.textContent = "Username already exists!";
        hasError = true;
    }

    else if (!emailPattern.test(email.value)) {
        email_error.textContent = "Invalid email format";
        hasError = true;
    }

    else if (!passwordPattern.test(password.value)) {
        password_error.textContent = "Password must be at least 8 characters, include uppercase, number, and special character Like [!@#$%^&*].";
        hasError = true;
    }

    if (password.value !== Confpassword.value) {
        Confpassword_error.textContent = "Passwords do not match.";
        hasError = true;
    }

    if (hasError) return;

    let accountData = {
        firstname: Fname.value,
        username: Uname.value,
        email: email.value,
        password: password.value
    };

    accounts.push(accountData);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    signup_form.reset();

    sessionStorage.setItem("loggedInUser", accountData.firstname);

    alert("Account created successfully!");
    window.location.href = "index.html";
}
