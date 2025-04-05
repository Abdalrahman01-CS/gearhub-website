// This function for nav of home page

const menu = document.querySelector("#menu");
const links = document.querySelector(".homeLinks");

menu.onclick = function showMenu() {
    links.classList.toggle("active");
};
