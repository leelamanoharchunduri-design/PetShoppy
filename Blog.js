
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // BLOG FILTERING AND SEARCH
    // =====================================

    const petFilter = document.getElementById("petFilter");
    const topicFilter = document.getElementById("topicFilter");
    const blogSearch = document.getElementById("blogSearch");
    const clearFilters = document.getElementById("clearFilters");
    const articleCards = document.querySelectorAll(".blog-card");
    const articleCount = document.getElementById("articleCount");
    const noArticlesMessage = document.getElementById("noArticlesMessage");
    const articleGrid = document.getElementById("blogArticleGrid");

    function filterArticles() {

        const selectedPet = petFilter.value;
        const selectedTopic = topicFilter.value;
        const searchText = blogSearch.value.toLowerCase().trim();

        let visibleCount = 0;

        articleCards.forEach(card => {

            const cardPets = card.dataset.pet.split(" ");
            const cardTopic = card.dataset.topic;
            const cardTitle = card.dataset.title;
            const cardText = card.textContent.toLowerCase();

            const petMatch =
                selectedPet === "all" ||
                cardPets.includes(selectedPet);

            const topicMatch =
                selectedTopic === "all" ||
                cardTopic === selectedTopic;

            const searchMatch =
                cardTitle.includes(searchText) ||
                cardText.includes(searchText);

            const shouldShow =
                petMatch && topicMatch && searchMatch;

            card.style.display = shouldShow ? "block" : "none";

            if (shouldShow) {
                visibleCount++;
            }
        });

        articleCount.textContent =
            `Showing ${visibleCount} of ${articleCards.length} articles`;

        noArticlesMessage.style.display =
            visibleCount === 0 ? "block" : "none";

        articleGrid.style.display =
            visibleCount === 0 ? "none" : "grid";
    }

    petFilter.addEventListener("change", filterArticles);
    topicFilter.addEventListener("change", filterArticles);
    blogSearch.addEventListener("input", filterArticles);

    clearFilters.addEventListener("click", function () {

        petFilter.value = "all";
        topicFilter.value = "all";
        blogSearch.value = "";

        filterArticles();
    });

    filterArticles();


    // =====================================
    // MOBILE NAVIGATION
    // =====================================

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

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                mainNav.classList.remove("show");

                const icon = mobileMenuBtn.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }


    // =====================================
    // DARK MODE
    // =====================================

    const themeBtn = document.getElementById("themeBtn");

    function updateThemeIcon() {

        if (!themeBtn) return;

        const icon = themeBtn.querySelector("i");

        if (!icon) return;

        if (document.body.classList.contains("dark")) {
            icon.className = "fa-solid fa-sun";
        } else {
            icon.className = "fa-solid fa-moon";
        }
    }

    if (themeBtn) {

        updateThemeIcon();

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            const currentTheme =
                document.body.classList.contains("dark")
                    ? "dark"
                    : "light";

            localStorage.setItem("petshoppy-theme", currentTheme);

            updateThemeIcon();
        });
    }

    function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains("dark");

    themeBtn.innerHTML = isDarkMode
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
}


    // =====================================
    // RTL / LTR DIRECTION
    // =====================================

    const directionBtn = document.getElementById("directionBtn");

    if (directionBtn) {

        directionBtn.addEventListener("click", function () {

            const currentDirection =
                document.documentElement.getAttribute("dir") || "ltr";

            const newDirection =
                currentDirection === "ltr" ? "rtl" : "ltr";

            document.documentElement.setAttribute("dir", newDirection);

            localStorage.setItem("petshoppy-direction", newDirection);
        });
    }


    // =====================================
    // LOAD SAVED THEME AND DIRECTION
    // =====================================

    const savedTheme = localStorage.getItem("petshoppy-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeIcon();

    const savedDirection =
        localStorage.getItem("petshoppy-direction");

    if (savedDirection === "rtl" || savedDirection === "ltr") {
        document.documentElement.setAttribute("dir", savedDirection);
    }


    // =====================================
    // NEWSLETTER DEMO FORM
    // =====================================

    const newsletterForm =
        document.getElementById("newsletterForm");

    const newsletterEmail =
        document.getElementById("newsletterEmail");

    const newsletterMessage =
        document.getElementById("newsletterMessage");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!newsletterEmail.checkValidity()) {
                newsletterEmail.reportValidity();
                return;
            }

            newsletterMessage.textContent =
                "Thank you for your interest in PetShoppy!";

            newsletterForm.reset();
        });
    }

});
