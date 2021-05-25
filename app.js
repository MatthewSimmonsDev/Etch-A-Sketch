const container = document.querySelector("#container");
const colorBtn = document.querySelector("#changecolor");
const changeSize = document.querySelector("#changesize");
const reset = document.querySelector("#reset");

let chosenColor = "grey";
let size = 8;


function createGrid(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++){
    square = document.createElement("div");
    
    container.appendChild(square).className = "grid";
  }

}

createGrid(size, size);

function deleteGrid(parent){
  while (parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

colorBtn.addEventListener('click', function(){
  chosenColor = prompt("Enter a valid color, otherwise you get nothing");
})

container.addEventListener('mouseover', function(e){
  e.target.style.backgroundColor = chosenColor;
})

changeSize.addEventListener('click', function(){
  deleteGrid(container);
  size = prompt("Enter a size for the grid, max 100.");
  if(size > 100){
    size = 100;
  }
  createGrid(size,size);
})

reset.addEventListener('click', function(){
  deleteGrid(container);
  createGrid(size,size);
})