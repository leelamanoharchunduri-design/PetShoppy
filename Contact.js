
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mainNav = document.getElementById("mainNav");

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener("click", function () {
            mainNav.classList.toggle("show");

            const icon = mobileMenuBtn.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });
    }


    // DARK MODE
    const themeBtn = document.getElementById("themeBtn");

    function updateThemeIcon() {
        if (!themeBtn) return;

        const icon = themeBtn.querySelector("i");

        if (!icon) return;

        icon.className = document.body.classList.contains("dark")
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
    }

    const savedTheme = localStorage.getItem("petshoppy-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeIcon();

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            const theme = document.body.classList.contains("dark")
                ? "dark"
                : "light";

            localStorage.setItem("petshoppy-theme", theme);

            updateThemeIcon();
        });
    }

    function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains("dark");

    themeBtn.innerHTML = isDarkMode
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
}


    // RTL DIRECTION
    const directionBtn = document.getElementById("directionBtn");

    const savedDirection = localStorage.getItem("petshoppy-direction");

    if (savedDirection === "rtl") {
        document.documentElement.dir = "rtl";
    }

    if (directionBtn) {
        directionBtn.addEventListener("click", function () {

            const currentDirection = document.documentElement.dir;

            const newDirection = currentDirection === "rtl"
                ? "ltr"
                : "rtl";

            document.documentElement.dir = newDirection;

            localStorage.setItem("petshoppy-direction", newDirection);
        });
    }


    // SET MINIMUM VET APPOINTMENT DATE
    const vetDate = document.getElementById("vetDate");

    if (vetDate) {
        const today = new Date();
        const localDate = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().split("T")[0];

        vetDate.min = localDate;
    }


    // CONTACT FORM
    const contactForm = document.getElementById("contactForm");
    const contactStatus = document.getElementById("contactStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            contactStatus.textContent =
                "Your enquiry has been validated. Connect this form to your email or backend to receive messages.";

            contactForm.reset();
        });
    }


    // VET APPOINTMENT FORM
    const vetForm = document.getElementById("vetForm");
    const vetStatus = document.getElementById("vetStatus");

    if (vetForm) {
        vetForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!vetForm.checkValidity()) {
                vetForm.reportValidity();
                return;
            }

            vetStatus.textContent =
                "Your appointment request has been validated. Please wait for confirmation from the store or veterinary provider.";

            vetForm.reset();
        });
    }

});
