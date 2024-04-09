const themeToggle = document.querySelector(".theme-toggle");
const image1 = document.querySelector("#theme-image1");

function toggleDarkMode() {
    if (document.body.classList.contains("dark-theme-variables")) {
        image1.src = "/Assets/images/icons/create a review black box.png";
    } else {
        image1.src = "/Assets/images/icons/create a review box.png";
    }
}

//change theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    toggleDarkMode();

    themeToggle.querySelector(".bx:nth-child(1)").classList.toggle("active");
    themeToggle.querySelector(".bx:nth-child(2)").classList.toggle("active");
});

