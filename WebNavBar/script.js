function adjustNavBar() {
    const lidiv = document.getElementById("LIDIV");
    const MENUDIV = document.getElementById("MENU-DIV");
    const newnav = document.getElementById("NewNav");
    const xmark = document.getElementById("Menu-Div-Btn2");
    let bar = document.getElementById("Menu-Div-Btn1");
    if (document.body.offsetWidth <= 1000) {
        lidiv.style.display = "none";
        MENUDIV.style.display = "flex";
        newnav.style.display = "none";
        xmark.style.display = "none";
    } else {
        lidiv.style.display = "flex";
        MENUDIV.style.display = "none";
        newnav.style.display = "none";
        xmark.style.display = "none";
    }

    bar.addEventListener("click", () => {
        newnav.style.display = "flex";
        xmark.style.display = "flex";
    });
    
    xmark.addEventListener("click", () => {
        newnav.style.display = "none";
        xmark.style.display = "none";
    });
}
// Run the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", adjustNavBar);
// Run the function on window resize
window.addEventListener("resize", adjustNavBar);