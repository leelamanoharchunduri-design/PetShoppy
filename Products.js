document.addEventListener("DOMContentLoaded", () => {

    // ==================================
    // ELEMENTS
    // ==================================

    const productCards = [...document.querySelectorAll(".product-card")];
    const productGrid = document.getElementById("productGrid");
    const productSearch = document.getElementById("productSearch");
    const sortProducts = document.getElementById("sortProducts");
    const resultCount = document.getElementById("productResultCount");
    const noProducts = document.getElementById("noProducts");

    const wishlistCount = document.getElementById("wishlistCount");
    const cartCount = document.getElementById("cartCount");

    const drawer = document.getElementById("shopDrawer");
    const overlay = document.getElementById("shopOverlay");
    const drawerTitle = document.getElementById("drawerTitle");
    const drawerItems = document.getElementById("drawerItems");
    const drawerTotal = document.getElementById("drawerTotal");
    const drawerFooter = document.getElementById("drawerFooter");

    const checkoutButton = document.getElementById("demoCheckoutBtn");
    const checkoutSection = document.getElementById("checkoutSection");
    const closeCheckout = document.getElementById("closeCheckout");
    const checkoutForm = document.getElementById("checkoutForm");

    // ==================================
    // STORAGE
    // ==================================

    const CART_KEY = "petshoppy-cart";
    const WISHLIST_KEY = "petshoppy-wishlist";

    const FALLBACK_IMAGE =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="400">
                <rect width="100%" height="100%" fill="#f2f7f6"/>
                <text x="50%" y="48%" text-anchor="middle"
                    font-family="Arial" font-size="28" fill="#147D78">
                    PetShoppy
                </text>
                <text x="50%" y="58%" text-anchor="middle"
                    font-family="Arial" font-size="18" fill="#555">
                    Image Not Available
                </text>
            </svg>
        `);

    function loadStorage(key) {
        try {
            const data = JSON.parse(localStorage.getItem(key) || "[]");
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error("Storage loading error:", error);
            return [];
        }
    }

    function normalizeCart(items) {
        return items
            .filter(item => item && item.id)
            .map(item => ({
                id: String(item.id),
                name: item.name || "Pet Product",
                price: Number(
                    String(item.price ?? item.productPrice ?? 0)
                        .replace(/[^\d.]/g, "")
                ) || 0,
                image: item.image || FALLBACK_IMAGE,
                quantity: Math.max(
                    1,
                    Math.floor(Number(item.quantity ?? item.qty ?? 1) || 1)
                )
            }));
    }

    let wishlist = loadStorage(WISHLIST_KEY)
        .filter(id => typeof id === "string");

    let cart = normalizeCart(loadStorage(CART_KEY));

    let selectedPet = "all";
    let selectedCategory = "all";
    let activeDrawer = "cart";

    function saveData() {
        try {
            localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
            return true;
        } catch (error) {
            console.error("Unable to save shopping data:", error);
            return false;
        }
    }

    function formatPrice(amount) {
        return "₹" + Number(amount || 0).toLocaleString("en-IN");
    }

    function getProduct(id) {
        return productCards.find(card => card.dataset.id === id);
    }

    function productDetails(card) {
        const image = card.querySelector(".product-image img");

        return {
            id: card.dataset.id,
            name: card.dataset.name,
            price: Number(card.dataset.price) || 0,
            image: image ? image.getAttribute("src") : FALLBACK_IMAGE
        };
    }

    function setImageFallback(image) {
        image.onerror = function () {
            this.onerror = null;
            this.src = FALLBACK_IMAGE;
        };
    }

    // ==================================
    // CART TOTAL AND COUNTS
    // ==================================

    function getCartTotal() {
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    function updateHeaderCounts() {

        if (wishlistCount) {
            wishlistCount.textContent = wishlist.length;
        }

        if (cartCount) {
            const totalQuantity = cart.reduce(
                (total, item) => total + item.quantity,
                0
            );

            cartCount.textContent = totalQuantity;
        }

        productCards.forEach(card => {
            const button = card.querySelector(".wishlist-btn");

            if (!button) return;

            const icon = button.querySelector("i");
            const isSaved = wishlist.includes(card.dataset.id);

            button.classList.toggle("active", isSaved);

            if (icon) {
                icon.className = isSaved
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart";
            }
        });
    }

    
// ==================================
// PRODUCT FILTERING
// ==================================

function filterProducts() {

    if (!productGrid) return;

    const searchText = productSearch
        ? productSearch.value.toLowerCase().trim()
        : "";

    const checkedPets = [
        ...document.querySelectorAll('input[name="petFilter"]:checked')
    ].map(input => input.value);

    const checkedCategories = [
        ...document.querySelectorAll('input[name="categoryFilter"]:checked')
    ].map(input => input.value);

    const selectedPrice = document.querySelector(
        'input[name="priceFilter"]:checked'
    );

    const priceFilter = selectedPrice
        ? selectedPrice.value
        : "all";

    const visibleCards = [];

    productCards.forEach(card => {

        const pet = card.dataset.pet;
        const category = card.dataset.category;
        const price = Number(card.dataset.price) || 0;
        const name = (card.dataset.name || "").toLowerCase();

        // Pet filter: tile selection OR sidebar selection
        const matchesPet =
            (selectedPet === "all" || pet === selectedPet) &&
            (checkedPets.length === 0 || checkedPets.includes(pet));

        // Category filter: tile selection OR sidebar selection
        const matchesCategory =
            (selectedCategory === "all" || category === selectedCategory) &&
            (checkedCategories.length === 0 ||
                checkedCategories.includes(category));

        // Search filter
        const matchesSearch = name.includes(searchText);

        // Price filter
        let matchesPrice = true;

        if (priceFilter === "under500") {
            matchesPrice = price < 500;
        } else if (priceFilter === "500-1000") {
            matchesPrice = price >= 500 && price <= 1000;
        } else if (priceFilter === "above1000") {
            matchesPrice = price > 1000;
        }

        const visible =
            matchesPet &&
            matchesCategory &&
            matchesSearch &&
            matchesPrice;

        card.hidden = !visible;

        if (visible) {
            visibleCards.push(card);
        }
    });

    // SORT PRODUCTS
    const sortValue = sortProducts
        ? sortProducts.value
        : "default";

    if (sortValue === "low-high") {
        visibleCards.sort((a, b) =>
            Number(a.dataset.price) - Number(b.dataset.price)
        );
    } else if (sortValue === "high-low") {
        visibleCards.sort((a, b) =>
            Number(b.dataset.price) - Number(a.dataset.price)
        );
    } else if (sortValue === "name") {
        visibleCards.sort((a, b) =>
            (a.dataset.name || "").localeCompare(b.dataset.name || "")
        );
    }

    // Keep matching cards together in the grid
    visibleCards.forEach(card => productGrid.appendChild(card));

    // Result count
    if (resultCount) {
        resultCount.textContent =
            `Showing ${visibleCards.length} of ${productCards.length} products`;
    }

    // No products message
    if (noProducts) {
        noProducts.hidden = visibleCards.length > 0;
    }
}


// ==================================
// PET TYPE BUTTONS
// ==================================

document.querySelectorAll(".pet-type-card").forEach(button => {

    button.addEventListener("click", () => {

        selectedPet = button.dataset.pet || "all";

        // Clear sidebar pet selections
        document.querySelectorAll('input[name="petFilter"]')
            .forEach(input => input.checked = false);

        // Update active button
        document.querySelectorAll(".pet-type-card").forEach(item => {
            item.classList.toggle("active", item === button);
        });

        filterProducts();

        document.getElementById("shop-products")
            ?.scrollIntoView({ behavior: "smooth" });
    });
});


// ==================================
// CATEGORY BUTTONS
// ==================================

document.querySelectorAll(".category-tile").forEach(button => {

    button.addEventListener("click", () => {

        selectedCategory = button.dataset.category || "all";

        // Clear other category checkboxes
        document.querySelectorAll('input[name="categoryFilter"]')
            .forEach(input => {
                input.checked = input.value === selectedCategory;
            });

        // Update active button
        document.querySelectorAll(".category-tile").forEach(item => {
            item.classList.toggle("active", item === button);
        });

        filterProducts();

        document.getElementById("shop-products")
            ?.scrollIntoView({ behavior: "smooth" });
    });
});


// ==================================
// SIDEBAR FILTERS
// ==================================

document.querySelectorAll(
    'input[name="petFilter"], input[name="categoryFilter"], input[name="priceFilter"]'
).forEach(input => {

    input.addEventListener("change", () => {

        // Sidebar selections become the active filter source
        selectedPet = "all";
        selectedCategory = "all";

        // Remove tile active states
        document.querySelectorAll(
            ".pet-type-card, .category-tile"
        ).forEach(button => button.classList.remove("active"));

        // Restore All Pets active state only if no pet is selected
        const checkedPets = document.querySelectorAll(
            'input[name="petFilter"]:checked'
        );

        if (checkedPets.length === 0) {
            document.querySelector(
                '.pet-type-card[data-pet="all"]'
            )?.classList.add("active");
        }

        filterProducts();
    });
});


// ==================================
// SEARCH AND SORTING
// ==================================

productSearch?.addEventListener("input", filterProducts);

sortProducts?.addEventListener("change", filterProducts);


// ==================================
// CLEAR ALL FILTERS
// ==================================

function clearFilters() {

    selectedPet = "all";
    selectedCategory = "all";

    if (productSearch) {
        productSearch.value = "";
    }

    if (sortProducts) {
        sortProducts.value = "default";
    }

    document.querySelectorAll(
        'input[name="petFilter"], input[name="categoryFilter"]'
    ).forEach(input => input.checked = false);

    const allPrice = document.querySelector(
        'input[name="priceFilter"][value="all"]'
    );

    if (allPrice) {
        allPrice.checked = true;
    }

    document.querySelectorAll(
        ".pet-type-card, .category-tile"
    ).forEach(button => button.classList.remove("active"));

    document.querySelector(
        '.pet-type-card[data-pet="all"]'
    )?.classList.add("active");

    filterProducts();
}

document.getElementById("clearFilters")
    ?.addEventListener("click", clearFilters);

document.getElementById("showAllProducts")
    ?.addEventListener("click", clearFilters);


    // ==================================
    // WISHLIST
    // ==================================

    productCards.forEach(card => {

        const wishlistButton = card.querySelector(".wishlist-btn");

        wishlistButton?.addEventListener("click", () => {

            const id = card.dataset.id;

            wishlist = wishlist.includes(id)
                ? wishlist.filter(item => item !== id)
                : [...wishlist, id];

            saveData();
            updateHeaderCounts();

            if (activeDrawer === "wishlist" && drawer?.classList.contains("open")) {
                renderDrawer();
            }
        });

        // ==================================
        // ADD TO CART
        // ==================================

        const addCartButton = card.querySelector(".add-cart-btn");

        addCartButton?.addEventListener("click", () => {

            const product = productDetails(card);

            const existing = cart.find(
                item => item.id === product.id
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }

            if (!saveData()) {
                alert("Unable to save your cart. Please try again.");
                return;
            }

            updateHeaderCounts();

            // Open the cart automatically after adding a product.
            openDrawer("cart");

            addCartButton.textContent = "Added to Cart";

            setTimeout(() => {
                addCartButton.textContent = "Add to Cart";
            }, 1200);
        });
    });

    // ==================================
    // OPEN AND CLOSE DRAWER
    // ==================================

    function openDrawer(type) {

        if (!drawer || !overlay) return;

        activeDrawer = type;

        if (drawerTitle) {
            drawerTitle.textContent =
                type === "wishlist" ? "Your Wishlist" : "Your Cart";
        }

        drawer.classList.add("open");
        overlay.classList.add("show");
        drawer.setAttribute("aria-hidden", "false");

        renderDrawer();
    }

    function closeDrawer() {

        drawer?.classList.remove("open");
        overlay?.classList.remove("show");
        drawer?.setAttribute("aria-hidden", "true");
    }

    document.getElementById("cartHeaderBtn")
        ?.addEventListener("click", () => openDrawer("cart"));

    document.getElementById("wishlistHeaderBtn")
        ?.addEventListener("click", () => openDrawer("wishlist"));

    document.getElementById("closeDrawer")
        ?.addEventListener("click", closeDrawer);

    overlay?.addEventListener("click", closeDrawer);

    // ==================================
    // CART QUANTITY CONTROLS
    // ==================================

    function changeCartQuantity(id, change) {

        const item = cart.find(product => product.id === id);

        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            cart = cart.filter(product => product.id !== id);
        }

        saveData();
        updateHeaderCounts();
        renderDrawer();
    }

    // ==================================
    // DRAWER CONTENT
    // ==================================

    function renderDrawer() {

        if (!drawerItems) return;

        drawerItems.innerHTML = "";

        const items = activeDrawer === "wishlist"
            ? wishlist.map(id => {
                const card = getProduct(id);
                return card ? productDetails(card) : null;
            }).filter(Boolean)
            : cart;

        if (items.length === 0) {

            drawerItems.innerHTML = `
                <div class="drawer-empty">
                    <i class="fa-solid fa-paw"></i>
                    <p>
                        ${activeDrawer === "wishlist"
                            ? "Your wishlist is empty."
                            : "Your cart is empty."}
                    </p>
                    <a href="Products.html" class="back-products-btn">
                        Explore Products
                    </a>
                </div>
            `;

            if (drawerFooter) {
                drawerFooter.hidden = activeDrawer === "wishlist";
            }

            if (drawerTotal) {
                drawerTotal.textContent = "₹0";
            }

            return;
        }

        items.forEach(item => {

            const row = document.createElement("div");
            row.className = "drawer-item";

            const image = document.createElement("img");
            image.src = item.image || FALLBACK_IMAGE;
            image.alt = item.name;

            setImageFallback(image);

            const details = document.createElement("div");
            details.className = "drawer-item-details";

            const heading = document.createElement("h4");
            heading.textContent = item.name;

            const price = document.createElement("p");

            price.textContent =
                formatPrice(item.price) +
                (activeDrawer === "cart"
                    ? ` × ${item.quantity}`
                    : "");

            details.append(heading, price);

            // Quantity controls for cart items.
            if (activeDrawer === "cart") {

                const quantityControls = document.createElement("div");
                quantityControls.className = "drawer-quantity-controls";

                const decreaseButton = document.createElement("button");
                decreaseButton.type = "button";
                decreaseButton.textContent = "−";
                decreaseButton.setAttribute(
                    "aria-label",
                    "Decrease quantity of " + item.name
                );

                const quantityText = document.createElement("span");
                quantityText.textContent = item.quantity;

                const increaseButton = document.createElement("button");
                increaseButton.type = "button";
                increaseButton.textContent = "+";
                increaseButton.setAttribute(
                    "aria-label",
                    "Increase quantity of " + item.name
                );

                decreaseButton.addEventListener("click", () => {
                    changeCartQuantity(item.id, -1);
                });

                increaseButton.addEventListener("click", () => {
                    changeCartQuantity(item.id, 1);
                });

                quantityControls.append(
                    decreaseButton,
                    quantityText,
                    increaseButton
                );

                details.appendChild(quantityControls);
            }

            // Remove button.
            const removeButton = document.createElement("button");

            removeButton.type = "button";
            removeButton.className = "drawer-remove-btn";

            removeButton.setAttribute(
                "aria-label",
                "Remove " + item.name
            );

            removeButton.innerHTML =
                '<i class="fa-solid fa-trash"></i>';

            removeButton.addEventListener("click", () => {

                if (activeDrawer === "wishlist") {
                    wishlist = wishlist.filter(id => id !== item.id);
                } else {
                    cart = cart.filter(
                        product => product.id !== item.id
                    );
                }

                saveData();
                updateHeaderCounts();
                renderDrawer();
            });

            row.append(image, details, removeButton);
            drawerItems.appendChild(row);
        });

        const total = activeDrawer === "cart"
            ? getCartTotal()
            : 0;

        if (drawerTotal) {
            drawerTotal.textContent = formatPrice(total);
        }

        if (drawerFooter) {
            drawerFooter.hidden = activeDrawer === "wishlist";
        }
    }

    // ==================================
    // CHECKOUT
    // ==================================

    function openCheckout() {

        if (!checkoutSection) return;

        if (cart.length === 0) {
            alert("Your cart is empty. Please add products first.");
            return;
        }

        const checkoutTotal = document.getElementById("checkoutTotal");

        if (checkoutTotal) {
            checkoutTotal.textContent = formatPrice(getCartTotal());
        }

        closeDrawer();

        checkoutSection.classList.add("active");

        checkoutSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    checkoutButton?.addEventListener("click", openCheckout);

    closeCheckout?.addEventListener("click", () => {

        checkoutSection?.classList.remove("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    checkoutForm?.addEventListener("submit", event => {

        event.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty.");
            checkoutSection?.classList.remove("active");
            return;
        }

        const customerName =
            document.getElementById("customerName")?.value.trim() || "";

        const selectedPayment = document.querySelector(
            'input[name="paymentMethod"]:checked'
        );

        if (!selectedPayment) {
            alert("Please select a payment method.");
            return;
        }

        const paymentMethod = selectedPayment.value;
        const orderId = "PET" + Date.now().toString().slice(-8);
        const orderTotal = getCartTotal();

        alert(
            "Demo Order Placed Successfully!\n\n" +
            "Order ID: " + orderId + "\n" +
            "Customer: " + customerName + "\n" +
            "Payment Method: " + paymentMethod + "\n" +
            "Total: " + formatPrice(orderTotal) +
            "\n\nNo real payment was processed."
        );

        // Clear the shared cart.
        cart = [];

        saveData();
        updateHeaderCounts();

        checkoutForm.reset();
        checkoutSection?.classList.remove("active");

        renderDrawer();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ==================================
// INITIAL DISPLAY
// ==================================

saveData();
updateHeaderCounts();

document.querySelector(
    '.pet-type-card[data-pet="all"]'
)?.classList.add("active");

filterProducts();

});














