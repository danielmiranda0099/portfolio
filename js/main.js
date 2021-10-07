import {stopAnimation} from "./stopAnimation.js";
import {btnHover} from "./btn-hover.js";
import {btnAmburguer} from "./btn-amburguer.js";
import {modalWindow} from "./modalWindow.js";
import {animationEnlacesNav} from "./animationEnlacesNav.js";
import { cardProjects, modalProjects } from "./modalProjects.js";
import { preloaderPage } from "./preloaderPage.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    preloaderPage();

    cardProjects();
    modalProjects();
    
    modalWindow();
    
    btnAmburguer();
    stopAnimation(".abautImg", 400);
    animationEnlacesNav();

    //btnHover("id-btn-enviar", "animate__pulse");
});