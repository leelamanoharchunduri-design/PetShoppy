
document.addEventListener("DOMContentLoaded", function () {

    // ===================================
    // PASSWORD SHOW / HIDE
    // ===================================

    document.querySelectorAll(".password-toggle").forEach(button => {

        button.addEventListener("click", function () {

            const inputId = this.dataset.toggle;
            const input = document.getElementById(inputId);
            const icon = this.querySelector("i");

            if (!input || !icon) return;

            if (input.type === "password") {
                input.type = "text";
                icon.className = "fa-regular fa-eye-slash";
                this.setAttribute("aria-label", "Hide password");
            } else {
                input.type = "password";
                icon.className = "fa-regular fa-eye";
                this.setAttribute("aria-label", "Show password");
            }

        });

    });


    // ===================================
    // DARK MODE
    // ===================================

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


    // ===================================
    // RTL / LTR
    // ===================================

    const directionBtn = document.getElementById("directionBtn");

    const savedDirection = localStorage.getItem("petshoppy-direction");

    if (savedDirection === "rtl") {
        document.documentElement.dir = "rtl";
    }

    if (directionBtn) {

        directionBtn.addEventListener("click", function () {

            const newDirection =
                document.documentElement.dir === "rtl" ? "ltr" : "rtl";

            document.documentElement.dir = newDirection;

            localStorage.setItem("petshoppy-direction", newDirection);

        });

    }


    // ===================================
    // PASSWORD STRENGTH
    // ===================================

    const passwordInput = document.getElementById("registerPassword");

    const strengthBar = document.getElementById("strengthBar");
    const strengthText = document.getElementById("strengthText");

    const confirmPassword = document.getElementById("confirmPassword");
    const passwordMatch = document.getElementById("passwordMatch");

    function updateRule(id, valid) {

        const rule = document.getElementById(id);

        if (!rule) return;

        rule.classList.toggle("valid", valid);

        const icon = rule.querySelector("i");

        if (icon) {
            icon.className = valid
                ? "fa-solid fa-circle-check"
                : "fa-regular fa-circle";
        }

    }

    function updatePasswordStrength() {

        if (!passwordInput) return;

        const password = passwordInput.value;

        const checks = {
            length: password.length >= 8,
            upper: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password)
        };

        updateRule("ruleLength", checks.length);
        updateRule("ruleUpper", checks.upper);
        updateRule("ruleNumber", checks.number);
        updateRule("ruleSpecial", checks.special);

        const score = Object.values(checks).filter(Boolean).length;

        if (strengthBar) {
            strengthBar.style.width = (score * 25) + "%";
        }

        if (strengthText) {

            const labels = [
                "Not entered",
                "Weak",
                "Fair",
                "Good",
                "Strong"
            ];

            strengthText.textContent =
                "Password strength: " + labels[score];

        }

        checkPasswordMatch();

    }

    if (passwordInput) {
        passwordInput.addEventListener("input", updatePasswordStrength);
    }


    // ===================================
    // CONFIRM PASSWORD
    // ===================================

    function checkPasswordMatch() {

        if (!confirmPassword || !passwordInput || !passwordMatch) {
            return true;
        }

        if (!confirmPassword.value) {
            passwordMatch.textContent = "";
            return false;
        }

        if (passwordInput.value === confirmPassword.value) {

            passwordMatch.textContent = "Passwords match.";
            passwordMatch.style.color = "#147D78";

            return true;

        } else {

            passwordMatch.textContent = "Passwords do not match.";
            passwordMatch.style.color = "#FF8A65";

            return false;

        }

    }

    if (confirmPassword) {
        confirmPassword.addEventListener("input", checkPasswordMatch);
    }


    // ===================================
    // LOGIN FORM
    // ===================================

    const loginForm = document.getElementById("loginForm");
    const loginStatus = document.getElementById("loginStatus");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!loginForm.checkValidity()) {
                loginForm.reportValidity();
                return;
            }

            loginStatus.textContent =
                "Form validated. Connect an authentication backend to sign in.";

        });

    }


    // ===================================
    // REGISTRATION FORM
    // ===================================

    const registerForm = document.getElementById("registerForm");
    const registerStatus = document.getElementById("registerStatus");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!registerForm.checkValidity()) {
                registerForm.reportValidity();
                return;
            }

            const password = passwordInput.value;
            const confirmation = confirmPassword.value;

            if (password !== confirmation) {

                registerStatus.textContent =
                    "Please make sure both passwords match.";

                confirmPassword.focus();

                return;

            }

            const strongPassword =
                password.length >= 8 &&
                /[A-Z]/.test(password) &&
                /[0-9]/.test(password) &&
                /[^A-Za-z0-9]/.test(password);

            if (!strongPassword) {

                registerStatus.textContent =
                    "Please meet all password requirements.";

                passwordInput.focus();

                return;

            }

            registerStatus.textContent =
                "Registration form validated. Connect a backend to create your account.";

        });

    }


    // ===================================
    // FORGOT PASSWORD
    // ===================================

    const forgotPassword = document.getElementById("forgotPassword");

    if (forgotPassword) {

        forgotPassword.addEventListener("click", function (event) {

            event.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();

            if (!email) {

                loginStatus.textContent =
                    "Please enter your registered email or username first.";

                document.getElementById("loginEmail").focus();

                return;

            }

            loginStatus.textContent =
                "Password recovery requires a connected email or authentication service.";

        });

    }


    // ===================================
    // SOCIAL LOGIN PLACEHOLDERS
    // ===================================

    document.querySelectorAll(".social-btn").forEach(button => {

        button.addEventListener("click", function () {

            const provider = this.dataset.provider;

            loginStatus && (loginStatus.textContent =
                provider + " sign-in requires OAuth configuration.");

        });

    });

});
