
const d = document;

export function btnHover(id, animation){
    const $btn = d.getElementById(id);
    d.addEventListener("mouseover", (e) => {
        if(e.target.matches("#"+id)){
            $btn.classList.add(animation);
            $btn.classList.add("animate__infinite");
            $btn.classList.add("animate__slow");
        }
    });

    d.addEventListener("mouseout", (e) => {
        if(e.target.matches("#"+id)){
            $btn.classList.remove(animation);
            $btn.classList.remove("animate__infinite");
        }
    });
    
}