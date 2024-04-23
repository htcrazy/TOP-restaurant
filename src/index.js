import "./styles/home.css"

import kill from "./pages/kill";
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";

home();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener('click',function() {
    kill();
    home();
});

menuButton.addEventListener('click', function() {
    kill();
    menu();
});

aboutButton.addEventListener('click', function() {
    kill();
    about();
});