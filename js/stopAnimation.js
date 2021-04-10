
const d = document;

export function stopAnimation(id, valueScroll){

    const $element = d.querySelectorAll(id);

    d.addEventListener("scroll", (e) =>{

        let scroll = d.documentElement.scrollTop;

        if(scroll >= valueScroll && scroll <= valueScroll+100){

            $element.forEach( el => el.classList.add("animationAbout"));
        }
        if(scroll >= valueScroll+200 && scroll <= valueScroll+300){
            $element.forEach( el => el.classList.remove("animationAbout"));
        }
    });
}