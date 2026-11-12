
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // PRODUCT DATA
    // Prices are sample demo prices in INR.
    // Replace them with your actual store prices.
    // =====================================

    const products = [
        // ROYAL CANIN
        {
            id: "rc1",
            brand: "Royal Canin",
            name: "Puppy Dry Food",
            category: "Puppy Nutrition",
            price: 899,
            image: "https://images.openai.com/static-rsc-4/t3ndq0dwAm1GKnZVascUbIHxIKeYoUjbYjIbNdEE5YdkodQ4wAqEYn0b5UG__rZAUhqFWaY-m8axno32LF8wDqwIbN3bRjxTXDJRtgvEjgN4Eu9q8d_zPra0oDE8CIB3L_uJWlwSwmFB_92mTFZk5I8WbQJjEuOUjhGSWme10yAqsqTR3aikCHFnpoBVNUSd?purpose=fullsize"
        },
        {
            id: "rc2",
            brand: "Royal Canin",
            name: "Adult Dog Food",
            category: "Adult Nutrition",
            price: 1199,
            image: "https://images.openai.com/static-rsc-4/WIZCqeIVxeS6DJsAIhmPOw_W-YmsIudiqtvDKrmCQIWA5U-m_Hln0Pkml2tlJCodCCNcJvt9ncA9FOJdXzMUlp8F0Q0WmhrtAEStar-ax4C_kaZuKJ8G7HcWIABpHUNVf8JgI8fKJ_riel-j8k7plohTFcR16e-Omvvz-kCnaDzTJeUSR5dO0L7mdJ_vBo5E?purpose=fullsize"
        },
        {
            id: "rc3",
            brand: "Royal Canin",
            name: "Feline Adult Food",
            category: "Cat Nutrition",
            price: 999,
            image: "https://images.openai.com/static-rsc-4/ZdKPcx91WGT0IrS7bL1UGGlQBGhxKMx3e77jPPAjeioXXd0JoiQj2o88m29fe3B3deiXD7wUpNzrlP_nx4YJG-80tJwfVjMqaFNC2tRRJD7aBxEAfMD1XUCnTHVD3Xrlzh17jcgA2VtbGmdekmbkkz9OguqJqKc6dTA_ib8z8yvpQVqGCByo_0rmWy0UjYyd?purpose=fullsize"
        },
        {
            id: "rc4",
            brand: "Royal Canin",
            name: "Mini Breed Food",
            category: "Small Breed Nutrition",
            price: 1099,
            image: "https://images.openai.com/static-rsc-4/K-YTFqy6SkXdQeNwfucYLznuQRfJgnZ63lpYU_O5BP4lvQy8w4OMI23IltFS1CTRQZ6VIfBVBakrlQzeiMQD5ju0LBbKH0zh_H2w7_k0j1t_qyLgkJOMb9Dl5Yt7tFRLa80OBlSnfE6j-TQWKm-VL1ZIXzrr-WC5XOxqk6F1ifg?purpose=inline"
        },

        // PEDIGREE
        {
            id: "pd1",
            brand: "Pedigree",
            name: "Adult Dry Dog Food",
            category: "Dry Food",
            price: 599,
            image: "https://images.openai.com/static-rsc-4/ACVf9RNxDbiQ2KIATmpok-NrsS2g5O67IvN7udUpu8lhNGAuycPaIFF4iH9fUSFTislsLK7B0ZSP2FMEOHKhRw2-E3aC74wpt3hD9ZmiC0I8PKMRUebwWGdNI7ASth21NZYNlUBPQAwlTKLGefzvjwA9BaZDEUqZrSXZ7lVwuMymi_4QaZgk_SsEAmu7DzOe?purpose=fullsize"
        },
        {
            id: "pd2",
            brand: "Pedigree",
            name: "Puppy Chicken Food",
            category: "Puppy Food",
            price: 499,
            image: "https://images.openai.com/static-rsc-4/5yrGzNXG80tUkzXqxsiZTqTi4zZ9I2kiXvw93nfl_bKaK5mIO1cjTlb8ed8ogHPVjqyVhHSQ6FL7uCpTCPMjbf2pBA_4Nh0Fvh3YITDgOTQpt0nc3Ji-vCnNtB9rHMTtkTGsVdrmH4nDr66tfM_ImLdw37SgBEAt6529NlGhy3JZY17iDvqJPvoChjNqa5J6?purpose=fullsize"
        },
        {
            id: "pd3",
            brand: "Pedigree",
            name: "Chicken Wet Food",
            category: "Wet Food",
            price: 149,
            image: "https://images.openai.com/static-rsc-4/MraO0Xq6OxyspeRvulAkxBaA9paqPC184Cdlpa5jaPk9bP7V22PRx8kW-n-zUxB34BF2HNIpQbTkWqe0sSboRliqt-PFMwz1-Cnie4wWy56C6iopFghgw4aJ1kpmGXjoR2vDrCjz0dJJeLvMyifIkMrfSRYiYBBRjGKI8Le7YjqhSynj1xa2TmeHxv7OsnjX?purpose=fullsize"
        },
        {
            id: "pd4",
            brand: "Pedigree",
            name: "Dog Treats",
            category: "Treats",
            price: 249,
            image: "https://images.openai.com/static-rsc-4/uGe4A6jEjpECiQawIaNmfmefmcZzUk4Gsna7vrQVQvjZYrWcCxt1vTKuD9lt_gTVu6m5qvw6AMjA5xXK3hu_DnSgNYms94msHCZ25g_MHyXTLASQaljw1VMzex-O2ojKRGdueeocnZDtJV1Pqz8KjSoNmjVEXnV8PXr14l9wJ0v54hM32kkMFNPtS2g6H9ZN?purpose=fullsize"
        },

        // WHISKAS
        {
            id: "wk1",
            brand: "Whiskas",
            name: "Kitten Dry Food",
            category: "Kitten Nutrition",
            price: 399,
            image: "https://images.openai.com/static-rsc-4/zQWXtlOmiZqr4_B7JQztUf3h5CSUaI10OSo5fXWi3A6UG77hWdAzkoE_bBX1wzgegnpu03Q9D_HIIu9yQPc_QeRIpjOGR0QfWeQ7p6PL8I2GthrCGV0zYbg5alNrKov8e5WsSIUDeht3WrsFM0hL9clzMAiBg95srmToi_APm7ETktvHvO4Oa91yPG6qywkw?purpose=fullsize"
        },
        {
            id: "wk2",
            brand: "Whiskas",
            name: "Adult Cat Food",
            category: "Adult Nutrition",
            price: 499,
            image: "https://images.openai.com/static-rsc-4/f4WUk8x9uDC_nJL1Jezl9tuJF2O7ViSS3T16rCSepqQZpkGtKSH-DbPPCF--I1ibvjsraQQY5YeQU-8svRoTRyUO4r6vTzBJ_UdpoAif_rs7_2vJRODaPwz02bbqdexOYsiSIEf4bXJp_wj-_vT6by7iButWiklgu_GGHFb3GOM?purpose=inline"
        },
        {
            id: "wk3",
            brand: "Whiskas",
            name: "Chicken Wet Food",
            category: "Wet Food",
            price: 75,
            image: "https://images.openai.com/static-rsc-4/G3kr4lclqRD02EWNyaY-949TFZ9-llG8TLNT1ZC0BfMQcOtPUnRcCfG_ZCd1KQoRDd8K6qqbCQjfH87sSUM8_yrg2onY9yGGK3LnBd_zQ-u0VNrjnubjpAArJJAXkeu4ucF917jgsjcfYTTHqQyMnrXaZdG-at7FSjxnkSeCaS3jFDPEf0VWo8OfP4CE6Yzd?purpose=fullsize"
        },
        {
            id: "wk4",
            brand: "Whiskas",
            name: "Seafood Dry Food",
            category: "Dry Food",
            price: 449,
            image: "https://images.openai.com/static-rsc-4/xeArvfHzFS_hxhL9gAQxB2i7k38_-etkWlpS5qJxSg5tBjboElPPfnnF3j24vyAGN1lnkL6DjnFYB0Tk_GRdSinyA6a_sj652i5v5s7nQPS_M-PFcakVE6zYkseZDxBqoLTfQO6EUzUXyrk3R6x88qp8TX3LHh6OYIYG1le41ICPOzVRfFvZjSt3ENhyKGh6?purpose=fullsize"
        },

        // DROOLS
        {
            id: "dr1",
            brand: "Drools",
            name: "Daily Dog Nutrition",
            category: "Dog Food",
            price: 699,
            image: "https://images.openai.com/static-rsc-4/bSOxXNuVu-O8S8DnMX6uRHiWA5Bwb20kZZlTeFK9ZU_XJZSrnIqKnhMWGnxcYAWdLsNwRhywcs5TJWCLXo2nuIxpAwkQkksdb0jrBetHArwYXRG6kaX9wOD0LmR28s4iES3gWIJlQJF1RvfUXoBHpmxsmFiFH3QIBpT-oCaffIs?purpose=inline"
        },
        {
            id: "dr2",
            brand: "Drools",
            name: "Cat Food",
            category: "Cat Food",
            price: 499,
            image: "https://images.openai.com/static-rsc-4/-Crmm9r5jgET6R5CJp9EUGzHzjJnYUQ21QIKA-FRZ11172Gi9WR2iJTgUvn6bDrC25mLvGvouHa8RZBaMIUvXSXlb_Ag9D0bS_PByd1VciPkdQ2UxOMzIEHQi3OjyYZjCambV6-FcMAO4L65uukaZS2hxdEBZlUSp-ZBrQFDLrzt6oX5bOY44Kztts4XvnIW?purpose=fullsize"
        },
        {
            id: "dr3",
            brand: "Drools",
            name: "Dog Treats",
            category: "Pet Treats",
            price: 199,
            image: "https://images.openai.com/static-rsc-4/oJCnF5WBnS-JfeKKFxRi2ujpjIrhyR5CoHvzadfCUgyP3XM9icFpC_GMq81J2KJLOUVbEAF_Fx795vmmLhj4uCQCysWkQHh6-V5F2zweoM3icG-iNKNKp4OLNlgfZ_W4SjZFx548KLnTqsUlqGtvUzew4nUNsZ7DUlNfSnh8ItnaKuePxxz9Obx-gpiHCbOV?purpose=fullsize"
        },
        {
            id: "dr4",
            brand: "Drools",
            name: "Pet Nutrition Supplement",
            category: "Supplement",
            price: 299,
            image: "https://images.openai.com/static-rsc-4/9ubCT_3AeD1VcLT0tAfG49eoCxk6IyAWJ1t5_12YqpBkP4viijU-1rWwHGoTOFAC0hHaLe0RjEcIfquWu2jPM2YAuWuFWXGce3X3JL49UtehrmYvFXL9rmEiNQhCfiCqx6YjWIzv3iLx9lpmR6FF0MwRwoEADt6srg-hwWUzntUveWjejiU8zqjqsC0UIVlP?purpose=fullsize"
        },

        // FARMINA
        {
            id: "fm1",
            brand: "Farmina",
            name: "Adult Dog Nutrition",
            category: "Dog Food",
            price: 1499,
            image: "https://images.openai.com/static-rsc-4/y4J8Kza6JshOq9zr2XnaIj9zRcX_DTb4NhC-bJ5OmqDFsWh4KJgJZ9rKwGqoRRFgh9GxDaGxrZSkT7ZWLukRWKeQrY5PTNNhy5i4XCGYNajbtcocsBuTkyzrB_P4K8YQqKFm3bl6ZrZMuzT7C6XUJsF1z1X0-O4qSWbYAQHLgd90JriLKSn8e2jKz1SxcnCE?purpose=fullsize"
        },
        {
            id: "fm2",
            brand: "Farmina",
            name: "Puppy Nutrition",
            category: "Puppy Food",
            price: 1299,
            image: "https://images.openai.com/static-rsc-4/0RFtKPJR6flD6b-Wa5m_ZcTNs5NFZ8Bo-Ty-57UpOIBYGLcp8k_EQZw6dQ0zsZOv2Rn20cQK1sGLwTEOI922slPmY8zkuV4K7-ZiHTeYMH6zWTDEtN9omXhXcsVTQa8eYc6ZNoOI2joLHPsIXZR_isTQVN1lP8ZA7t_fppsaCc9IvBVC-gcC0UCTgYYJCDGc?purpose=fullsize"
        },
        {
            id: "fm3",
            brand: "Farmina",
            name: "Adult Cat Nutrition",
            category: "Cat Food",
            price: 1199,
            image: "https://images.openai.com/static-rsc-4/VXgDjrDuXS65_H7GIAvAYTSQsm1Lk_ELXtfQPeEadPCbEnp-GUd9gBhSLGWZvUQA5AyUGalyyDjWFvR7VPR3P6av6gGM1-dMYKya0U801PP6ycFjY0W8y8JxzRIeI_GLOL9ypLDZCcIB0V0fzm3qN22GnFFgaCwqb3-G5wRz7zO_hlnhK1IiAn11EQudEBu7?purpose=fullsize"
        },
        {
            id: "fm4",
            brand: "Farmina",
            name: "Grain-Free Nutrition",
            category: "Special Nutrition",
            price: 1699,
            image: "https://images.openai.com/static-rsc-4/DWKqsjQNL2chgfVOqnpvp3-lxSclpiQYhk5XR3WLdVvZxtkWs3c0CE1Ak4Na8zsZgVc8nBWjmRlYy9v_JevXK5JmlQRXnCbPHyShkTl0I6j3lR_d17KPQzfvSKB3snonaz1Cp2mKf2Tfh74TXd9o8OtLllU4bcr54-qEeiqJTXU-di_34taXmAW050jskBf2?purpose=fullsize"
        }
    ];

    // =====================================
    // RENDER PRODUCT CARDS
    // =====================================

    const brandContainers = {
        "Royal Canin": "products-royal",
        "Pedigree": "products-pedigree",
        "Whiskas": "products-whiskas",
        "Drools": "products-drools",
        "Farmina": "products-farmina"
    };

    function renderProducts() {

        Object.values(brandContainers).forEach(containerId => {
            const container = document.getElementById(containerId);
            if (container) container.innerHTML = "";
        });

        products.forEach(product => {

            const containerId = brandContainers[product.brand];
            const container = document.getElementById(containerId);

            if (!container) return;

            const card = document.createElement("article");
            card.className = "brand-product-card";

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.brand + " " + product.name;
            image.loading = "lazy";

            image.onerror = function () {
                this.onerror = null;
                this.src = "Images/Brands/placeholder.jpg";
            };

            const imageBox = document.createElement("div");
            imageBox.className = "brand-product-image";
            imageBox.appendChild(image);

            const info = document.createElement("div");
            info.className = "brand-product-info";

            const category = document.createElement("span");
            category.className = "product-category";
            category.textContent = product.category;

            const title = document.createElement("h4");
            title.textContent = product.name;

            const brand = document.createElement("p");
            brand.textContent = product.brand;

            const bottom = document.createElement("div");
            bottom.className = "brand-product-bottom";

            const price = document.createElement("strong");
            price.textContent = formatPrice(product.price);

            const addButton = document.createElement("button");
            addButton.type = "button";
            addButton.className = "brand-add-cart";
            addButton.dataset.productId = product.id;
            addButton.innerHTML =
                '<i class="fas fa-shopping-cart"></i> Add to Cart';

            bottom.append(price, addButton);
            info.append(category, title, brand, bottom);
            card.append(imageBox, info);

            container.appendChild(card);
        });
    }

    // =====================================
    // CART
    // =====================================

    const CART_STORAGE_KEY = "petshoppy-brands-cart";

    let cart = [];

    try {
        const savedCart = JSON.parse(
            localStorage.getItem(CART_STORAGE_KEY) || "[]"
        );

        if (Array.isArray(savedCart)) {
            cart = savedCart.filter(item =>
                products.some(product => product.id === item.id) &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0
            );
        }
    } catch {
        cart = [];
    }

    const cartDrawer = document.getElementById("cartDrawer");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");

    function formatPrice(amount) {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(amount);
    }

    function saveCart() {
        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cart)
        );
    }

    function addToCart(productId) {

        const product = products.find(item => item.id === productId);

        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                quantity: 1
            });
        }

        saveCart();
        renderCart();
        openCart();
    }

    function changeQuantity(productId, change) {

        const item = cart.find(item => item.id === productId);

        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }

        saveCart();
        renderCart();
    }

    function removeFromCart(productId) {

        cart = cart.filter(item => item.id !== productId);

        saveCart();
        renderCart();
    }

    // =====================================
    // UPDATE CART DISPLAY
    // =====================================

    function renderCart() {

        if (!cartItems) return;

        cartItems.innerHTML = "";

        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {

            const product = products.find(
                product => product.id === item.id
            );

            if (!product) return;

            const subtotal = product.price * item.quantity;

            total += subtotal;
            itemCount += item.quantity;

            const row = document.createElement("div");
            row.className = "cart-product";

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.name;

            image.onerror = function () {
                this.onerror = null;
                this.src = "Images/Brands/placeholder.jpg";
            };

            const details = document.createElement("div");
            details.className = "cart-product-details";

            const name = document.createElement("h4");
            name.textContent = product.name;

            const brand = document.createElement("p");
            brand.textContent = product.brand;

            const price = document.createElement("strong");
            price.textContent = formatPrice(subtotal);

            const controls = document.createElement("div");
            controls.className = "quantity-controls";

            const decrease = document.createElement("button");
            decrease.type = "button";
            decrease.textContent = "−";
            decrease.setAttribute("aria-label", "Decrease quantity");
            decrease.addEventListener("click", () =>
                changeQuantity(item.id, -1)
            );

            const quantity = document.createElement("span");
            quantity.textContent = item.quantity;

            const increase = document.createElement("button");
            increase.type = "button";
            increase.textContent = "+";
            increase.setAttribute("aria-label", "Increase quantity");
            increase.addEventListener("click", () =>
                changeQuantity(item.id, 1)
            );

            controls.append(decrease, quantity, increase);

            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "remove-cart-item";
            remove.textContent = "Remove";
            remove.addEventListener("click", () =>
                removeFromCart(item.id)
            );

            details.append(name, brand, price, controls, remove);
            row.append(image, details);
            cartItems.appendChild(row);
        });

        if (cart.length === 0) {
            const empty = document.createElement("p");
            empty.className = "empty-cart";
            empty.textContent = "Your cart is empty.";
            cartItems.appendChild(empty);
        }

        if (cartTotal) {
            cartTotal.textContent = formatPrice(total);
        }

        if (cartCount) {
            cartCount.textContent = itemCount;
        }
    }

    // =====================================
    // OPEN AND CLOSE CART
    // =====================================

    function openCart() {

        if (!cartDrawer || !cartOverlay) return;

        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");
        document.body.classList.add("cart-open");
    }

    function closeCart() {

        if (!cartDrawer || !cartOverlay) return;

        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
        document.body.classList.remove("cart-open");
    }

    document.getElementById("cartToggle")
        ?.addEventListener("click", openCart);

    document.getElementById("closeCart")
        ?.addEventListener("click", closeCart);

    cartOverlay?.addEventListener("click", closeCart);

    // Add product to cart using event delegation
    document.addEventListener("click", event => {

        const button = event.target.closest(".brand-add-cart");

        if (!button) return;

        addToCart(button.dataset.productId);
    });

    // Demo checkout message
    document.getElementById("checkoutBtn")
        ?.addEventListener("click", () => {

            if (cart.length === 0) {
                alert("Your shopping cart is empty.");
                return;
            }

            alert(
                "Your demo cart is ready! " +
                "Real checkout and payment are not connected."
            );
        });

    // Initial display
    renderProducts();
    renderCart();

});
