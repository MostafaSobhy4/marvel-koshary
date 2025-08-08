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




