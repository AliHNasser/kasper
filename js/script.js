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
/* Start Landing */
const landing = document.querySelector(".landing");
const allImages = ["landing-1.jpg", "landing-2.jpg", "landing-3.jpg", "landing-4.jpg"];
let imageNumber = 0;

let switchImage = setInterval(() => {
    if (imageNumber < allImages.length) {
        document.styleSheets[2].cssRules[29].style.setProperty("background-image", `url(../images/${allImages[imageNumber]})`)
        imageNumber++;
    } else {
        imageNumber = 0;
        document.styleSheets[2].cssRules[29].style.setProperty("background-image", `url(../images/${allImages[imageNumber]})`)
        imageNumber++;
    }
}, 4000)
/* End Landing */