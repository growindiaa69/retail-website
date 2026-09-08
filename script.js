function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}

/* AUTH */
function signup() {
    if (spass.value !== scpass.value) {
        smsg.innerText = "Passwords do not match";
        return;
    }
    localStorage.setItem("user",
        JSON.stringify({ email: semail.value, pass: spass.value })
    );
    smsg.innerText = "Signup successful!";
}

function login() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === lemail.value && user.pass === lpass.value) {
        localStorage.setItem("loggedIn", "true");
        loginLink.style.display = "none";
        logoutBtn.style.display = "inline";
        showPage('home');
    } else {
        lmsg.innerText = "Invalid login";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    loginLink.style.display = "inline";
    logoutBtn.style.display = "none";
}

/* CART */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function loadCart() {
    let sum = 0;
    cartItems.innerHTML = "";
    cart.forEach(i => {
        cartItems.innerHTML += `<p>${i.name} - ₹${i.price}</p>`;
        sum += i.price;
    });
    total.innerText = "Total: ₹" + sum;
    bill.innerText = "Final Amount: ₹" + sum;
}

document.addEventListener("click", loadCart);
