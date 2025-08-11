// Welcome To User

let user = document.querySelector(".user");
let logout_btn = document.querySelector(".logout");

if (user) user.style.display = "none";

if (logout_btn) logout_btn.style.display = "none";

if (sessionStorage.getItem("loggedInUser") || localStorage.getItem("loggedInUser")) {
    let nav_data = document.querySelector(".nav_data");
    let loggedInUser = "";
    if (sessionStorage.getItem("loggedInUser")){
        loggedInUser = sessionStorage.getItem("loggedInUser");
    }
    else if (localStorage.getItem("loggedInUser")){
        loggedInUser = localStorage.getItem("loggedInUser");
    }
        
    
    if(nav_data.children.length > 0) {
        nav_data.removeChild(nav_data.children[nav_data.children.length - 1]);
    }
    
    user.style.display = "block";
    user.children[0].textContent = `Welcome, ${loggedInUser}`;
    user.children[0].style.color = "white";

    logout_btn.style.display = "block";

    logout_btn.addEventListener("click", (e) => {
        sessionStorage.removeItem("loggedInUser");
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    })
    
}


/******************************************************************************************/


// Pop Order & Store Order Details

let pop = document.querySelector(".ord");
let ordDet = document.createElement("span");
let orderAdd = document.querySelector(".orderAdd");
let addButtonItem = document.querySelectorAll(".addItem");

if (sessionStorage.getItem("loggedInUser") || localStorage.getItem("loggedInUser")) {

    let go2shop = document.querySelector(".go2shop");
    let it_name = document.createElement("p");
    let it_price = document.createElement("p");
    let it_Quantity = document.createElement("p");


    ordDet.appendChild(it_name);
    ordDet.appendChild(it_price);
    ordDet.appendChild(it_Quantity);

    go2shop.before(ordDet);
    go2shop.style.marginBottom = "5px";


    let counter;

    addButtonItem.forEach((butt) => {
        butt.onclick = function() {
            it_name.textContent = this.parentElement.parentElement.children[1].textContent;
            it_price.textContent = this.parentElement.parentElement.children[2].textContent;
            it_Quantity.textContent = "Quantity: " + this.parentElement.parentElement.children[3].children[0].value;

            orderAdd.style.display = "block";

            orderAdd.style.animation = "none";
            void orderAdd.offsetWidth;
            orderAdd.style.animation = "pop 3s ease forwards";

            clearTimeout(counter);

            counter = setTimeout(() => {
                orderAdd.style.display = "none";
            }, 5000);

            let OrderDetails = {
                it_name: it_name.textContent,
                it_price: it_price.textContent,
                it_Quantity: parseInt(it_Quantity.textContent.match(/\d+/)[0]),
            };

            let Orders = JSON.parse(localStorage.getItem(`Orders_${sessionStorage.getItem("loggedInUser")}`)) || [];
            Orders.push(OrderDetails);
            localStorage.setItem(`Orders_${sessionStorage.getItem("loggedInUser")}`, JSON.stringify(Orders));

        }
    })
}


else {
    let counter;
    let must = document.createElement("p");
    let go2login = document.createElement("a");
    go2login.textContent = "Press Here To Login First";
    orderAdd.appendChild(must);
    orderAdd.appendChild(go2login);
    go2login.href = "login.html";
    go2login.style.display = "block";

    addButtonItem.forEach((butt) => {
        butt.onclick = function() {
            must.textContent = "Please login first to add orders.";

            orderAdd.style.display = "block";

            orderAdd.style.animation = "none";
            void orderAdd.offsetWidth;
            orderAdd.style.animation = "pop 3s ease forwards";

            clearTimeout(counter);

            counter = setTimeout(() => {
                orderAdd.style.display = "none";
            }, 5000);
        }
    });
    pop.remove();
    let cartlogo = document.querySelector(".cartlogo");
    cartlogo.remove();
}
