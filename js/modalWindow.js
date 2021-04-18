const d = document;


export function modalWindow(){
    d.addEventListener("click", e => {
        if(e.target.matches('.modalBox')){
            const $modalBox = d.querySelector(e.target.dataset.modal);

            $modalBox.classList.add('modalOpen');
        }
        if(e.target.matches('.modalClose')){
            e.target.parentElement.parentElement.classList.remove('modalOpen');
        }
        e.preventDefault();
    });
}