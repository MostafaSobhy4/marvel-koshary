let username = sessionStorage.getItem("loggedInUser");
let cart = document.querySelector(".cart-page .container");
let orders = JSON.parse(localStorage.getItem(`Orders_${username}`)) || [];

let ordUl = document.createElement("ul");
ordUl.classList.add("ordUl");
ordUl.style.listStyle = "decimal";

if (orders.length > 0) {
    orders.forEach((order, i) => {
        let ordLi = document.createElement("li");
        let delItem = document.createElement("button");
        delItem.classList.add("delItem");
        delItem.textContent = "Delete This Item";

        ordLi.textContent = `${order.it_name} - ${order.it_price} - العدد: ${order.it_Quantity}`;
        ordLi.appendChild(delItem);

        ordUl.appendChild(ordLi);

        delItem.onclick = function () {
            ordLi.remove();
            let updatedOrders = JSON.parse(localStorage.getItem(`Orders_${username}`)) || [];
            updatedOrders = updatedOrders.filter((_, index) => index !== i);
            localStorage.setItem(`Orders_${username}`, JSON.stringify(updatedOrders));

            if (updatedOrders.length === 0) {
                ordUl.remove();
                let emptyMessage = document.createElement("p");
                emptyMessage.textContent = "سلة المشتريات فارغه.";
                cart.appendChild(emptyMessage);
            }
        };
    });

    cart.appendChild(ordUl);
} else {
    let emptyMessage = document.createElement("p");
    emptyMessage.textContent = "سلة المشتريات فارغه.";
    cart.appendChild(emptyMessage);
    emptyMessage.style.fontSize = "20px";
    emptyMessage.style.marginRight = "15px";
}

/*******************************************************************************************/

let user = document.querySelector(".user");
user.style.display = "none";

if (sessionStorage.getItem("loggedInUser") || localStorage.getItem("loggedInUser")) {
    let nav_data = document.querySelector(".nav_data");
    let loggedInUser = sessionStorage.getItem("loggedInUser");
    
    if(nav_data.children.length > 0) {
        nav_data.removeChild(nav_data.children[nav_data.children.length - 1]);
    }
    
    user.style.display = "block";
    user.children[0].textContent = `Welcome, ${loggedInUser}`;
    user.children[0].style.color = "white";
}
