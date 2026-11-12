
document.addEventListener("DOMContentLoaded", function () {

    // THEME TOGGLE
    const themeBtn = document.getElementById("themeBtn");
    const themeIcon = themeBtn?.querySelector("i");

    const savedTheme = localStorage.getItem("petshoppy-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    function updateThemeIcon() {
        if (!themeIcon) return;

        themeIcon.className = document.body.classList.contains("dark")
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
    }

    updateThemeIcon();

    themeBtn?.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        const theme = document.body.classList.contains("dark")
            ? "dark"
            : "light";

        localStorage.setItem("petshoppy-theme", theme);
        updateThemeIcon();
    });


    function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains("dark");

    themeBtn.innerHTML = isDarkMode
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
}


    // RTL / LTR TOGGLE
    const directionBtn = document.getElementById("directionBtn");

    const savedDirection = localStorage.getItem("petshoppy-direction");

    if (savedDirection) {
        document.documentElement.dir = savedDirection;
    }

    directionBtn?.addEventListener("click", function () {
        const currentDirection = document.documentElement.dir || "ltr";
        const newDirection = currentDirection === "ltr" ? "rtl" : "ltr";

        document.documentElement.dir = newDirection;

        localStorage.setItem("petshoppy-direction", newDirection);
    });


    // WISHLIST BUTTONS
    document.querySelectorAll(".premium-wishlist").forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.toggle("active");

            const icon = button.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-regular");
                icon.classList.toggle("fa-solid");
            }

        });

    });


    // DEMO ADD TO CART
    document.querySelectorAll(".premium-add-cart").forEach(function (button) {

        button.addEventListener("click", function () {

            const productCard = button.closest(".premium-product-card");
            const productName = productCard?.querySelector("h3")?.textContent || "Product";

            alert(productName + " added to your demo cart!");

        });

    });


    // NEWSLETTER DEMO
    const newsletterForm = document.getElementById("premiumNewsletterForm");

    newsletterForm?.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = newsletterForm.querySelector("input").value.trim();

        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        alert("Thank you for subscribing to PetShoppy!");

        newsletterForm.reset();

    });


    // MOBILE DROPDOWN
    document.querySelectorAll(".navigation .dropdown > .nav-link").forEach(function (link) {

        link.addEventListener("click", function (event) {

            if (window.innerWidth <= 1000) {
                event.preventDefault();

                const parent = link.closest(".dropdown");
                parent.classList.toggle("open");

            }

        });

    });

});
