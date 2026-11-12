
// LIGHT AND DARK MODE
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("petshoppy-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function updateThemeIcon() {
    themeBtn.innerHTML = document.body.classList.contains("dark")
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
}

updateThemeIcon();

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("petshoppy-theme", currentTheme);
    updateThemeIcon();
});



function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains("dark");

    themeBtn.innerHTML = isDarkMode
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
}


// RTL / LTR DIRECTION
const directionBtn = document.getElementById("directionBtn");

const savedDirection = localStorage.getItem("petshoppy-direction");

if (savedDirection) {
    document.documentElement.dir = savedDirection;
}

directionBtn.addEventListener("click", () => {
    const currentDirection =
        document.documentElement.dir === "rtl" ? "ltr" : "rtl";

    document.documentElement.dir = currentDirection;

    localStorage.setItem("petshoppy-direction", currentDirection);
});


// ================= WISHLIST =================

document.querySelectorAll(".wishlist-btn").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if (button.classList.contains("active")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }

    });

});


// ================= ADD TO CART =================

let cartCount = 0;

document.querySelectorAll(".add-cart-btn").forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        const productName = button.dataset.product;

        alert(
            productName +
            " added to your demo cart!\n" +
            "Cart items: " + cartCount
        );

    });

});


// ================= NEWSLETTER =================

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm?.addEventListener("submit", event => {

    event.preventDefault();

    const email = document.getElementById("newsletterEmail").value;

    if (email.trim() !== "") {

        alert("Thank you for subscribing to PetShoppy!");

        newsletterForm.reset();

    }

});


// ================= MOBILE DROPDOWN =================

document.querySelectorAll(".dropdown-toggle").forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        const parent = button.closest(".nav-item");

        parent.classList.toggle("open");

    });

});
