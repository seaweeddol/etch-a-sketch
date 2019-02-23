const grid = document.querySelector('.container');
const resetButton = document.querySelector('#reset')

createGrid(16);

// fill in cell when hovered
grid.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('container') == false){
    e.target.classList.add("fill");
  }
})

resetButton.addEventListener('click', (e) => {
  reset();
})

// create square grid based on number provided
function createGrid(rowsCols){
  for (let i = 0; i < rowsCols*rowsCols; i++) {
    const grid = document.querySelector('.container');
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
  }
}

// reset grid and ask for user grid size
function reset(){
  grid.innerHTML = '';
  let userGrid = prompt("How big do you want the grid to be?");
  createGrid(userGrid);
}
