function adjustNavBar() {
    const lidiv = document.getElementById("LIDIV");
    const MENUDIV = document.getElementById("MENU-DIV");
    const newnav = document.getElementById("NewNav");
    const xmark = document.getElementById("Menu-Div-Btn2");
    const bar = document.getElementById("Menu-Div-Btn1");

    if (document.body.offsetWidth <= 1000) {
        lidiv.style.display = "none";
        MENUDIV.style.display = "flex";
        newnav.classList.add("hide");
        xmark.style.display = "none";
    } else {
        lidiv.style.display = "flex";
        MENUDIV.style.display = "none";
        newnav.classList.add("hide");
        xmark.style.display = "none";
    }

    bar.addEventListener("click", () => {
        newnav.style.display = "flex"; // Ensure it's visible for the animation to work
        xmark.style.display = "flex";
        setTimeout(() => {
            newnav.classList.remove("hide");
            newnav.classList.add("show");
        }, 10); // Slight delay to allow the display change to take effect
    });

    xmark.addEventListener("click", () => {
        newnav.classList.remove("show");
        newnav.classList.add("hide");
        setTimeout(() => {
            newnav.style.display = "none";
        }, 500); // Match the transition duration in CSS
    });
}

// Run the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", adjustNavBar);

// Run the function on window resize
window.addEventListener("resize", adjustNavBar);