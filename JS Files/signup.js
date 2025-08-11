// Password eye
let signup_form = document.querySelector("#signup-form");
let signup_pass = document.querySelector("#signup-pass");
let confirm_pass = document.querySelector("#confirm-pass");
const toggle_password = document.getElementById("toggle-password");
const toggle_confirm_password = document.getElementById("toggle-confirm-password");

toggle_password.addEventListener("click", () => {
    toggle_password.classList.toggle("fa-eye-slash");
    toggle_password.classList.toggle("fa-eye");
    signup_pass.type = signup_pass.type === "password" ? "text" : "password";
});

toggle_confirm_password.addEventListener("click", () => {
    toggle_confirm_password.classList.toggle("fa-eye-slash");
    toggle_confirm_password.classList.toggle("fa-eye");
    confirm_pass.type = confirm_pass.type === "password" ? "text" : "password";
});


// Password Verification And Store Data

signup_form.addEventListener('submit', function(e) {
    e.preventDefault();
    createAccount();
});

function createAccount() {
    let firstname = document.getElementById("firstname").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("signup-pass").value;
    let password_conf = document.getElementById("confirm-pass").value;
    let pass_msg = document.getElementById("pass-msg");

    sessionStorage.removeItem("loggedInUser");

    if(password === password_conf) {
        pass_msg.textContent = "";
        let accountData = {
            firstname: firstname,
            username: username,
            email: email,
            password: password
        };

        let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

        accounts.push(accountData);

        localStorage.setItem("accounts", JSON.stringify(accounts));

        alert("Account created successfully!");

        document.getElementById("firstname").value = "";
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("signup-pass").value = "";
        document.getElementById("confirm-pass").value = "";

        sessionStorage.setItem("loggedInUser", accountData.firstname);

        window.location.href = "index.html";
    }

    else {
        pass_msg.textContent = "Passwords do not match.";
    }
}
