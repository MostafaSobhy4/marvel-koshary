let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let username = document.querySelector("#log-username");
let password = document.querySelector("#log-password");

let loginForm = document.querySelector("#login-form");
let pass_msg = document.querySelector("#pass-msg");

let login_pass = document.querySelector("#log-password");
const toggle_password = document.getElementById("toggle-password");

toggle_password.addEventListener("click", () => {
    toggle_password.classList.toggle("fa-eye-slash");
    toggle_password.classList.toggle("fa-eye");
    login_pass.type = login_pass.type === "password" ? "text" : "password";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    pass_msg.textContent = "";
    sessionStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser");

    let loggedIn = false;
    let radio = document.querySelector('.sLog');

    for (let i = 0; i < accounts.length; i++) {
        if(accounts[i]["username"] === username.value && accounts[i]["password"] === password.value) {
            loggedIn = true;
            if (radio.checked)
                localStorage.setItem("loggedInUser", accounts[i]["firstname"]);
            else sessionStorage.setItem("loggedInUser", accounts[i]["firstname"]);
            break;
        }
    }

    if(loggedIn) {
        alert("You have successfully logged in!");
        window.location.href = "index.html";
    } else {
        pass_msg.style.marginTop = "15px";
        pass_msg.textContent = "Username or password is incorrect.";
    }
});
