const navElement = document.querySelector(".nav");
const sideElement = document.querySelector(".side-list");
const hamburgerElement = document.querySelector(".hamburger");
const hamburger1Element = document.querySelector(".hamburger1");


hamburgerElement.addEventListener("click",()=> {
    navElement.classList.toggle("nav--open");
});

hamburger1Element.addEventListener("click",()=> {
    sideElement.classList.toggle("nav--open");
});
