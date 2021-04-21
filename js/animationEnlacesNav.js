
const d = document;
const $sections = d.querySelectorAll('.observer');
const $enlaces = d.querySelectorAll('.div-enlace');

export function animationEnlacesNav(){
    
    const callback = entries => {
        entries.forEach( entry => {
            if(entry.isIntersecting){
                $enlaces.forEach( el => {
                    if(el.getAttribute('data-section') == entry.target.id){
                        el.classList.add('div-enlacesAnimation')
                    }else{
                        el.classList.remove('div-enlacesAnimation')
                    }
                });
            }
            
        });
    }

    const options = {
        threshold: 0.4
    }

    const observer = new IntersectionObserver(callback, options);


    $sections.forEach( el => {
        observer.observe(el);
    });
}