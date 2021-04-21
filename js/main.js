import {stopAnimation} from "./stopAnimation.js";
import {btnHover} from "./btn-hover.js";
import {btnAmburguer} from "./btn-amburguer.js";
import {modalWindow} from "./modalWindow.js";
import {animationEnlacesNav} from "./animationEnlacesNav.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    btnAmburguer();
    stopAnimation(".abautImg", 500);
    modalWindow();
    animationEnlacesNav();
    //btnHover("id-btn-enviar", "animate__pulse");
});