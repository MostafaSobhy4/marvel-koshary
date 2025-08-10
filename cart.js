let username = sessionStorage.getItem("loggedInUser");
let cart = document.querySelector(".cart-page .container");
let orderList = document.querySelector(".orderList");
let orders = JSON.parse(localStorage.getItem(`Orders_${username}`)) || [];

console.log(orders)

let ordUl = document.createElement("ul");
ordUl.style.listStyle = "persian";

for (let i = 0; i < orders.length; i++) {
    let ordLi = document.createElement("li");
    let delItem = document.createElement("button");
    delItem.classList.add("delItem");
    delItem.textContent = "Delete This Item";
    ordLi.classList.add(`order#${i+1}`);

    ordLi.textContent = `${orders[i]["it_name"]} -
     ${orders[i]["it_price"]} -
      العدد: ${orders[i]["it_Quantity"]}`;

      ordLi.appendChild(delItem);

    ordUl.appendChild(ordLi);
}

cart.appendChild(ordUl);

let delItem = document.querySelectorAll(".delItem");

delItem.forEach((e, idx) => {
    e.onclick = function() {
        this.parentElement.remove();
        let orders = JSON.parse(localStorage.getItem(`Orders_${username}`)) || [];
        orders.splice(idx, 1);
        localStorage.setItem(`Orders_${username}`, JSON.stringify(orders));
    }
})

let user = document.querySelector(".user");
user.style.display = "none";

if (sessionStorage.getItem("loggedInUser")) {
    let nav_data = document.querySelector(".nav_data");
    let loggedInUser = sessionStorage.getItem("loggedInUser");
    
    if(nav_data.children.length > 0) {
        nav_data.removeChild(nav_data.children[nav_data.children.length - 1]);
    }
    
    user.style.display = "block";
    user.children[0].textContent = `Welcome, ${loggedInUser}`;
    user.children[0].style.color = "white";
}
