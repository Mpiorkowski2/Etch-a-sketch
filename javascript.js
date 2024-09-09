let clear = document.querySelector("button");
let container = document.querySelector(".container"); 



clear.addEventListener('click', ()=>{ 
    resetSize()
})


function resetSize(){
        container.innerHTML = '';

        let number = prompt("What size would you like the grid to be? (1-100)");
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        createGrid(number); // call the createGrid function here and pass the number they entered as the argument. 
}
        
function createGrid(size){

    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        container.appendChild(square);

        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = "black";
        })

        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "white"
           })
        }
        

        clearGrid();    
    }
}

let colorInput = document.querySelector("#hiddenColorInput");
let colorButton = document.querySelector(".colorwheel");

colorButton.addEventListener('click', () => {
    colorInput.click();
});

colorInput.addEventListener('input', () => {
    let selectedColor = colorInput.value;
    let squares = document.querySelectorAll('.container div'); // Select all squares

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = selectedColor;
        });
    });
});



createGrid(16);