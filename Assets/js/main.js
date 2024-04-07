const themeToggle = document.querySelector(".theme-toggle");
const image = document.querySelector("#theme-image");

function toggleDarkMode() {
    if (document.body.classList.contains("dark-theme-variables")) {
        image.src = "/Assets/images/Images/reviewblack.png";
    } else {
        image.src = "/Assets/images/Images/reviewswhite.png";
    }
}

//change theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    toggleDarkMode();

    themeToggle.querySelector(".bx:nth-child(1)").classList.toggle("active");
    themeToggle.querySelector(".bx:nth-child(2)").classList.toggle("active");
});
