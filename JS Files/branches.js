let user = document.querySelector(".user");
user.style.display = "none";

if (sessionStorage.getItem("loggedInUser") || localStorage.getItem("loggedInUser")) {
    let nav_data = document.querySelector(".nav_data");
    let loggedInUser = sessionStorage.getItem("loggedInUser");
    
    if(nav_data.children.length > 0) {
        nav_data.removeChild(nav_data.children[nav_data.children.length - 1]);
    }
    
    user.style.display = "block";
    user.children[0].textContent = `Welcome, ${sessionStorage.getItem("loggedInUser") || localStorage.getItem("loggedInUser")}`;
    user.children[0].style.color = "white";
}