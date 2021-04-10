import {stopAnimation} from "./stopAnimation.js";
import {btnHover} from "./btn-hover.js";
import {btnAmburguer} from "./btn-amburguer.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    btnAmburguer();
    stopAnimation(".abautImg", 500);
    //btnHover("id-btn-enviar", "animate__pulse");
});