const btnToggleNav = document.querySelector(".btn-toggle-nav");
const getAsideUl = document.querySelector("aside ul");

btnToggleNav.addEventListener("click", () => {
    toggleNav();
})
/* // other way with if / else
function toggleNav() {
    const getAsideUl = document.querySelector("aside ul");

    if (getAsideUl.style.visibility === "visible") {
        getAsideUl.style.visibility = "hidden";
    } else {
        getAsideUl.style.visibility = "visible";
    }
} */
const toggleNav = color => {
    getAsideUl.style.visibility = getAsideUl.style.visibility === "visible" ? "hidden" : "visible";
    document.body.style.backgroundColor = color; // All Colors
    mouseover.target.style.backgroundColor = mouseover;
} 

// All Box 
document.querySelector("#box1").addEventListener("click", () => toggleNav("#b4afaf"));

document.querySelector("#box2").addEventListener("click", () => toggleNav("red"));

document.querySelector("#box3").addEventListener("click", () => toggleNav("orange"));

document.querySelector("#box4").addEventListener("click", () => toggleNav("purple"));

document.querySelector("#box5").addEventListener("click", () => toggleNav("green"));

// Color Change
document.querySelector("#box1").addEventListener("mouseover", () => mouseover("#b4afaf"));

document.querySelector("#box2").addEventListener("mouseover", () => mouseover("red"));

document.querySelector("#box3").addEventListener("mouseover", () => mouseover("orange"));

document.querySelector("#box4").addEventListener("mouseover", () => mouseover("purple"));
   
document.querySelector("#box5").addEventListener("mouseover", () => mouseover("green"));