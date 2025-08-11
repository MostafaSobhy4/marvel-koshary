let username = sessionStorage.getItem("loggedInUser");
let cart = document.querySelector(".cart-page .container");
let orders = JSON.parse(localStorage.getItem(`Orders_${username}`)) || [];

let ordUl = document.createElement("ul");
ordUl.classList.add("ordUl");
ordUl.style.listStyle = "decimal";

if (orders.length > 0) {
    let totalPrice = 0;

    orders.forEach((order, i) => {
        let ordLi = document.createElement("li");
        let delItem = document.createElement("button");
        delItem.classList.add("delItem");
        delItem.textContent = "Delete This Item";

        ordLi.textContent = `${order.it_name} - ${order.it_price} - العدد: ${order.it_Quantity}`;
        ordLi.appendChild(delItem);

        ordUl.appendChild(ordLi);

        let price = parseFloat(order.it_price);
        totalPrice += price * order.it_Quantity;

        delItem.onclick = function () {
            ordLi.remove();
            let updatedOrders = JSON.parse(localStorage.getItem(`Orders_${username}`)) || [];
            updatedOrders.splice(i, 1);
            localStorage.setItem(`Orders_${username}`, JSON.stringify(updatedOrders));

            if (updatedOrders.length === 0) {
                ordUl.remove();
                totalDiv.remove();
                buttonsDiv.remove();
                let emptyMessage = document.createElement("p");
                emptyMessage.textContent = "سلة المشتريات فارغه.";
                emptyMessage.style.fontSize = "20px";
                emptyMessage.style.marginRight = "15px";
                cart.appendChild(emptyMessage);
            }
        };
    });

    let totalDiv = document.createElement("div");
    totalDiv.textContent = `الإجمالي: ${totalPrice} EGP`;
    totalDiv.style.marginTop = "25px";
    totalDiv.style.fontWeight = "bold";
    totalDiv.style.marginRight = "15px";
    cart.appendChild(totalDiv);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("Buttons");
    buttonsDiv.style.cssText = "margin-top: 10px;";

    let checkoutBtn = document.createElement("button");
    checkoutBtn.textContent = "إتمام الطلب";
    checkoutBtn.style.cssText = "padding: 5px 10px;";
    checkoutBtn.onclick = function () {
        alert("تم إرسال طلبك بنجاح!");
        localStorage.removeItem(`Orders_${username}`);
        location.reload();
    };

    let clearBtn = document.createElement("button");
    clearBtn.textContent = "إفراغ السلة";
    clearBtn.style.cssText = "margin-top: 10px; padding: 5px 10px;";

    clearBtn.onclick = function () {
        localStorage.removeItem(`Orders_${username}`);
        location.reload();
    };

    buttonsDiv.appendChild(clearBtn);
    buttonsDiv.appendChild(checkoutBtn);
    cart.appendChild(ordUl);
    cart.appendChild(totalDiv);
    cart.appendChild(buttonsDiv);

} else {
    let emptyMessage = document.createElement("p");
    emptyMessage.textContent = "سلة المشتريات فارغه.";
    emptyMessage.style.fontSize = "20px";
    emptyMessage.style.marginRight = "15px";
    cart.appendChild(emptyMessage);
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
    user.children[0].textContent = `Welcome, ${sessionStorage.getItem("loggedInUser") || localStorage.getItem("loggedInUser")}`;
    user.children[0].style.color = "white";
}
