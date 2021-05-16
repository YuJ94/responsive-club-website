// MENU BUTTON VARIABLES
const menuBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".close-button");
const navigation = document.querySelector(".navigation ul");
const navigationItems = document.querySelectorAll(".navigation ul li a");

// MENU BUTTON FUNCTIONS
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        closeBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

// MODAL IMAGE VARIABLES
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".modal-img");

// MODAL IMAGE FUNCTIONS
previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        if (window.innerWidth > 1024) {
            modal.classList.add("open");
            original.classList.add("open");

            const checkSrc = preview.hasAttribute("data-mobile");
            const newSrc = preview.getAttribute("data-mobile");
            const oldSrc = preview.getAttribute("src");
            
            if (checkSrc) {
                original.src = `${newSrc}`;
            } else {
                original.src = `${oldSrc}`;
            };
        };
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    };
});