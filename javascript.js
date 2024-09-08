const containerDiv = document.querySelector("#container");

function makeGrid(){
    for (i =0; i <16; i++){
        for (j =0; j < 16; j++){
        const div16x = document.createElement("div");
        containerDiv.appendChild(div16x);
        div16x.className = "grid-item";

        div16x.addEventListener("mouseover", () =>{
            div16x.style.backgroundColor = "grey";
        });
        div16x.addEventListener("mouseout", () =>{
            setTimeout(() => {
                div16x.classList.remove('hovered');
            }, 500);
            div16x.style.backgroundColor = "rgb(213, 213, 213)";
        });

        }
    }
}
makeGrid();

containerDiv.style.display = "flex";
containerDiv.style.flexWrap = "wrap";

