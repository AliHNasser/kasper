/* Start Header */
const navButton = document.querySelector("header .container nav .toggle-bars");
const navList = document.querySelector("header .container nav ul");

navButton.addEventListener("click", () => {
    if (navList.style.display === "flex") {
        navList.removeAttribute("style");
    } else {
        navList.style.cssText = `
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 15px;
        top: 100%;
        width: calc(100% - 30px);
        `
    }
})

const navLink = document.querySelectorAll("header .container nav ul li a");
navLink.forEach((element, index) => {
    element.addEventListener("click", () => {
        navList.removeAttribute("style");
    })
})

window.addEventListener("resize", (ev) => {
    window.innerWidth > 1199 ? navList.removeAttribute("style") : "";
})
/* End Header */