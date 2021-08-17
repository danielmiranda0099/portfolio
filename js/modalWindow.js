const d = document;


export function modalWindow(){
    d.addEventListener("click", e => {
        if(e.target.matches('.modalBox') || e.target.matches('.modalBox *')){
            const $modalBox = d.querySelector(e.target.dataset.modal);

            $modalBox.classList.add('modalOpen');
            e.preventDefault();
        }
        if(e.target.matches('.modalClose')){
            e.target.parentElement.parentElement.classList.remove('modalOpen');
            e.preventDefault();
            console.log('cerrando');
        }

        if(e.target.matches('.modalCloseLink *')){
            e.target.parentElement.parentElement.parentElement.parentElement.classList.remove('modalOpen');
            console.log('cerrando xd');
        }
        
    });
}