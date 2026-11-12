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




document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // SET MINIMUM BOOKING DATE
    // =====================================

    const bookingDate = document.getElementById("bookingDate");

    if (bookingDate) {

        const today = new Date();

        const localDate = [
            today.getFullYear(),
            String(today.getMonth() + 1).padStart(2, "0"),
            String(today.getDate()).padStart(2, "0")
        ].join("-");

        bookingDate.min = localDate;
    }


    // =====================================
    // SERVICE BOOKING BUTTONS
    // =====================================

    const serviceButtons = document.querySelectorAll(
        ".service-book-btn"
    );

    const serviceSelect = document.getElementById("serviceType");

    serviceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedService = button.dataset.service;

            if (serviceSelect) {
                serviceSelect.value = selectedService;
            }

        });

    });


    // =====================================
    // BOOKING FORM SUBMISSION
    // =====================================

    const bookingForm = document.getElementById(
        "serviceBookingForm"
    );

    const bookingMessage = document.getElementById(
        "bookingMessage"
    );

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!bookingForm.checkValidity()) {
                bookingForm.reportValidity();
                return;
            }

            const ownerName = document.getElementById(
                "ownerName"
            ).value.trim();

            const petName = document.getElementById(
                "petName"
            ).value.trim();

            const selectedService = serviceSelect.value;

            const selectedDate = bookingDate.value;

            bookingMessage.style.display = "block";

            bookingMessage.textContent =
                "Thank you, " + ownerName + "! Your demo booking " +
                "request for " + petName + " (" + selectedService +
                ") on " + selectedDate +
                " has been received on this page. " +
                "Please contact our team to confirm an appointment.";

            bookingForm.reset();

            bookingDate.min = [
                new Date().getFullYear(),
                String(new Date().getMonth() + 1).padStart(2, "0"),
                String(new Date().getDate()).padStart(2, "0")
            ].join("-");

            bookingMessage.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        });

    }

});





document.addEventListener("DOMContentLoaded", () => {

    const serviceSelect = document.getElementById("serviceType");
    const bookingSection = document.getElementById("booking");

    document.querySelectorAll("[data-service]").forEach(button => {

        button.addEventListener("click", () => {

            const selectedService = button.dataset.service;

            if (serviceSelect) {
                serviceSelect.value = selectedService;
            }

            if (bookingSection) {
                bookingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});








document.querySelectorAll(".pet-detail-link, .pet-banner-content [data-service]")
    .forEach(button => {

        button.addEventListener("click", function () {

            const serviceSelect = document.getElementById("serviceType");
            const bookingSection = document.getElementById("booking");

            if (serviceSelect && this.dataset.service) {
                serviceSelect.value = this.dataset.service;
            }

            if (bookingSection) {
                bookingSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


