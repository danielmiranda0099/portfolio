


export function btnAmburguer(){
    const $amburguer = document.getElementById("id-btn-amburguer");
    const $header = document.querySelector('header');

    document.addEventListener("click", (e) =>{
        if(e.target.matches("#id-btn-amburguer") || e.target.matches("#id-btn-amburguer *")){
            $amburguer.classList.toggle("open");
            $header.classList.toggle("headerOpen");
        }

        if(e.target.matches(".enlaces")){
            $amburguer.classList.remove("open");
            $header.classList.remove("headerOpen");
        }
    });
    
}
