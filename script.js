document.addEventListener("DOMContentLoaded", function () {

    let cart = {};
    let total = 0;

    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    const orderBtn = document.getElementById("orderBtn");

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {

            const name = card.querySelector("h3").innerText;
            const priceText = card.querySelector("p").innerText;
            const price = parseInt(priceText.replace("₹", ""));

            if (cart[name]) {
                cart[name].qty += 1;
            } else {
                cart[name] = { price: price, qty: 1 };
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        total = 0;

        for (let item in cart) {

            let li = document.createElement("li");

            let itemTotal = cart[item].price * cart[item].qty;
            total += itemTotal;

            li.innerHTML =
                item + " x " + cart[item].qty + " = ₹" + itemTotal +
                ' <button class="remove">X</button>';

            li.querySelector(".remove").addEventListener("click", function() {
                delete cart[item];
                updateCart();
            });

            cartItems.appendChild(li);
        }

        totalDisplay.innerText = total;
    }

    orderBtn.addEventListener("click", function () {

        if (Object.keys(cart).length === 0) {
            alert("Cart is empty!");
            return;
        }

        let orderDetails = "Your Order:\n";

        for (let item in cart) {
            orderDetails += item + " x " + cart[item].qty + "\n";
        }

        orderDetails += "\nTotal: ₹" + total;

        alert(orderDetails + "\n\nOrder Placed Successfully");

        cart = {};
        updateCart();
    });
const btn = document.querySelector(".hero-btn");

btn.addEventListener("click", function() {
    document.querySelector("#menu").scrollIntoView({
        behavior: "smooth"
    });
});
});