
// Mobile Navigation

const dogMenu = document.getElementById("dogMenu");
const dogNavigation = document.querySelector(".dog-navigation");

if (dogMenu && dogNavigation) {
    dogMenu.addEventListener("click", () => {
        dogNavigation.classList.toggle("show");
    });
}

// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    const themeIcon = themeBtn.querySelector("i");

    if (localStorage.getItem("petshoppy-theme") === "dark") {
        document.body.classList.add("dark");
        themeIcon.className = "fa-solid fa-sun";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        localStorage.setItem(
            "petshoppy-theme",
            isDark ? "dark" : "light"
        );

        themeIcon.className = isDark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
    });
}



function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains("dark");

    themeBtn.innerHTML = isDarkMode
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
}

// RTL / LTR Direction

const directionBtn = document.getElementById("directionBtn");

if (directionBtn) {
    if (localStorage.getItem("petshoppy-direction") === "rtl") {
        document.documentElement.dir = "rtl";
    }

    directionBtn.addEventListener("click", () => {
        const isRTL = document.documentElement.dir !== "rtl";

        document.documentElement.dir = isRTL ? "rtl" : "ltr";

        localStorage.setItem(
            "petshoppy-direction",
            isRTL ? "rtl" : "ltr"
        );
    });
}

// Demo Add to Cart

document.querySelectorAll(".dog-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to your demo shopping cart!");
    });
});
