let pop = document.querySelector(".ord");

let ordDet = document.createElement("span");

let it_name = document.createElement("p");

let it_price = document.createElement("p");

let it_Quantity = document.createElement("p");

ordDet.appendChild(it_name);
ordDet.appendChild(it_price);
ordDet.appendChild(it_Quantity);

pop.appendChild(ordDet);

let ordereAdd = document.querySelector(".ordereAdd");
let addButtonItem = document.querySelectorAll(".addItem");


let counter;

addButtonItem.forEach((butt) => {
    butt.onclick = function() {
        it_name.textContent = this.parentElement.parentElement.children[1].textContent;
        it_price.textContent = this.parentElement.parentElement.children[2].textContent;
        it_Quantity.textContent = "Quantity: " + this.parentElement.parentElement.children[3].children[0].value;

        ordereAdd.style.display = "block";

        ordereAdd.style.animation = "none";
        void ordereAdd.offsetWidth;
        ordereAdd.style.animation = "pop 3s ease forwards";

        clearTimeout(counter);

        counter = setTimeout(() => {
            ordereAdd.style.display = "none";
        }, 3000);
    }
})


/******************************************************************************************/
let user = document.querySelector(".user");
let logout_btn = document.querySelector(".logout");

if (user) user.style.display = "none";

if (logout_btn) logout_btn.style.display = "none";

if (sessionStorage.getItem("loggedInUser")) {
    let nav_data = document.querySelector(".nav_data");
    let loggedInUser = sessionStorage.getItem("loggedInUser");
    
    if(nav_data.children.length > 0) {
        nav_data.removeChild(nav_data.children[nav_data.children.length - 1]);
    }
    
    user.style.display = "block";
    user.children[0].textContent = `Welcome, ${loggedInUser}`;
    user.children[0].style.color = "white";

    logout_btn.style.display = "block";

    logout_btn.addEventListener("click", (e) => {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    })
    
}
